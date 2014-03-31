
#ifndef all_FrameLoaderClientJS_h
#define all_FrameLoaderClientJS_h
#include "FrameLoaderClient.h"

namespace WebCore {
	class WebFrameJS;

  class FrameLoaderClientJS : FrameLoaderClient {
  public:
    static FrameLoaderClient* createClient(WebFrameJS *frame);
    ~FrameLoaderClientJS();
    bool hasHTMLView() const;
    void frameLoaderDestroyed();
    bool hasWebView() const;
    void makeRepresentation(DocumentLoader*);
    void forceLayout();
    void forceLayoutForNonHTML();
    void setCopiesOnScroll();
    void detachedFromParent2();
    void detachedFromParent3();
    void assignIdentifierToInitialRequest(unsigned long identifier, DocumentLoader*, const ResourceRequest&);
    void dispatchWillSendRequest(DocumentLoader*, unsigned long identifier, ResourceRequest&, const ResourceResponse& redirectResponse);
    bool shouldUseCredentialStorage(DocumentLoader*, unsigned long identifier);
    void dispatchDidReceiveAuthenticationChallenge(DocumentLoader*, unsigned long identifier, const AuthenticationChallenge&);
    void dispatchDidCancelAuthenticationChallenge(DocumentLoader*, unsigned long identifier, const AuthenticationChallenge&);
    void dispatchDidReceiveResponse(DocumentLoader*, unsigned long identifier, const ResourceResponse&);
    void dispatchDidReceiveContentLength(DocumentLoader*, unsigned long identifier, int dataLength);
    void dispatchDidFinishLoading(DocumentLoader*, unsigned long identifier);
    void dispatchDidFailLoading(DocumentLoader*, unsigned long identifier, const ResourceError&);
    bool dispatchDidLoadResourceFromMemoryCache(DocumentLoader*, const ResourceRequest&, const ResourceResponse&, int length);
    void dispatchDidHandleOnloadEvents();
    void dispatchDidReceiveServerRedirectForProvisionalLoad();
    void dispatchDidCancelClientRedirect();
    void dispatchWillPerformClientRedirect(const URL&, double interval, double fireDate);
    void dispatchDidChangeLocationWithinPage();
    void dispatchDidPushStateWithinPage();
    void dispatchDidReplaceStateWithinPage();
    void dispatchDidPopStateWithinPage();
    void dispatchWillClose();
    void dispatchDidReceiveIcon();
    void dispatchDidStartProvisionalLoad();
    void dispatchDidReceiveTitle(const StringWithDirection&);
    void dispatchDidChangeIcons(IconType);
    void dispatchDidCommitLoad();
    void dispatchDidFailProvisionalLoad(const ResourceError&);
    void dispatchDidFailLoad(const ResourceError&);
    void dispatchDidFinishDocumentLoad();
    void dispatchDidFinishLoad();
    Frame* dispatchCreatePage(const NavigationAction&);
    void dispatchShow();
    void dispatchDecidePolicyForResponse(const ResourceResponse&, const ResourceRequest&, FramePolicyFunction);
    void dispatchDecidePolicyForNewWindowAction(const NavigationAction&, const ResourceRequest&, PassRefPtr<FormState>, const String& frameName, FramePolicyFunction);
    void dispatchDecidePolicyForNavigationAction(const NavigationAction&, const ResourceRequest&, PassRefPtr<FormState>, FramePolicyFunction);
    void cancelPolicyCheck();
    void dispatchUnableToImplementPolicy(const ResourceError&);
    void dispatchWillSendSubmitEvent(PassRefPtr<FormState>);
    void dispatchWillSubmitForm(PassRefPtr<FormState>, FramePolicyFunction);
    void revertToProvisionalState(DocumentLoader*);
    void setMainDocumentError(DocumentLoader*, const ResourceError&);
    void postProgressStartedNotification();
    void postProgressEstimateChangedNotification();
    void postProgressFinishedNotification();
    void setMainFrameDocumentReady(bool ready);
    void willChangeTitle(DocumentLoader* loader);
    void didChangeTitle(DocumentLoader* loader);
    void committedLoad(DocumentLoader* loader, const char* name, int c);
    void finishedLoading(DocumentLoader*);
    void updateGlobalHistory();
    void updateGlobalHistoryRedirectLinks();
    bool shouldGoToHistoryItem(HistoryItem*) const;
    bool shouldStopLoadingForHistoryItem(HistoryItem*) const;
    void didDisplayInsecureContent();
    void didRunInsecureContent(SecurityOrigin*, const URL&);
    void didDetectXSS(const URL&, bool didBlockEntirePage);
    bool shouldFallBack(const ResourceError&);
    bool canHandleRequest(const ResourceRequest&) const;
    bool canShowMIMEType(const String& MIMEType) const;
    bool canShowMIMETypeAsHTML(const String& MIMEType) const;
    bool representationExistsForURLScheme(const String& URLScheme) const;
    String generatedMIMETypeForURLScheme(const String& URLScheme) const;
    void frameLoadCompleted();
    void saveViewStateToItem(HistoryItem*);
    void restoreViewState();
    void provisionalLoadStarted();
    void didFinishLoad();
    void prepareForDataSourceReplacement();
    PassRefPtr<DocumentLoader> createDocumentLoader(const ResourceRequest& request, const SubstituteData& subtituteData);
    void setTitle(const StringWithDirection&, const URL&);
    String userAgent(const URL&);
    void savePlatformDataToCachedFrame(CachedFrame*);
    void transitionToCommittedFromCachedFrame(CachedFrame*);
    void transitionToCommittedForNewPage();
    void didSaveToPageCache();
    void didRestoreFromPageCache();
    void dispatchDidBecomeFrameset(bool);
    bool canCachePage() const;
    void convertMainResourceLoadToDownload(DocumentLoader*, const ResourceRequest&, const ResourceResponse&);
    PassRefPtr<Frame> createFrame(const URL& url, const String& name, HTMLFrameOwnerElement* ownerElement, const String& referrer, bool allowsScrolling, int marginWidth, int marginHeight);
    PassRefPtr<Widget> createPlugin(const IntSize&, HTMLPlugInElement*, const URL&, const Vector<String>&, const Vector<String>&, const String&, bool loadManually);
    void recreatePlugin(Widget* plugin);
    void redirectDataToPlugin(Widget* pluginWidget);
    PassRefPtr<Widget> createJavaAppletWidget(const IntSize&, HTMLAppletElement*, const URL& baseURL, const Vector<String>& paramNames, const Vector<String>& paramValues);
    ObjectContentType objectContentType(const URL&, const String& mimeType, bool shouldPreferPlugInsForImages);
    String overrideMediaType() const;
    void dispatchDidClearWindowObjectInWorld(DOMWrapperWorld&);
    void documentElementAvailable();
    void didPerformFirstNavigation() const;
    void registerForIconNotification(bool listen);

    void startDownload(const ResourceRequest&, const String& suggestedName = String());
    ResourceError cancelledError(const ResourceRequest&);
    ResourceError blockedError(const ResourceRequest&);
    ResourceError cannotShowURLError(const ResourceRequest&);
    ResourceError interruptedForPolicyChangeError(const ResourceRequest&);
    ResourceError cannotShowMIMETypeError(const ResourceResponse&);
    ResourceError fileDoesNotExistError(const ResourceResponse&);
    ResourceError pluginWillHandleLoadError(const ResourceResponse&);
    PassRefPtr<FrameNetworkingContext> createNetworkingContext();
  private:
    FrameLoaderClientJS(WebFrameJS *frame);
		WebFrameJS *m_frame = 0;
  };
}


#endif
