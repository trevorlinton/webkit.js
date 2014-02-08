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

#include "JSSVGTRefElement.h"

#include "SVGTRefElement.h"
#include <wtf/GetPtr.h>

#if ENABLE(SVG)
#include "JSSVGAnimatedString.h"
#endif

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGTRefElementTableValues[] =
{
#if ENABLE(SVG)
    { "href", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGTRefElementHref), (intptr_t)0 },
#endif
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGTRefElementConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGTRefElementTable = { 4, 3, JSSVGTRefElementTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGTRefElementConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGTRefElementConstructorTable = { 1, 0, JSSVGTRefElementConstructorTableValues, 0 };
const ClassInfo JSSVGTRefElementConstructor::s_info = { "SVGTRefElementConstructor", &Base::s_info, &JSSVGTRefElementConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGTRefElementConstructor) };

JSSVGTRefElementConstructor::JSSVGTRefElementConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGTRefElementConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGTRefElementPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGTRefElementConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGTRefElementConstructor, JSDOMWrapper>(exec, JSSVGTRefElementConstructorTable, jsCast<JSSVGTRefElementConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGTRefElementPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGTRefElementPrototypeTable = { 1, 0, JSSVGTRefElementPrototypeTableValues, 0 };
const ClassInfo JSSVGTRefElementPrototype::s_info = { "SVGTRefElementPrototype", &Base::s_info, &JSSVGTRefElementPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGTRefElementPrototype) };

JSObject* JSSVGTRefElementPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGTRefElement>(vm, globalObject);
}

const ClassInfo JSSVGTRefElement::s_info = { "SVGTRefElement", &Base::s_info, &JSSVGTRefElementTable, 0 , CREATE_METHOD_TABLE(JSSVGTRefElement) };

JSSVGTRefElement::JSSVGTRefElement(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGTRefElement> impl)
    : JSSVGTextPositioningElement(structure, globalObject, impl)
{
}

void JSSVGTRefElement::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGTRefElement::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGTRefElementPrototype::create(vm, globalObject, JSSVGTRefElementPrototype::createStructure(vm, globalObject, JSSVGTextPositioningElementPrototype::self(vm, globalObject)));
}

bool JSSVGTRefElement::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGTRefElement* thisObject = jsCast<JSSVGTRefElement*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGTRefElement, Base>(exec, JSSVGTRefElementTable, thisObject, propertyName, slot);
}

#if ENABLE(SVG)
EncodedJSValue jsSVGTRefElementHref(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGTRefElement* castedThis = jsDynamicCast<JSSVGTRefElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGTRefElement& impl = castedThis->impl();
    RefPtr<SVGAnimatedString> obj = impl.hrefAnimated();
    JSValue result =  toJS(exec, castedThis->globalObject(), obj.get());
    return JSValue::encode(result);
}

#endif

EncodedJSValue jsSVGTRefElementConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGTRefElement* domObject = jsDynamicCast<JSSVGTRefElement*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGTRefElement::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSSVGTRefElement::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGTRefElementConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)