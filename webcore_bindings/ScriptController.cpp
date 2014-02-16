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
#include "JSMainThreadExecState.h"
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

#include "NotImplemented.h"

#pragma GCC diagnostic ignored "-Wreturn-type"

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

void ScriptController::destroyWindowShell(DOMWrapperWorld& world) { notImplemented(); }

JSDOMWindowShell* ScriptController::createWindowShell(DOMWrapperWorld& world) { notImplemented(); }

Deprecated::ScriptValue ScriptController::evaluateInWorld(const ScriptSourceCode& sourceCode, DOMWrapperWorld& world) { notImplemented(); }

Deprecated::ScriptValue ScriptController::evaluate(const ScriptSourceCode& sourceCode) { notImplemented(); }

PassRefPtr<DOMWrapperWorld> ScriptController::createWorld() { notImplemented(); }

void ScriptController::getAllWorlds(Vector<Ref<DOMWrapperWorld>>& worlds) { notImplemented(); }

void ScriptController::clearWindowShell(DOMWindow* newDOMWindow, bool goingIntoPageCache) { notImplemented(); }

JSDOMWindowShell* ScriptController::initScript(DOMWrapperWorld& world) { notImplemented(); }

TextPosition ScriptController::eventHandlerPosition() const { notImplemented(); }

void ScriptController::enableEval() { notImplemented(); }

void ScriptController::disableEval(const String& errorMessage) { notImplemented(); }

bool ScriptController::processingUserGesture() { notImplemented(); }

bool ScriptController::canAccessFromCurrentOrigin(Frame *frame) { notImplemented(); }

void ScriptController::attachDebugger(JSC::Debugger* debugger) { notImplemented(); }

void ScriptController::attachDebugger(JSDOMWindowShell* shell, JSC::Debugger* debugger) { notImplemented(); }

void ScriptController::updateDocument() { notImplemented(); }

Bindings::RootObject* ScriptController::cacheableBindingRootObject() { notImplemented(); }

Bindings::RootObject* ScriptController::bindingRootObject() { notImplemented(); }

PassRefPtr<Bindings::RootObject> ScriptController::createRootObject(void* nativeHandle) { notImplemented(); }

#if 0
void ScriptController::setCaptureCallStackForUncaughtExceptions(bool) { notImplemented(); }

void ScriptController::collectIsolatedContexts(Vector<std::pair<JSC::ExecState*, SecurityOrigin*>>& result) { notImplemented(); }
#endif

PassRefPtr<JSC::Bindings::Instance> ScriptController::createScriptInstanceForWidget(Widget* widget) { notImplemented(); }

void ScriptController::updatePlatformScriptObjects() { notImplemented(); }

void ScriptController::disconnectPlatformScriptObjects() { notImplemented(); }

  void ScriptController::cleanupScriptObjectsForPlugin(void* nativeHandle) { notImplemented(); }

void ScriptController::clearScriptObjects() { notImplemented(); }

Deprecated::ScriptValue ScriptController::executeScriptInWorld(DOMWrapperWorld& world, const String& script, bool forceUserGesture)  { notImplemented(); }

bool ScriptController::shouldBypassMainWorldContentSecurityPolicy() { notImplemented(); }

bool ScriptController::canExecuteScripts(ReasonForCallingCanExecuteScripts reason) { notImplemented(); }

Deprecated::ScriptValue ScriptController::executeScript(const String& script, bool forceUserGesture) { notImplemented(); }

Deprecated::ScriptValue ScriptController::executeScript(const ScriptSourceCode& sourceCode) { notImplemented(); }

bool ScriptController::executeIfJavaScriptURL(const URL& url, ShouldReplaceDocumentIfJavaScriptURL shouldReplaceDocumentIfJavaScriptURL) { notImplemented(); }

} // namespace WebCore
