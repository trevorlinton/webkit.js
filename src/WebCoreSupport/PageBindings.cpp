// #pragma GCC diagnostic ignored "-Wreturn-type"
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
#if USE(ACCELERATED_COMPOSITING)
  bool RenderEmbeddedObject::allowsAcceleratedCompositing() const {
	
		return true;
	}
#endif
  /*ApplicationCacheHost::ApplicationCacheHost(WebCore::DocumentLoader* documentLoader)
	 : m_documentLoader(documentLoader)
	 , m_defersEvents(true)
	 {
	 ASSERT(m_documentLoader);
	 }*/







  void addImpureProperty(const AtomicString& propertyName)
  {
    notImplemented();
  }

  /* Sort of Implemented */
  PassRefPtr<Image> Image::loadPlatformResource(char const*) {
    // TODO: Implement this.
    notImplemented();
		return nullptr;
  }
  PassRefPtr<JSLazyEventListener> JSLazyEventListener::createForNode(WebCore::ContainerNode&, WebCore::QualifiedName const& a, WTF::AtomicString const& b)
	{
    notImplemented();
		return nullptr;
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
  FloatRect screenRect(WebCore::Widget*) { notImplemented(); return FloatRect(0,0,1024,768); }

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

  void platformUserPreferredLanguages() { notImplemented(); }
  int screenDepthPerComponent(WebCore::Widget*) { notImplemented(); return 32; }
  bool screenIsMonochrome(WebCore::Widget*) { return false; }
  void setSSLVerifyOptions(WebCore::ResourceHandle*) { notImplemented(); }

  void signedPublicKeyAndChallengeString(unsigned int, WTF::String const&, WebCore::URL const&) { notImplemented(); }
  void willCreatePossiblyOrphanedTreeByRemovalSlowCase(WebCore::Node*) { notImplemented(); }
  RenderPtr<RenderEmbeddedObject> RenderEmbeddedObject::createForApplet(WebCore::HTMLAppletElement& a, WTF::PassRef<WebCore::RenderStyle> b) { notImplemented(); return nullptr; }
  Cursor::Cursor(Cursor const&) { notImplemented(); }
  Cursor& Cursor::operator=(const Cursor& cursor) { notImplemented(); return *this; }
  Cursor::~Cursor()  { notImplemented(); }
  File::File(WTF::String const& a, WTF::String const& b, File::ContentTypeLookupPolicy c) { notImplemented(); }
  File::File(WTF::String const& a, File::ContentTypeLookupPolicy b) { notImplemented(); }
  FileList::FileList() { notImplemented(); }
  File* FileList::item(unsigned int a) const { notImplemented(); return NULL; }
  Vector<String> FileList::paths() const { notImplemented(); return Vector<String>(1); }
  DOMWrapperWorld::~DOMWrapperWorld() { notImplemented(); }
  void Icon::paint(GraphicsContext*, IntRect const&) { notImplemented(); }
  Icon::~Icon() { notImplemented(); }
  //JSC::VM* JSDOMWindowBase::commonVM() { notImplemented(); }
  void JSDOMWindowBase::updateDocument() { notImplemented(); }
  void JSDOMWindowBase::willRemoveFromWindowShell() { notImplemented(); }


  RefPtr<ScriptCallStack> createScriptCallStack(unsigned int, bool) {
    return nullptr;
  }

	ScriptCallFrame::ScriptCallFrame(const String& functionName, const String& scriptName, unsigned lineNumber, unsigned column)
	{

	}
	const ScriptCallFrame& ScriptCallStack::at(size_t a) const {
		notImplemented();
		ScriptCallFrame *tmp = new ScriptCallFrame("","",0,0);
		return *tmp;
	}
  size_t ScriptCallStack::size() const { notImplemented(); return 0; }
  ScriptCallStack::~ScriptCallStack() { notImplemented(); }
  ScriptCachedFrameData::ScriptCachedFrameData(WebCore::Frame& a) { notImplemented(); }
  ScriptCachedFrameData::~ScriptCachedFrameData() { notImplemented(); }

	void ScriptCachedFrameData::restore(WebCore::Frame& b) { notImplemented(); }
  bool PlatformKeyboardEvent::currentCapsLockState() { return false; }
  void PlatformKeyboardEvent::getCurrentModifierState(bool& a, bool& b, bool& c, bool& d) { notImplemented(); }


  void BitmapImage::invalidatePlatformData() {
		// Not implemented, and apparently thats ok.
	}
  void Editor::pasteWithPasteboard(WebCore::Pasteboard*, bool) { notImplemented(); }

  bool EventHandler::passMouseMoveEventToSubframe(WebCore::MouseEventWithHitTestResults&, WebCore::Frame*, WebCore::HitTestResult*) { notImplemented(); return false; }
  bool EventHandler::tabsToAllFormControls(WebCore::KeyboardEvent*) const { notImplemented(); return false; }
  void GCController::garbageCollectSoon() { notImplemented(); }
  bool HTMLObjectElement::containsJavaApplet() const { notImplemented(); return false; }
  PassRefPtr<HTMLObjectElement> HTMLObjectElement::create(WebCore::QualifiedName const&, WebCore::Document&, WebCore::HTMLFormElement*, bool) { notImplemented(); return nullptr; }
  void HTMLObjectElement::renderFallbackContent() { notImplemented(); }

	void systemBeep() { notImplemented(); }
  void getSupportedKeySizes(WTF::Vector<WTF::String>&) { notImplemented(); }
  WebCore::ScriptCallFrame::~ScriptCallFrame() { notImplemented(); }
}


namespace Inspector {

  String InspectorValue::toJSONString() const { notImplemented(); return String(); }
  PassRefPtr<InspectorObject> InspectorObject::create() { notImplemented(); return nullptr; }
  PassRefPtr<InspectorString> InspectorString::create(const String& value) { notImplemented(); return nullptr; }
  PassRefPtr<InspectorBasicValue> InspectorBasicValue::create(double value) { notImplemented(); return nullptr; }

}

namespace Deprecated {

	ScriptValue::~ScriptValue() {
	}

	bool ScriptValue::getString(ExecState* scriptState, String& result) const { return false; }

}

namespace JSC {
	ArrayBufferView::ArrayBufferView(PassRefPtr<ArrayBuffer> buffer, unsigned byteOffset)
		: m_byteOffset(byteOffset)
		, m_isNeuterable(true)
		, m_buffer(buffer)
	{
    m_baseAddress = m_buffer ? (static_cast<char*>(m_buffer->data()) + m_byteOffset) : 0;
	}


	ArrayBufferView::~ArrayBufferView()
	{
    if (!m_isNeuterable)
			m_buffer->unpin();
	}


	void ArrayBufferView::setNeuterable(bool flag)
	{
    if (flag == m_isNeuterable)
			return;

    m_isNeuterable = flag;

    if (!m_buffer)
			return;

    if (flag)
			m_buffer->unpin();
    else
			m_buffer->pin();
	}

  namespace Bindings {
    void RootObject::invalidate() { notImplemented(); }
    void RootObject::updateGlobalObject(JSC::JSGlobalObject* arg) { notImplemented(); }
  }
  void HandleSet::grow() {}

  void HandleSet::writeBarrier(JSC::JSValue*, JSC::JSValue const&) { notImplemented(); }
  void Heap::reportExtraMemoryCostSlowCase(unsigned int) { notImplemented(); }

  ExecState* JSGlobalObject::globalExec() { notImplemented(); return NULL; }

  void *MarkedAllocator::allocateSlowCase(unsigned int) { notImplemented(); return NULL; }

  SourceProvider::SourceProvider(WTF::String const& a, WTF::TextPosition const& b) { notImplemented(); }
  SourceProvider::~SourceProvider() { notImplemented(); }

  namespace Yarr {
    YarrPattern::YarrPattern(WTF::String const& a, bool b, bool c, char const** d) { notImplemented(); }
    PassOwnPtr<JSC::Yarr::BytecodePattern> byteCompile(YarrPattern& a, WTF::BumpPointerAllocator* b) { notImplemented(); return nullptr; }
    unsigned interpret(BytecodePattern* a, WTF::String const& b, unsigned int c, unsigned int* d) { notImplemented(); return 0; }
  }
  void evaluate(JSC::ExecState* a, JSC::SourceCode const& b, JSC::JSValue c, JSC::JSValue* d) { notImplemented(); }
  void weakClearSlowCase(JSC::WeakImpl*&) { notImplemented(); }
	
}
