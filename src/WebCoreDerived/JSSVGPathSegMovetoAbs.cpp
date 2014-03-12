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

#if ENABLE(SVG)

#include "JSSVGPathSegMovetoAbs.h"

#include "SVGPathSegMovetoAbs.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGPathSegMovetoAbsTableValues[] =
{
    { "x", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegMovetoAbsX), (intptr_t)setJSSVGPathSegMovetoAbsX },
    { "y", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegMovetoAbsY), (intptr_t)setJSSVGPathSegMovetoAbsY },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegMovetoAbsConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegMovetoAbsTable = { 9, 7, JSSVGPathSegMovetoAbsTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGPathSegMovetoAbsConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegMovetoAbsConstructorTable = { 1, 0, JSSVGPathSegMovetoAbsConstructorTableValues, 0 };
const ClassInfo JSSVGPathSegMovetoAbsConstructor::s_info = { "SVGPathSegMovetoAbsConstructor", &Base::s_info, &JSSVGPathSegMovetoAbsConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGPathSegMovetoAbsConstructor) };

JSSVGPathSegMovetoAbsConstructor::JSSVGPathSegMovetoAbsConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGPathSegMovetoAbsConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGPathSegMovetoAbsPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGPathSegMovetoAbsConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGPathSegMovetoAbsConstructor, JSDOMWrapper>(exec, JSSVGPathSegMovetoAbsConstructorTable, jsCast<JSSVGPathSegMovetoAbsConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGPathSegMovetoAbsPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegMovetoAbsPrototypeTable = { 1, 0, JSSVGPathSegMovetoAbsPrototypeTableValues, 0 };
const ClassInfo JSSVGPathSegMovetoAbsPrototype::s_info = { "SVGPathSegMovetoAbsPrototype", &Base::s_info, &JSSVGPathSegMovetoAbsPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGPathSegMovetoAbsPrototype) };

JSObject* JSSVGPathSegMovetoAbsPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGPathSegMovetoAbs>(vm, globalObject);
}

const ClassInfo JSSVGPathSegMovetoAbs::s_info = { "SVGPathSegMovetoAbs", &Base::s_info, &JSSVGPathSegMovetoAbsTable, 0 , CREATE_METHOD_TABLE(JSSVGPathSegMovetoAbs) };

JSSVGPathSegMovetoAbs::JSSVGPathSegMovetoAbs(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGPathSegMovetoAbs> impl)
    : JSSVGPathSeg(structure, globalObject, impl)
{
}

void JSSVGPathSegMovetoAbs::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGPathSegMovetoAbs::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGPathSegMovetoAbsPrototype::create(vm, globalObject, JSSVGPathSegMovetoAbsPrototype::createStructure(vm, globalObject, JSSVGPathSegPrototype::self(vm, globalObject)));
}

bool JSSVGPathSegMovetoAbs::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGPathSegMovetoAbs* thisObject = jsCast<JSSVGPathSegMovetoAbs*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGPathSegMovetoAbs, Base>(exec, JSSVGPathSegMovetoAbsTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSVGPathSegMovetoAbsX(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGPathSegMovetoAbs* castedThis = jsDynamicCast<JSSVGPathSegMovetoAbs*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGPathSegMovetoAbs& impl = castedThis->impl();
    JSValue result = jsNumber(impl.x());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGPathSegMovetoAbsY(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGPathSegMovetoAbs* castedThis = jsDynamicCast<JSSVGPathSegMovetoAbs*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGPathSegMovetoAbs& impl = castedThis->impl();
    JSValue result = jsNumber(impl.y());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGPathSegMovetoAbsConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGPathSegMovetoAbs* domObject = jsDynamicCast<JSSVGPathSegMovetoAbs*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGPathSegMovetoAbs::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSSVGPathSegMovetoAbs::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSSVGPathSegMovetoAbs* thisObject = jsCast<JSSVGPathSegMovetoAbs*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSSVGPathSegMovetoAbs, Base>(exec, propertyName, value, JSSVGPathSegMovetoAbsTable, thisObject, slot);
}

void setJSSVGPathSegMovetoAbsX(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGPathSegMovetoAbs* castedThis = jsDynamicCast<JSSVGPathSegMovetoAbs*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGPathSegMovetoAbs& impl = castedThis->impl();
    float nativeValue(value.toFloat(exec));
    if (exec->hadException())
        return;
    impl.setX(nativeValue);
}


void setJSSVGPathSegMovetoAbsY(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGPathSegMovetoAbs* castedThis = jsDynamicCast<JSSVGPathSegMovetoAbs*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGPathSegMovetoAbs& impl = castedThis->impl();
    float nativeValue(value.toFloat(exec));
    if (exec->hadException())
        return;
    impl.setY(nativeValue);
}


JSValue JSSVGPathSegMovetoAbs::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGPathSegMovetoAbsConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)