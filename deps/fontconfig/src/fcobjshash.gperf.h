%{
CUT_OUT_BEGIN
#include <fontconfig/fontconfig.h>
CUT_OUT_END
%}
%struct-type
%language=ANSI-C
%includes
%enum
%readonly-tables
%define slot-name name
%define hash-function-name FcObjectTypeHash
%define lookup-function-name FcObjectTypeLookup

%pic
%define string-pool-name FcObjectTypeNamePool

struct FcObjectTypeInfo {
	int name;
	int id;
};

%%
#define FC_OBJECT(NAME, Type) FC_##NAME, FC_##NAME##_OBJECT
#include "fcobjs.h"
#undef FC_OBJECT
