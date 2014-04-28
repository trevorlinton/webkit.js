/* Licensed under BSD style license.
 * (c) 2014 True Interactions
 */
#include "config.h"
#include "IntSize.h"
#include "FloatRect.h"
#include "DebuggerJS.h"
#include "ChromeClientJS.h"
#include "AcceleratedContext.h"

#include <emscripten.h>

using namespace WebCore;

namespace WebCore {

  ChromeClient* ChromeClientJS::createClient(WebKit::WebView *view) {
    webkitTrace();
    ChromeClientJS* client = new ChromeClientJS(view);
		IntSize size = view->size();
		client->setWindowRect(FloatRect(0,0,size.width(),size.height()));
		return static_cast<ChromeClient *>(client);
  }

  ChromeClientJS::ChromeClientJS(WebKit::WebView *view)
  {
		webkitTrace();
		m_view = view;
#if USE(ACCELERATED_COMPOSITING)
		acceleratedContext = adoptPtr(AcceleratedContext::create(view));
		acceleratedContext->initialize();
		m_isAccelerated = true;
#endif
  }
  void ChromeClientJS::chromeDestroyed()
  {
    webkitTrace();
    delete this;
  }

  FloatRect ChromeClientJS::windowRect()
  {
    webkitTrace();
    return m_pageRect;
  }

  void ChromeClientJS::setWindowRect(const FloatRect& rect)
  {
    webkitTrace();
    m_pageRect = rect;
  }

  FloatRect ChromeClientJS::pageRect()
  {
    webkitTrace();
    return m_pageRect;
  }

  void ChromeClientJS::focus()
  {
    webkitTrace();
		// not implemented
  }

  void ChromeClientJS::unfocus()
  {
    webkitTrace();
		// not implemented
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
    webkitTrace();
    return false;
  }

  void ChromeClientJS::runModal()
  {
    notImplemented();
  }

  void ChromeClientJS::setToolbarsVisible(bool visible)
  {
    webkitTrace();
  }

  bool ChromeClientJS::toolbarsVisible()
  {
    webkitTrace();
    return false;
  }

  void ChromeClientJS::setStatusbarVisible(bool visible)
  {
    webkitTrace();
  }

  bool ChromeClientJS::statusbarVisible()
  {
    webkitTrace();
    return false;
  }

  void ChromeClientJS::setScrollbarsVisible(bool visible)
  {
    webkitTrace();
  }

  bool ChromeClientJS::scrollbarsVisible()
  {
    webkitTrace();
    return false;
  }

  void ChromeClientJS::setMenubarVisible(bool visible)
  {
    webkitTrace();
  }

  bool ChromeClientJS::menubarVisible()
  {
    webkitTrace();
    return false;
  }

  void ChromeClientJS::setResizable(bool)
  {
    webkitTrace();
  }

  void ChromeClientJS::closeWindowSoon()
  {
    webkitTrace();
  }

  bool ChromeClientJS::canTakeFocus(FocusDirection)
  {
    webkitTrace();
    return true;
  }

  void ChromeClientJS::takeFocus(FocusDirection)
  {
    webkitTrace();
  }

  void ChromeClientJS::focusedElementChanged(Element*)
  {
    webkitTrace();
  }

  void ChromeClientJS::focusedFrameChanged(Frame*)
  {
    webkitTrace();
  }

  bool ChromeClientJS::canRunBeforeUnloadConfirmPanel()
  {
    webkitTrace();
    return true;
  }

  bool ChromeClientJS::runBeforeUnloadConfirmPanel(const WTF::String& message, WebCore::Frame* frame)
  {
    webkitTrace();
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

  void ChromeClientJS::setStatusbarText(const String& string) { webkitTrace(); }
  bool ChromeClientJS::shouldInterruptJavaScript()
  {
    webkitTrace();
    return false;
  }

  KeyboardUIMode ChromeClientJS::keyboardUIMode()
  {
    webkitTrace();
    return KeyboardAccessDefault;
  }

  IntRect ChromeClientJS::windowResizerRect() const
  {
    webkitTrace();
    return IntRect();
  }

  void ChromeClientJS::invalidateRootView(const IntRect& updateRect, bool immediate)
  {
    webkitTrace();
		m_view->invalidate(updateRect, immediate);
  }

  void ChromeClientJS::invalidateContentsAndRootView(const IntRect& updateRect, bool immediate)
  {
    webkitTrace();
		m_view->invalidate(updateRect, immediate);
  }

  void ChromeClientJS::invalidateContentsForSlowScroll(const IntRect& updateRect, bool immediate)
  {
    webkitTrace();
		m_view->invalidate(updateRect, immediate);
  }

  void ChromeClientJS::scroll(const IntSize& delta, const IntRect& rectToScroll, const IntRect& clipRect)
  {
    notImplemented();
  }

  IntRect ChromeClientJS::rootViewToScreen(const IntRect& rect) const
  {
    webkitTrace();
    return rect;
  }

  IntPoint ChromeClientJS::screenToRootView(const IntPoint& point) const
  {
    webkitTrace();
    return point;
  }

  PlatformPageClient ChromeClientJS::platformPageClient() const
  {
    webkitTrace();
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
    webkitTrace();
  }

  void ChromeClientJS::reachedApplicationCacheOriginQuota(SecurityOrigin*, int64_t)
  {
    webkitTrace();
  }

  void ChromeClientJS::runOpenPanel(Frame*, PassRefPtr<FileChooser> prpFileChooser)
  {
    webkitTrace();
  }

  void ChromeClientJS::loadIconForFiles(const Vector<WTF::String>& filenames, WebCore::FileIconLoader* loader)
  {
    webkitTrace();
  }

  void ChromeClientJS::setCursor(const Cursor& cursor)
  {
    webkitTrace();
  }

  void ChromeClientJS::setCursorHiddenUntilMouseMoves(bool)
  {
    webkitTrace();
  }

  bool ChromeClientJS::selectItemWritingDirectionIsNatural()
  {
    webkitTrace();
    return false;
  }

  bool ChromeClientJS::selectItemAlignmentFollowsMenuWritingDirection()
  {
    webkitTrace();
    return false;
  }

  bool ChromeClientJS::hasOpenedPopup() const
  {
    webkitTrace();
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
  void ChromeClientJS::delegatedScrollRequested(const IntPoint&) {
    notImplemented();
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



	// Accelerated Compositing & Drawing Layers
  void ChromeClientJS::scheduleCompositingLayerFlush()
  {
#if USE(ACCELERATED_COMPOSITING)
    acceleratedContext->scheduleLayerFlush();
#endif
  }
  void ChromeClientJS::attachRootGraphicsLayer(Frame* frame, GraphicsLayer* rootLayer)
  {
#if USE(ACCELERATED_COMPOSITING)
		acceleratedContext->setRootCompositingLayer(rootLayer);
#endif
	}
  void ChromeClientJS::setNeedsOneShotDrawingSynchronization()
  {
#if USE(ACCELERATED_COMPOSITING)
    notImplemented();
#endif
  }

  /*
	 void ChromeClientJS::widgetSizeChanged(const IntSize& oldWidgetSize, IntSize newSize)
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::widgetSizeChanged();");
	 );
	 }

	 void ChromeClientJS::performAllPendingScrolls()
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::performAllPendingScrolls();");
	 );
	 }

	 void ChromeClientJS::paint(WebCore::Timer<ChromeClient>*)
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::paint();");
	 );
	 }

	 void ChromeClientJS::forcePaint()
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::forcePaint();");
	 );
	 }

	 // Methods used by HostWindow.
	 virtual bool supportsImmediateInvalidation() { return false; }
	 //virtual void invalidateRootView(const IntRect&, bool immediate) = 0;
	 //virtual void invalidateContentsAndRootView(const IntRect&, bool immediate) = 0;
	 //virtual void invalidateContentsForSlowScroll(const IntRect&, bool immediate) = 0;
	 //virtual void scroll(const IntSize&, const IntRect&, const IntRect&) = 0;
	 #if USE(TILED_BACKING_STORE)
	 //virtual void delegatedScrollRequested(const IntPoint&) = 0;
	 #endif
	 virtual IntPoint screenToRootView(const IntPoint&) const = 0;
	 virtual IntRect rootViewToScreen(const IntRect&) const = 0;
	 virtual PlatformPageClient platformPageClient() const = 0;
	 virtual void scrollbarsModeDidChange() const = 0;
	 #if ENABLE(CURSOR_SUPPORT)
	 virtual void setCursor(const Cursor&) = 0;
	 virtual void setCursorHiddenUntilMouseMoves(bool) = 0;
	 #endif
	 #if ENABLE(REQUEST_ANIMATION_FRAME) && !USE(REQUEST_ANIMATION_FRAME_TIMER)
	 virtual void scheduleAnimation() = 0;
	 #endif

	 void ChromeClientJS::dispatchViewportPropertiesDidChange(const ViewportArguments& arguments) const
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::dispatchViewportPropertiesDidChange();");
	 );
	 }

	 PassRefPtr<WebCore::PopupMenu> ChromeClientJS::createPopupMenu(WebCore::PopupMenuClient* client) const
	 {
	 EM_ASM(
	 console.log("createPopupMenu();");
	 );
	 }

	 PassRefPtr<WebCore::SearchPopupMenu> ChromeClientJS::createSearchPopupMenu(WebCore::PopupMenuClient* client) const
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::createSearchPopupMenu();");
	 );
	 }

	 IntRect ChromeClientJS::windowResizerRect() const
	 {
	 return IntRect();
	 }
	 PlatformPageClient ChromeClientJS::platformPageClient() const
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::scrollbarsModeDidChange();");
	 );
	 return NULL;
	 }
	 void ChromeClientJS::scrollbarsModeDidChange() const
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::scrollbarsModeDidChange();");
	 );
	 }
	 ChromeClientJS::CompositingTriggerFlags ChromeClientJS::allowedCompositingTriggers() const
	 {
	 EM_ASM(
	 console.log("WebKit: ChromeClientJS::allowCompositingTriggers();");
	 );
	 return false;
	 }*/
}