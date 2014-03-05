/*
 * THIS FILE WAS AUTOMATICALLY GENERATED, DO NOT EDIT.
 *
 * Copyright (C) 2011 Google Inc.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY GOOGLE, INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef ExceptionInterfaces_h
#define ExceptionInterfaces_h

#if ENABLE(BLOB)
#define DOM_EXCEPTION_INTERFACES_FOR_EACH_BLOB(macro) \
    macro(FileException) \
// End of DOM_EXCEPTION_INTERFACES_FOR_EACH_BLOB
#else
#define DOM_EXCEPTION_INTERFACES_FOR_EACH_BLOB(macro)
#endif

#if ENABLE(SQL_DATABASE)
#define DOM_EXCEPTION_INTERFACES_FOR_EACH_SQL_DATABASE(macro) \
    macro(SQLException) \
// End of DOM_EXCEPTION_INTERFACES_FOR_EACH_SQL_DATABASE
#else
#define DOM_EXCEPTION_INTERFACES_FOR_EACH_SQL_DATABASE(macro)
#endif

#if ENABLE(SVG)
#define DOM_EXCEPTION_INTERFACES_FOR_EACH_SVG(macro) \
    macro(SVGException) \
// End of DOM_EXCEPTION_INTERFACES_FOR_EACH_SVG
#else
#define DOM_EXCEPTION_INTERFACES_FOR_EACH_SVG(macro)
#endif

#define DOM_EXCEPTION_INTERFACES_FOR_EACH(macro) \
    \
    macro(DOMCoreException) \
    macro(EventException) \
    macro(RangeException) \
    macro(XMLHttpRequestException) \
    macro(XPathException) \
    \
    DOM_EXCEPTION_INTERFACES_FOR_EACH_BLOB(macro) \
    DOM_EXCEPTION_INTERFACES_FOR_EACH_SQL_DATABASE(macro) \
    DOM_EXCEPTION_INTERFACES_FOR_EACH_SVG(macro) \

#endif // ExceptionInterfaces_h
