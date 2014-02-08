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

#if ENABLE(MEDIA_STREAM)

#include "JSRTCStatsReport.h"

#include "ExceptionCode.h"
#include "JSDOMBinding.h"
#include "JSRTCStatsReport.h"
#include "RTCStatsReport.h"
#include "URL.h"
#include <runtime/Error.h>
#include <runtime/JSArray.h>
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSRTCStatsReportTableValues[] =
{
    { "timestamp", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsRTCStatsReportTimestamp), (intptr_t)0 },
    { "id", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsRTCStatsReportId), (intptr_t)0 },
    { "type", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsRTCStatsReportType), (intptr_t)0 },
    { "local", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsRTCStatsReportLocal), (intptr_t)0 },
    { "remote", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsRTCStatsReportRemote), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSRTCStatsReportTable = { 17, 15, JSRTCStatsReportTableValues, 0 };
/* Hash table for prototype */

static const HashTableValue JSRTCStatsReportPrototypeTableValues[] =
{
    { "stat", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsRTCStatsReportPrototypeFunctionStat), (intptr_t)1 },
    { "names", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsRTCStatsReportPrototypeFunctionNames), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSRTCStatsReportPrototypeTable = { 4, 3, JSRTCStatsReportPrototypeTableValues, 0 };
const ClassInfo JSRTCStatsReportPrototype::s_info = { "RTCStatsReportPrototype", &Base::s_info, &JSRTCStatsReportPrototypeTable, 0, CREATE_METHOD_TABLE(JSRTCStatsReportPrototype) };

JSObject* JSRTCStatsReportPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSRTCStatsReport>(vm, globalObject);
}

bool JSRTCStatsReportPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSRTCStatsReportPrototype* thisObject = jsCast<JSRTCStatsReportPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSRTCStatsReportPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSRTCStatsReport::s_info = { "RTCStatsReport", &Base::s_info, &JSRTCStatsReportTable, 0 , CREATE_METHOD_TABLE(JSRTCStatsReport) };

JSRTCStatsReport::JSRTCStatsReport(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<RTCStatsReport> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSRTCStatsReport::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSRTCStatsReport::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSRTCStatsReportPrototype::create(vm, globalObject, JSRTCStatsReportPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSRTCStatsReport::destroy(JSC::JSCell* cell)
{
    JSRTCStatsReport* thisObject = static_cast<JSRTCStatsReport*>(cell);
    thisObject->JSRTCStatsReport::~JSRTCStatsReport();
}

JSRTCStatsReport::~JSRTCStatsReport()
{
    releaseImplIfNotNull();
}

bool JSRTCStatsReport::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSRTCStatsReport* thisObject = jsCast<JSRTCStatsReport*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSRTCStatsReport, Base>(exec, JSRTCStatsReportTable, thisObject, propertyName, slot);
}

EncodedJSValue jsRTCStatsReportTimestamp(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    RTCStatsReport& impl = castedThis->impl();
    JSValue result = jsDateOrNull(exec, impl.timestamp());
    return JSValue::encode(result);
}


EncodedJSValue jsRTCStatsReportId(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    RTCStatsReport& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.id());
    return JSValue::encode(result);
}


EncodedJSValue jsRTCStatsReportType(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    RTCStatsReport& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.type());
    return JSValue::encode(result);
}


EncodedJSValue jsRTCStatsReportLocal(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    RTCStatsReport& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.local()));
    return JSValue::encode(result);
}


EncodedJSValue jsRTCStatsReportRemote(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    RTCStatsReport& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.remote()));
    return JSValue::encode(result);
}


EncodedJSValue JSC_HOST_CALL jsRTCStatsReportPrototypeFunctionStat(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSRTCStatsReport::info());
    RTCStatsReport& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    const String& name(exec->argument(0).isEmpty() ? String() : exec->argument(0).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = jsStringWithCache(exec, impl.stat(name));
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsRTCStatsReportPrototypeFunctionNames(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSRTCStatsReport* castedThis = jsDynamicCast<JSRTCStatsReport*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSRTCStatsReport::info());
    RTCStatsReport& impl = castedThis->impl();

    JSC::JSValue result = jsArray(exec, castedThis->globalObject(), impl.names());
    return JSValue::encode(result);
}

bool JSRTCStatsReportOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    UNUSED_PARAM(handle);
    UNUSED_PARAM(visitor);
    return false;
}

void JSRTCStatsReportOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSRTCStatsReport* jsRTCStatsReport = jsCast<JSRTCStatsReport*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsRTCStatsReport->impl(), jsRTCStatsReport);
    jsRTCStatsReport->releaseImpl();
}

JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, RTCStatsReport* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSRTCStatsReport>(exec, impl))
        return result;
#if COMPILER(CLANG)
    // If you hit this failure the interface definition has the ImplementationLacksVTable
    // attribute. You should remove that attribute. If the class has subclasses
    // that may be passed through this toJS() function you should use the SkipVTableValidation
    // attribute to RTCStatsReport.
    COMPILE_ASSERT(!__is_polymorphic(RTCStatsReport), RTCStatsReport_is_polymorphic_but_idl_claims_not_to_be);
#endif
    ReportMemoryCost<RTCStatsReport>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSRTCStatsReport>(exec, globalObject, impl);
}

RTCStatsReport* toRTCStatsReport(JSC::JSValue value)
{
    return value.inherits(JSRTCStatsReport::info()) ? &jsCast<JSRTCStatsReport*>(value)->impl() : 0;
}

}

#endif // ENABLE(MEDIA_STREAM)