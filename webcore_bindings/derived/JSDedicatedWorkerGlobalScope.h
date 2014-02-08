/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#ifndef JSDedicatedWorkerGlobalScope_h
#define JSDedicatedWorkerGlobalScope_h

#include "DedicatedWorkerGlobalScope.h"
#include "JSDOMBinding.h"
#include "JSWorkerGlobalScope.h"
#include <runtime/JSObject.h>

namespace WebCore {

class DedicatedWorkerGlobalScope;

class JSDedicatedWorkerGlobalScope : public JSWorkerGlobalScope {
public:
    typedef JSWorkerGlobalScope Base;
    static JSDedicatedWorkerGlobalScope* create(JSC::VM& vm, JSC::Structure* structure, PassRefPtr<DedicatedWorkerGlobalScope> impl)
    {
        JSDedicatedWorkerGlobalScope* ptr = new (NotNull, JSC::allocateCell<JSDedicatedWorkerGlobalScope>(vm.heap)) JSDedicatedWorkerGlobalScope(vm, structure, impl);
        ptr->finishCreation(vm);
        vm.heap.addFinalizer(ptr, destroy);
        return ptr;
    }

    static const bool needsDestruction = false;

    static bool getOwnPropertySlot(JSC::JSObject*, JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&);
    static void put(JSC::JSCell*, JSC::ExecState*, JSC::PropertyName, JSC::JSValue, JSC::PutPropertySlot&);
    DECLARE_INFO;

    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::GlobalObjectType, StructureFlags), info());
    }

    static JSC::JSValue getConstructor(JSC::VM&, JSC::JSGlobalObject*);

    // Custom functions
    JSC::JSValue postMessage(JSC::ExecState*);
    DedicatedWorkerGlobalScope& impl() const
    {
        return static_cast<DedicatedWorkerGlobalScope&>(Base::impl());
    }
protected:
    JSDedicatedWorkerGlobalScope(JSC::VM&, JSC::Structure*, PassRefPtr<DedicatedWorkerGlobalScope>);
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | JSC::InterceptsGetOwnPropertySlotByIndexEvenWhenLengthIsNotZero | Base::StructureFlags;
};

DedicatedWorkerGlobalScope* toDedicatedWorkerGlobalScope(JSC::JSValue);

class JSDedicatedWorkerGlobalScopePrototype : public JSC::JSNonFinalObject {
public:
    typedef JSC::JSNonFinalObject Base;
    static JSDedicatedWorkerGlobalScopePrototype* create(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::Structure* structure)
    {
        JSDedicatedWorkerGlobalScopePrototype* ptr = new (NotNull, JSC::allocateCell<JSDedicatedWorkerGlobalScopePrototype>(vm.heap)) JSDedicatedWorkerGlobalScopePrototype(vm, globalObject, structure);
        ptr->finishCreation(vm);
        return ptr;
    }

    DECLARE_INFO;
    static bool getOwnPropertySlot(JSC::JSObject*, JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&);
    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info());
    }

private:
    JSDedicatedWorkerGlobalScopePrototype(JSC::VM& vm, JSC::JSGlobalObject*, JSC::Structure* structure) : JSC::JSNonFinalObject(vm, structure) { }
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | Base::StructureFlags;
};

class JSDedicatedWorkerGlobalScopeConstructor : public DOMConstructorObject {
private:
    JSDedicatedWorkerGlobalScopeConstructor(JSC::Structure*, JSDOMGlobalObject*);
    void finishCreation(JSC::VM&, JSDOMGlobalObject*);

public:
    typedef DOMConstructorObject Base;
    static JSDedicatedWorkerGlobalScopeConstructor* create(JSC::VM& vm, JSC::Structure* structure, JSDOMGlobalObject* globalObject)
    {
        JSDedicatedWorkerGlobalScopeConstructor* ptr = new (NotNull, JSC::allocateCell<JSDedicatedWorkerGlobalScopeConstructor>(vm.heap)) JSDedicatedWorkerGlobalScopeConstructor(structure, globalObject);
        ptr->finishCreation(vm, globalObject);
        return ptr;
    }

    static bool getOwnPropertySlot(JSC::JSObject*, JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&);
    DECLARE_INFO;
    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info());
    }
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | JSC::ImplementsHasInstance | DOMConstructorObject::StructureFlags;
};

// Functions

JSC::EncodedJSValue JSC_HOST_CALL jsDedicatedWorkerGlobalScopePrototypeFunctionPostMessage(JSC::ExecState*);
// Attributes

JSC::EncodedJSValue jsDedicatedWorkerGlobalScopeOnmessage(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
void setJSDedicatedWorkerGlobalScopeOnmessage(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue);
JSC::EncodedJSValue jsDedicatedWorkerGlobalScopeDedicatedWorkerGlobalScopeConstructor(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
void setJSDedicatedWorkerGlobalScopeDedicatedWorkerGlobalScopeConstructor(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue);
JSC::EncodedJSValue jsDedicatedWorkerGlobalScopeConstructor(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);

} // namespace WebCore

#endif