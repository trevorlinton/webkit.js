/* Licensed under BSD style license.
 * (c) 2014 True Interactions
 */
#include "config.h"
#include <emscripten.h>
#include "NotImplemented.h"
#include "ChromeClientJS.h"

using namespace WebCore;

namespace WebCore {


  //static PassOwnPtr<WidgetBackingStore> createBackingStore(GtkWidget* widget, const IntSize& size)
  //{
  //  return WebCore::WidgetBackingStoreCairo::create(widget, size);
  //}

  ChromeClient* ChromeClientJS::createClient() {
    return static_cast<ChromeClient *>(new ChromeClientJS());
  }

  ChromeClientJS::ChromeClientJS()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::new();");
           );
  }
  void ChromeClientJS::chromeDestroyed()
  {
    delete this;
  }

  FloatRect ChromeClientJS::windowRect()
  {
    return m_pageRect;
    
  }

  void ChromeClientJS::setWindowRect(const FloatRect& rect)
  {
    m_pageRect = rect;
  }

  FloatRect ChromeClientJS::pageRect()
  {
    return m_pageRect;
  }

  void ChromeClientJS::focus()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::focus();");
    );
  }

  void ChromeClientJS::unfocus()
  {

    EM_ASM(
           console.log("WebKit: ChromeClientJS::unfocus();");
    );
  }

  Page* ChromeClientJS::createWindow(Frame* frame, const FrameLoadRequest& frameLoadRequest, const WindowFeatures& coreFeatures, const NavigationAction&)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::createWindow();");
    );
    return 0;
  }

  void ChromeClientJS::show()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::show();");
    );
  }

  bool ChromeClientJS::canRunModal()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::canRunModal();");
           );
    return false;
  }

  void ChromeClientJS::runModal()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::runModal();");
           );
    notImplemented();
  }

  void ChromeClientJS::setToolbarsVisible(bool visible)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setToolbarsVisible();");
    );
  }

  bool ChromeClientJS::toolbarsVisible()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::toolbarsVisible();");
    );
    return false;
  }

  void ChromeClientJS::setStatusbarVisible(bool visible)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setStatusbarVisible();");
           );
  }

  bool ChromeClientJS::statusbarVisible()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::statusbarVisible();");
           );
    return false;
  }

  void ChromeClientJS::setScrollbarsVisible(bool visible)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setScrollbarsVisible();");
           );
  }

  bool ChromeClientJS::scrollbarsVisible()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::scrollbarsVisible();");
           );
    return false;
  }

  void ChromeClientJS::setMenubarVisible(bool visible)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setMenubarVisible();");
           );
  }

  bool ChromeClientJS::menubarVisible()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::menubarVisible();");
           );
    return false;
  }

  void ChromeClientJS::setResizable(bool)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setResizable();");
           );
  }

  void ChromeClientJS::closeWindowSoon()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::closeWindowSoon();");
           );
  }

  bool ChromeClientJS::canTakeFocus(FocusDirection)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::canTakeFocus();");
           );
    return true;
  }

  void ChromeClientJS::takeFocus(FocusDirection)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::takeFocus();");
           );
  }

  void ChromeClientJS::focusedElementChanged(Element*)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::focusedElementChanged();");
           );
  }

  void ChromeClientJS::focusedFrameChanged(Frame*)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::focusFrameChanged();");
           );
  }

  bool ChromeClientJS::canRunBeforeUnloadConfirmPanel()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::canRunBeforeUnloadConfirmPanel();");
           );
    return true;
  }

  bool ChromeClientJS::runBeforeUnloadConfirmPanel(const WTF::String& message, WebCore::Frame* frame)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::runBeforeUnloadConfirmPanel();");
           );
    return true;
  }

  void ChromeClientJS::addMessageToConsole(WebCore::MessageSource source, WebCore::MessageLevel level, const WTF::String& message, unsigned lineNumber, unsigned columnNumber, const WTF::String& sourceId)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::addMessageToConsole();");
           );
  }

  void ChromeClientJS::runJavaScriptAlert(Frame* frame, const String& message)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::runJavaScriptAlert();");
           );
  }

  bool ChromeClientJS::runJavaScriptConfirm(Frame* frame, const String& message)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::runJavaScriptConfirm();");
           );
    return true;
  }

  bool ChromeClientJS::runJavaScriptPrompt(Frame* frame, const String& message, const String& defaultValue, String& result)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::runJavaScriptPrompt();");
           );
    return true;
  }

  void ChromeClientJS::setStatusbarText(const String& string)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setScrollbarsVisible();");
           );
  }

  bool ChromeClientJS::shouldInterruptJavaScript()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::shouldInterruptJavaScript();");
           );
    return false;
  }

  KeyboardUIMode ChromeClientJS::keyboardUIMode()
  {
    return KeyboardAccessDefault;
  }

  IntRect ChromeClientJS::windowResizerRect() const
  {
    notImplemented();
    return IntRect();
  }

  /*void ChromeClientJS::widgetSizeChanged(const IntSize& oldWidgetSize, IntSize newSize)
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
  }*/

  void ChromeClientJS::invalidateRootView(const IntRect&, bool immediate)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::invalidateRootView();");
           );
  }

  void ChromeClientJS::invalidateContentsAndRootView(const IntRect& updateRect, bool immediate)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::invalidateContentsAndRootView();");
           );
  }

  void ChromeClientJS::invalidateContentsForSlowScroll(const IntRect& updateRect, bool immediate)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::invalidateContentsForSlowScroll();");
           );
  }

  void ChromeClientJS::scroll(const IntSize& delta, const IntRect& rectToScroll, const IntRect& clipRect)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::scroll();");
           );
  }

  IntRect ChromeClientJS::rootViewToScreen(const IntRect& rect) const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::rootViewToScreen();");
           );
    return rect;
  }

  IntPoint ChromeClientJS::screenToRootView(const IntPoint& point) const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::screenToRootView();");
           );
    return point;
  }

  PlatformPageClient ChromeClientJS::platformPageClient() const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::platformPageClient();");
           );
    return 0;
  }

  void ChromeClientJS::contentsSizeChanged(Frame* frame, const IntSize& size) const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::contentsSizeChanged();");
           );
  }

  void ChromeClientJS::scrollbarsModeDidChange() const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::scrollbarsModeDidChange();");
           );
  }

  void ChromeClientJS::mouseDidMoveOverElement(const HitTestResult& hit, unsigned modifierFlags)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::mouseDidMoveOverElement();");
           );
  }

  void ChromeClientJS::setToolTip(const String& toolTip, TextDirection)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setToolTip();");
           );
  }

  void ChromeClientJS::print(Frame* frame)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::print();");
           );
  }
  void ChromeClientJS::reachedMaxAppCacheSize(int64_t spaceNeeded)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::reachedMaxAppCacheSize();");
           );
  }

  void ChromeClientJS::reachedApplicationCacheOriginQuota(SecurityOrigin*, int64_t)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::reachedApplicationCacheOriginQuota();");
           );
  }

  void ChromeClientJS::runOpenPanel(Frame*, PassRefPtr<FileChooser> prpFileChooser)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::runOpenPanel();");
           );
  }

  void ChromeClientJS::loadIconForFiles(const Vector<WTF::String>& filenames, WebCore::FileIconLoader* loader)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::loadIconForFiles();");
           );
  }

  /*void ChromeClientJS::dispatchViewportPropertiesDidChange(const ViewportArguments& arguments) const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::dispatchViewportPropertiesDidChange();");
           );
  }*/

  void ChromeClientJS::setCursor(const Cursor& cursor)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setCursor();");
           );
  }

  void ChromeClientJS::setCursorHiddenUntilMouseMoves(bool)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setCursorHiddenUntilMouseMoves();");
           );
  }

  bool ChromeClientJS::selectItemWritingDirectionIsNatural()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::selectItemWritingDirectionIsNatural();");
           );
    return false;
  }

  bool ChromeClientJS::selectItemAlignmentFollowsMenuWritingDirection()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::selectItemAlignmentFollowMenuWritingDirection();");
           );
    return false;
  }

  bool ChromeClientJS::hasOpenedPopup() const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::hasOpenedPopup();");
           );
    return false;
  }

  /*PassRefPtr<WebCore::PopupMenu> ChromeClientJS::createPopupMenu(WebCore::PopupMenuClient* client) const
  {
    EM_ASM(
           console.log("createPopupMenu();");
           );
  }*/

  /*PassRefPtr<WebCore::SearchPopupMenu> ChromeClientJS::createSearchPopupMenu(WebCore::PopupMenuClient* client) const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::createSearchPopupMenu();");
           );
  }*/

  void ChromeClientJS::attachRootGraphicsLayer(Frame* frame, GraphicsLayer* rootLayer)
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::attachRootGraphicsLayer();");
           );
  }
  
  void ChromeClientJS::setNeedsOneShotDrawingSynchronization()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::setNeedsOneShotDrawingSynchronization();");
           );
  }
  
  void ChromeClientJS::scheduleCompositingLayerFlush()
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::scheduleCompositingLayerFlush();");
           );
  }


  PassRefPtr<PopupMenu> ChromeClientJS::createPopupMenu(PopupMenuClient*) const {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::createPopupMenu(PopupMenuClient*);");
           );
    return nullptr;
  }

  PassRefPtr<SearchPopupMenu> ChromeClientJS::createSearchPopupMenu(PopupMenuClient*) const {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::createSearchPopupMenu(PopupMenuClient*);");
           );
    return nullptr;
  }
  void ChromeClientJS::delegatedScrollRequested(const IntPoint&) {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::delegatedScrollRequested(const IntPoint&);");
           );
  }
  void ChromeClientJS::formStateDidChange(const WebCore::Node*) {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::formStateDidChange(const WebCore::Node*);");
           );
  }
  void ChromeClientJS::numWheelEventHandlersChanged(unsigned) {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::numWheelEventHandlersChanged(unsigned);");
           );
  }
  void ChromeClientJS::scheduleAnimation() {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::scheduleAnimation();");
           );
  }

  /*IntRect ChromeClientJS::windowResizerRect() const
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
*/
  /*ChromeClientJS::CompositingTriggerFlags ChromeClientJS::allowedCompositingTriggers() const
  {
    EM_ASM(
           console.log("WebKit: ChromeClientJS::allowCompositingTriggers();");
           );
    return false;
  }*/
}
