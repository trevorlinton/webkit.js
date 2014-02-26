
#include "config.h"
#include <emscripten.h>
#include "NotImplemented.h"
#include "DocumentLoaderJS.h"
#include "FrameLoaderClientJS.h"
#include "FrameLoaderTypes.h"
#include "ResourceError.h"
#include "FrameJS.h"
#include "FrameNetworkingContextJS.h"
#include "RenderWidget.h"

namespace WebCore {
  FrameLoaderClient* FrameLoaderClientJS::createClient() {
    return static_cast<FrameLoaderClient *>(new FrameLoaderClientJS());
  }
  FrameLoaderClientJS::FrameLoaderClientJS() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::FrameLoaderClientJS();");
           );
  }
  
  FrameLoaderClientJS::~FrameLoaderClientJS() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::~FrameLoaderClientJS();");
           );
  }


  bool FrameLoaderClientJS::hasHTMLView() const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::hasHTMLView();");
           );
    return true;
  }
  void FrameLoaderClientJS::frameLoaderDestroyed() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::frameLoaderDestroyed();");
           );
  }

  bool FrameLoaderClientJS::hasWebView() const  {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::hasWebView();");
           );
    return true;
  }

  void FrameLoaderClientJS::makeRepresentation(DocumentLoader*) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::makeRepresentation();");
           );
  }
  void FrameLoaderClientJS::forceLayout() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::forceLayout();");
           );
  }
  void FrameLoaderClientJS::forceLayoutForNonHTML() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::forceLayoutForNonHTML();");
           );
  }

  void FrameLoaderClientJS::setCopiesOnScroll() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::setCopiesOnScroll();");
           );
  }

  void FrameLoaderClientJS::detachedFromParent2() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::detachedFromParent2();");
           );
  }
  void FrameLoaderClientJS::detachedFromParent3() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::detachedFromParent3();");
           );
  }

  void FrameLoaderClientJS::assignIdentifierToInitialRequest(unsigned long identifier, DocumentLoader*, const ResourceRequest&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::nassignIdentifierToInitialRequest();");
           );
  }

  void FrameLoaderClientJS::dispatchWillSendRequest(DocumentLoader*, unsigned long identifier, ResourceRequest&, const ResourceResponse& redirectResponse) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchWillSendRequest();");
           );
  }
  bool FrameLoaderClientJS::shouldUseCredentialStorage(DocumentLoader*, unsigned long identifier) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::shouldUseCredentialStorage();");
           );
    return false;
  }
  void FrameLoaderClientJS::dispatchDidReceiveAuthenticationChallenge(DocumentLoader*, unsigned long identifier, const AuthenticationChallenge&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReceiveAuthenticationChallenge();");
           );
  }
  void FrameLoaderClientJS::dispatchDidCancelAuthenticationChallenge(DocumentLoader*, unsigned long identifier, const AuthenticationChallenge&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidCancelAuthenticationChallenge();");
           );
  }

  void FrameLoaderClientJS::dispatchDidReceiveResponse(DocumentLoader*, unsigned long identifier, const ResourceResponse&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReceiveResponse();");
           );
  }
  void FrameLoaderClientJS::dispatchDidReceiveContentLength(DocumentLoader*, unsigned long identifier, int dataLength) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReceiveContentLength();");
           );
  }
  void FrameLoaderClientJS::dispatchDidFinishLoading(DocumentLoader*, unsigned long identifier) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidFinishLoading();");
           );
  }
  void FrameLoaderClientJS::dispatchDidFailLoading(DocumentLoader*, unsigned long identifier, const ResourceError&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidFailLoading();");
           );
  }
  bool FrameLoaderClientJS::dispatchDidLoadResourceFromMemoryCache(DocumentLoader*, const ResourceRequest&, const ResourceResponse&, int length) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidLoadResourceFromMemoryCache();");
           );
    return false;
  }

  void FrameLoaderClientJS::dispatchDidHandleOnloadEvents() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidHandleOnloadEvents();");
           );
  }
  void FrameLoaderClientJS::dispatchDidReceiveServerRedirectForProvisionalLoad() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReceiveServerRedirectForProvisionalLoad();");
           );
  }
  void FrameLoaderClientJS::dispatchDidCancelClientRedirect() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidCancelClientRedirect();");
           );
  }
  void FrameLoaderClientJS::dispatchWillPerformClientRedirect(const URL&, double interval, double fireDate) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchWillPerformClientRedirect();");
           );
  }
/*  void FrameLoaderClientJS::dispatchDidNavigateWithinPage() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }*/
  void FrameLoaderClientJS::dispatchDidChangeLocationWithinPage() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidChangeLocationWithinPage();");
           );
  }
  void FrameLoaderClientJS::dispatchDidPushStateWithinPage() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidPushStateWithinPage();");
           );
  }
  void FrameLoaderClientJS::dispatchDidReplaceStateWithinPage() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReplaceStateWithinPage();");
           );
  }
  void FrameLoaderClientJS::dispatchDidPopStateWithinPage() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidPopStateWithinPage();");
           );
  }
  void FrameLoaderClientJS::dispatchWillClose() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchWillClose();");
           );
  }
  void FrameLoaderClientJS::dispatchDidReceiveIcon() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReceiveIcon();");
           );
  }
  void FrameLoaderClientJS::dispatchDidStartProvisionalLoad() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidStartProvisionalLoad();");
           );
  }
  void FrameLoaderClientJS::dispatchDidReceiveTitle(const StringWithDirection&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidReceiveTitle();");
           );
  }
  void FrameLoaderClientJS::dispatchDidChangeIcons(IconType) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidChangeIcons();");
           );
  }
  void FrameLoaderClientJS::dispatchDidCommitLoad() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidCommitLoad();");
           );
  }
  void FrameLoaderClientJS::dispatchDidFailProvisionalLoad(const ResourceError&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidFailProvisionalLoad();");
           );
  }
  void FrameLoaderClientJS::dispatchDidFailLoad(const ResourceError&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidFailLoad();");
           );
  }
  void FrameLoaderClientJS::dispatchDidFinishDocumentLoad() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidFinishDocumentLoad();");
           );
  }
  void FrameLoaderClientJS::dispatchDidFinishLoad() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDidFinishLoad();");
           );
  }

/*  void FrameLoaderClientJS::dispatchDidLayout() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::dispatchDidLayout(LayoutMilestones) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }*/

  Frame* FrameLoaderClientJS::dispatchCreatePage(const NavigationAction&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchCreatePage();");
           );
    return 0;
  }
  void FrameLoaderClientJS::dispatchShow() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchShow();");
           );
  }

  void FrameLoaderClientJS::dispatchDecidePolicyForResponse(const ResourceResponse&, const ResourceRequest&, FramePolicyFunction) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDecidePolicyForResponse();");
           );
  }
  void FrameLoaderClientJS::dispatchDecidePolicyForNewWindowAction(const NavigationAction&, const ResourceRequest&, PassRefPtr<FormState>, const String& frameName, FramePolicyFunction)
  {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDecidePolicyForNewWindowAction();");
           );
  }
  void FrameLoaderClientJS::dispatchDecidePolicyForNavigationAction(const NavigationAction&, const ResourceRequest&, PassRefPtr<FormState>, FramePolicyFunction) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchDecidePolicyForNavigationAction();");
           );
  }
  void FrameLoaderClientJS::cancelPolicyCheck() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::cancelPolicyCheck();");
           );
  }

  void FrameLoaderClientJS::dispatchUnableToImplementPolicy(const ResourceError&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchUnableToImplementPolicy();");
           );
  }

  /*void FrameLoaderClientJS::dispatchWillRequestResource(CachedResourceRequest*) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }*/

  void FrameLoaderClientJS::dispatchWillSendSubmitEvent(PassRefPtr<FormState>) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchWillSendSubmitEvent();");
           );
  }
  void FrameLoaderClientJS::dispatchWillSubmitForm(PassRefPtr<FormState>, FramePolicyFunction) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::dispatchWillSubmitForm();");
           );
  }

  void FrameLoaderClientJS::revertToProvisionalState(DocumentLoader*) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::revertToProvisionalState();");
           );
  }
  void FrameLoaderClientJS::setMainDocumentError(DocumentLoader*, const ResourceError&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::setMainDocumentError();");
           );
  }

  /*void FrameLoaderClientJS::willChangeEstimatedProgress() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::didChangeEstimatedProgress() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }*/
  void FrameLoaderClientJS::postProgressStartedNotification() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::postProgressStartedNotification();");
           );
  }
  void FrameLoaderClientJS::postProgressEstimateChangedNotification() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::postProgressEstimateChangedNotification();");
           );
  }
  void FrameLoaderClientJS::postProgressFinishedNotification() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::postProgressFinishedNotification();");
           );
  }

  void FrameLoaderClientJS::setMainFrameDocumentReady(bool ready) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::setMainFrameDocumentReady();");
           );
  }

  void FrameLoaderClientJS::startDownload(const ResourceRequest&, const String& suggestedName) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }

  void FrameLoaderClientJS::willChangeTitle(DocumentLoader* loader) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::willChangeTitle();");
           );

  }
  void FrameLoaderClientJS::didChangeTitle(DocumentLoader* loader) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::didChangeTitle();");
           );
  }

  void FrameLoaderClientJS::committedLoad(DocumentLoader* loader, const char* name, int c) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::finishedLoading(DocumentLoader*) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }

  void FrameLoaderClientJS::updateGlobalHistory() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::updateGlobalHistoryRedirectLinks() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }

  bool FrameLoaderClientJS::shouldGoToHistoryItem(HistoryItem*) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return false;
  }
  bool FrameLoaderClientJS::shouldStopLoadingForHistoryItem(HistoryItem*) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return false;
  }
 /* void FrameLoaderClientJS::updateGlobalHistoryItemForPage() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }*/

  /*void FrameLoaderClientJS::didDisownOpener() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }*/

  void FrameLoaderClientJS::didDisplayInsecureContent() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }

  void FrameLoaderClientJS::didRunInsecureContent(SecurityOrigin*, const URL&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::didDetectXSS(const URL&, bool didBlockEntirePage) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }

 ResourceError FrameLoaderClientJS::cancelledError(const ResourceRequest&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
   return ResourceError();
  }
  ResourceError FrameLoaderClientJS::blockedError(const ResourceRequest&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return ResourceError();
  }
  ResourceError FrameLoaderClientJS::cannotShowURLError(const ResourceRequest&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return ResourceError();
  }
  ResourceError FrameLoaderClientJS::interruptedForPolicyChangeError(const ResourceRequest&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return ResourceError();
  }

  ResourceError FrameLoaderClientJS::cannotShowMIMETypeError(const ResourceResponse&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return ResourceError();
  }
  ResourceError FrameLoaderClientJS::fileDoesNotExistError(const ResourceResponse&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return ResourceError();
  }
  ResourceError FrameLoaderClientJS::pluginWillHandleLoadError(const ResourceResponse&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return ResourceError();
  }

  bool FrameLoaderClientJS::shouldFallBack(const ResourceError&) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return false;
  }

  bool FrameLoaderClientJS::canHandleRequest(const ResourceRequest&) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return true;
  }
  bool FrameLoaderClientJS::canShowMIMEType(const String& MIMEType) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return true;
  }
  bool FrameLoaderClientJS::canShowMIMETypeAsHTML(const String& MIMEType) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return true;
  }
  bool FrameLoaderClientJS::representationExistsForURLScheme(const String& URLScheme) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return true;
  }
  String FrameLoaderClientJS::generatedMIMETypeForURLScheme(const String& URLScheme) const {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
    return "text/html";
  }

  void FrameLoaderClientJS::frameLoadCompleted() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::saveViewStateToItem(HistoryItem*) {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::restoreViewState() {
    EM_ASM(
           console.log("WebKit: FrameLoaderClientJS::new();");
           );
  }
  void FrameLoaderClientJS::provisionalLoadStarted() {

  }
  void FrameLoaderClientJS::didFinishLoad() {

  }
  void FrameLoaderClientJS::prepareForDataSourceReplacement() {

  }

  PassRefPtr<DocumentLoader> FrameLoaderClientJS::createDocumentLoader(const ResourceRequest& request, const SubstituteData& subtituteData) {
    RefPtr<WebCore::DocumentLoader> loader = WebCore::DocumentLoaderJS::create(request, subtituteData);
    return loader.release();
  }
  void FrameLoaderClientJS::setTitle(const StringWithDirection&, const URL&) {

  }

  String FrameLoaderClientJS::userAgent(const URL&) {
    return "webkit.js";
  }

  void FrameLoaderClientJS::savePlatformDataToCachedFrame(CachedFrame*) {

  }
  void FrameLoaderClientJS::transitionToCommittedFromCachedFrame(CachedFrame*) {

  }
  void FrameLoaderClientJS::transitionToCommittedForNewPage() {

  }

  void FrameLoaderClientJS::didSaveToPageCache() {

  }
  void FrameLoaderClientJS::didRestoreFromPageCache() {

  }

  void FrameLoaderClientJS::dispatchDidBecomeFrameset(bool) {

  } // Can change due to navigation or DOM modification.

  bool FrameLoaderClientJS::canCachePage() const {
    return false;
  }
  void FrameLoaderClientJS::convertMainResourceLoadToDownload(DocumentLoader*, const ResourceRequest&, const ResourceResponse&) {

  }

  PassRefPtr<Frame> FrameLoaderClientJS::createFrame(const URL& url, const String& name, HTMLFrameOwnerElement* ownerElement, const String& referrer, bool allowsScrolling, int marginWidth, int marginHeight)
  {
    /*Frame* parentFrame = m_frame;
    WebCore::Page* page = core(webView);
    ASSERT(page == parentFrame->page());

    RefPtr<Frame> childFrame = Frame::create(page, ownerElement, new FrameLoaderClientJS(kitFrame));
    arentFrame->tree().appendChild(childFrame);
    childFrame->init();

    // The creation of the frame may have run arbitrary JavaScript that removed it from the page already.
    if (!childFrame->page())
      return 0;

    parentFrame->loader().loadURLIntoChildFrame(url, referrer, childFrame.get());

    // The frame's onload handler may have removed it from the document.
    if (!childFrame->tree().parent())
      return 0;

    return childFrame.release();*/
    return nullptr;
  }
  PassRefPtr<Widget> FrameLoaderClientJS::createPlugin(const IntSize&, HTMLPlugInElement*, const URL&, const Vector<String>&, const Vector<String>&, const String&, bool loadManually) {
    notImplemented();
    return nullptr;
  }
  void FrameLoaderClientJS::recreatePlugin(Widget* plugin) {

  }
  void FrameLoaderClientJS::redirectDataToPlugin(Widget* pluginWidget) {

  }

  PassRefPtr<Widget> FrameLoaderClientJS::createJavaAppletWidget(const IntSize&, HTMLAppletElement*, const URL& baseURL, const Vector<String>& paramNames, const Vector<String>& paramValues) {
    return nullptr;
  }

 /* void FrameLoaderClientJS::dispatchDidFailToStartPlugin(const PluginView*) const {
  }*/

  ObjectContentType FrameLoaderClientJS::objectContentType(const URL&, const String& mimeType, bool shouldPreferPlugInsForImages) {
    return ObjectContentType();
  }
  String FrameLoaderClientJS::overrideMediaType() const {
    return WTF::String();
  }

  void FrameLoaderClientJS::dispatchDidClearWindowObjectInWorld(DOMWrapperWorld&) {

  }
  void FrameLoaderClientJS::documentElementAvailable() {

  }
  void FrameLoaderClientJS::didPerformFirstNavigation() const {

  } // "Navigation" here means a transition from one page to another that ends up in the back/forward list.

  void FrameLoaderClientJS::registerForIconNotification(bool listen) {

  }
  PassRefPtr<FrameNetworkingContext> FrameLoaderClientJS::createNetworkingContext() {
    return nullptr;
  }
/*
  bool FrameLoaderClientJS::shouldAlwaysUsePluginDocument(const String&) const { return false; }
  bool FrameLoaderClientJS::shouldLoadMediaElementURL(const URL&) const { return true; }

  void FrameLoaderClientJS::didChangeScrollOffset() { }

  bool FrameLoaderClientJS::allowScript(bool enabledPerSettings) { return enabledPerSettings; }
  bool FrameLoaderClientJS::allowScriptFromSource(bool enabledPerSettings, const URL&) { return enabledPerSettings; }
  bool FrameLoaderClientJS::allowPlugins(bool enabledPerSettings) { return enabledPerSettings; }
  bool FrameLoaderClientJS::allowImage(bool enabledPerSettings, const URL&) { return enabledPerSettings; }
  bool FrameLoaderClientJS::allowDisplayingInsecureContent(bool enabledPerSettings, SecurityOrigin*, const URL&) { return enabledPerSettings; }
  bool FrameLoaderClientJS::allowRunningInsecureContent(bool enabledPerSettings, SecurityOrigin*, const URL&) { return enabledPerSettings; }

  // Clients that generally disallow universal access can make exceptions for particular URLs.
  bool FrameLoaderClientJS::shouldForceUniversalAccessFromLocalURL(const URL&) { return false; }



  bool FrameLoaderClientJS::shouldPaintBrokenImage(const URL&) const { return true; }

  void FrameLoaderClientJS::dispatchWillOpenSocketStream(SocketStreamHandle*) { }

  void FrameLoaderClientJS::dispatchGlobalObjectAvailable(DOMWrapperWorld&) { }
  void FrameLoaderClientJS::dispatchWillDisconnectDOMWindowExtensionFromGlobalObject(DOMWindowExtension*) { }
  void FrameLoaderClientJS::dispatchDidReconnectDOMWindowExtensionToGlobalObject(DOMWindowExtension*) { }
  void FrameLoaderClientJS::dispatchWillDestroyGlobalObjectForDOMWindowExtension(DOMWindowExtension*) { }

  bool FrameLoaderClientJS::allowWebGL(bool enabledPerSettings) { return enabledPerSettings; }
  void FrameLoaderClientJS::didLoseWebGLContext(int) { }

  void FrameLoaderClientJS::forcePageTransitionIfNeeded() { }

  bool FrameLoaderClientJS::isEmptyFrameLoaderClientJS() { return false; }
  };*/

} // namespace WebKit


