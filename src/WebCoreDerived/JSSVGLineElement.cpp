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

#include "JSSVGLineElement.h"

#include "JSSVGAnimatedLength.h"
#include "SVGLineElement.h"
#include <wtf/GetPtr.h>

#if ENABLE(SVG)
#include "JSSVGAnimatedBoolean.h"
#endif

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGLineElementTableValues[] =
{
    { "x1", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGLineElementX1), (intptr_t)0 },
    { "y1", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGLineElementY1), (intptr_t)0 },
    { "x2", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGLineElementX2), (intptr_t)0 },
    { "y2", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGLineElementY2), (intptr_t)0 },
#if ENABLE(SVG)
    { "externalResourcesRequired", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGLineElementExternalResourcesRequired), (intptr_t)0 },
#endif
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGLineElementConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGLineElementTable = { 16, 15, JSSVGLineElementTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGLineElementConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGLineElementConstructorTable = { 1, 0, JSSVGLineElementConstructorTableValues, 0 };
const ClassInfo JSSVGLineElementConstructor::s_info = { "SVGLineElementConstructor", &Base::s_info, &JSSVGLineElementConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGLineElementConstructor) };

JSSVGLineElementConstructor::JSSVGLineElementConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGLineElementConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGLineElementPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGLineElementConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGLineElementConstructor, JSDOMWrapper>(exec, JSSVGLineElementConstructorTable, jsCast<JSSVGLineElementConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGLineElementPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGLineElementPrototypeTable = { 1, 0, JSSVGLineElementPrototypeTableValues, 0 };
const ClassInfo JSSVGLineElementPrototype::s_info = { "SVGLineElementPrototype", &Base::s_info, &JSSVGLineElementPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGLineElementPrototype) };

JSObject* JSSVGLineElementPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGLineElement>(vm, globalObject);
}

const ClassInfo JSSVGLineElement::s_info = { "SVGLineElement", &Base::s_info, &JSSVGLineElementTable, 0 , CREATE_METHOD_TABLE(JSSVGLineElement) };

JSSVGLineElement::JSSVGLineElement(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGLineElement> impl)
    : JSSVGGraphicsElement(structure, globalObject, impl)
{
}

void JSSVGLineElement::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGLineElement::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGLineElementPrototype::create(vm, globalObject, JSSVGLineElementPrototype::createStructure(vm, globalObject, JSSVGGraphicsElementPrototype::self(vm, globalObject)));
}

bool JSSVGLineElement::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGLineElement* thisObject = jsCast<JSSVGLineElement*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGLineElement, Base>(exec, JSSVGLineElementTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSVGLineElementX1(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGLineElement* castedThis = jsDynamicCast<JSSVGLineElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGLineElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedLength> obj = impl.x1Animated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGLineElementY1(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGLineElement* castedThis = jsDynamicCast<JSSVGLineElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGLineElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedLength> obj = impl.y1Animated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGLineElementX2(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGLineElement* castedThis = jsDynamicCast<JSSVGLineElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGLineElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedLength> obj = impl.x2Animated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGLineElementY2(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGLineElement* castedThis = jsDynamicCast<JSSVGLineElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGLineElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedLength> obj = impl.y2Animated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}


#if ENABLE(SVG)
EncodedJSValue jsSVGLineElementExternalResourcesRequired(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGLineElement* castedThis = jsDynamicCast<JSSVGLineElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGLineElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedBoolean> obj = impl.externalResourcesRequiredAnimated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}

#endif

EncodedJSValue jsSVGLineElementConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGLineElement* domObject = jsDynamicCast<JSSVGLineElement*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGLineElement::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSSVGLineElement::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGLineElementConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)