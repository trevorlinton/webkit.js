/*
 *  Copyright (C) 1999-2001 Harri Porten (porten@kde.org)
 *  Copyright (C) 2001 Peter Kelly (pmk@post.com)
 *  Copyright (C) 2006, 2007, 2008 Apple Inc. All rights reserved.
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

#include "config.h"
#include "ScriptController.h"

#include "BridgeJSC.h"
#include "ContentSecurityPolicy.h"
#include "DocumentLoader.h"
#include "Event.h"
#include "EventNames.h"
#include "Frame.h"
#include "FrameLoaderClient.h"
#include "GCController.h"
#include "InspectorInstrumentation.h"
#include "JSDOMWindow.h"
#include "JSDocument.h"
// #include "JSMainThreadExecState.h"
#include "NP_jsobject.h"
#include "Page.h"
#include "PageGroup.h"
#include "ScriptCallStack.h"
#include "ScriptSourceCode.h"
#include "ScriptableDocumentParser.h"
#include "Settings.h"
#include "StorageNamespace.h"
#include "UserGestureIndicator.h"
#include "WebCoreJSClientData.h"
#include "npruntime_impl.h"
#include "runtime_root.h"
#include <bindings/ScriptValue.h>
#include <debugger/Debugger.h>
#include <heap/StrongInlines.h>
#include <runtime/InitializeThreading.h>
#include <runtime/JSLock.h>
#include <wtf/Threading.h>
#include <wtf/text/TextPosition.h>

#include "DebuggerJS.h"

// #pragma GCC diagnostic ignored "-Wreturn-type"

using namespace JSC;

namespace WebCore {

void ScriptController::initializeThreading()
{
  JSC::initializeThreading();
  WTF::initializeMainThread();
}

ScriptController::ScriptController(Frame& frame)
    : m_frame(frame)
    , m_sourceURL(0)
    , m_paused(false)
{
}

ScriptController::~ScriptController()
{
}

bool ScriptController::canExecuteScripts(ReasonForCallingCanExecuteScripts reason) {
  notImplemented();
  return false;
}

void ScriptController::updateDocument() {
  // TODO, What should we do here?
  notImplemented();
}
void ScriptController::updatePlatformScriptObjects() {
  // TODO, What should we do here?
  notImplemented();
}

void ScriptController::destroyWindowShell(DOMWrapperWorld& world) { notImplemented(); }

JSDOMWindowShell* ScriptController::createWindowShell(DOMWrapperWorld& world) { notImplemented(); return NULL; }

Deprecated::ScriptValue ScriptController::evaluateInWorld(const ScriptSourceCode& sourceCode, DOMWrapperWorld& world) { notImplemented(); return Deprecated::ScriptValue(); }

Deprecated::ScriptValue ScriptController::evaluate(const ScriptSourceCode& sourceCode) { notImplemented();  return Deprecated::ScriptValue(); }

PassRefPtr<DOMWrapperWorld> ScriptController::createWorld() { notImplemented(); return nullptr; }

void ScriptController::getAllWorlds(Vector<Ref<DOMWrapperWorld>>& worlds) { notImplemented(); }

void ScriptController::clearWindowShell(DOMWindow* newDOMWindow, bool goingIntoPageCache) { notImplemented(); }

JSDOMWindowShell* ScriptController::initScript(DOMWrapperWorld& world) { notImplemented(); return NULL; }

TextPosition ScriptController::eventHandlerPosition() const { notImplemented(); return TextPosition(); }

void ScriptController::enableEval() { notImplemented(); }

void ScriptController::disableEval(const String& errorMessage) { notImplemented(); }

	bool ScriptController::processingUserGesture() { notImplemented(); return false; }

bool ScriptController::canAccessFromCurrentOrigin(Frame *frame) { notImplemented(); return false; }

void ScriptController::attachDebugger(JSC::Debugger* debugger) { notImplemented(); }

void ScriptController::attachDebugger(JSDOMWindowShell* shell, JSC::Debugger* debugger) { notImplemented(); }


Bindings::RootObject* ScriptController::cacheableBindingRootObject() { notImplemented(); return NULL; }

Bindings::RootObject* ScriptController::bindingRootObject() { notImplemented(); return NULL; }

PassRefPtr<Bindings::RootObject> ScriptController::createRootObject(void* nativeHandle) { notImplemented(); return nullptr; }

#if 0
void ScriptController::setCaptureCallStackForUncaughtExceptions(bool) { notImplemented(); }

void ScriptController::collectIsolatedContexts(Vector<std::pair<JSC::ExecState*, SecurityOrigin*>>& result) { notImplemented(); }
#endif

PassRefPtr<JSC::Bindings::Instance> ScriptController::createScriptInstanceForWidget(Widget* widget) { notImplemented(); return nullptr; }


void ScriptController::disconnectPlatformScriptObjects() { notImplemented(); }

void ScriptController::cleanupScriptObjectsForPlugin(void* nativeHandle) { notImplemented(); }

void ScriptController::clearScriptObjects() { notImplemented(); }

Deprecated::ScriptValue ScriptController::executeScriptInWorld(DOMWrapperWorld& world, const String& script, bool forceUserGesture)  { notImplemented(); return Deprecated::ScriptValue(); }

bool ScriptController::shouldBypassMainWorldContentSecurityPolicy() {
  notImplemented();
  return true;
}

Deprecated::ScriptValue ScriptController::executeScript(const String& script, bool forceUserGesture) { notImplemented(); return Deprecated::ScriptValue(); }

Deprecated::ScriptValue ScriptController::executeScript(const ScriptSourceCode& sourceCode) { notImplemented();return Deprecated::ScriptValue(); }

	bool ScriptController::executeIfJavaScriptURL(const URL& url, ShouldReplaceDocumentIfJavaScriptURL shouldReplaceDocumentIfJavaScriptURL) { notImplemented(); return false;}

} // namespace WebCore
