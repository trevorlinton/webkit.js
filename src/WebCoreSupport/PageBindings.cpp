#pragma GCC diagnostic ignored "-Wreturn-type"
#include <emscripten.h>

#include "config.h"
#include <wtf/Forward.h>
#include <wtf/HashMap.h>
#include <wtf/PassRefPtr.h>
#include <wtf/RefCounted.h>
#include <wtf/RefPtr.h>

#include "ScriptValue.h"
#include "ScriptCallFrame.h"
#include "ScriptCallStack.h"
#include "DebuggerJS.h"
#include "Cursor.h"
#include "APICast.h"
#include "InspectorValues.h"
#include "JSLock.h"
#include "bridge/runtime_root.h"
#include "File.h"
#include "FileList.h"
#include "DOMWrapperWorld.h"
#include "Icon.h"
#include "JSDOMWindowBase.h"
#include "DocumentLoader.h"
#include "ScriptCachedFrameData.h"
#include "PlatformKeyboardEvent.h"
#include "ApplicationCacheHost.h"
//#include "EmptyClients.h"
#include "EventHandler.h"
#include "BitmapImage.h"
#include "Editor.h"
#include "GCController.h"
#include "HTMLObjectElement.h"
#include "HTMLPlugInElement.h"
#include "Image.h"
#include "RenderEmbeddedObject.h"
#include "bindings/js/JSLazyEventListener.h"
#include "ResourceHandle.h"
#include "RuntimeEnabledFeatures.h"
#include "MIMETypeRegistry.h"
#include "ScrollbarTheme.h"
#include "RenderTheme.h"
#include "ScriptCallStack.h"
#include "HTMLImageLoader.h"
#include "MouseEvent.h"
#include "SerializedScriptValue.h"
#include "HTMLFrameOwnerElement.h"

using namespace JSC;
using namespace Inspector;


void WTF::scheduleDispatchFunctionsOnMainThread() {
  notImplemented();
}

namespace WebCore {
  static bool timerActive;
  static unsigned timerInterval;
  static void (*sharedTimerFiredFunction)();

  void sharedTimerRun(void *args) {
		webkitTrace();
    if(timerActive) {
      sharedTimerFiredFunction();
      //emscripten_async_call(sharedTimerRun, args, timerInterval);
    }
  }

  void stopSharedTimer()
  {
		webkitTrace();
    if (timerActive) {
      timerActive = false;
    }
  }

  void setSharedTimerFiredFunction(void (*f)())
  {
		webkitTrace();
    sharedTimerFiredFunction = f;
    if(timerInterval && timerInterval > 0) {
      timerActive = true;
    }
  }

  void setSharedTimerFireInterval(double interval)
  {
		webkitTrace();
    ASSERT(sharedTimerFiredFunction);

    unsigned intervalInMS;
    if (interval < 0)
      intervalInMS = 0;
    else {
      interval *= 1000;
      intervalInMS = (unsigned)interval;
    }

    stopSharedTimer();
    timerInterval = intervalInMS;
    timerActive = true;
		emscripten_async_call(sharedTimerRun, NULL, timerInterval);
  }


  bool RenderEmbeddedObject::allowsAcceleratedCompositing() const {
		webkitTrace();
		return true;
	}

  /*ApplicationCacheHost::ApplicationCacheHost(WebCore::DocumentLoader* documentLoader)
  : m_documentLoader(documentLoader)
  , m_defersEvents(true)
  {
    ASSERT(m_documentLoader);
  }*/

  RenderPtr<RenderElement> HTMLPlugInElement::createElementRenderer(PassRef<RenderStyle> style) { return nullptr; }
  void HTMLPlugInElement::defaultEventHandler(Event* event) { notImplemented(); }
  void HTMLPlugInElement::didAddUserAgentShadowRoot(ShadowRoot* root) { notImplemented(); }
  bool HTMLPlugInElement::requestObject(const String& url, const String& mimeType, const Vector<String>& paramNames, const Vector<String>& paramValues) { return false; }
  void HTMLPlugInElement::setDisplayState(DisplayState state) { notImplemented(); }
  void HTMLPlugInElement::swapRendererTimerFired(Timer<HTMLPlugInElement>*) { notImplemented(); }
  void HTMLPlugInElement::willDetachRenderers() { notImplemented(); }

  RefPtr<ScriptCallStack> createScriptCallStack(unsigned int, bool) {
    return nullptr;
  }


  void addImpureProperty(const AtomicString& propertyName)
  {
    notImplemented();
  }

  /* Sort of Implemented */
  PassRefPtr<Image> Image::loadPlatformResource(char const*) {
    // TODO: Implement this.
    notImplemented();
  }
  PassRefPtr<JSLazyEventListener> JSLazyEventListener::createForNode(WebCore::ContainerNode&, WebCore::QualifiedName const& a, WTF::AtomicString const& b) {
    notImplemented();
  }

  // TODO: Implement this
  void ResourceHandle::continueDidReceiveResponse() {
    notImplemented();
  }
  // TODO: Implement this
  void ResourceHandle::continueShouldUseCredentialStorage(bool a) {
    notImplemented();
  }
  // TODO: Implement this
  void ResourceHandle::continueWillSendRequest(WebCore::ResourceRequest const&) {
    notImplemented();
  }

  // TODO: Implement this
  FloatRect screenRect(WebCore::Widget*) { notImplemented(); }

  char* localizedString(char const* in) {
    return NULL;
  }

  struct ExtensionMap {
    const char* extension;
    const char* mimeType;
  };

  static const ExtensionMap extensionMap[] = {
    { "bmp", "image/bmp" },
    { "css", "text/css" },
    { "gif", "image/gif" },
    { "html", "text/html" },
    { "htm", "text/html" },
    { "ico", "image/x-icon" },
    { "jpeg", "image/jpeg" },
    { "jpg", "image/jpeg" },
    { "js", "application/x-javascript" },
    { "mht", "application/x-mimearchive" },
    { "mhtml", "application/x-mimearchive" },
    { "mng", "video/x-mng" },
    { "pbm", "image/x-portable-bitmap" },
    { "pgm", "image/x-portable-graymap" },
    { "pdf", "application/pdf" },
    { "png", "image/png" },
    { "ppm", "image/x-portable-pixmap" },
    { "rss", "application/rss+xml" },
    { "svg", "image/svg+xml" },
    { "text", "text/plain" },
    { "tif", "image/tiff" },
    { "tiff", "image/tiff" },
    { "txt", "text/plain" },
    { "xbm", "image/x-xbitmap" },
    { "xml", "text/xml" },
    { "xpm", "image/x-xpm" },
    { "xsl", "text/xsl" },
    { "xhtml", "application/xhtml+xml" },
    { "wml", "text/vnd.wap.wml" },
    { "wmlc", "application/vnd.wap.wmlc" },
    { 0, 0 }
  };

  String MIMETypeRegistry::getMIMETypeForExtension(const String &ext)
  {
    String s = ext.lower();
    const ExtensionMap *e = extensionMap;
    while (e->extension) {
      if (s == e->extension)
        return e->mimeType;
      ++e;
    }

    return String();
  }

  PassRefPtr<SerializedScriptValue> SerializedScriptValue::nullValue() {
    return nullptr;
  }
  SerializedScriptValue::~SerializedScriptValue() { notImplemented(); }
  PassRefPtr<JSLazyEventListener> JSLazyEventListener::createForDOMWindow(Frame& frame, const QualifiedName& attributeName, const AtomicString& attributeValue)
  {
    return nullptr;
  }
  /* Not Implemented */
  ScrollbarTheme* ScrollbarTheme::nativeTheme() { notImplemented(); }
  void platformUserPreferredLanguages() { notImplemented(); }
  int screenDepthPerComponent(WebCore::Widget*) { notImplemented(); }
  bool screenIsMonochrome(WebCore::Widget*) { return false; }
  void setSSLVerifyOptions(WebCore::ResourceHandle*) { notImplemented(); }

  void signedPublicKeyAndChallengeString(unsigned int, WTF::String const&, WebCore::URL const&) { notImplemented(); }
  void willCreatePossiblyOrphanedTreeByRemovalSlowCase(WebCore::Node*) { notImplemented(); }
  RenderPtr<RenderEmbeddedObject> RenderEmbeddedObject::createForApplet(WebCore::HTMLAppletElement& a, WTF::PassRef<WebCore::RenderStyle> b) { notImplemented(); }
  Cursor::Cursor(Cursor const&) { notImplemented(); }
  Cursor& Cursor::operator=(const Cursor& cursor) { notImplemented(); }
  Cursor::~Cursor()  { notImplemented(); }
  File::File(WTF::String const& a, WTF::String const& b, File::ContentTypeLookupPolicy c) { notImplemented(); }
  File::File(WTF::String const& a, File::ContentTypeLookupPolicy b) { notImplemented(); }
  FileList::FileList() { notImplemented(); }
  File* FileList::item(unsigned int a) const { notImplemented(); }
  Vector<String> FileList::paths() const { notImplemented(); }
  DOMWrapperWorld::~DOMWrapperWorld() { notImplemented(); }
  void Icon::paint(GraphicsContext*, IntRect const&) { notImplemented(); }
  Icon::~Icon() { notImplemented(); }
  //JSC::VM* JSDOMWindowBase::commonVM() { notImplemented(); }
  void JSDOMWindowBase::updateDocument() { notImplemented(); }
  void JSDOMWindowBase::willRemoveFromWindowShell() { notImplemented(); }
  const ScriptCallFrame& ScriptCallStack::at(size_t a) const { notImplemented(); }
  size_t ScriptCallStack::size() const { notImplemented(); }
  ScriptCallStack::~ScriptCallStack() { notImplemented(); }
  ScriptCachedFrameData::ScriptCachedFrameData(WebCore::Frame& a) { notImplemented(); }
  ScriptCachedFrameData::~ScriptCachedFrameData() { notImplemented(); }
  void ScriptCachedFrameData::restore(WebCore::Frame& b) { notImplemented(); }
  bool PlatformKeyboardEvent::currentCapsLockState() { return false; }
  void PlatformKeyboardEvent::getCurrentModifierState(bool& a, bool& b, bool& c, bool& d) { notImplemented(); }


  void BitmapImage::invalidatePlatformData() { notImplemented(); }
  Blob::Blob() { notImplemented(); }
  Blob::~Blob() { notImplemented(); }
  void Editor::pasteWithPasteboard(WebCore::Pasteboard*, bool) { notImplemented(); }

  bool EventHandler::passMouseMoveEventToSubframe(WebCore::MouseEventWithHitTestResults&, WebCore::Frame*, WebCore::HitTestResult*) { notImplemented(); }
  bool EventHandler::tabsToAllFormControls(WebCore::KeyboardEvent*) const { notImplemented(); }
  void GCController::garbageCollectSoon() { notImplemented(); }
  bool HTMLObjectElement::containsJavaApplet() const { notImplemented(); }
  PassRefPtr<HTMLObjectElement> HTMLObjectElement::create(WebCore::QualifiedName const&, WebCore::Document&, WebCore::HTMLFormElement*, bool) { notImplemented(); }
  void HTMLObjectElement::renderFallbackContent() { notImplemented(); }

  WebCore::HTMLPlugInElement::HTMLPlugInElement(WebCore::QualifiedName const& a, WebCore::Document& b)
  : HTMLFrameOwnerElement(a, b)
  , m_inBeforeLoadEventHandler(false)
  , m_swapRendererTimer(this, &HTMLPlugInElement::swapRendererTimerFired)
  , m_isCapturingMouseEvents(false)
  , m_displayState(Playing)
  { notImplemented(); }
  WebCore::HTMLPlugInElement::~HTMLPlugInElement() { notImplemented(); }
  void HTMLPlugInElement::collectStyleForPresentationAttribute(WebCore::QualifiedName const& a, WTF::AtomicString const& b, WebCore::MutableStyleProperties& c) { notImplemented(); }
  bool HTMLPlugInElement::guardedDispatchBeforeLoadEvent(WTF::String const&) { notImplemented(); }
  bool HTMLPlugInElement::isKeyboardFocusable(WebCore::KeyboardEvent*) const { notImplemented(); }
  bool HTMLPlugInElement::isPluginElement() const { notImplemented(); }
  bool HTMLPlugInElement::isPresentationAttribute(WebCore::QualifiedName const&) const { notImplemented(); }
  bool HTMLPlugInElement::supportsFocus() const { notImplemented(); }
  bool HTMLPlugInElement::willRespondToMouseClickEvents() { notImplemented(); }

  HTMLPlugInImageElement::HTMLPlugInImageElement(const QualifiedName& tagName, Document& document, bool createdByParser, PreferPlugInsForImagesOption preferPlugInsForImagesOption)
  : HTMLPlugInElement(tagName, document)
  , m_needsWidgetUpdate(!createdByParser)
  , m_shouldPreferPlugInsForImages(preferPlugInsForImagesOption == ShouldPreferPlugInsForImages)
  , m_needsDocumentActivationCallbacks(false)
  , m_simulatedMouseClickTimer(this, &HTMLPlugInImageElement::simulatedMouseClickTimerFired, 0.75)
  , m_removeSnapshotTimer(this, &HTMLPlugInImageElement::removeSnapshotTimerFired)
  , m_createdDuringUserGesture(false)
  , m_isRestartedPlugin(false)
  , m_needsCheckForSizeChange(false)
  , m_plugInWasCreated(false)
  , m_deferredPromotionToPrimaryPlugIn(false)
  , m_snapshotDecision(SnapshotNotYetDecided)
  {
    setHasCustomStyleResolveCallbacks();
  }
  void HTMLPlugInImageElement::removeSnapshotTimerFired(Timer<HTMLPlugInImageElement>*) { notImplemented(); }
  void HTMLPlugInImageElement::simulatedMouseClickTimerFired(DeferrableOneShotTimer<HTMLPlugInImageElement>*) { notImplemented(); }
  bool HTMLPlugInImageElement::allowedToLoadFrameURL(WTF::String const&) { notImplemented(); }
  void HTMLPlugInImageElement::checkSnapshotStatus() { notImplemented(); }
  RenderPtr<RenderElement> HTMLPlugInImageElement::createElementRenderer(WTF::PassRef<WebCore::RenderStyle>) { notImplemented(); }
  void HTMLPlugInImageElement::defaultEventHandler(WebCore::Event*) { notImplemented(); }
  void HTMLPlugInImageElement::didAddUserAgentShadowRoot(WebCore::ShadowRoot*) { notImplemented(); }
  void HTMLPlugInImageElement::didAttachRenderers() { notImplemented(); }
  void HTMLPlugInImageElement::didMoveToNewDocument(WebCore::Document*) { notImplemented(); }
  void HTMLPlugInImageElement::dispatchPendingMouseClick() { notImplemented(); }
  void HTMLPlugInImageElement::documentDidResumeFromPageCache() { notImplemented(); }
  void HTMLPlugInImageElement::documentWillSuspendForPageCache() { notImplemented(); }
  void HTMLPlugInImageElement::finishParsingChildren() { notImplemented(); }
  bool HTMLPlugInImageElement::isImageType() { notImplemented(); }
  RenderEmbeddedObject* HTMLPlugInImageElement::renderEmbeddedObject() const { notImplemented(); }
  bool HTMLPlugInImageElement::requestObject(WTF::String const&, WTF::String const&, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&) { notImplemented(); }
  void HTMLPlugInImageElement::setDisplayState(HTMLPlugInElement::DisplayState) { notImplemented(); }
  void HTMLPlugInImageElement::updateSnapshot(WTF::PassRefPtr<WebCore::Image>) { notImplemented(); }
  void HTMLPlugInImageElement::willDetachRenderers() { notImplemented(); }
  bool HTMLPlugInImageElement::willRecalcStyle(WebCore::Style::Change) { notImplemented(); }
  bool HTMLPlugInImageElement::wouldLoadAsNetscapePlugin(WTF::String const&, WTF::String const&) { notImplemented(); }
  HTMLPlugInImageElement::~HTMLPlugInImageElement() { notImplemented(); }
  void systemBeep() { notImplemented(); }
  void getSupportedKeySizes(WTF::Vector<WTF::String>&) { notImplemented(); }
  WebCore::ScriptCallFrame::~ScriptCallFrame() { notImplemented(); }
}

namespace WTF {
/*
  void *fastCalloc(unsigned int n_elements, unsigned int element_size) {
    return calloc(n_elements, element_size);
  }

  void fastFree(void* ptr) {
    free(ptr);
  }

  void *fastMalloc(unsigned int n) {
    return malloc(n);
  }

  unsigned int fastMallocGoodSize(unsigned int bytes) {
    return bytes;
  }

  void *fastRealloc(void* p, unsigned int n) {
    return realloc(p, n);
  }

  char* fastStrDup(const char* src)
  {
    size_t len = strlen(src) + 1;
    char* dup = static_cast<char*>(fastMalloc(len));
    memcpy(dup, src, len);
    return dup;
  }
  void* fastZeroedMalloc(size_t n)
  {
    void* result = fastMalloc(n);
    memset(result, 0, n);
    return result;
  }
  void scheduleDispatchFunctionsOnMainThread() { return; }

  TryMallocReturnValue tryFastMalloc(size_t n)
  {
    return malloc(n);
  }
*/
  /*
   bool ApplicationCacheHost::canCacheInPageCache() { return false; }
   void ApplicationCacheHost::failedLoadingMainResource() { notImplemented(); }
   void ApplicationCacheHost::finishedLoadingMainResource() { notImplemented(); }
   void ApplicationCacheHost::maybeLoadFallbackSynchronously(WebCore::ResourceRequest const&, WebCore::ResourceError&, WebCore::ResourceResponse&, WTF::Vector<char, 0u, WTF::CrashOnOverflow>&) { notImplemented(); }
   void ApplicationCacheHost::maybeLoadMainResource(WebCore::ResourceRequest&, WebCore::SubstituteData&) { notImplemented(); }
   void ApplicationCacheHost::maybeLoadMainResourceForRedirect(WebCore::ResourceRequest&, WebCore::SubstituteData&) { notImplemented(); }
   bool ApplicationCacheHost::maybeLoadSynchronously(WebCore::ResourceRequest&, WebCore::ResourceError&, WebCore::ResourceResponse&, WTF::Vector<char, 0u, WTF::CrashOnOverflow>&) { return false; }
   void ApplicationCacheHost::selectCacheWithManifest(WebCore::URL const&) { notImplemented(); }
   void ApplicationCacheHost::selectCacheWithoutManifest() { notImplemented(); }
   void ApplicationCacheHost::stopDeferringEvents() { notImplemented(); }
   void ApplicationCacheHost::stopLoadingInFrame(WebCore::Frame*) { notImplemented(); }
   ApplicationCacheHost::~ApplicationCacheHost() { notImplemented(); }
   bool ApplicationCacheHost::maybeLoadResource(ResourceLoader* loader, ResourceRequest& request, const URL& originalURL)
   {
   if (!isApplicationCacheEnabled())
   return false;

   if (request.url() != originalURL)
   return false;

   ApplicationCacheResource* resource;
   if (!shouldLoadResourceFromApplicationCache(request, resource))
   return false;

   m_documentLoader->m_pendingSubstituteResources.set(loader, resource);
   m_documentLoader->deliverSubstituteResourcesAfterDelay();

   return true;
   }

   bool ApplicationCacheHost::maybeLoadFallbackForRedirect(ResourceLoader* resourceLoader, ResourceRequest& request, const ResourceResponse& redirectResponse)
   {
   if (!redirectResponse.isNull() && !protocolHostAndPortAreEqual(request.url(), redirectResponse.url()))
   if (scheduleLoadFallbackResourceFromApplicationCache(resourceLoader))
   return true;
   return false;
   }
   bool ApplicationCacheHost::maybeLoadFallbackForResponse(ResourceLoader* resourceLoader, const ResourceResponse& response)
   {
   if (response.httpStatusCode() / 100 == 4 || response.httpStatusCode() / 100 == 5)
   if (scheduleLoadFallbackResourceFromApplicationCache(resourceLoader))
   return true;
   return false;
   }

   bool ApplicationCacheHost::maybeLoadFallbackForError(ResourceLoader* resourceLoader, const ResourceError& error)
   {
   if (!error.isCancellation()) {
   if (resourceLoader == m_documentLoader->mainResourceLoader())
   return maybeLoadFallbackForMainError(resourceLoader->request(), error);
   if (scheduleLoadFallbackResourceFromApplicationCache(resourceLoader))
   return true;
   }
   return false;
   }
   */
}

namespace Inspector {

  String InspectorValue::toJSONString() const { notImplemented(); }
  PassRefPtr<InspectorObject> InspectorObject::create() { notImplemented(); }
  PassRefPtr<InspectorString> InspectorString::create(const String& value) { notImplemented(); }
  PassRefPtr<InspectorBasicValue> InspectorBasicValue::create(double value) { notImplemented(); }

}

namespace Deprecated {

ScriptValue::~ScriptValue() {
}

bool ScriptValue::getString(ExecState* scriptState, String& result) const { return false; }

}

namespace JSC {
  ArrayBufferView::ArrayBufferView(PassRefPtr<ArrayBuffer> buffer, unsigned byteOffset) { notImplemented(); }
  ArrayBufferView::~ArrayBufferView() { notImplemented(); }

  namespace Bindings {
    void RootObject::invalidate() { notImplemented(); }
    void RootObject::updateGlobalObject(JSC::JSGlobalObject* arg) { notImplemented(); }
  }
  void HandleSet::grow() {}

  void HandleSet::writeBarrier(JSC::JSValue*, JSC::JSValue const&) { notImplemented(); }
  void Heap::reportExtraMemoryCostSlowCase(unsigned int) { notImplemented(); }

  ExecState* JSGlobalObject::globalExec() { notImplemented(); }

  void *MarkedAllocator::allocateSlowCase(unsigned int) { notImplemented(); }

  SourceProvider::SourceProvider(WTF::String const& a, WTF::TextPosition const& b) { notImplemented(); }
  SourceProvider::~SourceProvider() { notImplemented(); }

  namespace Yarr {
    YarrPattern::YarrPattern(WTF::String const& a, bool b, bool c, char const** d) { notImplemented(); }
    PassOwnPtr<JSC::Yarr::BytecodePattern> byteCompile(YarrPattern& a, WTF::BumpPointerAllocator* b) { notImplemented(); }
    unsigned interpret(BytecodePattern* a, WTF::String const& b, unsigned int c, unsigned int* d) { notImplemented(); }
  }
  void evaluate(JSC::ExecState* a, JSC::SourceCode const& b, JSC::JSValue c, JSC::JSValue* d) { notImplemented(); }
  void weakClearSlowCase(JSC::WeakImpl*&) { notImplemented(); }

}

