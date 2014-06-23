/* Licensed under BSD style license.
 * (c) 2014 True Interactions
 */
#ifndef all_ChromeClientJS_h
#define all_ChromeClientJS_h

#include "ChromeClient.h"
#include "AcceleratedContext.h"
#include "WebView.h"

namespace WebCore {

	class ChromeClientJS : public WebCore::ChromeClient {
	public:
		static ChromeClientJS* createClient(WebView *);
		ChromeClient *toChromeClient();
		FloatRect windowRect() OVERRIDE;
		void setWindowRect(const FloatRect& rect) OVERRIDE;
		FloatRect pageRect() OVERRIDE;
		void chromeDestroyed() OVERRIDE;
		void focus() OVERRIDE;
		void unfocus() OVERRIDE;
		bool canTakeFocus(FocusDirection fd) OVERRIDE;
		void takeFocus(FocusDirection fd) OVERRIDE;
		void focusedElementChanged(Element*) OVERRIDE;
		void focusedFrameChanged(Frame*) OVERRIDE;
		Page* createWindow(Frame*, const FrameLoadRequest&, const WindowFeatures&, const NavigationAction&) OVERRIDE;
		void show();
		bool canRunModal();
		void runModal();
		void setToolbarsVisible(bool);
		bool toolbarsVisible();
		void setStatusbarVisible(bool);
		bool statusbarVisible();
		void setScrollbarsVisible(bool);
		bool scrollbarsVisible();
		void setMenubarVisible(bool);
		bool menubarVisible();
		void setResizable(bool);
		void addMessageToConsole(MessageSource, MessageLevel, const String& message, unsigned lineNumber, unsigned columnNumber, const String& sourceID);
		bool canRunBeforeUnloadConfirmPanel();
		bool runBeforeUnloadConfirmPanel(const String& message, Frame*);
		void closeWindowSoon();
		void runJavaScriptAlert(Frame*, const String&);
		bool runJavaScriptConfirm(Frame*, const String&);
		bool runJavaScriptPrompt(Frame*, const String& message, const String& defaultValue, String& result);
		void setStatusbarText(const String&);
		bool shouldInterruptJavaScript();
		KeyboardUIMode keyboardUIMode();
		IntRect windowResizerRect();
		void invalidateRootView(const IntRect&, bool immediate);
		void invalidateContentsAndRootView(const IntRect&, bool immediate);
		void invalidateContentsForSlowScroll(const IntRect&, bool immediate);
		void scroll(const IntSize&, const IntRect&, const IntRect&);
		IntPoint screenToRootView(const IntPoint&) const;
		IntRect rootViewToScreen(const IntRect&) const;
		PlatformPageClient platformPageClient();
		void scrollbarsModeDidChange();
		void setCursor(const Cursor&);
		void setCursorHiddenUntilMouseMoves(bool);
		void scheduleAnimation();
		void contentsSizeChanged(Frame*, const IntSize&) const;
		void mouseDidMoveOverElement(const HitTestResult&, unsigned modifierFlags);
		void setToolTip(const String&, TextDirection);
		void print(Frame*);
		void reachedMaxAppCacheSize(int64_t spaceNeeded);
		void reachedApplicationCacheOriginQuota(SecurityOrigin*, int64_t totalSpaceNeeded);
		void runOpenPanel(Frame*, PassRefPtr<FileChooser>);
		void loadIconForFiles(const Vector<String>&, FileIconLoader*);
		void formStateDidChange(const Node*);
		void attachRootGraphicsLayer(Frame*, GraphicsLayer*);
		void setNeedsOneShotDrawingSynchronization();
		void scheduleCompositingLayerFlush();
		void forceRepaint();
#if USE(TILED_BACKING_STORE)
		IntRect visibleRectForTiledBackingStore() const OVERRIDE;
		void delegatedScrollRequested(const IntPoint&);
#endif
#if USE(ACCELERATED_COMPOSITING)
		CompositingTriggerFlags allowedCompositingTriggers() const OVERRIDE;
#endif
		bool selectItemWritingDirectionIsNatural();
		bool selectItemAlignmentFollowsMenuWritingDirection();
		bool hasOpenedPopup() const;
		PassRefPtr<PopupMenu> createPopupMenu(PopupMenuClient*) const;
		PassRefPtr<SearchPopupMenu> createSearchPopupMenu(PopupMenuClient*) const;
		void numWheelEventHandlersChanged(unsigned);
		void widgetSizeChanged(const IntSize& oldWidgetSize, IntSize newSize);
		IntRect windowResizerRect() const;
		PlatformPageClient platformPageClient() const;
		void scrollbarsModeDidChange() const;
		void performAllPendingScrolls();
		void paint(Timer<ChromeClientJS>*);

		WebView* webView() { return m_view; }

	private:
		Timer <ChromeClientJS> m_displayTimer;
		IntRect m_dirtyRegion;
		bool m_forcePaint;
		int m_repaintSoonSourceId;
		Vector<IntRect> m_rectsToScroll;
		Vector<IntSize> m_scrollOffsets;
		double m_lastDisplayTime;
		ChromeClientJS(WebView *);
		FloatRect m_pageRect;
		WebView *m_view;
	};

}

#endif