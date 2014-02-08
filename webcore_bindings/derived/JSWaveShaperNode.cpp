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

#include "config.h"

#if ENABLE(WEB_AUDIO)

#include "JSWaveShaperNode.h"

#include "WaveShaperNode.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSWaveShaperNodeTableValues[] =
{
    { "curve", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsWaveShaperNodeCurve), (intptr_t)setJSWaveShaperNodeCurve },
    { "oversample", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsWaveShaperNodeOversample), (intptr_t)setJSWaveShaperNodeOversample },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsWaveShaperNodeConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSWaveShaperNodeTable = { 9, 7, JSWaveShaperNodeTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSWaveShaperNodeConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSWaveShaperNodeConstructorTable = { 1, 0, JSWaveShaperNodeConstructorTableValues, 0 };
const ClassInfo JSWaveShaperNodeConstructor::s_info = { "WaveShaperNodeConstructor", &Base::s_info, &JSWaveShaperNodeConstructorTable, 0, CREATE_METHOD_TABLE(JSWaveShaperNodeConstructor) };

JSWaveShaperNodeConstructor::JSWaveShaperNodeConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSWaveShaperNodeConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSWaveShaperNodePrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSWaveShaperNodeConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSWaveShaperNodeConstructor, JSDOMWrapper>(exec, JSWaveShaperNodeConstructorTable, jsCast<JSWaveShaperNodeConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSWaveShaperNodePrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSWaveShaperNodePrototypeTable = { 1, 0, JSWaveShaperNodePrototypeTableValues, 0 };
const ClassInfo JSWaveShaperNodePrototype::s_info = { "WaveShaperNodePrototype", &Base::s_info, &JSWaveShaperNodePrototypeTable, 0, CREATE_METHOD_TABLE(JSWaveShaperNodePrototype) };

JSObject* JSWaveShaperNodePrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSWaveShaperNode>(vm, globalObject);
}

const ClassInfo JSWaveShaperNode::s_info = { "WaveShaperNode", &Base::s_info, &JSWaveShaperNodeTable, 0 , CREATE_METHOD_TABLE(JSWaveShaperNode) };

JSWaveShaperNode::JSWaveShaperNode(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<WaveShaperNode> impl)
    : JSAudioNode(structure, globalObject, impl)
{
}

void JSWaveShaperNode::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSWaveShaperNode::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSWaveShaperNodePrototype::create(vm, globalObject, JSWaveShaperNodePrototype::createStructure(vm, globalObject, JSAudioNodePrototype::self(vm, globalObject)));
}

bool JSWaveShaperNode::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSWaveShaperNode* thisObject = jsCast<JSWaveShaperNode*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSWaveShaperNode, Base>(exec, JSWaveShaperNodeTable, thisObject, propertyName, slot);
}

EncodedJSValue jsWaveShaperNodeCurve(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSWaveShaperNode* castedThis = jsDynamicCast<JSWaveShaperNode*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    WaveShaperNode& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.curve()));
    return JSValue::encode(result);
}


EncodedJSValue jsWaveShaperNodeOversample(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSWaveShaperNode* castedThis = jsDynamicCast<JSWaveShaperNode*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    WaveShaperNode& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.oversample());
    return JSValue::encode(result);
}


EncodedJSValue jsWaveShaperNodeConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSWaveShaperNode* domObject = jsDynamicCast<JSWaveShaperNode*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSWaveShaperNode::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSWaveShaperNode::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSWaveShaperNode* thisObject = jsCast<JSWaveShaperNode*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSWaveShaperNode, Base>(exec, propertyName, value, JSWaveShaperNodeTable, thisObject, slot);
}

void setJSWaveShaperNodeCurve(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSWaveShaperNode* castedThis = jsDynamicCast<JSWaveShaperNode*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    WaveShaperNode& impl = castedThis->impl();
    RefPtr<Float32Array> nativeValue(toFloat32Array(value));
    if (exec->hadException())
        return;
    impl.setCurve(nativeValue.get());
}


void setJSWaveShaperNodeOversample(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSWaveShaperNode* castedThis = jsDynamicCast<JSWaveShaperNode*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    WaveShaperNode& impl = castedThis->impl();
    ExceptionCode ec = 0;
    const String nativeValue(value.isEmpty() ? String() : value.toString(exec)->value(exec));
    if (exec->hadException())
        return;
    if (nativeValue != "none" && nativeValue != "2x" && nativeValue != "4x")
        return;
    impl.setOversample(nativeValue, ec);
    setDOMException(exec, ec);
}


JSValue JSWaveShaperNode::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSWaveShaperNodeConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7WaveShaperNode@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore14WaveShaperNodeE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, WaveShaperNode* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSWaveShaperNode>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7WaveShaperNode@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore14WaveShaperNodeE[2];
#if COMPILER(CLANG)
    // If this fails WaveShaperNode does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(WaveShaperNode), WaveShaperNode_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // WaveShaperNode has subclasses. If WaveShaperNode has subclasses that get passed
    // to toJS() we currently require WaveShaperNode you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<WaveShaperNode>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSWaveShaperNode>(exec, globalObject, impl);
}


}

#endif // ENABLE(WEB_AUDIO)