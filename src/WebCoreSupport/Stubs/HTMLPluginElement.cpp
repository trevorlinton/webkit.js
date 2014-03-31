// #pragma GCC diagnostic ignored "-Wreturn-type"

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

void errorOutIfUsed() {
	fprintf(stderr, "Call to unused method\n");
	abort();
}

namespace WebCore {
	RenderPtr<RenderElement> HTMLPlugInElement::createElementRenderer(PassRef<RenderStyle> style) { errorOutIfUsed(); return nullptr; }
void HTMLPlugInElement::defaultEventHandler(Event* event) { errorOutIfUsed(); }
void HTMLPlugInElement::didAddUserAgentShadowRoot(ShadowRoot* root) { errorOutIfUsed(); }
	bool HTMLPlugInElement::requestObject(const String& url, const String& mimeType, const Vector<String>& paramNames, const Vector<String>& paramValues) { errorOutIfUsed(); return false; }
void HTMLPlugInElement::setDisplayState(DisplayState state) { errorOutIfUsed(); }
void HTMLPlugInElement::swapRendererTimerFired(Timer<HTMLPlugInElement>*) { errorOutIfUsed(); }
void HTMLPlugInElement::willDetachRenderers() { errorOutIfUsed(); }
WebCore::HTMLPlugInElement::HTMLPlugInElement(WebCore::QualifiedName const& a, WebCore::Document& b)
: HTMLFrameOwnerElement(a, b)
, m_inBeforeLoadEventHandler(false)
, m_swapRendererTimer(this, &HTMLPlugInElement::swapRendererTimerFired)
, m_isCapturingMouseEvents(false)
, m_displayState(Playing)
{ errorOutIfUsed(); }
WebCore::HTMLPlugInElement::~HTMLPlugInElement() { errorOutIfUsed(); }
void HTMLPlugInElement::collectStyleForPresentationAttribute(WebCore::QualifiedName const& a, WTF::AtomicString const& b, WebCore::MutableStyleProperties& c) { errorOutIfUsed(); }
	bool HTMLPlugInElement::guardedDispatchBeforeLoadEvent(WTF::String const&) { errorOutIfUsed(); return false; }
	bool HTMLPlugInElement::isKeyboardFocusable(WebCore::KeyboardEvent*) const { errorOutIfUsed(); return false; }
	bool HTMLPlugInElement::isPluginElement() const { errorOutIfUsed(); return false; }
	bool HTMLPlugInElement::isPresentationAttribute(WebCore::QualifiedName const&) const { errorOutIfUsed(); return false; }
	bool HTMLPlugInElement::supportsFocus() const { errorOutIfUsed(); return false; }
	bool HTMLPlugInElement::willRespondToMouseClickEvents() { errorOutIfUsed(); return false;}

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
	errorOutIfUsed();
}
void HTMLPlugInImageElement::removeSnapshotTimerFired(Timer<HTMLPlugInImageElement>*) { errorOutIfUsed(); }
void HTMLPlugInImageElement::simulatedMouseClickTimerFired(DeferrableOneShotTimer<HTMLPlugInImageElement>*) { errorOutIfUsed(); }
	bool HTMLPlugInImageElement::allowedToLoadFrameURL(WTF::String const&) { errorOutIfUsed(); return false; }
void HTMLPlugInImageElement::checkSnapshotStatus() { errorOutIfUsed(); }
	RenderPtr<RenderElement> HTMLPlugInImageElement::createElementRenderer(WTF::PassRef<WebCore::RenderStyle>) { errorOutIfUsed(); return nullptr; }
void HTMLPlugInImageElement::defaultEventHandler(WebCore::Event*) { errorOutIfUsed(); }
void HTMLPlugInImageElement::didAddUserAgentShadowRoot(WebCore::ShadowRoot*) { errorOutIfUsed(); }
void HTMLPlugInImageElement::didAttachRenderers() { errorOutIfUsed(); }
void HTMLPlugInImageElement::didMoveToNewDocument(WebCore::Document*) { errorOutIfUsed(); }
void HTMLPlugInImageElement::dispatchPendingMouseClick() { errorOutIfUsed(); }
void HTMLPlugInImageElement::documentDidResumeFromPageCache() { errorOutIfUsed(); }
void HTMLPlugInImageElement::documentWillSuspendForPageCache() { errorOutIfUsed(); }
void HTMLPlugInImageElement::finishParsingChildren() { errorOutIfUsed(); }
	bool HTMLPlugInImageElement::isImageType() { errorOutIfUsed(); return false; }
	RenderEmbeddedObject* HTMLPlugInImageElement::renderEmbeddedObject() const { errorOutIfUsed(); return NULL; }
	bool HTMLPlugInImageElement::requestObject(WTF::String const&, WTF::String const&, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&) { errorOutIfUsed(); return false; }
void HTMLPlugInImageElement::setDisplayState(HTMLPlugInElement::DisplayState) { errorOutIfUsed(); }
void HTMLPlugInImageElement::updateSnapshot(WTF::PassRefPtr<WebCore::Image>) { errorOutIfUsed(); }
void HTMLPlugInImageElement::willDetachRenderers() { errorOutIfUsed(); }
	bool HTMLPlugInImageElement::willRecalcStyle(WebCore::Style::Change) { errorOutIfUsed(); return false; }
	bool HTMLPlugInImageElement::wouldLoadAsNetscapePlugin(WTF::String const&, WTF::String const&) { errorOutIfUsed(); return false; }
HTMLPlugInImageElement::~HTMLPlugInImageElement() { errorOutIfUsed(); }
}
