/* Licensed under BSD style license.
 * (c) 2014 True Interactions
 */
#include "config.h"
#include "IntSize.h"
#include "FloatRect.h"
#include "DebuggerJS.h"
#include "ChromeClientJS.h"
#include "AcceleratedContext.h"
#include "FrameView.h"
#include "GraphicsLayer.h"
#include "GraphicsLayerFactory.h"

#include <WTF/CurrentTime.h>
#include <platform/cairo/WidgetBackingStore.h>
#include <platform/cairo/WidgetBackingStoreCairo.h>

#include <emscripten.h>

using namespace WebCore;

namespace WebCore {

	ChromeClientJS* ChromeClientJS::createClient(WebView *view) {
		ChromeClientJS* client = new ChromeClientJS(view);
		IntSize size = roundedIntSize(view->positionAndSize().size());
		client->setWindowRect(FloatRect(0,0,size.width(),size.height()));
		return client;
	}

	static void clearEverywhereInBackingStore(WebView* webView, cairo_t* cr)
	{
		webkitTrace();
		// The strategy here is to quickly draw white into this new canvas, so that
		// when a user quickly resizes the WebView in an environment that has opaque
		// resizing (like Gnome Shell), there are no drawing artifacts.
		if (!webView->p()->transparent) {
			cairo_set_source_rgb(cr, 1, 1, 0);
			cairo_set_operator(cr, CAIRO_OPERATOR_SOURCE);
		} else
			cairo_set_operator(cr, CAIRO_OPERATOR_CLEAR);
		cairo_paint(cr);
	}

	ChromeClientJS::ChromeClientJS(WebView *view)
		: m_view(view)
		, m_displayTimer(this, &ChromeClientJS::paint)
		, m_forcePaint(false)
		, m_lastDisplayTime(0)
	{
		ASSERT(view);
	}

	ChromeClient* ChromeClientJS::toChromeClient() {
		return static_cast<WebCore::ChromeClient *>(this);
	}

	static void repaintEverythingSoonTimeout(ChromeClientJS* client)
	{
		webkitTrace();
		client->paint(0);
	}

	static void coalesceRectsIfPossible(const IntRect& clipRect, Vector<IntRect>& rects)
	{
		webkitTrace();

		const unsigned int cRectThreshold = 10;
		const float cWastedSpaceThreshold = 0.75f;
		bool useUnionedRect = (rects.size() <= 1) || (rects.size() > cRectThreshold);
		if (!useUnionedRect) {
			// Attempt to guess whether or not we should use the unioned rect or the individual rects.
			// We do this by computing the percentage of "wasted space" in the union. If that wasted space
			// is too large, then we will do individual rect painting instead.
			float unionPixels = (clipRect.width() * clipRect.height());
			float singlePixels = 0;
			for (size_t i = 0; i < rects.size(); ++i)
				singlePixels += rects[i].width() * rects[i].height();
			float wastedSpace = 1 - (singlePixels / unionPixels);
			if (wastedSpace <= cWastedSpaceThreshold)
				useUnionedRect = true;
		}

		if (!useUnionedRect)
			return;

		rects.clear();
		rects.append(clipRect);
	}

	static void clipOutOldWidgetArea(cairo_t* cr, const IntSize& oldSize, const IntSize& newSize)
	{
		webkitTrace();

		cairo_move_to(cr, oldSize.width(), 0);
		cairo_line_to(cr, newSize.width(), 0);
		cairo_line_to(cr, newSize.width(), newSize.height());
		cairo_line_to(cr, 0, newSize.height());
		cairo_line_to(cr, 0, oldSize.height());
		cairo_line_to(cr, oldSize.width(), oldSize.height());
		cairo_close_path(cr);
		cairo_clip(cr);
	}

	void ChromeClientJS::forceRepaint() {
		if (m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled())
			return;

		m_dirtyRegion.unite(IntRect(IntPoint(), m_view->m_private->backingStore->size()));
		m_forcePaint = true;
		paint(0);
		m_forcePaint = false;
	}

	static void paintWebView(WebView* webView, Frame* frame, const Region& dirtyRegion)
	{
		webkitTrace();
		if (!webView->p()->backingStore)
			return;

		Vector<IntRect> rects = dirtyRegion.rects();
		coalesceRectsIfPossible(dirtyRegion.bounds(), rects);

		RefPtr<cairo_t> backingStoreContext = adoptRef(cairo_create(webView->p()->backingStore->cairoSurface()));
		GraphicsContext gc(backingStoreContext.get());
		gc.applyDeviceScaleFactor(frame->page()->deviceScaleFactor());

		for (size_t i = 0; i < rects.size(); i++) {
			const IntRect& rect = rects[i];

			gc.save();
			gc.clip(rect);
			if (webView->p()->transparent)
				gc.clearRect(rect);
			frame->view()->paint(&gc, rect);
			gc.restore();
		}

		gc.save();
		gc.clip(dirtyRegion.bounds());
		gc.restore();
	}

	void ChromeClientJS::paint(WebCore::Timer<ChromeClientJS>*)
	{
		webkitTrace();

		if (m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled())
			return;

		if(m_dirtyRegion.isEmpty() || !m_view->m_private->backingStore)
			return;

		static const double minimumFrameInterval = 1.0 / 60.0; // No more than 60 frames a second.
		double timeSinceLastDisplay = monotonicallyIncreasingTime() - m_lastDisplayTime;
		double timeUntilNextDisplay = minimumFrameInterval - timeSinceLastDisplay;

		if (timeUntilNextDisplay > 0 && !m_forcePaint) {
			m_displayTimer.startOneShot(timeUntilNextDisplay);
			return;
		}

		m_forcePaint = false;

		Frame& frame = (m_view->m_private->mainFrame->coreFrame()->mainFrame());
		if (!frame.contentRenderer() || !frame.view())
			return;

		frame.view()->updateLayoutAndStyleIfNeededRecursive();
		performAllPendingScrolls();
		paintWebView(m_view, &frame, m_dirtyRegion);

		const IntRect& rect = m_dirtyRegion;

		SDL_Rect offset;

		offset.x = rect.x();
		offset.y = rect.y();
		offset.w = rect.width();
		offset.h = rect.height();

		// Bit blitting is done by locking and unlocking the backstore, we should only do this when
		// we're sure we have a solid backstore surface with no errors.  Part of the problem we may
		// have with this approach is the backstore may only require a small sub-set that needs to be
		// blitted which might be a lot of overhead to send to the screen.  However, there may be
		// use cases where the backstore is not representative of the screen (only the dirtyRegion)
		// in this case we'll have incorrect rendering.  We need to have drawImage and UpperBlit implemented
		// in worker proxies for this to work.
		SDL_UnlockSurface(m_view->m_private->backingStore->widget());
		SDL_LockSurface(m_view->m_private->backingStore->widget());

		m_dirtyRegion = IntRect();
		m_lastDisplayTime = monotonicallyIncreasingTime();
		m_repaintSoonSourceId = 0;
	}

#if USE(TILED_BACKING_STORE)
	IntRect ChromeClientJS::visibleRectForTiledBackingStore() const {
		return enclosingIntRect(m_view->m_private->size);
	}
	void ChromeClientJS::delegatedScrollRequested(const IntPoint&) {
		notImplemented();
	}
#endif

	void ChromeClientJS::widgetSizeChanged(const IntSize& oldWidgetSize, IntSize newSize)
	{
		webkitTrace();
		MainFrame& frame = (m_view->m_private->mainFrame->coreFrame()->mainFrame());
		if(frame.view()) {
			frame.view()->resize(newSize.width(),newSize.height());
			frame.view()->adjustViewSize();
			if(frame.view()->needsLayout())
				frame.view()->layout();
		}

		if (m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled()) {
			m_view->m_private->acceleratedContext->resizeRootLayer(newSize);
			return;
		}

		if (m_view->m_private->backingStore && oldWidgetSize == newSize)
			return;

		if (m_view->m_private->backingStore) {
			const IntSize& oldSize = m_view->m_private->backingStore->size();
			if (newSize.width() > oldSize.width())
				newSize.setWidth(std::max(newSize.width(), static_cast<int>(oldSize.width() * 1.5)));
			if (newSize.height() > oldSize.height())
				newSize.setHeight(std::max(newSize.height(), static_cast<int>(oldSize.height() * 1.5)));
		}

		// If we did not have a backing store before or if the backing store is growing, we need
		// to reallocate a new one and set it up so that we don't see artifacts while resizing.
		if (!m_view->m_private->backingStore
				|| newSize.width() > m_view->m_private->backingStore->size().width()
				|| newSize.height() > m_view->m_private->backingStore->size().height()) {

			SDL_Surface *surface = SDL_CreateRGBSurface(SDL_SWSURFACE, newSize.width(), newSize.height(), 32,		//SDL_HWSURFACE | SDL_HWPALETTE
																									 0x00FF0000,	/* Rmask */
																									 0x0000FF00,	/* Gmask */
																									 0x000000FF,	/* Bmask */
																									 0xFF000000); /* Amask */
			PassOwnPtr<WidgetBackingStore> newBackingStore = WebCore::WidgetBackingStoreCairo::create(surface, newSize);
			RefPtr<cairo_t> cr = adoptRef(cairo_create(newBackingStore->cairoSurface()));

			clearEverywhereInBackingStore(m_view, cr.get());

			// Now we copy the old backing store image over the new cleared surface to prevent
			// annoying flashing as the widget grows. We do the "real" paint in a timeout
			// since we don't want to block resizing too long.
			if (m_view->m_private->backingStore) {
				cairo_set_source_surface(cr.get(), m_view->m_private->backingStore->cairoSurface(), 0, 0);
				cairo_rectangle(cr.get(), 0, 0, m_view->m_private->backingStore->size().width(), m_view->m_private->backingStore->size().height());
				cairo_fill(cr.get());
			}

			m_view->m_private->backingStore = newBackingStore;
		} else if (oldWidgetSize.width() < newSize.width() || oldWidgetSize.height() < newSize.height()) {
			// The widget is growing, but we did not need to create a new backing store.
			// We should clear any old data outside of the old widget region.
			RefPtr<cairo_t> cr = adoptRef(cairo_create(m_view->m_private->backingStore->cairoSurface()));
			clipOutOldWidgetArea(cr.get(), oldWidgetSize, newSize);
			clearEverywhereInBackingStore(m_view, cr.get());
		}

		// We need to force a redraw and ignore the framerate cap.
		m_lastDisplayTime = 0;
		m_dirtyRegion.unite(IntRect(IntPoint(), m_view->m_private->backingStore->size()));

		// WebCore timers by default have a lower priority which leads to more artifacts when opaque
		// resize is on
		emscripten_async_call((void (*)(void *))(&repaintEverythingSoonTimeout), this, 0);
	}

	void ChromeClientJS::performAllPendingScrolls()
	{
		webkitTrace();

		if (!m_view->m_private->backingStore)
			return;

		// Scroll all pending scroll rects and invalidate those parts of the widget.
		for (size_t i = 0; i < m_rectsToScroll.size(); i++) {
			IntRect& scrollRect = m_rectsToScroll[i];
			m_view->m_private->backingStore->scroll(scrollRect, m_scrollOffsets[i]);
		}

		m_rectsToScroll.clear();
		m_scrollOffsets.clear();
	}

	void ChromeClientJS::chromeDestroyed()
	{
		notImplemented();
		delete this;
	}

	FloatRect ChromeClientJS::windowRect() {
		webkitTrace();
		FloatRect rect = m_view->positionAndSize();
		return rect;
	}

	void ChromeClientJS::setWindowRect(const FloatRect& rect) {
		webkitTrace();
		if(rect.width() == m_view->p()->size.width() && rect.height() == m_view->p()->size.height())
			return;
		m_view->resize(rect.width(),rect.height());
	}

	FloatRect ChromeClientJS::pageRect()
	{
		webkitTrace();
		FloatRect size = m_view->positionAndSize();
		return size;
	}

	void ChromeClientJS::focus()
	{
		notImplemented();
	}

	void ChromeClientJS::unfocus()
	{
		notImplemented();
	}

	Page* ChromeClientJS::createWindow(Frame* frame, const FrameLoadRequest& frameLoadRequest, const WindowFeatures& coreFeatures, const NavigationAction&)
	{
		notImplemented();
		return 0;
	}

	void ChromeClientJS::show()
	{
		notImplemented();
	}

	bool ChromeClientJS::canRunModal()
	{
		notImplemented();
		return false;
	}

	void ChromeClientJS::runModal()
	{
		notImplemented();
	}

	void ChromeClientJS::setToolbarsVisible(bool visible)
	{
		notImplemented();
	}

	bool ChromeClientJS::toolbarsVisible()
	{
		notImplemented();
		return false;
	}

	void ChromeClientJS::setStatusbarVisible(bool visible)
	{
		notImplemented();
	}

	bool ChromeClientJS::statusbarVisible()
	{
		notImplemented();
		return false;
	}

	void ChromeClientJS::setScrollbarsVisible(bool visible)
	{
		notImplemented();
	}

	bool ChromeClientJS::scrollbarsVisible()
	{
		notImplemented();
		return false;
	}

	void ChromeClientJS::setMenubarVisible(bool visible)
	{
		notImplemented();
	}

	bool ChromeClientJS::menubarVisible()
	{
		notImplemented();
		return false;
	}

	void ChromeClientJS::setResizable(bool)
	{
		notImplemented();
	}

	void ChromeClientJS::closeWindowSoon()
	{
		notImplemented();
	}

	bool ChromeClientJS::canTakeFocus(FocusDirection)
	{
		notImplemented();
		return true;
	}

	void ChromeClientJS::takeFocus(FocusDirection)
	{
		notImplemented();
	}

	void ChromeClientJS::focusedElementChanged(Element*)
	{
		notImplemented();
	}

	void ChromeClientJS::focusedFrameChanged(Frame*)
	{
		notImplemented();
	}

	bool ChromeClientJS::canRunBeforeUnloadConfirmPanel()
	{
		notImplemented();
		return true;
	}

	bool ChromeClientJS::runBeforeUnloadConfirmPanel(const WTF::String& message, WebCore::Frame* frame)
	{
		notImplemented();
		return true;
	}

	void ChromeClientJS::addMessageToConsole(WebCore::MessageSource source, WebCore::MessageLevel level, const WTF::String& message, unsigned lineNumber, unsigned columnNumber, const WTF::String& sourceId)
	{
		notImplemented();
	}

	void ChromeClientJS::runJavaScriptAlert(Frame* frame, const String& message)
	{
		notImplemented();
	}

	bool ChromeClientJS::runJavaScriptConfirm(Frame* frame, const String& message)
	{
		notImplemented();
		return true;
	}

	bool ChromeClientJS::runJavaScriptPrompt(Frame* frame, const String& message, const String& defaultValue, String& result)
	{
		notImplemented();
		return true;
	}

	void ChromeClientJS::setStatusbarText(const String& string) {
		notImplemented();
	}

	bool ChromeClientJS::shouldInterruptJavaScript()
	{
		notImplemented();
		return false;
	}

	KeyboardUIMode ChromeClientJS::keyboardUIMode()
	{
		notImplemented();
		return KeyboardAccessDefault;
	}

	IntRect ChromeClientJS::windowResizerRect() const
	{
		notImplemented();
		return IntRect();
	}

	void ChromeClientJS::invalidateRootView(const IntRect& updateRect, bool immediate)
	{
		notImplemented();
	}

	void ChromeClientJS::invalidateContentsAndRootView(const IntRect& updateRect, bool immediate)
	{
		webkitTrace();

		if (m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled()) {
			m_view->m_private->acceleratedContext->setNonCompositedContentsNeedDisplay(updateRect);
			return;
		}

		if (updateRect.isEmpty())
			return;

		m_dirtyRegion.unite(updateRect);
		m_displayTimer.startOneShot(0);
	}

	void ChromeClientJS::invalidateContentsForSlowScroll(const IntRect& updateRect, bool immediate)
	{
		invalidateContentsAndRootView(updateRect, immediate);
	}

	void ChromeClientJS::scroll(const IntSize& delta, const IntRect& rectToScroll, const IntRect& clipRect)
	{
		webkitTrace();

		if (m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled()) {
			ASSERT(!rectToScroll.isEmpty());
			ASSERT(delta.width() || delta.height());
			m_view->m_private->acceleratedContext->scrollNonCompositedContents(rectToScroll, delta);
			return;
		}

		m_rectsToScroll.append(rectToScroll);
		m_scrollOffsets.append(delta);

		// The code to calculate the scroll repaint region is originally from WebKit2.
		// Get the part of the dirty region that is in the scroll rect.
		Region dirtyRegionInScrollRect = intersect(rectToScroll, m_dirtyRegion);
		if (!dirtyRegionInScrollRect.isEmpty()) {
			// There are parts of the dirty region that are inside the scroll rect.
			// We need to subtract them from the region, move them and re-add them.
			Region dirtyRegion = Region(m_dirtyRegion);
			dirtyRegion.subtract(rectToScroll);
			m_dirtyRegion = dirtyRegion.bounds();

			// Move the dirty parts.
			Region movedDirtyRegionInScrollRect = intersect(translate(dirtyRegionInScrollRect, delta), rectToScroll);

			// And add them back.
			m_dirtyRegion.unite(movedDirtyRegionInScrollRect.bounds());
		}

		// Compute the scroll repaint region. We ensure that we are not subtracting areas
		// that we've scrolled from outside the viewport from the repaint region.
		IntRect onScreenScrollRect = rectToScroll;
		onScreenScrollRect.intersect(IntRect(IntPoint(), enclosingIntRect(pageRect()).size()));
		Region scrollRepaintRegion = subtract(rectToScroll, translate(onScreenScrollRect, delta));

		m_dirtyRegion.unite(scrollRepaintRegion.bounds());
		m_displayTimer.startOneShot(0);
	}

	IntRect ChromeClientJS::rootViewToScreen(const IntRect& rect) const
	{
		notImplemented();
		return rect;
	}

	IntPoint ChromeClientJS::screenToRootView(const IntPoint& point) const
	{
		notImplemented();
		return point;
	}

	PlatformPageClient ChromeClientJS::platformPageClient() const
	{
		return m_view;
	}

	void ChromeClientJS::contentsSizeChanged(Frame* frame, const IntSize& size) const
	{
		notImplemented();
	}

	void ChromeClientJS::scrollbarsModeDidChange() const
	{
		notImplemented();
	}

	void ChromeClientJS::mouseDidMoveOverElement(const HitTestResult& hit, unsigned modifierFlags)
	{
		notImplemented();
	}

	void ChromeClientJS::setToolTip(const String& toolTip, TextDirection)
	{
		notImplemented();
	}

	void ChromeClientJS::print(Frame* frame)
	{
		notImplemented();
	}

	void ChromeClientJS::reachedMaxAppCacheSize(int64_t spaceNeeded)
	{
		notImplemented();
	}

	void ChromeClientJS::reachedApplicationCacheOriginQuota(SecurityOrigin*, int64_t)
	{
		notImplemented();
	}

	void ChromeClientJS::runOpenPanel(Frame*, PassRefPtr<FileChooser> prpFileChooser)
	{
		notImplemented();
	}

	void ChromeClientJS::loadIconForFiles(const Vector<WTF::String>& filenames, WebCore::FileIconLoader* loader)
	{
		notImplemented();
	}

	void ChromeClientJS::setCursor(const Cursor& cursor)
	{
		notImplemented();
	}

	void ChromeClientJS::setCursorHiddenUntilMouseMoves(bool)
	{
		notImplemented();
	}

	bool ChromeClientJS::selectItemWritingDirectionIsNatural()
	{
		notImplemented();
		return false;
	}

	bool ChromeClientJS::selectItemAlignmentFollowsMenuWritingDirection()
	{
		notImplemented();
		return false;
	}

	bool ChromeClientJS::hasOpenedPopup() const
	{
		notImplemented();
		return false;
	}

	PassRefPtr<PopupMenu> ChromeClientJS::createPopupMenu(PopupMenuClient*) const {
		notImplemented();
		return nullptr;
	}

	PassRefPtr<SearchPopupMenu> ChromeClientJS::createSearchPopupMenu(PopupMenuClient*) const {
		notImplemented();
		return nullptr;
	}


	void ChromeClientJS::formStateDidChange(const WebCore::Node*) {
		notImplemented();
	}

	void ChromeClientJS::numWheelEventHandlersChanged(unsigned) {
		notImplemented();
	}

	void ChromeClientJS::scheduleAnimation() {
		notImplemented();
	}

	void ChromeClientJS::attachRootGraphicsLayer(Frame* frame, GraphicsLayer* rootLayer)
	{
		webkitTrace();
		if(m_view->m_private->acceleratedContext) {
			bool turningOffCompositing = !rootLayer && m_view->m_private->acceleratedContext->enabled();
			bool turningOnCompositing = rootLayer && !m_view->m_private->acceleratedContext->enabled();

			m_view->m_private->acceleratedContext->setRootCompositingLayer(rootLayer);

			if (turningOnCompositing) {
				m_displayTimer.stop();
				m_view->m_private->backingStore = WidgetBackingStoreCairo::create(0, IntSize(1, 1));
			}

			if (turningOffCompositing) {
				m_view->m_private->backingStore = WidgetBackingStoreCairo::create(m_view->m_private->sdl_screen, roundedIntSize(m_view->positionAndSize().size()));
				RefPtr<cairo_t> cr = adoptRef(cairo_create(m_view->m_private->backingStore->cairoSurface()));
				clearEverywhereInBackingStore(m_view, cr.get());
			}
		}
	}

	void ChromeClientJS::setNeedsOneShotDrawingSynchronization()
	{
		webkitTrace();
		if(m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled())
			m_view->m_private->acceleratedContext->scheduleLayerFlush();
	}

	void ChromeClientJS::scheduleCompositingLayerFlush()
	{
		webkitTrace();
		if(m_view->m_private->acceleratedContext && m_view->m_private->acceleratedContext->enabled())
			m_view->m_private->acceleratedContext->scheduleLayerFlush();
	}

	ChromeClient::CompositingTriggerFlags ChromeClientJS::allowedCompositingTriggers() const
	{
		return AllTriggers;
	}
}