
#include "config.h"
#include <emscripten.h>
#include "DebuggerJS.h"
#include "DocumentLoaderJS.h"
#include "FrameLoaderClientJS.h"
#include "WebFrameJS.h"
#include "FrameLoaderTypes.h"
#include "ResourceError.h"
#include "FrameJS.h"
#include "FrameNetworkingContextJS.h"
#include "RenderWidget.h"
#include "FrameView.h"
#include "MIMETYpeRegistry.h"
#include "Page.h"
#include "MainFrame.h"
#include "WebView.h"

namespace WebCore {

	FrameLoaderClient* FrameLoaderClientJS::createClient(WebFrameJS *webframe) {
		return static_cast<FrameLoaderClient *>(new FrameLoaderClientJS(webframe));
	}

	FrameLoaderClientJS::FrameLoaderClientJS(WebFrameJS *webframe) {
		m_frame = webframe;
		notImplemented();
	}
	
	FrameLoaderClientJS::~FrameLoaderClientJS() {
		notImplemented();
	}

	bool FrameLoaderClientJS::hasHTMLView() const {
		return true;
	}

	void FrameLoaderClientJS::frameLoaderDestroyed() {
		notImplemented();
	}

	bool FrameLoaderClientJS::hasWebView() const  {
		webkitTrace();
		return m_frame;
	}

	void FrameLoaderClientJS::makeRepresentation(DocumentLoader*) {
		notImplemented();
	}

	void FrameLoaderClientJS::forceLayout() {
		webkitTrace();
		FrameView* view = m_frame->coreFrame()->view();
		view->setNeedsLayout();
		if (view)
			view->forceLayout(true);
	}

	void FrameLoaderClientJS::forceLayoutForNonHTML() {
		notImplemented();
	}

	void FrameLoaderClientJS::setCopiesOnScroll() {
		notImplemented();
	}

	void FrameLoaderClientJS::detachedFromParent2() {
		notImplemented();
	}

	void FrameLoaderClientJS::detachedFromParent3() {
		notImplemented();
	}

	void FrameLoaderClientJS::assignIdentifierToInitialRequest(unsigned long identifier, DocumentLoader*, const ResourceRequest&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchWillSendRequest(DocumentLoader*, unsigned long identifier, ResourceRequest&, const ResourceResponse& redirectResponse) {
		notImplemented();
	}

	bool FrameLoaderClientJS::shouldUseCredentialStorage(DocumentLoader*, unsigned long identifier) {
		notImplemented();
		return false;
	}

	void FrameLoaderClientJS::dispatchDidReceiveAuthenticationChallenge(DocumentLoader*, unsigned long identifier, const AuthenticationChallenge&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidCancelAuthenticationChallenge(DocumentLoader*, unsigned long identifier, const AuthenticationChallenge&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidReceiveResponse(DocumentLoader*, unsigned long identifier, const ResourceResponse&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidReceiveContentLength(DocumentLoader*, unsigned long identifier, int dataLength) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidFinishLoading(DocumentLoader*, unsigned long identifier) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidFailLoading(DocumentLoader*, unsigned long identifier, const ResourceError&) {
		notImplemented();
	}

	bool FrameLoaderClientJS::dispatchDidLoadResourceFromMemoryCache(DocumentLoader*, const ResourceRequest&, const ResourceResponse&, int length) {
		notImplemented();
		return false;
	}

	void FrameLoaderClientJS::dispatchDidHandleOnloadEvents() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidReceiveServerRedirectForProvisionalLoad() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidCancelClientRedirect() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchWillPerformClientRedirect(const URL&, double interval, double fireDate) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidChangeLocationWithinPage() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidPushStateWithinPage() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidReplaceStateWithinPage() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidPopStateWithinPage() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchWillClose() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidReceiveIcon() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidStartProvisionalLoad() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidReceiveTitle(const StringWithDirection&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidChangeIcons(IconType) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidCommitLoad() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidFailProvisionalLoad(const ResourceError&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidFailLoad(const ResourceError&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidFinishDocumentLoad() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidFinishLoad() {
		notImplemented();
	}

	Frame* FrameLoaderClientJS::dispatchCreatePage(const NavigationAction&) {
		webkitTrace();
		return m_frame->coreFrame();
	}

	void FrameLoaderClientJS::dispatchShow() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDecidePolicyForResponse(const ResourceResponse&, const ResourceRequest&, FramePolicyFunction) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDecidePolicyForNewWindowAction(const NavigationAction&, const ResourceRequest&, PassRefPtr<FormState>, const String& frameName, FramePolicyFunction)
	{
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDecidePolicyForNavigationAction(const NavigationAction&, const ResourceRequest&, PassRefPtr<FormState>, FramePolicyFunction) {
		notImplemented();
	}

	void FrameLoaderClientJS::cancelPolicyCheck() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchUnableToImplementPolicy(const ResourceError&) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchWillSendSubmitEvent(PassRefPtr<FormState>) {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchWillSubmitForm(PassRefPtr<FormState>, FramePolicyFunction) {
		notImplemented();
	}

	void FrameLoaderClientJS::revertToProvisionalState(DocumentLoader*) {
		notImplemented();
	}

	void FrameLoaderClientJS::setMainDocumentError(DocumentLoader*, const ResourceError&) {
		notImplemented();
	}

	void FrameLoaderClientJS::postProgressStartedNotification() {
		notImplemented();
	}

	void FrameLoaderClientJS::postProgressEstimateChangedNotification() {
		notImplemented();
	}

	void FrameLoaderClientJS::postProgressFinishedNotification() {
		notImplemented();
	}

	void FrameLoaderClientJS::setMainFrameDocumentReady(bool ready) {
		notImplemented();
	}

	void FrameLoaderClientJS::startDownload(const ResourceRequest&, const String& suggestedName) {
		notImplemented();
	}

	void FrameLoaderClientJS::willChangeTitle(DocumentLoader* loader) {
		notImplemented();
	}

	void FrameLoaderClientJS::didChangeTitle(DocumentLoader* loader) {
		notImplemented();
	}

	void FrameLoaderClientJS::committedLoad(DocumentLoader* loader, const char* data, int length) {
		webkitTrace();
		ASSERT(loader->frame());
		loader->commitData(data, length);

		Frame* coreFrame = loader->frame();
		if (coreFrame && coreFrame->document()->isMediaDocument())
			loader->cancelMainResourceLoad(coreFrame->loader().client().pluginWillHandleLoadError(loader->response()));
	}

	void FrameLoaderClientJS::finishedLoading(DocumentLoader*) {
		notImplemented();
	}

	void FrameLoaderClientJS::updateGlobalHistory() {
		notImplemented();
	}

	void FrameLoaderClientJS::updateGlobalHistoryRedirectLinks() {
		notImplemented();
	}

	bool FrameLoaderClientJS::shouldGoToHistoryItem(HistoryItem*) const {
		notImplemented();
		return false;
	}

	bool FrameLoaderClientJS::shouldStopLoadingForHistoryItem(HistoryItem*) const {
		notImplemented();
		return false;
	}

	void FrameLoaderClientJS::didDisplayInsecureContent() {
		notImplemented();
	}

	void FrameLoaderClientJS::didRunInsecureContent(SecurityOrigin*, const URL&) {
		notImplemented();
	}

	void FrameLoaderClientJS::didDetectXSS(const URL&, bool didBlockEntirePage) {
		notImplemented();
	}

	ResourceError FrameLoaderClientJS::cancelledError(const ResourceRequest&) {
	 notImplemented();
	 return ResourceError();
	}

	ResourceError FrameLoaderClientJS::blockedError(const ResourceRequest&) {
		notImplemented();
		return ResourceError();
	}

	ResourceError FrameLoaderClientJS::cannotShowURLError(const ResourceRequest&) {
		notImplemented();
		return ResourceError();
	}

	ResourceError FrameLoaderClientJS::interruptedForPolicyChangeError(const ResourceRequest&) {
		notImplemented();
		return ResourceError();
	}

	ResourceError FrameLoaderClientJS::cannotShowMIMETypeError(const ResourceResponse&) {
		notImplemented();
		return ResourceError();
	}

	ResourceError FrameLoaderClientJS::fileDoesNotExistError(const ResourceResponse&) {
		notImplemented();
		return ResourceError();
	}

	ResourceError FrameLoaderClientJS::pluginWillHandleLoadError(const ResourceResponse&) {
		notImplemented();
		return ResourceError();
	}

	bool FrameLoaderClientJS::shouldFallBack(const ResourceError&) {
		notImplemented();
		return false;
	}

	bool FrameLoaderClientJS::canHandleRequest(const ResourceRequest&) const {
		notImplemented();
		return true;
	}

	bool FrameLoaderClientJS::canShowMIMEType(const String& MIMEType) const {
		webkitTrace();
		return MIMETypeRegistry::canShowMIMEType(MIMEType);
	}

	bool FrameLoaderClientJS::canShowMIMETypeAsHTML(const String& MIMEType) const {
		notImplemented();
		return true;
	}

	bool FrameLoaderClientJS::representationExistsForURLScheme(const String& URLScheme) const {
		notImplemented();
		return true;
	}

	String FrameLoaderClientJS::generatedMIMETypeForURLScheme(const String& URLScheme) const {
		notImplemented();
		return "text/html";
	}

	void FrameLoaderClientJS::frameLoadCompleted() {
		notImplemented();
	}

	void FrameLoaderClientJS::saveViewStateToItem(HistoryItem*) {
		notImplemented();
	}

	void FrameLoaderClientJS::restoreViewState() {
		notImplemented();
	}

	void FrameLoaderClientJS::provisionalLoadStarted() {
		notImplemented();
	}

	void FrameLoaderClientJS::didFinishLoad() {
		notImplemented();
	}

	void FrameLoaderClientJS::prepareForDataSourceReplacement() {
		notImplemented();
	}

	PassRefPtr<DocumentLoader> FrameLoaderClientJS::createDocumentLoader(const ResourceRequest& request, const SubstituteData& subtituteData) {
		webkitTrace();
		RefPtr<WebCore::DocumentLoader> loader = WebCore::DocumentLoaderJS::create(request, subtituteData);
		return loader.release();
	}

	void FrameLoaderClientJS::setTitle(const StringWithDirection&, const URL&) {
		notImplemented();
	}

	String FrameLoaderClientJS::userAgent(const URL&) {
		return "webkit.js";
	}

	void FrameLoaderClientJS::savePlatformDataToCachedFrame(CachedFrame*) {
		notImplemented();
	}

	void FrameLoaderClientJS::transitionToCommittedFromCachedFrame(CachedFrame*) {
		notImplemented();
	}

	void FrameLoaderClientJS::transitionToCommittedForNewPage() {
		webkitTrace();
		WebView* webView = m_frame->webView();
		FloatRect rect = webView->positionAndSize();
		bool transparent = webView->transparent();
		Color backgroundColor = transparent ? Color::transparent : Color::white;
		m_frame->coreFrame()->createView(roundedIntSize(rect.size()), backgroundColor, transparent);
	}

	void FrameLoaderClientJS::didSaveToPageCache() {
		notImplemented();
	}

	void FrameLoaderClientJS::didRestoreFromPageCache() {
		notImplemented();
	}

	void FrameLoaderClientJS::dispatchDidBecomeFrameset(bool) {
		notImplemented();
	}

	bool FrameLoaderClientJS::canCachePage() const {
		notImplemented();
		return false;
	}
	void FrameLoaderClientJS::convertMainResourceLoadToDownload(DocumentLoader*, const ResourceRequest&, const ResourceResponse&) {
		notImplemented();
	}

	PassRefPtr<Frame> FrameLoaderClientJS::createFrame(const URL& url, const String& name, HTMLFrameOwnerElement* ownerElement, const String& referrer, bool allowsScrolling, int marginWidth, int marginHeight)
	{
		notImplemented();
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
		notImplemented();
	}

	void FrameLoaderClientJS::redirectDataToPlugin(Widget* pluginWidget) {
		notImplemented();
	}

	PassRefPtr<Widget> FrameLoaderClientJS::createJavaAppletWidget(const IntSize&, HTMLAppletElement*, const URL& baseURL, const Vector<String>& paramNames, const Vector<String>& paramValues) {
		notImplemented();
		return nullptr;
	}

	ObjectContentType FrameLoaderClientJS::objectContentType(const URL&, const String& mimeType, bool shouldPreferPlugInsForImages) {
		notImplemented();
		return ObjectContentType();
	}

	String FrameLoaderClientJS::overrideMediaType() const {
		notImplemented();
		return String();
	}

	void FrameLoaderClientJS::dispatchDidClearWindowObjectInWorld(DOMWrapperWorld&) {
		notImplemented();
	}

	void FrameLoaderClientJS::documentElementAvailable() {
		notImplemented();
	}

	void FrameLoaderClientJS::didPerformFirstNavigation() const {
		notImplemented();
	}

	void FrameLoaderClientJS::registerForIconNotification(bool listen) {
		notImplemented();
	}

	PassRefPtr<FrameNetworkingContext> FrameLoaderClientJS::createNetworkingContext() {
		notImplemented();
		return nullptr;
	}
}


