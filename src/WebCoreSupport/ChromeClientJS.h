/* Licensed under BSD style license.
 * (c) 2014 True Interactions
 */
#ifndef all_ChromeClientJS_h
#define all_ChromeClientJS_h

#include "ChromeClient.h"
#include "WebView.h"

namespace WebCore {

	class ChromeClientJS : WebCore::ChromeClient {
	public:
		static ChromeClient* createClient(WebKit::WebView *);
		void makeAccelerated();
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
		void delegatedScrollRequested(const IntPoint&);
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
		bool selectItemWritingDirectionIsNatural();
		bool selectItemAlignmentFollowsMenuWritingDirection();
		bool hasOpenedPopup() const;
		PassRefPtr<PopupMenu> createPopupMenu(PopupMenuClient*) const;
		PassRefPtr<SearchPopupMenu> createSearchPopupMenu(PopupMenuClient*) const;
		void numWheelEventHandlersChanged(unsigned);

		IntRect windowResizerRect() const;
		PlatformPageClient platformPageClient() const;
		void scrollbarsModeDidChange() const;
#if USE(ACCELERATED_COMPOSITING)
		bool isAccelerated() { return m_isAccelerated; }
#endif
	private:
		ChromeClientJS(WebKit::WebView *);
		FloatRect m_pageRect;
		WebKit::WebView *m_view;
#if USE(ACCELERATED_COMPOSITING)
		OwnPtr<AcceleratedContext> acceleratedContext;
		bool m_isAccelerated;
#endif
	};

}

#endif