/*
 * fontconfig/src/fcfreetype.c
 *
 * Copyright © 2001 Keith Packard
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation, and that the name of the author(s) not be used in
 * advertising or publicity pertaining to distribution of the software without
 * specific, written prior permission.  The authors make no
 * representations about the suitability of this software for any purpose.  It
 * is provided "as is" without express or implied warranty.
 *
 * THE AUTHOR(S) DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE,
 * INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO
 * EVENT SHALL THE AUTHOR(S) BE LIABLE FOR ANY SPECIAL, INDIRECT OR
 * CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

/*
  Copyright © 2002-2003 by Juliusz Chroboczek

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

#include "fcint.h"
#include "fcftint.h"
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <ft2build.h>
#include FT_FREETYPE_H
#include FT_TRUETYPE_TABLES_H
#include FT_SFNT_NAMES_H
#include FT_TRUETYPE_IDS_H
#include FT_TYPE1_TABLES_H
#if HAVE_FT_GET_X11_FONT_FORMAT
#include FT_XFREE86_H
#endif
#if HAVE_FT_GET_BDF_PROPERTY
#include FT_BDF_H
#include FT_MODULE_H
#endif

#include "ftglue.h"

#if HAVE_WARNING_CPP_DIRECTIVE
#if !HAVE_FT_GET_BDF_PROPERTY
#warning "No FT_Get_BDF_Property: Please install freetype 2.1.4 or later"
#endif

#if !HAVE_FT_GET_PS_FONT_INFO
#warning "No FT_Get_PS_Font_Info: Please install freetype 2.1.1 or later"
#endif
#endif

/*
 * Keep Han languages separated by eliminating languages
 * that the codePageRange bits says aren't supported
 */

static const struct {
    char    	    bit;
    const FcChar8   lang[6];
} FcCodePageRange[] = {
    { 17,	"ja" },
    { 18,	"zh-cn" },
    { 19,	"ko" },
    { 20,	"zh-tw" },
};

#define NUM_CODE_PAGE_RANGE (int) (sizeof FcCodePageRange / sizeof FcCodePageRange[0])

FcBool
FcFreeTypeIsExclusiveLang (const FcChar8  *lang)
{
    int	    i;

    for (i = 0; i < NUM_CODE_PAGE_RANGE; i++)
    {
	if (FcLangCompare (lang, FcCodePageRange[i].lang) == FcLangEqual)
	    return FcTrue;
    }
    return FcFalse;
}

typedef struct {
    const FT_UShort	platform_id;
    const FT_UShort	encoding_id;
    const char	fromcode[12];
} FcFtEncoding;

#define TT_ENCODING_DONT_CARE	0xffff
#define FC_ENCODING_MAC_ROMAN	"MACINTOSH"

static const FcFtEncoding   fcFtEncoding[] = {
 {  TT_PLATFORM_APPLE_UNICODE,	TT_ENCODING_DONT_CARE,	"UTF-16BE" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_ID_ROMAN,	"MACINTOSH" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_ID_JAPANESE,	"SJIS" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_SYMBOL_CS,	"UTF-16BE" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_UNICODE_CS,	"UTF-16BE" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_SJIS,		"SJIS-WIN" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_GB2312,	"GB2312" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_BIG_5,		"BIG-5" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_WANSUNG,	"Wansung" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_JOHAB,		"Johab" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_ID_UCS_4,		"UTF-16BE" },
 {  TT_PLATFORM_ISO,		TT_ISO_ID_7BIT_ASCII,	"ASCII" },
 {  TT_PLATFORM_ISO,		TT_ISO_ID_10646,	"UTF-16BE" },
 {  TT_PLATFORM_ISO,		TT_ISO_ID_8859_1,	"ISO-8859-1" },
};

#define NUM_FC_FT_ENCODING  (int) (sizeof (fcFtEncoding) / sizeof (fcFtEncoding[0]))

typedef struct {
    const FT_UShort	platform_id;
    const FT_UShort	language_id;
    const char	lang[8];
} FcFtLanguage;

#define TT_LANGUAGE_DONT_CARE	0xffff

static const FcFtLanguage   fcFtLanguage[] = {
 {  TT_PLATFORM_APPLE_UNICODE,	TT_LANGUAGE_DONT_CARE,		    "" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ENGLISH,		    "en" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_FRENCH,		    "fr" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GERMAN,		    "de" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ITALIAN,		    "it" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_DUTCH,		    "nl" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SWEDISH,		    "sv" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SPANISH,		    "es" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_DANISH,		    "da" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_PORTUGUESE,	    "pt" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_NORWEGIAN,	    "no" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_HEBREW,		    "he" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_JAPANESE,		    "ja" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ARABIC,		    "ar" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_FINNISH,		    "fi" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GREEK,		    "el" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ICELANDIC,	    "is" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MALTESE,		    "mt" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TURKISH,		    "tr" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_CROATIAN,		    "hr" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_CHINESE_TRADITIONAL,  "zh-tw" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_URDU,		    "ur" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_HINDI,		    "hi" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_THAI,		    "th" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KOREAN,		    "ko" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_LITHUANIAN,	    "lt" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_POLISH,		    "pl" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_HUNGARIAN,	    "hu" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ESTONIAN,		    "et" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_LETTISH,		    "lv" },
/* {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SAAMISK, ??? */
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_FAEROESE,		    "fo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_FARSI,		    "fa" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_RUSSIAN,		    "ru" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_CHINESE_SIMPLIFIED,   "zh-cn" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_FLEMISH,		    "nl" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_IRISH,		    "ga" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ALBANIAN,		    "sq" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ROMANIAN,		    "ro" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_CZECH,		    "cs" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SLOVAK,		    "sk" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SLOVENIAN,	    "sl" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_YIDDISH,		    "yi" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SERBIAN,		    "sr" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MACEDONIAN,	    "mk" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_BULGARIAN,	    "bg" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_UKRAINIAN,	    "uk" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_BYELORUSSIAN,	    "be" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_UZBEK,		    "uz" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KAZAKH,		    "kk" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AZERBAIJANI,	    "az" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AZERBAIJANI_CYRILLIC_SCRIPT, "az" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AZERBAIJANI_ARABIC_SCRIPT,    "ar" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ARMENIAN,		    "hy" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GEORGIAN,		    "ka" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MOLDAVIAN,	    "mo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KIRGHIZ,		    "ky" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TAJIKI,		    "tg" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TURKMEN,		    "tk" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MONGOLIAN,	    "mo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MONGOLIAN_MONGOLIAN_SCRIPT,"mo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MONGOLIAN_CYRILLIC_SCRIPT, "mo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_PASHTO,		    "ps" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KURDISH,		    "ku" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KASHMIRI,		    "ks" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SINDHI,		    "sd" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TIBETAN,		    "bo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_NEPALI,		    "ne" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SANSKRIT,		    "sa" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MARATHI,		    "mr" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_BENGALI,		    "bn" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ASSAMESE,		    "as" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GUJARATI,		    "gu" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_PUNJABI,		    "pa" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ORIYA,		    "or" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MALAYALAM,	    "ml" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KANNADA,		    "kn" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TAMIL,		    "ta" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TELUGU,		    "te" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SINHALESE,	    "si" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_BURMESE,		    "my" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_KHMER,		    "km" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_LAO,		    "lo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_VIETNAMESE,	    "vi" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_INDONESIAN,	    "id" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TAGALOG,		    "tl" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MALAY_ROMAN_SCRIPT,   "ms" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MALAY_ARABIC_SCRIPT,  "ms" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AMHARIC,		    "am" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TIGRINYA,		    "ti" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GALLA,		    "om" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SOMALI,		    "so" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SWAHILI,		    "sw" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_RUANDA,		    "rw" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_RUNDI,		    "rn" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_CHEWA,		    "ny" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MALAGASY,		    "mg" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_ESPERANTO,	    "eo" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_WELSH,		    "cy" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_BASQUE,		    "eu" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_CATALAN,		    "ca" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_LATIN,		    "la" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_QUECHUA,		    "qu" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GUARANI,		    "gn" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AYMARA,		    "ay" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TATAR,		    "tt" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_UIGHUR,		    "ug" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_DZONGKHA,		    "dz" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_JAVANESE,		    "jw" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SUNDANESE,	    "su" },

#if 0  /* these seem to be errors that have been dropped */

 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SCOTTISH_GAELIC },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_IRISH_GAELIC },

#endif

  /* The following codes are new as of 2000-03-10 */
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GALICIAN,		    "gl" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AFRIKAANS,	    "af" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_BRETON,		    "br" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_INUKTITUT,	    "iu" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_SCOTTISH_GAELIC,	    "gd" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_MANX_GAELIC,	    "gv" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_IRISH_GAELIC,	    "ga" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_TONGAN,		    "to" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GREEK_POLYTONIC,	    "el" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_GREELANDIC,	    "ik" },
 {  TT_PLATFORM_MACINTOSH,	TT_MAC_LANGID_AZERBAIJANI_ROMAN_SCRIPT,"az" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_SAUDI_ARABIA,	"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_IRAQ,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_EGYPT,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_LIBYA,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_ALGERIA,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_MOROCCO,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_TUNISIA,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_OMAN,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_YEMEN,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_SYRIA,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_JORDAN,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_LEBANON,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_KUWAIT,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_UAE,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_BAHRAIN,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_QATAR,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BULGARIAN_BULGARIA,	"bg" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CATALAN_SPAIN,		"ca" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHINESE_TAIWAN,		"zh-tw" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHINESE_PRC,		"zh-cn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHINESE_HONG_KONG,		"zh-hk" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHINESE_SINGAPORE,		"zh-sg" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHINESE_MACAU,		"zh-mo" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CZECH_CZECH_REPUBLIC,	"cs" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_DANISH_DENMARK,		"da" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GERMAN_GERMANY,		"de" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GERMAN_SWITZERLAND,	"de" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GERMAN_AUSTRIA,		"de" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GERMAN_LUXEMBOURG,		"de" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GERMAN_LIECHTENSTEI,	"de" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GREEK_GREECE,		"el" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_UNITED_STATES,	"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_UNITED_KINGDOM,	"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_AUSTRALIA,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_CANADA,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_NEW_ZEALAND,	"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_IRELAND,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_SOUTH_AFRICA,	"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_JAMAICA,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_CARIBBEAN,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_BELIZE,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_TRINIDAD,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_ZIMBABWE,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_PHILIPPINES,	"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_SPAIN_TRADITIONAL_SORT,"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_MEXICO,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_SPAIN_INTERNATIONAL_SORT,"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_GUATEMALA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_COSTA_RICA,	"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_PANAMA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_DOMINICAN_REPUBLIC,"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_VENEZUELA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_COLOMBIA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_PERU,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_ARGENTINA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_ECUADOR,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_CHILE,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_URUGUAY,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_PARAGUAY,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_BOLIVIA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_EL_SALVADOR,	"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_HONDURAS,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_NICARAGUA,		"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_PUERTO_RICO,	"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FINNISH_FINLAND,		"fi" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_FRANCE,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_BELGIUM,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_CANADA,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_SWITZERLAND,	"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_LUXEMBOURG,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_MONACO,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_HEBREW_ISRAEL,		"he" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_HUNGARIAN_HUNGARY,		"hu" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ICELANDIC_ICELAND,		"is" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ITALIAN_ITALY,		"it" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ITALIAN_SWITZERLAND,	"it" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_JAPANESE_JAPAN,		"ja" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KOREAN_EXTENDED_WANSUNG_KOREA,"ko" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KOREAN_JOHAB_KOREA,	"ko" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_DUTCH_NETHERLANDS,		"nl" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_DUTCH_BELGIUM,		"nl" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_NORWEGIAN_NORWAY_BOKMAL,	"no" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_NORWEGIAN_NORWAY_NYNORSK,	"nn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_POLISH_POLAND,		"pl" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_PORTUGUESE_BRAZIL,		"pt" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_PORTUGUESE_PORTUGAL,	"pt" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_RHAETO_ROMANIC_SWITZERLAND,"rm" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ROMANIAN_ROMANIA,		"ro" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MOLDAVIAN_MOLDAVIA,	"mo" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_RUSSIAN_RUSSIA,		"ru" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_RUSSIAN_MOLDAVIA,		"ru" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CROATIAN_CROATIA,		"hr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SERBIAN_SERBIA_LATIN,	"sr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SERBIAN_SERBIA_CYRILLIC,	"sr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SLOVAK_SLOVAKIA,		"sk" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ALBANIAN_ALBANIA,		"sq" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SWEDISH_SWEDEN,		"sv" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SWEDISH_FINLAND,		"sv" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_THAI_THAILAND,		"th" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TURKISH_TURKEY,		"tr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_URDU_PAKISTAN,		"ur" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_INDONESIAN_INDONESIA,	"id" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_UKRAINIAN_UKRAINE,		"uk" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BELARUSIAN_BELARUS,	"be" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SLOVENE_SLOVENIA,		"sl" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ESTONIAN_ESTONIA,		"et" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_LATVIAN_LATVIA,		"lv" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_LITHUANIAN_LITHUANIA,	"lt" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CLASSIC_LITHUANIAN_LITHUANIA,"lt" },

#ifdef TT_MS_LANGID_MAORI_NEW_ZELAND
    /* this seems to be an error that have been dropped */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MAORI_NEW_ZEALAND,		"mi" },
#endif

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FARSI_IRAN,		"fa" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_VIETNAMESE_VIET_NAM,	"vi" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARMENIAN_ARMENIA,		"hy" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_AZERI_AZERBAIJAN_LATIN,	"az" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_AZERI_AZERBAIJAN_CYRILLIC,	"az" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BASQUE_SPAIN,		"eu" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SORBIAN_GERMANY,		"wen" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MACEDONIAN_MACEDONIA,	"mk" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SUTU_SOUTH_AFRICA,		"st" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TSONGA_SOUTH_AFRICA,	"ts" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TSWANA_SOUTH_AFRICA,	"tn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_VENDA_SOUTH_AFRICA,	"ven" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_XHOSA_SOUTH_AFRICA,	"xh" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ZULU_SOUTH_AFRICA,		"zu" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_AFRIKAANS_SOUTH_AFRICA,	"af" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GEORGIAN_GEORGIA,		"ka" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FAEROESE_FAEROE_ISLANDS,	"fo" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_HINDI_INDIA,		"hi" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MALTESE_MALTA,		"mt" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SAAMI_LAPONIA,		"se" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SCOTTISH_GAELIC_UNITED_KINGDOM,"gd" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_IRISH_GAELIC_IRELAND,	"ga" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MALAY_MALAYSIA,		"ms" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MALAY_BRUNEI_DARUSSALAM,	"ms" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KAZAK_KAZAKSTAN,		"kk" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SWAHILI_KENYA,		"sw" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_UZBEK_UZBEKISTAN_LATIN,	"uz" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_UZBEK_UZBEKISTAN_CYRILLIC,	"uz" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TATAR_TATARSTAN,		"tt" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BENGALI_INDIA,		"bn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_PUNJABI_INDIA,		"pa" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GUJARATI_INDIA,		"gu" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ORIYA_INDIA,		"or" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TAMIL_INDIA,		"ta" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TELUGU_INDIA,		"te" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KANNADA_INDIA,		"kn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MALAYALAM_INDIA,		"ml" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ASSAMESE_INDIA,		"as" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MARATHI_INDIA,		"mr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SANSKRIT_INDIA,		"sa" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KONKANI_INDIA,		"kok" },

  /* new as of 2001-01-01 */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ARABIC_GENERAL,		"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHINESE_GENERAL,		"zh" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_GENERAL,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_WEST_INDIES,	"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_REUNION,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_CONGO,		"fr" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_SENEGAL,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_CAMEROON,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_COTE_D_IVOIRE,	"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_MALI,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BOSNIAN_BOSNIA_HERZEGOVINA,"bs" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_URDU_INDIA,		"ur" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TAJIK_TAJIKISTAN,		"tg" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_YIDDISH_GERMANY,		"yi" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KIRGHIZ_KIRGHIZSTAN,	"ky" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TURKMEN_TURKMENISTAN,	"tk" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MONGOLIAN_MONGOLIA,	"mn" },

  /* the following seems to be inconsistent;
     here is the current "official" way: */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TIBETAN_BHUTAN,		"bo" },
  /* and here is what is used by Passport SDK */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TIBETAN_CHINA,		"bo" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_DZONGHKA_BHUTAN,		"dz" },
  /* end of inconsistency */

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_WELSH_WALES,		"cy" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KHMER_CAMBODIA,		"km" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_LAO_LAOS,			"lo" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BURMESE_MYANMAR,		"my" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GALICIAN_SPAIN,		"gl" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MANIPURI_INDIA,		"mni" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SINDHI_INDIA,		"sd" },
  /* the following one is only encountered in Microsoft RTF specification */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KASHMIRI_PAKISTAN,		"ks" },
  /* the following one is not in the Passport list, looks like an omission */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KASHMIRI_INDIA,		"ks" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_NEPALI_NEPAL,		"ne" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_NEPALI_INDIA,		"ne" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRISIAN_NETHERLANDS,	"fy" },

  /* new as of 2001-03-01 (from Office Xp) */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_HONG_KONG,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_INDIA,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_MALAYSIA,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_ENGLISH_SINGAPORE,		"en" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SYRIAC_SYRIA,		"syr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SINHALESE_SRI_LANKA,	"si" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_CHEROKEE_UNITED_STATES,	"chr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_INUKTITUT_CANADA,		"iu" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_AMHARIC_ETHIOPIA,		"am" },
#if 0
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TAMAZIGHT_MOROCCO },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TAMAZIGHT_MOROCCO_LATIN },
#endif
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_PASHTO_AFGHANISTAN,	"ps" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FILIPINO_PHILIPPINES,	"phi" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_DHIVEHI_MALDIVES,		"div" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_OROMO_ETHIOPIA,		"om" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TIGRIGNA_ETHIOPIA,		"ti" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_TIGRIGNA_ERYTHREA,		"ti" },

  /* New additions from Windows Xp/Passport SDK 2001-11-10. */

  /* don't ask what this one means... It is commented out currently. */
#if 0
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GREEK_GREECE2 },
#endif

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_UNITED_STATES,	"es" },
  /* The following two IDs blatantly violate MS specs by using a */
  /* sublanguage >,.                                         */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SPANISH_LATIN_AMERICA,	"es" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_NORTH_AFRICA,	"fr" },

 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_MOROCCO,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FRENCH_HAITI,		"fr" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_BENGALI_BANGLADESH,	"bn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_PUNJABI_ARABIC_PAKISTAN,	"ar" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_MONGOLIAN_MONGOLIA_MONGOLIAN,"mn" },
#if 0
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_EDO_NIGERIA },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_FULFULDE_NIGERIA },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_IBIBIO_NIGERIA },
#endif
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_HAUSA_NIGERIA,		"ha" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_YORUBA_NIGERIA,		"yo" },
  /* language codes from, to, are (still) unknown. */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_IGBO_NIGERIA,		"ibo" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_KANURI_NIGERIA,		"kau" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_GUARANI_PARAGUAY,		"gn" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_HAWAIIAN_UNITED_STATES,	"haw" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_LATIN,			"la" },
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_SOMALI_SOMALIA,		"so" },
#if 0
  /* Note: Yi does not have a (proper) ISO 639-2 code, since it is mostly */
  /*       not written (but OTOH the peculiar writing system is worth     */
  /*       studying).                                                     */
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_YI_CHINA },
#endif
 {  TT_PLATFORM_MICROSOFT,	TT_MS_LANGID_PAPIAMENTU_NETHERLANDS_ANTILLES,"pap" },
};

#define NUM_FC_FT_LANGUAGE  (int) (sizeof (fcFtLanguage) / sizeof (fcFtLanguage[0]))

typedef struct {
    FT_UShort	language_id;
    char	fromcode[12];
} FcMacRomanFake;

static const FcMacRomanFake fcMacRomanFake[] = {
 {  TT_MS_LANGID_JAPANESE_JAPAN,	"SJIS-WIN" },
 {  TT_MS_LANGID_ENGLISH_UNITED_STATES,	"ASCII" },
};

static FcChar8 *
FcFontCapabilities(FT_Face face);

#define NUM_FC_MAC_ROMAN_FAKE	(int) (sizeof (fcMacRomanFake) / sizeof (fcMacRomanFake[0]))

#if USE_ICONV
#include <iconv.h>
#endif

/*
 * A shift-JIS will have many high bits turned on
 */
static FcBool
FcLooksLikeSJIS (FcChar8 *string, int len)
{
    int	    nhigh = 0, nlow = 0;

    while (len-- > 0)
    {
	if (*string++ & 0x80) nhigh++;
	else nlow++;
    }
    /*
     * Heuristic -- if more than 1/3 of the bytes have the high-bit set,
     * this is likely to be SJIS and not ROMAN
     */
    if (nhigh * 2 > nlow)
	return FcTrue;
    return FcFalse;
}

static FcChar8 *
FcSfntNameTranscode (FT_SfntName *sname)
{
    int	       i;
    const char *fromcode;
#if USE_ICONV
    iconv_t cd;
#endif
    FcChar8 *utf8;

    for (i = 0; i < NUM_FC_FT_ENCODING; i++)
	if (fcFtEncoding[i].platform_id == sname->platform_id &&
	    (fcFtEncoding[i].encoding_id == TT_ENCODING_DONT_CARE ||
	     fcFtEncoding[i].encoding_id == sname->encoding_id))
	    break;
    if (i == NUM_FC_FT_ENCODING)
	return 0;
    fromcode = fcFtEncoding[i].fromcode;

    /*
     * Many names encoded for TT_PLATFORM_MACINTOSH are broken
     * in various ways. Kludge around them.
     */
    if (!strcmp (fromcode, FC_ENCODING_MAC_ROMAN))
    {
	if (sname->language_id == TT_MAC_LANGID_ENGLISH &&
	    FcLooksLikeSJIS (sname->string, sname->string_len))
	{
	    fromcode = "SJIS";
	}
	else if (sname->language_id >= 0x100)
	{
	    /*
	     * "real" Mac language IDs are all less than 150.
	     * Names using one of the MS language IDs are assumed
	     * to use an associated encoding (Yes, this is a kludge)
	     */
	    int	f;

	    fromcode = NULL;
	    for (f = 0; f < NUM_FC_MAC_ROMAN_FAKE; f++)
		if (fcMacRomanFake[f].language_id == sname->language_id)
		{
		    fromcode = fcMacRomanFake[f].fromcode;
		    break;
		}
	    if (!fromcode)
		return 0;
	}
    }
    if (!strcmp (fromcode, "UCS-2BE") || !strcmp (fromcode, "UTF-16BE"))
    {
	FcChar8	    *src = sname->string;
	int	    src_len = sname->string_len;
	int	    len;
	int	    wchar;
	int	    ilen, olen;
	FcChar8	    *u8;
	FcChar32    ucs4;
	
	/*
	 * Convert Utf16 to Utf8
	 */

	if (!FcUtf16Len (src, FcEndianBig, src_len, &len, &wchar))
	    return 0;

	/*
	 * Allocate plenty of space.  Freed below
	 */
	utf8 = malloc (len * FC_UTF8_MAX_LEN + 1);
	if (!utf8)
	    return 0;

	u8 = utf8;

	while ((ilen = FcUtf16ToUcs4 (src, FcEndianBig, &ucs4, src_len)) > 0)
	{
	    src_len -= ilen;
	    src += ilen;
	    olen = FcUcs4ToUtf8 (ucs4, u8);
	    u8 += olen;
	}
	*u8 = '\0';
	goto done;
    }
    if (!strcmp (fromcode, "ASCII") || !strcmp (fromcode, "ISO-8859-1"))
    {
	FcChar8	    *src = sname->string;
	int	    src_len = sname->string_len;
	int	    olen;
	FcChar8	    *u8;
	FcChar32    ucs4;
	
	/*
	 * Convert Latin1 to Utf8. Freed below
	 */
	utf8 = malloc (src_len * 2 + 1);
	if (!utf8)
	    return 0;

	u8 = utf8;
	while (src_len > 0)
	{
	    ucs4 = *src++;
	    src_len--;
	    olen = FcUcs4ToUtf8 (ucs4, u8);
	    u8 += olen;
	}
	*u8 = '\0';
	goto done;
    }
#if USE_ICONV
    cd = iconv_open ("UTF-8", fromcode);
    if (cd && cd != (iconv_t) (-1))
    {
	size_t	    in_bytes_left = sname->string_len;
	size_t	    out_bytes_left = sname->string_len * FC_UTF8_MAX_LEN;
	char	    *inbuf, *outbuf;
	
	utf8 = malloc (out_bytes_left + 1);
	if (!utf8)
	{
	    iconv_close (cd);
	    return 0;
	}
	
	outbuf = (char *) utf8;
	inbuf = (char *) sname->string;
	
	while (in_bytes_left)
	{
	    size_t	did = iconv (cd,
				 &inbuf, &in_bytes_left,
				 &outbuf, &out_bytes_left);
	    if (did == (size_t) (-1))
	    {
		iconv_close (cd);
		free (utf8);
		return 0;
	    }
	}
    	iconv_close (cd);
	*outbuf = '\0';
	goto done;
    }
#endif
    return 0;
done:
    if (FcStrCmpIgnoreBlanksAndCase (utf8, (FcChar8 *) "") == 0)
    {
	free (utf8);
	return 0;
    }
    return utf8;
}

static const FcChar8 *
FcSfntNameLanguage (FT_SfntName *sname)
{
    int i;
    FT_UShort	platform_id = sname->platform_id;
    FT_UShort	language_id = sname->language_id;

    /*
     * Many names encoded for TT_PLATFORM_MACINTOSH are broken
     * in various ways. Kludge around them.
     */
    if (platform_id == TT_PLATFORM_MACINTOSH &&
	sname->encoding_id == TT_MAC_ID_ROMAN &&
	FcLooksLikeSJIS (sname->string, sname->string_len))
    {
	language_id = TT_MAC_LANGID_JAPANESE;
    }

    for (i = 0; i < NUM_FC_FT_LANGUAGE; i++)
	if (fcFtLanguage[i].platform_id == platform_id &&
	    (fcFtLanguage[i].language_id == TT_LANGUAGE_DONT_CARE ||
	     fcFtLanguage[i].language_id == language_id))
	{
	    if (fcFtLanguage[i].lang[0] == '\0')
	      return NULL;
	    else
	      return (FcChar8 *) fcFtLanguage[i].lang;
	}
    return 0;
}

/* Order is significant.  For example, some B&H fonts are hinted by
   URW++, and both strings appear in the notice. */

static const char notice_foundry_data[] =
	"Bigelow\0b&h\0"
	"Adobe\0adobe\0"
	"Bitstream\0bitstream\0"
	"Monotype\0monotype\0"
	"Linotype\0linotype\0"
	"LINOTYPE-HELL\0linotype\0"
	"IBM\0ibm\0"
	"URW\0urw\0"
	"International Typeface Corporation\0itc\0"
	"Tiro Typeworks\0tiro\0"
	"XFree86\0xfree86\0"
	"Microsoft\0microsoft\0"
	"Omega\0omega\0"
	"Font21\0hwan\0"
	"HanYang System\0hanyang";

struct _notice_foundry {
    /* these are the offsets into the
     * notice_foundry_data array.
     */
    unsigned char notice_offset;
    unsigned char foundry_offset;
};

static const struct _notice_foundry FcNoticeFoundries[] = {
    { 0, 8 },
    { 12, 18 },
    { 24, 34 },
    { 44, 53 },
    { 62, 71 },
    { 80, 94 },
    { 103, 107 },
    { 111, 115 },
    { 119, 154 },
    { 158, 173 },
    { 178, 186 },
    { 194, 204 },
    { 214, 220 },
    { 226, 233 },
    { 238, 253 }
};

#define NUM_NOTICE_FOUNDRIES	(int) (sizeof (FcNoticeFoundries) / sizeof (FcNoticeFoundries[0]))

static const FcChar8 *
FcNoticeFoundry(const FT_String *notice)
{
    int i;

    if (notice)
	for(i = 0; i < NUM_NOTICE_FOUNDRIES; i++)
        {
            const struct _notice_foundry *nf = &FcNoticeFoundries[i];
            const char *n = notice_foundry_data + nf->notice_offset;
            const char *f = notice_foundry_data + nf->foundry_offset;

	    if (strstr ((const char *) notice, n))
		return (const FcChar8 *) f;
        }
    return 0;
}

static FcBool
FcVendorMatch(const FT_Char vendor[4], const FT_Char *vendor_string)
{
    /* vendor is not necessarily NUL-terminated. */
    int i, len;

    len = strlen((char *) vendor_string);
    if (memcmp(vendor, vendor_string, len) != 0)
        return FcFalse;
    for (i = len; i < 4; i++)
        if (vendor[i] != ' ' && vendor[i] != '\0')
            return FcFalse;
    return FcTrue;
}

/* This table is partly taken from ttmkfdir by Joerg Pommnitz. */

/* It should not contain useless entries (such as UNKN) nor duplicate
   entries for padding both with spaces and NULs. */

static const struct {
    const FT_Char   vendor[5];
    const FcChar8   foundry[13];
} FcVendorFoundries[] = {
    { "ADBE", "adobe"},
    { "AGFA", "agfa"},
    { "ALTS", "altsys"},
    { "APPL", "apple"},
    { "ARPH", "arphic"},
    { "ATEC", "alltype"},
    { "B&H",  "b&h"},
    { "BITS", "bitstream"},
    { "CANO", "cannon"},
    { "DYNA", "dynalab"},
    { "EPSN", "epson"},
    { "FJ",   "fujitsu"},
    { "IBM",  "ibm"},
    { "ITC",  "itc"},
    { "IMPR", "impress"},
    { "LARA", "larabiefonts"},
    { "LEAF", "interleaf"},
    { "LETR", "letraset"},
    { "LINO", "linotype"},
    { "MACR", "macromedia"},
    { "MONO", "monotype"},
    { "MS",   "microsoft"},
    { "MT",   "monotype"},
    { "NEC",  "nec"},
    { "PARA", "paratype"},
    { "QMSI", "qms"},
    { "RICO", "ricoh"},
    { "URW",  "urw"},
    { "Y&Y",  "y&y"}
};

#define NUM_VENDOR_FOUNDRIES	(int) (sizeof (FcVendorFoundries) / sizeof (FcVendorFoundries[0]))

static const FcChar8 *
FcVendorFoundry(const FT_Char vendor[4])
{
    int i;

    if (vendor)
	for(i = 0; i < NUM_VENDOR_FOUNDRIES; i++)
	    if (FcVendorMatch (vendor, FcVendorFoundries[i].vendor))
		return FcVendorFoundries[i].foundry;
    return 0;
}

typedef struct _FcStringConst {
    const FcChar8   *name;
    int		    value;
} FcStringConst;

static int
FcStringIsConst (const FcChar8		*string,
		 const FcStringConst	*c,
		 int			nc)
{
    int	i;

    for (i = 0; i < nc; i++)
	if (FcStrCmpIgnoreBlanksAndCase (string, c[i].name) == 0)
	    return c[i].value;
    return -1;
}

static int
FcStringContainsConst (const FcChar8	    *string,
		       const FcStringConst  *c,
		       int		    nc)
{
    int	i;

    for (i = 0; i < nc; i++)
    {
	if (c[i].name[0] == '<')
	{
	    if (FcStrContainsWord (string, c[i].name + 1))
		return c[i].value;
	}
	else
	{
	    if (FcStrContainsIgnoreBlanksAndCase (string, c[i].name))
		return c[i].value;
	}
    }
    return -1;
}

typedef FcChar8 *FC8;

static const FcStringConst  weightConsts[] = {
    { (FC8) "thin",		FC_WEIGHT_THIN },
    { (FC8) "extralight",	FC_WEIGHT_EXTRALIGHT },
    { (FC8) "ultralight",	FC_WEIGHT_ULTRALIGHT },
    { (FC8) "light",		FC_WEIGHT_LIGHT },
    { (FC8) "book",		FC_WEIGHT_BOOK },
    { (FC8) "regular",		FC_WEIGHT_REGULAR },
    { (FC8) "normal",		FC_WEIGHT_NORMAL },
    { (FC8) "medium",		FC_WEIGHT_MEDIUM },
    { (FC8) "demibold",		FC_WEIGHT_DEMIBOLD },
    { (FC8) "demi",		FC_WEIGHT_DEMIBOLD },
    { (FC8) "semibold",		FC_WEIGHT_SEMIBOLD },
    { (FC8) "extrabold",	FC_WEIGHT_EXTRABOLD },
    { (FC8) "superbold",	FC_WEIGHT_EXTRABOLD },
    { (FC8) "ultrabold",	FC_WEIGHT_ULTRABOLD },
    { (FC8) "bold",		FC_WEIGHT_BOLD },
    { (FC8) "ultrablack",	FC_WEIGHT_ULTRABLACK },
    { (FC8) "superblack",	FC_WEIGHT_EXTRABLACK },
    { (FC8) "extrablack",	FC_WEIGHT_EXTRABLACK },
    { (FC8) "<ultra",		FC_WEIGHT_ULTRABOLD }, /* only if a word */
    { (FC8) "black",		FC_WEIGHT_BLACK },
    { (FC8) "heavy",		FC_WEIGHT_HEAVY },
};

#define NUM_WEIGHT_CONSTS  (int) (sizeof (weightConsts) / sizeof (weightConsts[0]))

#define FcIsWeight(s)	    FcStringIsConst(s,weightConsts,NUM_WEIGHT_CONSTS)
#define FcContainsWeight(s) FcStringContainsConst (s,weightConsts,NUM_WEIGHT_CONSTS)

static const FcStringConst  widthConsts[] = {
    { (FC8) "ultracondensed",	FC_WIDTH_ULTRACONDENSED },
    { (FC8) "extracondensed",	FC_WIDTH_EXTRACONDENSED },
    { (FC8) "semicondensed",	FC_WIDTH_SEMICONDENSED },
    { (FC8) "condensed",	FC_WIDTH_CONDENSED },	/* must be after *condensed */
    { (FC8) "normal",		FC_WIDTH_NORMAL },
    { (FC8) "semiexpanded",	FC_WIDTH_SEMIEXPANDED },
    { (FC8) "extraexpanded",	FC_WIDTH_EXTRAEXPANDED },
    { (FC8) "ultraexpanded",	FC_WIDTH_ULTRAEXPANDED },
    { (FC8) "expanded",		FC_WIDTH_EXPANDED },	/* must be after *expanded */
    { (FC8) "extended",		FC_WIDTH_EXPANDED },
};

#define NUM_WIDTH_CONSTS    (int) (sizeof (widthConsts) / sizeof (widthConsts[0]))

#define FcIsWidth(s)	    FcStringIsConst(s,widthConsts,NUM_WIDTH_CONSTS)
#define FcContainsWidth(s)  FcStringContainsConst (s,widthConsts,NUM_WIDTH_CONSTS)

static const FcStringConst  slantConsts[] = {
    { (FC8) "italic",		FC_SLANT_ITALIC },
    { (FC8) "kursiv",		FC_SLANT_ITALIC },
    { (FC8) "oblique",		FC_SLANT_OBLIQUE },
};

#define NUM_SLANT_CONSTS    (int) (sizeof (slantConsts) / sizeof (slantConsts[0]))

#define FcContainsSlant(s)  FcStringContainsConst (s,slantConsts,NUM_SLANT_CONSTS)

static const FcStringConst  decorativeConsts[] = {
    { (FC8) "shadow",		FcTrue },
    { (FC8) "caps",		FcTrue },
    { (FC8) "antiqua",		FcTrue },
    { (FC8) "romansc",		FcTrue },
    { (FC8) "embosed",		FcTrue },
    { (FC8) "dunhill",		FcTrue },
};

#define NUM_DECORATIVE_CONSTS	(int) (sizeof (decorativeConsts) / sizeof (decorativeConsts[0]))

#define FcContainsDecorative(s)	FcStringContainsConst (s,decorativeConsts,NUM_DECORATIVE_CONSTS)

static double
FcGetPixelSize (FT_Face face, int i)
{
#if HAVE_FT_GET_BDF_PROPERTY
    if (face->num_fixed_sizes == 1)
    {
	BDF_PropertyRec	prop;
	int		rc;

	rc = FT_Get_BDF_Property (face, "PIXEL_SIZE", &prop);
	if (rc == 0 && prop.type == BDF_PROPERTY_TYPE_INTEGER)
	    return (double) prop.u.integer;
    }
#endif
#if HAVE_FT_BITMAP_SIZE_Y_PPEM
    return (double) face->available_sizes[i].y_ppem / 64.0;
#else
    return (double) face->available_sizes[i].height;
#endif
}

static FcBool
FcStringInPatternElement (FcPattern *pat, const char *elt, FcChar8 *string)
{
    int	    e;
    FcChar8 *old;
    for (e = 0; FcPatternGetString (pat, elt, e, &old) == FcResultMatch; e++)
	if (!FcStrCmpIgnoreBlanksAndCase (old, string))
	{
	    return FcTrue;
	}
    return FcFalse;
}

static const FT_UShort platform_order[] = {
    TT_PLATFORM_MICROSOFT,
    TT_PLATFORM_APPLE_UNICODE,
    TT_PLATFORM_MACINTOSH,
};
#define NUM_PLATFORM_ORDER (sizeof (platform_order) / sizeof (platform_order[0]))

static const FT_UShort nameid_order[] = {
#ifdef TT_NAME_ID_WWS_FAMILY
    TT_NAME_ID_WWS_FAMILY,
#endif
    TT_NAME_ID_PREFERRED_FAMILY,
    TT_NAME_ID_FONT_FAMILY,
    TT_NAME_ID_MAC_FULL_NAME,
    TT_NAME_ID_FULL_NAME,
#ifdef TT_NAME_ID_WWS_SUBFAMILY
    TT_NAME_ID_WWS_SUBFAMILY,
#endif
    TT_NAME_ID_PREFERRED_SUBFAMILY,
    TT_NAME_ID_FONT_SUBFAMILY,
    TT_NAME_ID_TRADEMARK,
    TT_NAME_ID_MANUFACTURER,
};

#define NUM_NAMEID_ORDER  (sizeof (nameid_order) / sizeof (nameid_order[0]))
FcPattern *
FcFreeTypeQueryFace (const FT_Face  face,
		     const FcChar8  *file,
		     int	    id,
		     FcBlanks	    *blanks)
{
    FcPattern	    *pat;
    int		    slant = -1;
    int		    weight = -1;
    int		    width = -1;
    FcBool	    decorative = FcFalse;
    int		    i;
    FcCharSet	    *cs;
    FcLangSet	    *ls;
#if 0
    FcChar8	    *family = 0;
#endif
    FcChar8	    *complex_;
    const FcChar8   *foundry = 0;
    int		    spacing;
    TT_OS2	    *os2;
#if HAVE_FT_GET_PS_FONT_INFO
    PS_FontInfoRec  psfontinfo;
#endif
#if HAVE_FT_GET_BDF_PROPERTY
    BDF_PropertyRec prop;
#endif
    TT_Header	    *head;
    const FcChar8   *exclusiveLang = 0;
    FT_SfntName	    sname;
    FT_UInt    	    snamei, snamec;

    int		    nfamily = 0;
    int		    nfamily_lang = 0;
    int		    nstyle = 0;
    int		    nstyle_lang = 0;
    int		    nfullname = 0;
    int		    nfullname_lang = 0;
    unsigned int    p, n;
    int		    platform, nameid;

    FcChar8	    *style = 0;
    int		    st;

    pat = FcPatternCreate ();
    if (!pat)
	goto bail0;

    if (!FcPatternAddBool (pat, FC_OUTLINE,
			   (face->face_flags & FT_FACE_FLAG_SCALABLE) != 0))
	goto bail1;

    if (!FcPatternAddBool (pat, FC_SCALABLE,
			   (face->face_flags & FT_FACE_FLAG_SCALABLE) != 0))
	goto bail1;


    /*
     * Get the OS/2 table
     */
    os2 = (TT_OS2 *) FT_Get_Sfnt_Table (face, ft_sfnt_os2);

    /*
     * Look first in the OS/2 table for the foundry, if
     * not found here, the various notices will be searched for
     * that information, either from the sfnt name tables or
     * the Postscript FontInfo dictionary.  Finally, the
     * BDF properties will queried.
     */

    if (os2 && os2->version >= 0x0001 && os2->version != 0xffff)
        foundry = FcVendorFoundry(os2->achVendID);

    if (FcDebug () & FC_DBG_SCANV)
	printf ("\n");
    /*
     * Grub through the name table looking for family
     * and style names.  FreeType makes quite a hash
     * of them
     */
    snamec = FT_Get_Sfnt_Name_Count (face);
    for (p = 0; p <= NUM_PLATFORM_ORDER; p++)
    {
	if (p < NUM_PLATFORM_ORDER)
	    platform = platform_order[p];
	else
	    platform = 0xffff;

	/*
	 * Order nameids so preferred names appear first
	 * in the resulting list
	 */
	for (n = 0; n < NUM_NAMEID_ORDER; n++)
	{
	    nameid = nameid_order[n];

	    for (snamei = 0; snamei < snamec; snamei++)
	    {
		FcChar8		*utf8, *pp;
		const FcChar8	*lang;
		const char	*elt = 0, *eltlang = 0;
		int		*np = 0, *nlangp = 0;
		size_t		len;

		if (FT_Get_Sfnt_Name (face, snamei, &sname) != 0)
		    continue;
		if (sname.name_id != nameid)
		    continue;

		/*
		 * Sort platforms in preference order, accepting
		 * all other platforms last
		 */
		if (p < NUM_PLATFORM_ORDER)
		{
		    if (sname.platform_id != platform)
			continue;
		}
		else
		{
		    unsigned int	sp;

		    for (sp = 0; sp < NUM_PLATFORM_ORDER; sp++)
			if (sname.platform_id == platform_order[sp])
			    break;
		    if (sp != NUM_PLATFORM_ORDER)
			continue;
		}
		utf8 = FcSfntNameTranscode (&sname);
		lang = FcSfntNameLanguage (&sname);

		if (!utf8)
		    continue;

		switch (sname.name_id) {
#ifdef TT_NAME_ID_WWS_FAMILY
		case TT_NAME_ID_WWS_FAMILY:
#endif
		case TT_NAME_ID_PREFERRED_FAMILY:
		case TT_NAME_ID_FONT_FAMILY:
#if 0	
		case TT_NAME_ID_PS_NAME:
		case TT_NAME_ID_UNIQUE_ID:
#endif
		    if (FcDebug () & FC_DBG_SCANV)
			printf ("found family (n %2d p %d e %d l 0x%04x) %s\n",
				sname.name_id, sname.platform_id,
				sname.encoding_id, sname.language_id,
				utf8);

		    elt = FC_FAMILY;
		    eltlang = FC_FAMILYLANG;
		    np = &nfamily;
		    nlangp = &nfamily_lang;
		    break;
		case TT_NAME_ID_MAC_FULL_NAME:
		case TT_NAME_ID_FULL_NAME:
		    if (FcDebug () & FC_DBG_SCANV)
			printf ("found full   (n %2d p %d e %d l 0x%04x) %s\n",
				sname.name_id, sname.platform_id,
				sname.encoding_id, sname.language_id,
				utf8);

		    elt = FC_FULLNAME;
		    eltlang = FC_FULLNAMELANG;
		    np = &nfullname;
		    nlangp = &nfullname_lang;
		    break;
#ifdef TT_NAME_ID_WWS_SUBFAMILY
		case TT_NAME_ID_WWS_SUBFAMILY:
#endif
		case TT_NAME_ID_PREFERRED_SUBFAMILY:
		case TT_NAME_ID_FONT_SUBFAMILY:
		    if (utf8)
		    {
			pp = utf8;
			while (*pp == ' ')
			    pp++;
			len = strlen ((const char *) pp);
			memmove (utf8, pp, len + 1);
			pp = utf8 + len - 1;
			while (*pp == ' ')
			    pp--;
			*(pp + 1) = 0;
		    }
		    if (FcDebug () & FC_DBG_SCANV)
			printf ("found style  (n %2d p %d e %d l 0x%04x) %s\n",
				sname.name_id, sname.platform_id,
				sname.encoding_id, sname.language_id,
				utf8);

		    elt = FC_STYLE;
		    eltlang = FC_STYLELANG;
		    np = &nstyle;
		    nlangp = &nstyle_lang;
		    break;
		case TT_NAME_ID_TRADEMARK:
		case TT_NAME_ID_MANUFACTURER:
		    /* If the foundry wasn't found in the OS/2 table, look here */
		    if(!foundry)
			foundry = FcNoticeFoundry((FT_String *) utf8);
		    break;
		}
		if (elt)
		{
		    if (FcStringInPatternElement (pat, elt, utf8))
		    {
			free (utf8);
			continue;
		    }

		    /* add new element */
		    if (!FcPatternAddString (pat, elt, utf8))
		    {
			free (utf8);
			goto bail1;
		    }
		    free (utf8);
		    if (lang)
		    {
			/* pad lang list with 'xx' to line up with elt */
			while (*nlangp < *np)
			{
			    if (!FcPatternAddString (pat, eltlang, (FcChar8 *) "xx"))
				goto bail1;
			    ++*nlangp;
			}
			if (!FcPatternAddString (pat, eltlang, lang))
			    goto bail1;
			++*nlangp;
		    }
		    ++*np;
		}
		else
		    free (utf8);
	    }
	}
    }

    if (!nfamily && face->family_name &&
	FcStrCmpIgnoreBlanksAndCase ((FcChar8 *) face->family_name, (FcChar8 *) "") != 0)
    {
	if (FcDebug () & FC_DBG_SCANV)
	    printf ("using FreeType family \"%s\"\n", face->family_name);
	if (!FcPatternAddString (pat, FC_FAMILY, (FcChar8 *) face->family_name))
	    goto bail1;
	++nfamily;
    }

    if (!nstyle && face->style_name &&
	FcStrCmpIgnoreBlanksAndCase ((FcChar8 *) face->style_name, (FcChar8 *) "") != 0)
    {
	if (FcDebug () & FC_DBG_SCANV)
	    printf ("using FreeType style \"%s\"\n", face->style_name);
	if (!FcPatternAddString (pat, FC_STYLE, (FcChar8 *) face->style_name))
	    goto bail1;
	++nstyle;
    }

    if (!nfamily)
    {
	FcChar8	*start, *end;
	FcChar8	*family;
	
	start = (FcChar8 *) strrchr ((char *) file, '/');
	if (start)
	    start++;
	else
	    start = (FcChar8 *) file;
	end = (FcChar8 *) strrchr ((char *) start, '.');
	if (!end)
	    end = start + strlen ((char *) start);
	/* freed below */
	family = malloc (end - start + 1);
	strncpy ((char *) family, (char *) start, end - start);
	family[end - start] = '\0';
	if (FcDebug () & FC_DBG_SCANV)
	    printf ("using filename for family %s\n", family);
	if (!FcPatternAddString (pat, FC_FAMILY, family))
	{
	    free (family);
	    goto bail1;
	}
	free (family);
	++nfamily;
    }

    if (!FcPatternAddString (pat, FC_FILE, file))
	goto bail1;

    if (!FcPatternAddInteger (pat, FC_INDEX, id))
	goto bail1;

#if 0
    /*
     * don't even try this -- CJK 'monospace' fonts are really
     * dual width, and most other fonts don't bother to set
     * the attribute.  Sigh.
     */
    if ((face->face_flags & FT_FACE_FLAG_FIXED_WIDTH) != 0)
	if (!FcPatternAddInteger (pat, FC_SPACING, FC_MONO))
	    goto bail1;
#endif

    /*
     * Find the font revision (if available)
     */
    head = (TT_Header *) FT_Get_Sfnt_Table (face, ft_sfnt_head);
    if (head)
    {
	if (!FcPatternAddInteger (pat, FC_FONTVERSION, head->Font_Revision))
	    goto bail1;
    }
    else
    {
	if (!FcPatternAddInteger (pat, FC_FONTVERSION, 0))
	    goto bail1;
    }

    if (os2 && os2->version >= 0x0001 && os2->version != 0xffff)
    {
	for (i = 0; i < NUM_CODE_PAGE_RANGE; i++)
	{
	    FT_ULong	bits;
	    int		bit;
	    if (FcCodePageRange[i].bit < 32)
	    {
		bits = os2->ulCodePageRange1;
		bit = FcCodePageRange[i].bit;
	    }
	    else
	    {
		bits = os2->ulCodePageRange2;
		bit = FcCodePageRange[i].bit - 32;
	    }
	    if (bits & (1 << bit))
	    {
		/*
		 * If the font advertises support for multiple
		 * "exclusive" languages, then include support
		 * for any language found to have coverage
		 */
		if (exclusiveLang)
		{
		    exclusiveLang = 0;
		    break;
		}
		exclusiveLang = FcCodePageRange[i].lang;
	    }
	}
    }

    if (os2 && os2->version != 0xffff)
    {
	if (os2->usWeightClass == 0)
	    ;
	else if (os2->usWeightClass < 150)
	    weight = FC_WEIGHT_THIN;
	else if (os2->usWeightClass < 250)
	    weight = FC_WEIGHT_EXTRALIGHT;
	else if (os2->usWeightClass < 350)
	    weight = FC_WEIGHT_LIGHT;
	else if (os2->usWeightClass < 450)
	    weight = FC_WEIGHT_REGULAR;
	else if (os2->usWeightClass < 550)
	    weight = FC_WEIGHT_MEDIUM;
	else if (os2->usWeightClass < 650)
	    weight = FC_WEIGHT_SEMIBOLD;
	else if (os2->usWeightClass < 750)
	    weight = FC_WEIGHT_BOLD;
	else if (os2->usWeightClass < 850)
	    weight = FC_WEIGHT_EXTRABOLD;
	else if (os2->usWeightClass < 925)
	    weight = FC_WEIGHT_BLACK;
	else if (os2->usWeightClass < 1000)
	    weight = FC_WEIGHT_EXTRABLACK;
	if ((FcDebug() & FC_DBG_SCANV) && weight != -1)
	    printf ("\tos2 weight class %d maps to weight %d\n",
		    os2->usWeightClass, weight);

	switch (os2->usWidthClass) {
	case 1:	width = FC_WIDTH_ULTRACONDENSED; break;
	case 2:	width = FC_WIDTH_EXTRACONDENSED; break;
	case 3:	width = FC_WIDTH_CONDENSED; break;
	case 4:	width = FC_WIDTH_SEMICONDENSED; break;
	case 5:	width = FC_WIDTH_NORMAL; break;
	case 6:	width = FC_WIDTH_SEMIEXPANDED; break;
	case 7:	width = FC_WIDTH_EXPANDED; break;
	case 8:	width = FC_WIDTH_EXTRAEXPANDED; break;
	case 9:	width = FC_WIDTH_ULTRAEXPANDED; break;
	}
	if ((FcDebug() & FC_DBG_SCANV) && width != -1)
	    printf ("\tos2 width class %d maps to width %d\n",
		    os2->usWidthClass, width);
    }
    if (os2 && (complex_ = FcFontCapabilities(face)))
    {
	if (!FcPatternAddString (pat, FC_CAPABILITY, complex_))
	{
	    free (complex_);
	    goto bail1;
	}
	free (complex_);
    }

    /*
     * Type 1: Check for FontInfo dictionary information
     * Code from g2@magestudios.net (Gerard Escalante)
     */

#if HAVE_FT_GET_PS_FONT_INFO
    if (FT_Get_PS_Font_Info(face, &psfontinfo) == 0)
    {
	if (weight == -1 && psfontinfo.weight)
	{
	    weight = FcIsWeight ((FcChar8 *) psfontinfo.weight);
    	    if (FcDebug() & FC_DBG_SCANV)
    		printf ("\tType1 weight %s maps to %d\n",
			psfontinfo.weight, weight);
	}

#if 0
	/*
	 * Don't bother with italic_angle; FreeType already extracts that
	 * information for us and sticks it into style_flags
	 */
        if (psfontinfo.italic_angle)
            slant = FC_SLANT_ITALIC;
        else
            slant = FC_SLANT_ROMAN;
#endif

        if(!foundry)
            foundry = FcNoticeFoundry(psfontinfo.notice);
    }
#endif /* HAVE_FT_GET_PS_FONT_INFO */

#if HAVE_FT_GET_BDF_PROPERTY
    /*
     * Finally, look for a FOUNDRY BDF property if no other
     * mechanism has managed to locate a foundry
     */

    if (!foundry)
    {
	int             rc;
	rc = FT_Get_BDF_Property(face, "FOUNDRY", &prop);
	if(rc == 0 && prop.type == BDF_PROPERTY_TYPE_ATOM)
	    foundry = (FcChar8 *) prop.u.atom;
    }

    if (width == -1)
    {
	if (FT_Get_BDF_Property(face, "RELATIVE_SETWIDTH", &prop) == 0 &&
	    (prop.type == BDF_PROPERTY_TYPE_INTEGER ||
	     prop.type == BDF_PROPERTY_TYPE_CARDINAL))
	{
	    FT_Int32	value;
	
	    if (prop.type == BDF_PROPERTY_TYPE_INTEGER)
		value = prop.u.integer;
	    else
		value = (FT_Int32) prop.u.cardinal;
	    switch ((value + 5) / 10) {
	    case 1: width = FC_WIDTH_ULTRACONDENSED; break;
	    case 2: width = FC_WIDTH_EXTRACONDENSED; break;
	    case 3: width = FC_WIDTH_CONDENSED; break;
	    case 4: width = FC_WIDTH_SEMICONDENSED; break;
	    case 5: width = FC_WIDTH_NORMAL; break;
	    case 6: width = FC_WIDTH_SEMIEXPANDED; break;
	    case 7: width = FC_WIDTH_EXPANDED; break;
	    case 8: width = FC_WIDTH_EXTRAEXPANDED; break;
	    case 9: width = FC_WIDTH_ULTRAEXPANDED; break;
	    }
	}
	if (width == -1 &&
	    FT_Get_BDF_Property (face, "SETWIDTH_NAME", &prop) == 0 &&
	    prop.type == BDF_PROPERTY_TYPE_ATOM)
	{
	    width = FcIsWidth ((FcChar8 *) prop.u.atom);
	    if (FcDebug () & FC_DBG_SCANV)
		printf ("\tsetwidth %s maps to %d\n", prop.u.atom, width);
	}
    }
#endif

    /*
     * Look for weight, width and slant names in the style value
     */
    for (st = 0; FcPatternGetString (pat, FC_STYLE, st, &style) == FcResultMatch; st++)
    {
	if (weight == -1)
	{
	    weight = FcContainsWeight (style);
	    if (FcDebug() & FC_DBG_SCANV)
		printf ("\tStyle %s maps to weight %d\n", style, weight);
	}
	if (width == -1)
	{
	    width = FcContainsWidth (style);
	    if (FcDebug() & FC_DBG_SCANV)
		printf ("\tStyle %s maps to width %d\n", style, width);
	}
	if (slant == -1)
	{
	    slant = FcContainsSlant (style);
	    if (FcDebug() & FC_DBG_SCANV)
		printf ("\tStyle %s maps to slant %d\n", style, slant);
	}
	if (decorative == FcFalse)
	{
	    decorative = FcContainsDecorative (style) > 0;
	    if (FcDebug() & FC_DBG_SCANV)
		printf ("\tStyle %s maps to decorative %d\n", style, decorative);
	}
    }
    /*
     * Pull default values from the FreeType flags if more
     * specific values not found above
     */
    if (slant == -1)
    {
	slant = FC_SLANT_ROMAN;
	if (face->style_flags & FT_STYLE_FLAG_ITALIC)
	    slant = FC_SLANT_ITALIC;
    }

    if (weight == -1)
    {
	weight = FC_WEIGHT_MEDIUM;
	if (face->style_flags & FT_STYLE_FLAG_BOLD)
	    weight = FC_WEIGHT_BOLD;
    }

    if (width == -1)
	width = FC_WIDTH_NORMAL;

    if (foundry == 0)
	foundry = (FcChar8 *) "unknown";

    if (!FcPatternAddInteger (pat, FC_SLANT, slant))
	goto bail1;

    if (!FcPatternAddInteger (pat, FC_WEIGHT, weight))
	goto bail1;

    if (!FcPatternAddInteger (pat, FC_WIDTH, width))
	goto bail1;

    if (!FcPatternAddString (pat, FC_FOUNDRY, foundry))
	goto bail1;

    if (!FcPatternAddBool (pat, FC_DECORATIVE, decorative))
	goto bail1;

    /*
     * Compute the unicode coverage for the font
     */
    cs = FcFreeTypeCharSetAndSpacing (face, blanks, &spacing);
    if (!cs)
	goto bail1;

#if HAVE_FT_GET_BDF_PROPERTY
    /* For PCF fonts, override the computed spacing with the one from
       the property */
    if(FT_Get_BDF_Property(face, "SPACING", &prop) == 0 &&
       prop.type == BDF_PROPERTY_TYPE_ATOM) {
        if(!strcmp(prop.u.atom, "c") || !strcmp(prop.u.atom, "C"))
            spacing = FC_CHARCELL;
        else if(!strcmp(prop.u.atom, "m") || !strcmp(prop.u.atom, "M"))
            spacing = FC_MONO;
        else if(!strcmp(prop.u.atom, "p") || !strcmp(prop.u.atom, "P"))
            spacing = FC_PROPORTIONAL;
    }
#endif

    /*
     * Skip over PCF fonts that have no encoded characters; they're
     * usually just Unicode fonts transcoded to some legacy encoding
     * FT forces us to approximate whether a font is a PCF font
     * or not by whether it has any BDF properties.  Try PIXEL_SIZE;
     * I don't know how to get a list of BDF properties on the font. -PL
     */
    if (FcCharSetCount (cs) == 0)
    {
#if HAVE_FT_GET_BDF_PROPERTY
	if(FT_Get_BDF_Property(face, "PIXEL_SIZE", &prop) == 0)
	    goto bail2;
#endif
    }

    if (!FcPatternAddCharSet (pat, FC_CHARSET, cs))
	goto bail2;

    ls = FcFreeTypeLangSet (cs, exclusiveLang);
    if (!ls)
	goto bail2;

    if (!FcPatternAddLangSet (pat, FC_LANG, ls))
    {
	FcLangSetDestroy (ls);
	goto bail2;
    }

    FcLangSetDestroy (ls);

    if (spacing != FC_PROPORTIONAL)
	if (!FcPatternAddInteger (pat, FC_SPACING, spacing))
	    goto bail2;

    if (!(face->face_flags & FT_FACE_FLAG_SCALABLE))
    {
	for (i = 0; i < face->num_fixed_sizes; i++)
	    if (!FcPatternAddDouble (pat, FC_PIXEL_SIZE,
				     FcGetPixelSize (face, i)))
		goto bail2;
	if (!FcPatternAddBool (pat, FC_ANTIALIAS, FcFalse))
	    goto bail2;
    }
#if HAVE_FT_GET_X11_FONT_FORMAT
    /*
     * Use the (not well documented or supported) X-specific function
     * from FreeType to figure out the font format
     */
    {
	const char *font_format = FT_Get_X11_Font_Format (face);
	if (font_format)
	    FcPatternAddString (pat, FC_FONTFORMAT, (FcChar8 *) font_format);
    }
#endif

    /*
     * Drop our reference to the charset
     */
    FcCharSetDestroy (cs);

    return pat;

bail2:
    FcCharSetDestroy (cs);
bail1:
    FcPatternDestroy (pat);
bail0:
    return NULL;
}

FcPattern *
FcFreeTypeQuery(const FcChar8	*file,
		int		id,
		FcBlanks	*blanks,
		int		*count)
{
    FT_Face	    face;
    FT_Library	    ftLibrary;
    FcPattern	    *pat = NULL;

    if (FT_Init_FreeType (&ftLibrary))
	return NULL;

    if (FT_New_Face (ftLibrary, (char *) file, id, &face))
	goto bail;

    *count = face->num_faces;

    pat = FcFreeTypeQueryFace (face, file, id, blanks);

    FT_Done_Face (face);
bail:
    FT_Done_FreeType (ftLibrary);
    return pat;
}

/*
 * For our purposes, this approximation is sufficient
 */
#if !HAVE_FT_GET_NEXT_CHAR
#define FT_Get_Next_Char(face, ucs4, gi) ((ucs4) >= 0xffffff ? \
					  (*(gi) = 0), 0 : \
					  (*(gi) = 1), (ucs4) + 1)
#warning "No FT_Get_Next_Char: Please install freetype version 2.1.0 or newer"
#endif

typedef struct _FcCharEnt {
    FcChar16	    bmp;
    unsigned char   encode;
} FcCharEnt;

struct _FcCharMap {
    const FcCharEnt *ent;
    int		    nent;
};

typedef struct _FcFontDecode {
    FT_Encoding	    encoding;
    const FcCharMap *map;
    FcChar32	    max;
} FcFontDecode;

static const FcCharEnt AdobeSymbolEnt[] = {
    { 0x0020, 0x20 }, /* SPACE	# space */
    { 0x0021, 0x21 }, /* EXCLAMATION MARK	# exclam */
    { 0x0023, 0x23 }, /* NUMBER SIGN	# numbersign */
    { 0x0025, 0x25 }, /* PERCENT SIGN	# percent */
    { 0x0026, 0x26 }, /* AMPERSAND	# ampersand */
    { 0x0028, 0x28 }, /* LEFT PARENTHESIS	# parenleft */
    { 0x0029, 0x29 }, /* RIGHT PARENTHESIS	# parenright */
    { 0x002B, 0x2B }, /* PLUS SIGN	# plus */
    { 0x002C, 0x2C }, /* COMMA	# comma */
    { 0x002E, 0x2E }, /* FULL STOP	# period */
    { 0x002F, 0x2F }, /* SOLIDUS	# slash */
    { 0x0030, 0x30 }, /* DIGIT ZERO	# zero */
    { 0x0031, 0x31 }, /* DIGIT ONE	# one */
    { 0x0032, 0x32 }, /* DIGIT TWO	# two */
    { 0x0033, 0x33 }, /* DIGIT THREE	# three */
    { 0x0034, 0x34 }, /* DIGIT FOUR	# four */
    { 0x0035, 0x35 }, /* DIGIT FIVE	# five */
    { 0x0036, 0x36 }, /* DIGIT SIX	# six */
    { 0x0037, 0x37 }, /* DIGIT SEVEN	# seven */
    { 0x0038, 0x38 }, /* DIGIT EIGHT	# eight */
    { 0x0039, 0x39 }, /* DIGIT NINE	# nine */
    { 0x003A, 0x3A }, /* COLON	# colon */
    { 0x003B, 0x3B }, /* SEMICOLON	# semicolon */
    { 0x003C, 0x3C }, /* LESS-THAN SIGN	# less */
    { 0x003D, 0x3D }, /* EQUALS SIGN	# equal */
    { 0x003E, 0x3E }, /* GREATER-THAN SIGN	# greater */
    { 0x003F, 0x3F }, /* QUESTION MARK	# question */
    { 0x005B, 0x5B }, /* LEFT SQUARE BRACKET	# bracketleft */
    { 0x005D, 0x5D }, /* RIGHT SQUARE BRACKET	# bracketright */
    { 0x005F, 0x5F }, /* LOW LINE	# underscore */
    { 0x007B, 0x7B }, /* LEFT CURLY BRACKET	# braceleft */
    { 0x007C, 0x7C }, /* VERTICAL LINE	# bar */
    { 0x007D, 0x7D }, /* RIGHT CURLY BRACKET	# braceright */
    { 0x00A0, 0x20 }, /* NO-BREAK SPACE	# space */
    { 0x00AC, 0xD8 }, /* NOT SIGN	# logicalnot */
    { 0x00B0, 0xB0 }, /* DEGREE SIGN	# degree */
    { 0x00B1, 0xB1 }, /* PLUS-MINUS SIGN	# plusminus */
    { 0x00B5, 0x6D }, /* MICRO SIGN	# mu */
    { 0x00D7, 0xB4 }, /* MULTIPLICATION SIGN	# multiply */
    { 0x00F7, 0xB8 }, /* DIVISION SIGN	# divide */
    { 0x0192, 0xA6 }, /* LATIN SMALL LETTER F WITH HOOK	# florin */
    { 0x0391, 0x41 }, /* GREEK CAPITAL LETTER ALPHA	# Alpha */
    { 0x0392, 0x42 }, /* GREEK CAPITAL LETTER BETA	# Beta */
    { 0x0393, 0x47 }, /* GREEK CAPITAL LETTER GAMMA	# Gamma */
    { 0x0394, 0x44 }, /* GREEK CAPITAL LETTER DELTA	# Delta */
    { 0x0395, 0x45 }, /* GREEK CAPITAL LETTER EPSILON	# Epsilon */
    { 0x0396, 0x5A }, /* GREEK CAPITAL LETTER ZETA	# Zeta */
    { 0x0397, 0x48 }, /* GREEK CAPITAL LETTER ETA	# Eta */
    { 0x0398, 0x51 }, /* GREEK CAPITAL LETTER THETA	# Theta */
    { 0x0399, 0x49 }, /* GREEK CAPITAL LETTER IOTA	# Iota */
    { 0x039A, 0x4B }, /* GREEK CAPITAL LETTER KAPPA	# Kappa */
    { 0x039B, 0x4C }, /* GREEK CAPITAL LETTER LAMDA	# Lambda */
    { 0x039C, 0x4D }, /* GREEK CAPITAL LETTER MU	# Mu */
    { 0x039D, 0x4E }, /* GREEK CAPITAL LETTER NU	# Nu */
    { 0x039E, 0x58 }, /* GREEK CAPITAL LETTER XI	# Xi */
    { 0x039F, 0x4F }, /* GREEK CAPITAL LETTER OMICRON	# Omicron */
    { 0x03A0, 0x50 }, /* GREEK CAPITAL LETTER PI	# Pi */
    { 0x03A1, 0x52 }, /* GREEK CAPITAL LETTER RHO	# Rho */
    { 0x03A3, 0x53 }, /* GREEK CAPITAL LETTER SIGMA	# Sigma */
    { 0x03A4, 0x54 }, /* GREEK CAPITAL LETTER TAU	# Tau */
    { 0x03A5, 0x55 }, /* GREEK CAPITAL LETTER UPSILON	# Upsilon */
    { 0x03A6, 0x46 }, /* GREEK CAPITAL LETTER PHI	# Phi */
    { 0x03A7, 0x43 }, /* GREEK CAPITAL LETTER CHI	# Chi */
    { 0x03A8, 0x59 }, /* GREEK CAPITAL LETTER PSI	# Psi */
    { 0x03A9, 0x57 }, /* GREEK CAPITAL LETTER OMEGA	# Omega */
    { 0x03B1, 0x61 }, /* GREEK SMALL LETTER ALPHA	# alpha */
    { 0x03B2, 0x62 }, /* GREEK SMALL LETTER BETA	# beta */
    { 0x03B3, 0x67 }, /* GREEK SMALL LETTER GAMMA	# gamma */
    { 0x03B4, 0x64 }, /* GREEK SMALL LETTER DELTA	# delta */
    { 0x03B5, 0x65 }, /* GREEK SMALL LETTER EPSILON	# epsilon */
    { 0x03B6, 0x7A }, /* GREEK SMALL LETTER ZETA	# zeta */
    { 0x03B7, 0x68 }, /* GREEK SMALL LETTER ETA	# eta */
    { 0x03B8, 0x71 }, /* GREEK SMALL LETTER THETA	# theta */
    { 0x03B9, 0x69 }, /* GREEK SMALL LETTER IOTA	# iota */
    { 0x03BA, 0x6B }, /* GREEK SMALL LETTER KAPPA	# kappa */
    { 0x03BB, 0x6C }, /* GREEK SMALL LETTER LAMDA	# lambda */
    { 0x03BC, 0x6D }, /* GREEK SMALL LETTER MU	# mu */
    { 0x03BD, 0x6E }, /* GREEK SMALL LETTER NU	# nu */
    { 0x03BE, 0x78 }, /* GREEK SMALL LETTER XI	# xi */
    { 0x03BF, 0x6F }, /* GREEK SMALL LETTER OMICRON	# omicron */
    { 0x03C0, 0x70 }, /* GREEK SMALL LETTER PI	# pi */
    { 0x03C1, 0x72 }, /* GREEK SMALL LETTER RHO	# rho */
    { 0x03C2, 0x56 }, /* GREEK SMALL LETTER FINAL SIGMA	# sigma1 */
    { 0x03C3, 0x73 }, /* GREEK SMALL LETTER SIGMA	# sigma */
    { 0x03C4, 0x74 }, /* GREEK SMALL LETTER TAU	# tau */
    { 0x03C5, 0x75 }, /* GREEK SMALL LETTER UPSILON	# upsilon */
    { 0x03C6, 0x66 }, /* GREEK SMALL LETTER PHI	# phi */
    { 0x03C7, 0x63 }, /* GREEK SMALL LETTER CHI	# chi */
    { 0x03C8, 0x79 }, /* GREEK SMALL LETTER PSI	# psi */
    { 0x03C9, 0x77 }, /* GREEK SMALL LETTER OMEGA	# omega */
    { 0x03D1, 0x4A }, /* GREEK THETA SYMBOL	# theta1 */
    { 0x03D2, 0xA1 }, /* GREEK UPSILON WITH HOOK SYMBOL	# Upsilon1 */
    { 0x03D5, 0x6A }, /* GREEK PHI SYMBOL	# phi1 */
    { 0x03D6, 0x76 }, /* GREEK PI SYMBOL	# omega1 */
    { 0x2022, 0xB7 }, /* BULLET	# bullet */
    { 0x2026, 0xBC }, /* HORIZONTAL ELLIPSIS	# ellipsis */
    { 0x2032, 0xA2 }, /* PRIME	# minute */
    { 0x2033, 0xB2 }, /* DOUBLE PRIME	# second */
    { 0x2044, 0xA4 }, /* FRACTION SLASH	# fraction */
    { 0x20AC, 0xA0 }, /* EURO SIGN	# Euro */
    { 0x2111, 0xC1 }, /* BLACK-LETTER CAPITAL I	# Ifraktur */
    { 0x2118, 0xC3 }, /* SCRIPT CAPITAL P	# weierstrass */
    { 0x211C, 0xC2 }, /* BLACK-LETTER CAPITAL R	# Rfraktur */
    { 0x2126, 0x57 }, /* OHM SIGN	# Omega */
    { 0x2135, 0xC0 }, /* ALEF SYMBOL	# aleph */
    { 0x2190, 0xAC }, /* LEFTWARDS ARROW	# arrowleft */
    { 0x2191, 0xAD }, /* UPWARDS ARROW	# arrowup */
    { 0x2192, 0xAE }, /* RIGHTWARDS ARROW	# arrowright */
    { 0x2193, 0xAF }, /* DOWNWARDS ARROW	# arrowdown */
    { 0x2194, 0xAB }, /* LEFT RIGHT ARROW	# arrowboth */
    { 0x21B5, 0xBF }, /* DOWNWARDS ARROW WITH CORNER LEFTWARDS	# carriagereturn */
    { 0x21D0, 0xDC }, /* LEFTWARDS DOUBLE ARROW	# arrowdblleft */
    { 0x21D1, 0xDD }, /* UPWARDS DOUBLE ARROW	# arrowdblup */
    { 0x21D2, 0xDE }, /* RIGHTWARDS DOUBLE ARROW	# arrowdblright */
    { 0x21D3, 0xDF }, /* DOWNWARDS DOUBLE ARROW	# arrowdbldown */
    { 0x21D4, 0xDB }, /* LEFT RIGHT DOUBLE ARROW	# arrowdblboth */
    { 0x2200, 0x22 }, /* FOR ALL	# universal */
    { 0x2202, 0xB6 }, /* PARTIAL DIFFERENTIAL	# partialdiff */
    { 0x2203, 0x24 }, /* THERE EXISTS	# existential */
    { 0x2205, 0xC6 }, /* EMPTY SET	# emptyset */
    { 0x2206, 0x44 }, /* INCREMENT	# Delta */
    { 0x2207, 0xD1 }, /* NABLA	# gradient */
    { 0x2208, 0xCE }, /* ELEMENT OF	# element */
    { 0x2209, 0xCF }, /* NOT AN ELEMENT OF	# notelement */
    { 0x220B, 0x27 }, /* CONTAINS AS MEMBER	# suchthat */
    { 0x220F, 0xD5 }, /* N-ARY PRODUCT	# product */
    { 0x2211, 0xE5 }, /* N-ARY SUMMATION	# summation */
    { 0x2212, 0x2D }, /* MINUS SIGN	# minus */
    { 0x2215, 0xA4 }, /* DIVISION SLASH	# fraction */
    { 0x2217, 0x2A }, /* ASTERISK OPERATOR	# asteriskmath */
    { 0x221A, 0xD6 }, /* SQUARE ROOT	# radical */
    { 0x221D, 0xB5 }, /* PROPORTIONAL TO	# proportional */
    { 0x221E, 0xA5 }, /* INFINITY	# infinity */
    { 0x2220, 0xD0 }, /* ANGLE	# angle */
    { 0x2227, 0xD9 }, /* LOGICAL AND	# logicaland */
    { 0x2228, 0xDA }, /* LOGICAL OR	# logicalor */
    { 0x2229, 0xC7 }, /* INTERSECTION	# intersection */
    { 0x222A, 0xC8 }, /* UNION	# union */
    { 0x222B, 0xF2 }, /* INTEGRAL	# integral */
    { 0x2234, 0x5C }, /* THEREFORE	# therefore */
    { 0x223C, 0x7E }, /* TILDE OPERATOR	# similar */
    { 0x2245, 0x40 }, /* APPROXIMATELY EQUAL TO	# congruent */
    { 0x2248, 0xBB }, /* ALMOST EQUAL TO	# approxequal */
    { 0x2260, 0xB9 }, /* NOT EQUAL TO	# notequal */
    { 0x2261, 0xBA }, /* IDENTICAL TO	# equivalence */
    { 0x2264, 0xA3 }, /* LESS-THAN OR EQUAL TO	# lessequal */
    { 0x2265, 0xB3 }, /* GREATER-THAN OR EQUAL TO	# greaterequal */
    { 0x2282, 0xCC }, /* SUBSET OF	# propersubset */
    { 0x2283, 0xC9 }, /* SUPERSET OF	# propersuperset */
    { 0x2284, 0xCB }, /* NOT A SUBSET OF	# notsubset */
    { 0x2286, 0xCD }, /* SUBSET OF OR EQUAL TO	# reflexsubset */
    { 0x2287, 0xCA }, /* SUPERSET OF OR EQUAL TO	# reflexsuperset */
    { 0x2295, 0xC5 }, /* CIRCLED PLUS	# circleplus */
    { 0x2297, 0xC4 }, /* CIRCLED TIMES	# circlemultiply */
    { 0x22A5, 0x5E }, /* UP TACK	# perpendicular */
    { 0x22C5, 0xD7 }, /* DOT OPERATOR	# dotmath */
    { 0x2320, 0xF3 }, /* TOP HALF INTEGRAL	# integraltp */
    { 0x2321, 0xF5 }, /* BOTTOM HALF INTEGRAL	# integralbt */
    { 0x2329, 0xE1 }, /* LEFT-POINTING ANGLE BRACKET	# angleleft */
    { 0x232A, 0xF1 }, /* RIGHT-POINTING ANGLE BRACKET	# angleright */
    { 0x25CA, 0xE0 }, /* LOZENGE	# lozenge */
    { 0x2660, 0xAA }, /* BLACK SPADE SUIT	# spade */
    { 0x2663, 0xA7 }, /* BLACK CLUB SUIT	# club */
    { 0x2665, 0xA9 }, /* BLACK HEART SUIT	# heart */
    { 0x2666, 0xA8 }, /* BLACK DIAMOND SUIT	# diamond */
    { 0xF6D9, 0xD3 }, /* COPYRIGHT SIGN SERIF	# copyrightserif (CUS) */
    { 0xF6DA, 0xD2 }, /* REGISTERED SIGN SERIF	# registerserif (CUS) */
    { 0xF6DB, 0xD4 }, /* TRADE MARK SIGN SERIF	# trademarkserif (CUS) */
    { 0xF8E5, 0x60 }, /* RADICAL EXTENDER	# radicalex (CUS) */
    { 0xF8E6, 0xBD }, /* VERTICAL ARROW EXTENDER	# arrowvertex (CUS) */
    { 0xF8E7, 0xBE }, /* HORIZONTAL ARROW EXTENDER	# arrowhorizex (CUS) */
    { 0xF8E8, 0xE2 }, /* REGISTERED SIGN SANS SERIF	# registersans (CUS) */
    { 0xF8E9, 0xE3 }, /* COPYRIGHT SIGN SANS SERIF	# copyrightsans (CUS) */
    { 0xF8EA, 0xE4 }, /* TRADE MARK SIGN SANS SERIF	# trademarksans (CUS) */
    { 0xF8EB, 0xE6 }, /* LEFT PAREN TOP	# parenlefttp (CUS) */
    { 0xF8EC, 0xE7 }, /* LEFT PAREN EXTENDER	# parenleftex (CUS) */
    { 0xF8ED, 0xE8 }, /* LEFT PAREN BOTTOM	# parenleftbt (CUS) */
    { 0xF8EE, 0xE9 }, /* LEFT SQUARE BRACKET TOP	# bracketlefttp (CUS) */
    { 0xF8EF, 0xEA }, /* LEFT SQUARE BRACKET EXTENDER	# bracketleftex (CUS) */
    { 0xF8F0, 0xEB }, /* LEFT SQUARE BRACKET BOTTOM	# bracketleftbt (CUS) */
    { 0xF8F1, 0xEC }, /* LEFT CURLY BRACKET TOP	# bracelefttp (CUS) */
    { 0xF8F2, 0xED }, /* LEFT CURLY BRACKET MID	# braceleftmid (CUS) */
    { 0xF8F3, 0xEE }, /* LEFT CURLY BRACKET BOTTOM	# braceleftbt (CUS) */
    { 0xF8F4, 0xEF }, /* CURLY BRACKET EXTENDER	# braceex (CUS) */
    { 0xF8F5, 0xF4 }, /* INTEGRAL EXTENDER	# integralex (CUS) */
    { 0xF8F6, 0xF6 }, /* RIGHT PAREN TOP	# parenrighttp (CUS) */
    { 0xF8F7, 0xF7 }, /* RIGHT PAREN EXTENDER	# parenrightex (CUS) */
    { 0xF8F8, 0xF8 }, /* RIGHT PAREN BOTTOM	# parenrightbt (CUS) */
    { 0xF8F9, 0xF9 }, /* RIGHT SQUARE BRACKET TOP	# bracketrighttp (CUS) */
    { 0xF8FA, 0xFA }, /* RIGHT SQUARE BRACKET EXTENDER	# bracketrightex (CUS) */
    { 0xF8FB, 0xFB }, /* RIGHT SQUARE BRACKET BOTTOM	# bracketrightbt (CUS) */
    { 0xF8FC, 0xFC }, /* RIGHT CURLY BRACKET TOP	# bracerighttp (CUS) */
    { 0xF8FD, 0xFD }, /* RIGHT CURLY BRACKET MID	# bracerightmid (CUS) */
    { 0xF8FE, 0xFE }, /* RIGHT CURLY BRACKET BOTTOM	# bracerightbt (CUS) */
};

static const FcCharMap AdobeSymbol = {
    AdobeSymbolEnt,
    sizeof (AdobeSymbolEnt) / sizeof (AdobeSymbolEnt[0]),
};

static const FcFontDecode fcFontDecoders[] = {
    { ft_encoding_unicode,	0,		(1 << 21) - 1 },
    { ft_encoding_symbol,	&AdobeSymbol,	(1 << 16) - 1 },
};

#define NUM_DECODE  (int) (sizeof (fcFontDecoders) / sizeof (fcFontDecoders[0]))

static const FcChar32	prefer_unicode[] = {
    0x20ac,	/* EURO SIGN */
};

#define NUM_PREFER_UNICODE  (int) (sizeof (prefer_unicode) / sizeof (prefer_unicode[0]))

FcChar32
FcFreeTypeUcs4ToPrivate (FcChar32 ucs4, const FcCharMap *map)
{
    int		low, high, mid;
    FcChar16	bmp;

    low = 0;
    high = map->nent - 1;
    if (ucs4 < map->ent[low].bmp || map->ent[high].bmp < ucs4)
	return ~0;
    while (low <= high)
    {
	mid = (high + low) >> 1;
	bmp = map->ent[mid].bmp;
	if (ucs4 == bmp)
	    return (FT_ULong) map->ent[mid].encode;
	if (ucs4 < bmp)
	    high = mid - 1;
	else
	    low = mid + 1;
    }
    return ~0;
}

FcChar32
FcFreeTypePrivateToUcs4 (FcChar32 private, const FcCharMap *map)
{
    int	    i;

    for (i = 0; i < map->nent; i++)
	if (map->ent[i].encode == private)
	    return (FcChar32) map->ent[i].bmp;
    return ~0;
}

const FcCharMap *
FcFreeTypeGetPrivateMap (FT_Encoding encoding)
{
    int	i;

    for (i = 0; i < NUM_DECODE; i++)
	if (fcFontDecoders[i].encoding == encoding)
	    return fcFontDecoders[i].map;
    return 0;
}

#include "../fc-glyphname/fcglyphname.h"

static FcChar32
FcHashGlyphName (const FcChar8 *name)
{
    FcChar32	h = 0;
    FcChar8	c;

    while ((c = *name++))
    {
	h = ((h << 1) | (h >> 31)) ^ c;
    }
    return h;
}

#if HAVE_FT_HAS_PS_GLYPH_NAMES
/*
 * Use Type1 glyph names for fonts which have reliable names
 * and which export an Adobe Custom mapping
 */
static FcBool
FcFreeTypeUseNames (FT_Face face)
{
    FT_Int  map;

    if (!FT_Has_PS_Glyph_Names (face))
	return FcFalse;
    for (map = 0; map < face->num_charmaps; map++)
	if (face->charmaps[map]->encoding == ft_encoding_adobe_custom)
	    return FcTrue;
    return FcFalse;
}

static const FcChar8 *
FcUcs4ToGlyphName (FcChar32 ucs4)
{
    int		i = (int) (ucs4 % FC_GLYPHNAME_HASH);
    int		r = 0;
    FcGlyphId	gn;

    while ((gn = _fc_ucs_to_name[i]) != -1)
    {
	if (_fc_glyph_names[gn].ucs == ucs4)
	    return _fc_glyph_names[gn].name;
	if (!r)
	{
	    r = (int) (ucs4 % FC_GLYPHNAME_REHASH);
	    if (!r)
		r = 1;
	}
	i += r;
	if (i >= FC_GLYPHNAME_HASH)
	    i -= FC_GLYPHNAME_HASH;
    }
    return 0;
}

static FcChar32
FcGlyphNameToUcs4 (FcChar8 *name)
{
    FcChar32	h = FcHashGlyphName (name);
    int		i = (int) (h % FC_GLYPHNAME_HASH);
    int		r = 0;
    FcGlyphId	gn;

    while ((gn = _fc_name_to_ucs[i]) != -1)
    {
	if (!strcmp ((char *) name, (char *) _fc_glyph_names[gn].name))
	    return _fc_glyph_names[gn].ucs;
	if (!r)
	{
	    r = (int) (h % FC_GLYPHNAME_REHASH);
	    if (!r)
		r = 1;
	}
	i += r;
	if (i >= FC_GLYPHNAME_HASH)
	    i -= FC_GLYPHNAME_HASH;
    }
    return 0xffff;
}

/*
 * Work around a bug in some FreeType versions which fail
 * to correctly bounds check glyph name buffers and overwrite
 * the stack. As Postscript names have a limit of 127 characters,
 * this should be sufficient.
 */

#if FC_GLYPHNAME_MAXLEN < 127
# define FC_GLYPHNAME_BUFLEN 127
#else
# define FC_GLYPHNAME_BUFLEN FC_GLYPHNAME_MAXLEN
#endif

/*
 * Search through a font for a glyph by name.  This is
 * currently a linear search as there doesn't appear to be
 * any defined order within the font
 */
static FT_UInt
FcFreeTypeGlyphNameIndex (FT_Face face, const FcChar8 *name)
{
    FT_UInt gindex;
    FcChar8 name_buf[FC_GLYPHNAME_BUFLEN + 2];

    for (gindex = 0; gindex < (FT_UInt) face->num_glyphs; gindex++)
    {
	if (FT_Get_Glyph_Name (face, gindex, name_buf, FC_GLYPHNAME_BUFLEN+1) == 0)
	    if (!strcmp ((char *) name, (char *) name_buf))
		return gindex;
    }
    return 0;
}
#endif

/*
 * Map a UCS4 glyph to a glyph index.  Use all available encoding
 * tables to try and find one that works.  This information is expected
 * to be cached by higher levels, so performance isn't critical
 */

FT_UInt
FcFreeTypeCharIndex (FT_Face face, FcChar32 ucs4)
{
    int		    initial, offset, decode;
    FT_UInt	    glyphindex;
    FcChar32	    charcode;
    int		    p;

    initial = 0;

    if (!face)
        return 0;

    /*
     * Find the current encoding
     */
    if (face->charmap)
    {
	for (; initial < NUM_DECODE; initial++)
	    if (fcFontDecoders[initial].encoding == face->charmap->encoding)
		break;
	if (initial == NUM_DECODE)
	    initial = 0;
    }
    for (p = 0; p < NUM_PREFER_UNICODE; p++)
	if (ucs4 == prefer_unicode[p])
	{
	    initial = 0;
	    break;
	}
    /*
     * Check each encoding for the glyph, starting with the current one
     */
    for (offset = 0; offset < NUM_DECODE; offset++)
    {
	decode = (initial + offset) % NUM_DECODE;
	if (!face->charmap || face->charmap->encoding != fcFontDecoders[decode].encoding)
	    if (FT_Select_Charmap (face, fcFontDecoders[decode].encoding) != 0)
		continue;
	if (fcFontDecoders[decode].map)
	{
	    charcode = FcFreeTypeUcs4ToPrivate (ucs4, fcFontDecoders[decode].map);
	    if (charcode == ~0U)
		continue;
	}
	else
	    charcode = ucs4;
	glyphindex = FT_Get_Char_Index (face, (FT_ULong) charcode);
	if (glyphindex)
	    return glyphindex;
    }
#if HAVE_FT_HAS_PS_GLYPH_NAMES
    /*
     * Check postscript name table if present
     */
    if (FcFreeTypeUseNames (face))
    {
	const FcChar8	*name = FcUcs4ToGlyphName (ucs4);
	if (name)
	{
	    glyphindex = FcFreeTypeGlyphNameIndex (face, name);
	    if (glyphindex)
		return glyphindex;
	}
    }
#endif
    return 0;
}

static FcBool
FcFreeTypeCheckGlyph (FT_Face face, FcChar32 ucs4,
		      FT_UInt glyph, FcBlanks *blanks,
		      FT_Pos *advance,
		      FcBool using_strike)
{
    FT_Int	    load_flags = FT_LOAD_IGNORE_GLOBAL_ADVANCE_WIDTH | FT_LOAD_NO_SCALE | FT_LOAD_NO_HINTING;
    FT_GlyphSlot    slot;

    if (using_strike)
	load_flags &= ~FT_LOAD_NO_SCALE;

    /*
     * When using scalable fonts, only report those glyphs
     * which can be scaled; otherwise those fonts will
     * only be available at some sizes, and never when
     * transformed.  Avoid this by simply reporting bitmap-only
     * glyphs as missing
     */
    if (face->face_flags & FT_FACE_FLAG_SCALABLE)
	load_flags |= FT_LOAD_NO_BITMAP;

    if (FT_Load_Glyph (face, glyph, load_flags))
	return FcFalse;

    slot = face->glyph;
    if (!glyph)
	return FcFalse;

    *advance = slot->metrics.horiAdvance;

    switch ((int) slot->format) {
    case ft_glyph_format_bitmap:
	/*
	 * Bitmaps are assumed to be reasonable; if
	 * this proves to be a rash assumption, this
	 * code can be easily modified
	 */
	return FcTrue;
    case ft_glyph_format_outline:
	/*
	 * Glyphs with contours are always OK
	 */
	if (slot->outline.n_contours != 0)
	    return FcTrue;
	/*
	 * Glyphs with no contours are only OK if
	 * they're members of the Blanks set specified
	 * in the configuration.  If blanks isn't set,
	 * then allow any glyph to be blank
	 */
	if (!blanks || FcBlanksIsMember (blanks, ucs4))
	    return FcTrue;
	/* fall through ... */
    default:
	break;
    }
    return FcFalse;
}

#define APPROXIMATELY_EQUAL(x,y) (FC_ABS ((x) - (y)) <= FC_MAX (FC_ABS (x), FC_ABS (y)) / 33)

static FcCharSet *
FcFreeTypeCharSetAndSpacingForSize (FT_Face face, FcBlanks *blanks, int *spacing, FT_Int strike_index)
{
    FcChar32	    page, off, ucs4;
#ifdef CHECK
    FcChar32	    font_max = 0;
#endif
    FcCharSet	    *fcs;
    FcCharLeaf	    *leaf;
    const FcCharMap *map;
    int		    o;
    int		    i;
    FT_UInt	    glyph;
    FT_Pos	    advance, advance_one = 0, advance_two = 0;
    FcBool	    has_advance = FcFalse, fixed_advance = FcTrue, dual_advance = FcFalse;
    FcBool	    using_strike = FcFalse;

    fcs = FcCharSetCreate ();
    if (!fcs)
	goto bail0;

#if HAVE_FT_SELECT_SIZE
    if (strike_index >= 0) {
	if (FT_Select_Size (face, strike_index) != FT_Err_Ok)
	    goto bail1;
	using_strike = FcTrue;
    }
#endif

#ifdef CHECK
    printf ("Family %s style %s\n", face->family_name, face->style_name);
#endif
    for (o = 0; o < NUM_DECODE; o++)
    {
	if (FT_Select_Charmap (face, fcFontDecoders[o].encoding) != 0)
	    continue;
	map = fcFontDecoders[o].map;
	if (map)
	{
	    /*
	     * Non-Unicode tables are easy; there's a list of all possible
	     * characters
	     */
	    for (i = 0; i < map->nent; i++)
	    {
		ucs4 = map->ent[i].bmp;
		glyph = FT_Get_Char_Index (face, map->ent[i].encode);
		if (glyph &&
		    FcFreeTypeCheckGlyph (face, ucs4, glyph, blanks, &advance, using_strike))
		{
		    /*
		     * ignore glyphs with zero advance. They’re
		     * combining characters, and while their behaviour
		     * isn’t well defined for monospaced applications in
		     * Unicode, there are many fonts which include
		     * zero-width combining characters in otherwise
		     * monospaced fonts.
		     */
		    if (advance)
		    {
			if (!has_advance)
			{
			    has_advance = FcTrue;
			    advance_one = advance;
			}
			else if (!APPROXIMATELY_EQUAL (advance, advance_one))
			{
			    if (fixed_advance)
			    {
				dual_advance = FcTrue;
				fixed_advance = FcFalse;
				advance_two = advance;
			    }
			    else if (!APPROXIMATELY_EQUAL (advance, advance_two))
				dual_advance = FcFalse;
			}
		    }

		    leaf = FcCharSetFindLeafCreate (fcs, ucs4);
		    if (!leaf)
			goto bail1;
		    leaf->map[(ucs4 & 0xff) >> 5] |= (1 << (ucs4 & 0x1f));
#ifdef CHECK
		    if (ucs4 > font_max)
			font_max = ucs4;
#endif
		}
	    }
	}
	else
	{
            page = ~0;
            leaf = NULL;
            ucs4 = FT_Get_First_Char (face, &glyph);
            while (glyph != 0)
	    {
		if (FcFreeTypeCheckGlyph (face, ucs4, glyph, blanks, &advance, using_strike))
		{
		    if (advance)
		    {
			if (!has_advance)
			{
			    has_advance = FcTrue;
			    advance_one = advance;
			}
			else if (!APPROXIMATELY_EQUAL (advance, advance_one))
			{
			    if (fixed_advance)
			    {
				dual_advance = FcTrue;
				fixed_advance = FcFalse;
				advance_two = advance;
			    }
			    else if (!APPROXIMATELY_EQUAL (advance, advance_two))
				dual_advance = FcFalse;
			}
		    }

		    if ((ucs4 >> 8) != page)
		    {
			page = (ucs4 >> 8);
			leaf = FcCharSetFindLeafCreate (fcs, ucs4);
			if (!leaf)
			    goto bail1;
		    }
		    off = ucs4 & 0xff;
		    leaf->map[off >> 5] |= (1 << (off & 0x1f));
#ifdef CHECK
		    if (ucs4 > font_max)
			font_max = ucs4;
#endif
		}
		ucs4 = FT_Get_Next_Char (face, ucs4, &glyph);
	    }
#ifdef CHECK
	    for (ucs4 = 0; ucs4 < 0x10000; ucs4++)
	    {
		FcBool	    FT_Has, FC_Has;

		FT_Has = FT_Get_Char_Index (face, ucs4) != 0;
		FC_Has = FcCharSetHasChar (fcs, ucs4);
		if (FT_Has != FC_Has)
		{
		    printf ("0x%08x FT says %d FC says %d\n", ucs4, FT_Has, FC_Has);
		}
	    }
#endif
	}
    }
#if HAVE_FT_HAS_PS_GLYPH_NAMES
    /*
     * Add mapping from PS glyph names if available
     */
    if (FcFreeTypeUseNames (face))
    {
	FcChar8 name_buf[FC_GLYPHNAME_BUFLEN + 2];

	for (glyph = 0; glyph < (FT_UInt) face->num_glyphs; glyph++)
	{
	    if (FT_Get_Glyph_Name (face, glyph, name_buf, FC_GLYPHNAME_BUFLEN+1) == 0)
	    {
		ucs4 = FcGlyphNameToUcs4 (name_buf);
		if (ucs4 != 0xffff &&
		    FcFreeTypeCheckGlyph (face, ucs4, glyph, blanks, &advance, using_strike))
		{
		    if (advance)
		    {
			if (!has_advance)
			{
			    has_advance = FcTrue;
			    advance_one = advance;
			}
			else if (!APPROXIMATELY_EQUAL (advance, advance_one))
			{
			    if (fixed_advance)
			    {
				dual_advance = FcTrue;
				fixed_advance = FcFalse;
				advance_two = advance;
			    }
			    else if (!APPROXIMATELY_EQUAL (advance, advance_two))
				dual_advance = FcFalse;
			}
		    }
		    leaf = FcCharSetFindLeafCreate (fcs, ucs4);
		    if (!leaf)
			goto bail1;
		    leaf->map[(ucs4 & 0xff) >> 5] |= (1 << (ucs4 & 0x1f));
#ifdef CHECK
		    if (ucs4 > font_max)
			font_max = ucs4;
#endif
		}
	    }
	}
    }
#endif
#ifdef CHECK
    printf ("%d glyphs %d encoded\n", (int) face->num_glyphs, FcCharSetCount (fcs));
    for (ucs4 = 0; ucs4 <= font_max; ucs4++)
    {
	FcBool	has_char = (glyph = FcFreeTypeCharIndex (face, ucs4)) != 0;
	FcBool	has_bit = FcCharSetHasChar (fcs, ucs4);

	if (has_char && !has_bit)
	{
	    if (!FcFreeTypeCheckGlyph (face, ucs4, glyph, blanks, &advance, using_strike))
		printf ("Bitmap missing broken char 0x%x\n", ucs4);
	    else
		printf ("Bitmap missing char 0x%x\n", ucs4);
	}
	else if (!has_char && has_bit)
	    printf ("Bitmap extra char 0x%x\n", ucs4);
    }
#endif
    if (fixed_advance)
	*spacing = FC_MONO;
    else if (dual_advance && APPROXIMATELY_EQUAL (2 * FC_MIN (advance_one, advance_two), FC_MAX (advance_one, advance_two)))
        *spacing = FC_DUAL;
    else
	*spacing = FC_PROPORTIONAL;
    return fcs;
bail1:
    FcCharSetDestroy (fcs);
bail0:
    return 0;
}

FcCharSet *
FcFreeTypeCharSetAndSpacing (FT_Face face, FcBlanks *blanks, int *spacing)
{
    FcCharSet	*cs;

    /*
     * Check for bitmap-only ttf fonts that are missing the glyf table.
     * In that case, pick a size and look for glyphs in that size instead
     */
    if (!(face->face_flags & FT_FACE_FLAG_SCALABLE) &&
	face->num_fixed_sizes > 0 &&
	FT_Get_Sfnt_Table (face, ft_sfnt_head))
    {
	FT_Int  strike_index = 0;
	int	    i;

	/* Select the face closest to 16 pixels tall */
	for (i = 1; i < face->num_fixed_sizes; i++) {
	    if (abs (face->available_sizes[i].height - 16) <
		abs (face->available_sizes[strike_index].height - 16))
		strike_index = i;
	}
	cs = FcFreeTypeCharSetAndSpacingForSize (face, blanks, spacing, strike_index);
    }
    else
	cs = FcFreeTypeCharSetAndSpacingForSize (face, blanks, spacing, -1);
    return cs;
}

FcCharSet *
FcFreeTypeCharSet (FT_Face face, FcBlanks *blanks)
{
    int spacing;

    return FcFreeTypeCharSetAndSpacing (face, blanks, &spacing);
}


#define TTAG_GPOS  FT_MAKE_TAG( 'G', 'P', 'O', 'S' )
#define TTAG_GSUB  FT_MAKE_TAG( 'G', 'S', 'U', 'B' )
#define TTAG_SILF  FT_MAKE_TAG( 'S', 'i', 'l', 'f')

#define OTLAYOUT_HEAD	    "otlayout:"
#define OTLAYOUT_HEAD_LEN   9
#define OTLAYOUT_ID_LEN	    4
/* space + head + id */
#define OTLAYOUT_LEN	    (1 + OTLAYOUT_HEAD_LEN + OTLAYOUT_ID_LEN)

/*
 * This is a bit generous; the registry has only lower case and space
 * except for 'DFLT'.
 */
#define FcIsSpace(x)	    (040 == (x))
#define FcIsValidScript(x)  (FcIsLower(x) || FcIsUpper (x) || FcIsSpace(x))
			
static void
addtag(FcChar8 *complex_, FT_ULong tag)
{
    FcChar8 tagstring[OTLAYOUT_ID_LEN + 1];

    tagstring[0] = (FcChar8)(tag >> 24),
    tagstring[1] = (FcChar8)(tag >> 16),
    tagstring[2] = (FcChar8)(tag >> 8),
    tagstring[3] = (FcChar8)(tag);
    tagstring[4] = '\0';

    /* skip tags which aren't alphabetic, under the assumption that
     * they're probably broken
     */
    if (!FcIsValidScript(tagstring[0]) ||
	!FcIsValidScript(tagstring[1]) ||
	!FcIsValidScript(tagstring[2]) ||
	!FcIsValidScript(tagstring[3]))
	return;

    if (*complex_ != '\0')
	strcat ((char *) complex_, " ");
    strcat ((char *) complex_, OTLAYOUT_HEAD);
    strcat ((char *) complex_, (char *) tagstring);
}

static int
compareulong (const void *a, const void *b)
{
    const FT_ULong *ua = (const FT_ULong *) a;
    const FT_ULong *ub = (const FT_ULong *) b;
    return *ua - *ub;
}


static int
GetScriptTags(FT_Face face, FT_ULong tabletag, FT_ULong **stags)
{
    FT_ULong   cur_offset, new_offset, base_offset;
    FT_Stream  stream = face->stream;
    FT_Error   error;
    FT_UShort  n, p;
    int        script_count;

    if (!stream)
        return 0;

    if (( error = ftglue_face_goto_table( face, tabletag, stream ) ))
	return 0;

    base_offset = ftglue_stream_pos ( stream );

    /* skip version */

    if ( ftglue_stream_seek ( stream, base_offset + 4L ) || ftglue_stream_frame_enter( stream, 2L ) )
	return 0;

    new_offset = GET_UShort() + base_offset;

    ftglue_stream_frame_exit( stream );

    cur_offset = ftglue_stream_pos( stream );

    if ( ftglue_stream_seek( stream, new_offset ) != FT_Err_Ok )
	return 0;

    base_offset = ftglue_stream_pos( stream );

    if ( ftglue_stream_frame_enter( stream, 2L ) )
	return 0;

    script_count = GET_UShort ();

    ftglue_stream_frame_exit( stream );

    *stags = malloc(script_count * sizeof (FT_ULong));
    if (!stags)
	return 0;

    p = 0;
    for ( n = 0; n < script_count; n++ )
    {
        if ( ftglue_stream_frame_enter( stream, 6L ) )
	    goto Fail;

	(*stags)[p] = GET_ULong ();
	new_offset = GET_UShort () + base_offset;

        ftglue_stream_frame_exit( stream );

	cur_offset = ftglue_stream_pos( stream );

	error = ftglue_stream_seek( stream, new_offset );

	if ( error == FT_Err_Ok )
	    p++;

	(void)ftglue_stream_seek( stream, cur_offset );
    }

    if (!p)
	goto Fail;

    /* sort the tag list before returning it */
    qsort(*stags, script_count, sizeof(FT_ULong), compareulong);

    return script_count;

Fail:
    free(*stags);
    *stags = NULL;
    return 0;
}

static FcChar8 *
FcFontCapabilities(FT_Face face)
{
    FcBool issilgraphitefont = 0;
    FT_Error err;
    FT_ULong len = 0;
    FT_ULong *gsubtags=NULL, *gpostags=NULL;
    FT_UShort gsub_count=0, gpos_count=0;
    FT_ULong maxsize;
    FcChar8 *complex_ = NULL;
    int indx1 = 0, indx2 = 0;

    err = FT_Load_Sfnt_Table(face, TTAG_SILF, 0, 0, &len);
    issilgraphitefont = ( err == FT_Err_Ok);

    gpos_count = GetScriptTags(face, TTAG_GPOS, &gpostags);
    gsub_count = GetScriptTags(face, TTAG_GSUB, &gsubtags);

    if (!issilgraphitefont && !gsub_count && !gpos_count)
    	goto bail;

    maxsize = (((FT_ULong) gpos_count + (FT_ULong) gsub_count) * OTLAYOUT_LEN +
	       (issilgraphitefont ? 13 : 0));
    complex_ = malloc (sizeof (FcChar8) * maxsize);
    if (!complex_)
	goto bail;

    complex_[0] = '\0';
    if (issilgraphitefont)
        strcpy((char *) complex_, "ttable:Silf ");

    while ((indx1 < gsub_count) || (indx2 < gpos_count)) {
	if (indx1 == gsub_count) {
	    addtag(complex_, gpostags[indx2]);
	    indx2++;
	} else if ((indx2 == gpos_count) || (gsubtags[indx1] < gpostags[indx2])) {
	    addtag(complex_, gsubtags[indx1]);
	    indx1++;
	} else if (gsubtags[indx1] == gpostags[indx2]) {
	    addtag(complex_, gsubtags[indx1]);
	    indx1++;
	    indx2++;
	} else {
	    addtag(complex_, gpostags[indx2]);
	    indx2++;
	}
    }
    if (FcDebug () & FC_DBG_SCANV)
	printf("complex_ features in this font: %s\n", complex_);
bail:
    free(gsubtags);
    free(gpostags);
    return complex_;
}

#define __fcfreetype__
#include "fcaliastail.h"
#include "fcftaliastail.h"
#undef __fcfreetype__
