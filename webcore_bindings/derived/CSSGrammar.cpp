/* A Bison parser, made by GNU Bison 2.3.  */

/* Skeleton implementation for Bison's Yacc-like parsers in C

   Copyright (C) 1984, 1989, 1990, 2000, 2001, 2002, 2003, 2004, 2005, 2006
   Free Software Foundation, Inc.

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 2, or (at your option)
   any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor,
   Boston, MA 02110-1301, USA.  */

/* As a special exception, you may create a larger work that contains
   part or all of the Bison parser skeleton and distribute that work
   under terms of your choice, so long as that work isn't itself a
   parser generator using the skeleton or a modified version thereof
   as a parser skeleton.  Alternatively, if you modify or redistribute
   the parser skeleton itself, you may (at your option) remove this
   special exception, which will cause the skeleton and the resulting
   Bison output files to be licensed under the GNU General Public
   License without this special exception.

   This special exception was added by the Free Software Foundation in
   version 2.2 of Bison.  */

/* C LALR(1) parser skeleton written by Richard Stallman, by
   simplifying the original so-called "semantic" parser.  */

/* All symbols defined below should begin with yy or YY, to avoid
   infringing on user name space.  This should be done even for local
   variables, as they might otherwise be expanded by user macros.
   There are some unavoidable exceptions within include files to
   define necessary library symbols; they are noted "INFRINGES ON
   USER NAME SPACE" below.  */

/* Identify Bison output.  */
#define YYBISON 1

/* Bison version.  */
#define YYBISON_VERSION "2.3"

/* Skeleton name.  */
#define YYSKELETON_NAME "yacc.c"

/* Pure parsers.  */
#define YYPURE 1

/* Using locations.  */
#define YYLSP_NEEDED 0

/* Substitute the variable and function names.  */
#define yyparse cssyyparse
#define yylex   cssyylex
#define yyerror cssyyerror
#define yylval  cssyylval
#define yychar  cssyychar
#define yydebug cssyydebug
#define yynerrs cssyynerrs


/* Tokens.  */
#ifndef YYTOKENTYPE
# define YYTOKENTYPE
   /* Put the tokens into the symbol table, so that GDB and other debuggers
      know about them.  */
   enum yytokentype {
     TOKEN_EOF = 0,
     LOWEST_PREC = 258,
     UNIMPORTANT_TOK = 259,
     WHITESPACE = 260,
     SGML_CD = 261,
     INCLUDES = 262,
     DASHMATCH = 263,
     BEGINSWITH = 264,
     ENDSWITH = 265,
     CONTAINS = 266,
     STRING = 267,
     IDENT = 268,
     NTH = 269,
     HEX = 270,
     IDSEL = 271,
     IMPORT_SYM = 272,
     PAGE_SYM = 273,
     MEDIA_SYM = 274,
     FONT_FACE_SYM = 275,
     CHARSET_SYM = 276,
     NAMESPACE_SYM = 277,
     WEBKIT_RULE_SYM = 278,
     WEBKIT_DECLS_SYM = 279,
     WEBKIT_KEYFRAME_RULE_SYM = 280,
     WEBKIT_KEYFRAMES_SYM = 281,
     WEBKIT_VALUE_SYM = 282,
     WEBKIT_MEDIAQUERY_SYM = 283,
     WEBKIT_SELECTOR_SYM = 284,
     WEBKIT_REGION_RULE_SYM = 285,
     WEBKIT_VIEWPORT_RULE_SYM = 286,
     TOPLEFTCORNER_SYM = 287,
     TOPLEFT_SYM = 288,
     TOPCENTER_SYM = 289,
     TOPRIGHT_SYM = 290,
     TOPRIGHTCORNER_SYM = 291,
     BOTTOMLEFTCORNER_SYM = 292,
     BOTTOMLEFT_SYM = 293,
     BOTTOMCENTER_SYM = 294,
     BOTTOMRIGHT_SYM = 295,
     BOTTOMRIGHTCORNER_SYM = 296,
     LEFTTOP_SYM = 297,
     LEFTMIDDLE_SYM = 298,
     LEFTBOTTOM_SYM = 299,
     RIGHTTOP_SYM = 300,
     RIGHTMIDDLE_SYM = 301,
     RIGHTBOTTOM_SYM = 302,
     ATKEYWORD = 303,
     IMPORTANT_SYM = 304,
     MEDIA_ONLY = 305,
     MEDIA_NOT = 306,
     MEDIA_AND = 307,
     REMS = 308,
     CHS = 309,
     QEMS = 310,
     EMS = 311,
     EXS = 312,
     PXS = 313,
     CMS = 314,
     MMS = 315,
     INS = 316,
     PTS = 317,
     PCS = 318,
     DEGS = 319,
     RADS = 320,
     GRADS = 321,
     TURNS = 322,
     MSECS = 323,
     SECS = 324,
     HERTZ = 325,
     KHERTZ = 326,
     DIMEN = 327,
     INVALIDDIMEN = 328,
     PERCENTAGE = 329,
     FLOATTOKEN = 330,
     INTEGER = 331,
     VW = 332,
     VH = 333,
     VMIN = 334,
     VMAX = 335,
     DPPX = 336,
     DPI = 337,
     DPCM = 338,
     FR = 339,
     URI = 340,
     FUNCTION = 341,
     ANYFUNCTION = 342,
     NOTFUNCTION = 343,
     CALCFUNCTION = 344,
     MINFUNCTION = 345,
     MAXFUNCTION = 346,
     UNICODERANGE = 347,
     WEBKIT_FILTER_RULE_SYM = 348
   };
#endif
/* Tokens.  */
#define TOKEN_EOF 0
#define LOWEST_PREC 258
#define UNIMPORTANT_TOK 259
#define WHITESPACE 260
#define SGML_CD 261
#define INCLUDES 262
#define DASHMATCH 263
#define BEGINSWITH 264
#define ENDSWITH 265
#define CONTAINS 266
#define STRING 267
#define IDENT 268
#define NTH 269
#define HEX 270
#define IDSEL 271
#define IMPORT_SYM 272
#define PAGE_SYM 273
#define MEDIA_SYM 274
#define FONT_FACE_SYM 275
#define CHARSET_SYM 276
#define NAMESPACE_SYM 277
#define WEBKIT_RULE_SYM 278
#define WEBKIT_DECLS_SYM 279
#define WEBKIT_KEYFRAME_RULE_SYM 280
#define WEBKIT_KEYFRAMES_SYM 281
#define WEBKIT_VALUE_SYM 282
#define WEBKIT_MEDIAQUERY_SYM 283
#define WEBKIT_SELECTOR_SYM 284
#define WEBKIT_REGION_RULE_SYM 285
#define WEBKIT_VIEWPORT_RULE_SYM 286
#define TOPLEFTCORNER_SYM 287
#define TOPLEFT_SYM 288
#define TOPCENTER_SYM 289
#define TOPRIGHT_SYM 290
#define TOPRIGHTCORNER_SYM 291
#define BOTTOMLEFTCORNER_SYM 292
#define BOTTOMLEFT_SYM 293
#define BOTTOMCENTER_SYM 294
#define BOTTOMRIGHT_SYM 295
#define BOTTOMRIGHTCORNER_SYM 296
#define LEFTTOP_SYM 297
#define LEFTMIDDLE_SYM 298
#define LEFTBOTTOM_SYM 299
#define RIGHTTOP_SYM 300
#define RIGHTMIDDLE_SYM 301
#define RIGHTBOTTOM_SYM 302
#define ATKEYWORD 303
#define IMPORTANT_SYM 304
#define MEDIA_ONLY 305
#define MEDIA_NOT 306
#define MEDIA_AND 307
#define REMS 308
#define CHS 309
#define QEMS 310
#define EMS 311
#define EXS 312
#define PXS 313
#define CMS 314
#define MMS 315
#define INS 316
#define PTS 317
#define PCS 318
#define DEGS 319
#define RADS 320
#define GRADS 321
#define TURNS 322
#define MSECS 323
#define SECS 324
#define HERTZ 325
#define KHERTZ 326
#define DIMEN 327
#define INVALIDDIMEN 328
#define PERCENTAGE 329
#define FLOATTOKEN 330
#define INTEGER 331
#define VW 332
#define VH 333
#define VMIN 334
#define VMAX 335
#define DPPX 336
#define DPI 337
#define DPCM 338
#define FR 339
#define URI 340
#define FUNCTION 341
#define ANYFUNCTION 342
#define NOTFUNCTION 343
#define CALCFUNCTION 344
#define MINFUNCTION 345
#define MAXFUNCTION 346
#define UNICODERANGE 347
#define WEBKIT_FILTER_RULE_SYM 348




/* Copy the first part of user declarations.  */
#line 1 "./CSSGrammar.y"


/*
 *  Copyright (C) 2002-2003 Lars Knoll (knoll@kde.org)
 *  Copyright (C) 2004, 2005, 2006, 2007, 2008, 2009, 2010 Apple Inc. All rights reserved.
 *  Copyright (C) 2006 Alexey Proskuryakov (ap@nypop.com)
 *  Copyright (C) 2008 Eric Seidel <eric@webkit.org>
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
 *
 */

#include "config.h"

#include "CSSParser.h"
#include "CSSParserMode.h"
#include "CSSPrimitiveValue.h"
#include "CSSPropertyNames.h"
#include "CSSSelector.h"
#include "CSSSelectorList.h"
#include "Document.h"
#include "HTMLNames.h"
#include "MediaList.h"
#include "MediaQueryExp.h"
#include "StyleRule.h"
#include "StyleSheetContents.h"
#include "WebKitCSSKeyframeRule.h"
#include "WebKitCSSKeyframesRule.h"
#include <wtf/FastMalloc.h>
#include <stdlib.h>
#include <string.h>

using namespace WebCore;
using namespace HTMLNames;

#define YYMALLOC fastMalloc
#define YYFREE fastFree

#define YYENABLE_NLS 0
#define YYLTYPE_IS_TRIVIAL 1
#define YYMAXDEPTH 10000
#define YYDEBUG 0

#if YYDEBUG > 0
#include <wtf/text/CString.h>
#define YYPRINT(File,Type,Value) if (isCSSTokenAString(Type)) YYFPRINTF(File, "%s", String((Value).string).utf8().data())
#endif



/* Enabling traces.  */
#ifndef YYDEBUG
# define YYDEBUG 0
#endif

/* Enabling verbose error messages.  */
#ifdef YYERROR_VERBOSE
# undef YYERROR_VERBOSE
# define YYERROR_VERBOSE 1
#else
# define YYERROR_VERBOSE 0
#endif

/* Enabling the token table.  */
#ifndef YYTOKEN_TABLE
# define YYTOKEN_TABLE 0
#endif

#if ! defined YYSTYPE && ! defined YYSTYPE_IS_DECLARED
typedef union YYSTYPE
#line 67 "./CSSGrammar.y"
{
    double number;
    CSSParserString string;
    CSSSelector::MarginBoxType marginBox;
    CSSParserValue value;

#line 196 "./CSSGrammar.y"
 CSSSelector::Relation relation; 
#line 199 "./CSSGrammar.y"
 StyleRuleBase* rule; 
#line 203 "./CSSGrammar.y"
 Vector<RefPtr<StyleRuleBase>>* ruleList; 
#line 211 "./CSSGrammar.y"
 MediaQuerySet* mediaList; 
#line 215 "./CSSGrammar.y"
 MediaQuery* mediaQuery; 
#line 219 "./CSSGrammar.y"
 MediaQuery::Restrictor mediaQueryRestrictor; 
#line 222 "./CSSGrammar.y"
 MediaQueryExp* mediaQueryExp; 
#line 226 "./CSSGrammar.y"
 Vector<OwnPtr<MediaQueryExp>>* mediaQueryExpList; 
#line 232 "./CSSGrammar.y"
 StyleKeyframe* keyframe; 
#line 236 "./CSSGrammar.y"
 Vector<RefPtr<StyleKeyframe>>* keyframeRuleList; 
#line 247 "./CSSGrammar.y"
 CSSPropertyID id; 
#line 250 "./CSSGrammar.y"
 CSSParserSelector* selector; 
#line 254 "./CSSGrammar.y"
 Vector<OwnPtr<CSSParserSelector>>* selectorList; 
#line 258 "./CSSGrammar.y"
 bool boolean; 
#line 261 "./CSSGrammar.y"
 CSSSelector::Match match; 
#line 264 "./CSSGrammar.y"
 int integer; 
#line 267 "./CSSGrammar.y"
 char character; 
#line 270 "./CSSGrammar.y"
 CSSParserValueList* valueList; 
#line 278 "./CSSGrammar.y"
 CSSParser::Location location; }
/* Line 193 of yacc.c.  */
#line 399 "./CSSGrammar.cpp"
	YYSTYPE;
# define yystype YYSTYPE /* obsolescent; will be withdrawn */
# define YYSTYPE_IS_DECLARED 1
# define YYSTYPE_IS_TRIVIAL 1
#endif



/* Copy the second part of user declarations.  */
#line 74 "./CSSGrammar.y"


static inline int cssyyerror(void*, const char*)
{
    return 1;
}


/* Line 216 of yacc.c.  */
#line 419 "./CSSGrammar.cpp"

#ifdef short
# undef short
#endif

#ifdef YYTYPE_UINT8
typedef YYTYPE_UINT8 yytype_uint8;
#else
typedef unsigned char yytype_uint8;
#endif

#ifdef YYTYPE_INT8
typedef YYTYPE_INT8 yytype_int8;
#elif (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
typedef signed char yytype_int8;
#else
typedef short int yytype_int8;
#endif

#ifdef YYTYPE_UINT16
typedef YYTYPE_UINT16 yytype_uint16;
#else
typedef unsigned short int yytype_uint16;
#endif

#ifdef YYTYPE_INT16
typedef YYTYPE_INT16 yytype_int16;
#else
typedef short int yytype_int16;
#endif

#ifndef YYSIZE_T
# ifdef __SIZE_TYPE__
#  define YYSIZE_T __SIZE_TYPE__
# elif defined size_t
#  define YYSIZE_T size_t
# elif ! defined YYSIZE_T && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
#  include <stddef.h> /* INFRINGES ON USER NAME SPACE */
#  define YYSIZE_T size_t
# else
#  define YYSIZE_T unsigned int
# endif
#endif

#define YYSIZE_MAXIMUM ((YYSIZE_T) -1)

#ifndef YY_
# if defined YYENABLE_NLS && YYENABLE_NLS
#  if ENABLE_NLS
#   include <libintl.h> /* INFRINGES ON USER NAME SPACE */
#   define YY_(msgid) dgettext ("bison-runtime", msgid)
#  endif
# endif
# ifndef YY_
#  define YY_(msgid) msgid
# endif
#endif

/* Suppress unused-variable warnings by "using" E.  */
#if ! defined lint || defined __GNUC__
# define YYUSE(e) ((void) (e))
#else
# define YYUSE(e) /* empty */
#endif

/* Identity function, used to suppress warnings about constant conditions.  */
#ifndef lint
# define YYID(n) (n)
#else
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static int
YYID (int i)
#else
static int
YYID (i)
    int i;
#endif
{
  return i;
}
#endif

#if ! defined yyoverflow || YYERROR_VERBOSE

/* The parser invokes alloca or malloc; define the necessary symbols.  */

# ifdef YYSTACK_USE_ALLOCA
#  if YYSTACK_USE_ALLOCA
#   ifdef __GNUC__
#    define YYSTACK_ALLOC __builtin_alloca
#   elif defined __BUILTIN_VA_ARG_INCR
#    include <alloca.h> /* INFRINGES ON USER NAME SPACE */
#   elif defined _AIX
#    define YYSTACK_ALLOC __alloca
#   elif defined _MSC_VER
#    include <malloc.h> /* INFRINGES ON USER NAME SPACE */
#    define alloca _alloca
#   else
#    define YYSTACK_ALLOC alloca
#    if ! defined _ALLOCA_H && ! defined _STDLIB_H && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
#     include <stdlib.h> /* INFRINGES ON USER NAME SPACE */
#     ifndef _STDLIB_H
#      define _STDLIB_H 1
#     endif
#    endif
#   endif
#  endif
# endif

# ifdef YYSTACK_ALLOC
   /* Pacify GCC's `empty if-body' warning.  */
#  define YYSTACK_FREE(Ptr) do { /* empty */; } while (YYID (0))
#  ifndef YYSTACK_ALLOC_MAXIMUM
    /* The OS might guarantee only one guard page at the bottom of the stack,
       and a page size can be as small as 4096 bytes.  So we cannot safely
       invoke alloca (N) if N exceeds 4096.  Use a slightly smaller number
       to allow for a few compiler-allocated temporary stack slots.  */
#   define YYSTACK_ALLOC_MAXIMUM 4032 /* reasonable circa 2006 */
#  endif
# else
#  define YYSTACK_ALLOC YYMALLOC
#  define YYSTACK_FREE YYFREE
#  ifndef YYSTACK_ALLOC_MAXIMUM
#   define YYSTACK_ALLOC_MAXIMUM YYSIZE_MAXIMUM
#  endif
#  if (defined __cplusplus && ! defined _STDLIB_H \
       && ! ((defined YYMALLOC || defined malloc) \
	     && (defined YYFREE || defined free)))
#   include <stdlib.h> /* INFRINGES ON USER NAME SPACE */
#   ifndef _STDLIB_H
#    define _STDLIB_H 1
#   endif
#  endif
#  ifndef YYMALLOC
#   define YYMALLOC malloc
#   if ! defined malloc && ! defined _STDLIB_H && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
void *malloc (YYSIZE_T); /* INFRINGES ON USER NAME SPACE */
#   endif
#  endif
#  ifndef YYFREE
#   define YYFREE free
#   if ! defined free && ! defined _STDLIB_H && (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
void free (void *); /* INFRINGES ON USER NAME SPACE */
#   endif
#  endif
# endif
#endif /* ! defined yyoverflow || YYERROR_VERBOSE */


#if (! defined yyoverflow \
     && (! defined __cplusplus \
	 || (defined YYSTYPE_IS_TRIVIAL && YYSTYPE_IS_TRIVIAL)))

/* A type that is properly aligned for any stack member.  */
union yyalloc
{
  yytype_int16 yyss;
  YYSTYPE yyvs;
  };

/* The size of the maximum gap between one aligned stack and the next.  */
# define YYSTACK_GAP_MAXIMUM (sizeof (union yyalloc) - 1)

/* The size of an array large to enough to hold all stacks, each with
   N elements.  */
# define YYSTACK_BYTES(N) \
     ((N) * (sizeof (yytype_int16) + sizeof (YYSTYPE)) \
      + YYSTACK_GAP_MAXIMUM)

/* Copy COUNT objects from FROM to TO.  The source and destination do
   not overlap.  */
# ifndef YYCOPY
#  if defined __GNUC__ && 1 < __GNUC__
#   define YYCOPY(To, From, Count) \
      __builtin_memcpy (To, From, (Count) * sizeof (*(From)))
#  else
#   define YYCOPY(To, From, Count)		\
      do					\
	{					\
	  YYSIZE_T yyi;				\
	  for (yyi = 0; yyi < (Count); yyi++)	\
	    (To)[yyi] = (From)[yyi];		\
	}					\
      while (YYID (0))
#  endif
# endif

/* Relocate STACK from its old location to the new one.  The
   local variables YYSIZE and YYSTACKSIZE give the old and new number of
   elements in the stack, and YYPTR gives the new location of the
   stack.  Advance YYPTR to a properly aligned location for the next
   stack.  */
# define YYSTACK_RELOCATE(Stack)					\
    do									\
      {									\
	YYSIZE_T yynewbytes;						\
	YYCOPY (&yyptr->Stack, Stack, yysize);				\
	Stack = &yyptr->Stack;						\
	yynewbytes = yystacksize * sizeof (*Stack) + YYSTACK_GAP_MAXIMUM; \
	yyptr += yynewbytes / sizeof (*yyptr);				\
      }									\
    while (YYID (0))

#endif

/* YYFINAL -- State number of the termination state.  */
#define YYFINAL  21
/* YYLAST -- Last index in YYTABLE.  */
#define YYLAST   1561

/* YYNTOKENS -- Number of terminals.  */
#define YYNTOKENS  114
/* YYNNTS -- Number of nonterminals.  */
#define YYNNTS  118
/* YYNRULES -- Number of rules.  */
#define YYNRULES  334
/* YYNRULES -- Number of states.  */
#define YYNSTATES  595

/* YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.  */
#define YYUNDEFTOK  2
#define YYMAXUTOK   348

#define YYTRANSLATE(YYX)						\
  ((unsigned int) (YYX) <= YYMAXUTOK ? yytranslate[YYX] : YYUNDEFTOK)

/* YYTRANSLATE[YYLEX] -- Bison symbol number corresponding to YYLEX.  */
static const yytype_uint8 yytranslate[] =
{
       0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,   112,     2,   113,     2,     2,
     103,   101,    20,   105,   104,   108,    18,   111,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,    17,   102,
       2,   110,   107,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,    19,     2,   109,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,    99,    21,   100,   106,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     1,     2,     3,     4,
       5,     6,     7,     8,     9,    10,    11,    12,    13,    14,
      15,    16,    22,    23,    24,    25,    26,    27,    28,    29,
      30,    31,    32,    33,    34,    35,    36,    37,    38,    39,
      40,    41,    42,    43,    44,    45,    46,    47,    48,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    58,    59,
      60,    61,    62,    63,    64,    65,    66,    67,    68,    69,
      70,    71,    72,    73,    74,    75,    76,    77,    78,    79,
      80,    81,    82,    83,    84,    85,    86,    87,    88,    89,
      90,    91,    92,    93,    94,    95,    96,    97,    98
};

#if YYDEBUG
/* YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in
   YYRHS.  */
static const yytype_uint16 yyprhs[] =
{
       0,     0,     3,     8,    11,    14,    17,    20,    23,    26,
      33,    40,    46,    52,    58,    64,    66,    69,    70,    73,
      74,    77,    80,    81,    83,    85,    87,    89,    91,    97,
     101,   105,   111,   115,   116,   120,   122,   124,   126,   128,
     130,   132,   134,   136,   138,   140,   142,   144,   146,   147,
     151,   152,   156,   158,   160,   162,   164,   166,   168,   170,
     172,   174,   176,   178,   180,   182,   183,   191,   199,   207,
     212,   217,   224,   231,   235,   239,   240,   243,   245,   247,
     248,   253,   263,   265,   271,   272,   276,   277,   279,   281,
     283,   289,   290,   292,   294,   299,   302,   303,   304,   306,
     317,   326,   331,   332,   343,   345,   347,   348,   352,   359,
     361,   367,   370,   372,   374,   375,   386,   391,   396,   398,
     401,   403,   404,   406,   411,   412,   420,   422,   424,   426,
     428,   430,   432,   434,   436,   438,   440,   442,   444,   446,
     448,   450,   452,   453,   462,   467,   472,   473,   484,   485,
     496,   499,   502,   505,   507,   508,   510,   512,   514,   515,
     516,   517,   527,   528,   530,   537,   540,   543,   545,   547,
     550,   554,   557,   559,   562,   565,   567,   570,   572,   575,
     579,   582,   584,   590,   593,   595,   597,   599,   602,   605,
     607,   609,   611,   613,   615,   618,   624,   634,   641,   652,
     654,   656,   658,   660,   662,   664,   666,   668,   671,   674,
     678,   685,   692,   700,   707,   714,   715,   717,   720,   722,
     724,   727,   731,   735,   740,   745,   749,   755,   758,   765,
     769,   774,   778,   781,   784,   785,   787,   790,   792,   796,
     800,   803,   806,   807,   810,   814,   817,   820,   823,   827,
     830,   833,   836,   839,   842,   845,   848,   851,   853,   855,
     857,   859,   861,   863,   865,   867,   869,   871,   873,   875,
     877,   879,   881,   883,   885,   887,   889,   891,   893,   895,
     897,   899,   901,   903,   905,   907,   909,   911,   916,   920,
     925,   927,   930,   934,   938,   942,   946,   947,   949,   955,
     957,   960,   962,   966,   970,   972,   975,   981,   987,   992,
     994,   996,  1001,  1006,  1008,  1011,  1015,  1019,  1022,  1026,
    1030,  1034,  1038,  1040,  1042,  1044,  1046,  1048,  1050,  1052,
    1053,  1054,  1057,  1060,  1063
};

/* YYRHS -- A `-1'-separated list of the rules' RHS.  */
static const yytype_int16 yyrhs[] =
{
     115,     0,    -1,   123,   125,   124,   130,    -1,   116,   123,
      -1,   118,   123,    -1,   119,   123,    -1,   120,   123,    -1,
     121,   123,    -1,   117,   123,    -1,    28,    99,   123,   131,
     123,   100,    -1,    30,    99,   123,   159,   123,   100,    -1,
      29,    99,   178,   199,   100,    -1,    32,    99,   123,   206,
     100,    -1,    33,     5,   123,   148,   100,    -1,    34,    99,
     123,   184,   100,    -1,     5,    -1,   122,     5,    -1,    -1,
     123,     5,    -1,    -1,   124,     6,    -1,   124,     5,    -1,
      -1,   128,    -1,   100,    -1,     0,    -1,   101,    -1,     0,
      -1,    26,   123,    12,   123,   102,    -1,    26,     1,   226,
      -1,    26,     1,   102,    -1,    26,   123,    12,   123,   102,
      -1,    26,   123,   102,    -1,    -1,   130,   132,   124,    -1,
     182,    -1,   154,    -1,   163,    -1,   170,    -1,   156,    -1,
     140,    -1,   139,    -1,   172,    -1,   174,    -1,   131,    -1,
     129,    -1,   225,    -1,   224,    -1,    -1,   133,   136,   124,
      -1,    -1,   134,   135,   124,    -1,   182,    -1,   163,    -1,
     170,    -1,   154,    -1,   156,    -1,   174,    -1,   135,    -1,
     225,    -1,   224,    -1,   140,    -1,   139,    -1,   172,    -1,
     123,    -1,    -1,   138,    22,   137,   142,   123,   149,   102,
      -1,   138,    22,   137,   142,   123,   149,     0,    -1,   138,
      22,   137,   142,   123,   149,   226,    -1,   138,    22,     1,
     102,    -1,   138,    22,     1,   226,    -1,    27,   123,   141,
     142,   123,   102,    -1,    27,   123,   141,   142,   123,   226,
      -1,    27,     1,   226,    -1,    27,     1,   102,    -1,    -1,
      13,   123,    -1,    12,    -1,    90,    -1,    -1,    17,   123,
     206,   123,    -1,   147,   123,   103,   123,    13,   123,   143,
     101,   123,    -1,   144,    -1,   145,   123,    57,   123,   144,
      -1,    -1,    57,   123,   145,    -1,    -1,    55,    -1,    56,
      -1,   145,    -1,   147,   123,    13,   123,   146,    -1,    -1,
     150,    -1,   148,    -1,   150,   104,   123,   148,    -1,   150,
       1,    -1,    -1,    -1,   123,    -1,   152,    24,   123,   150,
     180,    99,   151,   123,   133,   223,    -1,   152,    24,   153,
      99,   151,   123,   133,   223,    -1,   152,    24,   153,   102,
      -1,    -1,   155,    31,   123,   157,   153,    99,   151,   123,
     158,   126,    -1,    13,    -1,    12,    -1,    -1,   158,   159,
     123,    -1,   160,   123,    99,   123,   199,   126,    -1,   161,
      -1,   160,   123,   104,   123,   161,    -1,   176,    79,    -1,
      13,    -1,     1,    -1,    -1,   162,    23,   123,   164,   153,
      99,   151,   178,   165,   126,    -1,   162,    23,     1,   226,
      -1,   162,    23,     1,   102,    -1,    13,    -1,    13,   197,
      -1,   197,    -1,    -1,   199,    -1,   165,   166,   123,   199,
      -1,    -1,   168,   167,   123,    99,   123,   199,   126,    -1,
      37,    -1,    38,    -1,    39,    -1,    40,    -1,    41,    -1,
      42,    -1,    43,    -1,    44,    -1,    45,    -1,    46,    -1,
      47,    -1,    48,    -1,    49,    -1,    50,    -1,    51,    -1,
      52,    -1,    -1,   169,    25,   153,    99,   151,   178,   199,
     126,    -1,   169,    25,     1,   226,    -1,   169,    25,     1,
     102,    -1,    -1,   171,    35,   123,   184,   180,    99,   151,
     123,   134,   223,    -1,    -1,   173,    98,   123,    13,   153,
      99,   151,   178,   199,   126,    -1,   105,   123,    -1,   106,
     123,    -1,   107,   123,    -1,   177,    -1,    -1,   108,    -1,
     105,    -1,   123,    -1,    -1,    -1,    -1,   179,   184,   181,
     180,    99,   151,   178,   199,   126,    -1,    -1,   186,    -1,
     184,   181,   104,   123,   183,   186,    -1,   184,     1,    -1,
     186,     5,    -1,   188,    -1,   185,    -1,   185,   188,    -1,
     186,   175,   188,    -1,   186,     1,    -1,    21,    -1,    20,
      21,    -1,    13,    21,    -1,   190,    -1,   190,   191,    -1,
     191,    -1,   187,   190,    -1,   187,   190,   191,    -1,   187,
     191,    -1,   188,    -1,   189,   123,   104,   123,   188,    -1,
     189,     1,    -1,    13,    -1,    20,    -1,   192,    -1,   191,
     192,    -1,   191,     1,    -1,    16,    -1,    15,    -1,   193,
      -1,   194,    -1,   198,    -1,    18,    13,    -1,    19,   123,
      13,   123,   109,    -1,    19,   123,    13,   123,   195,   123,
     196,   123,   109,    -1,    19,   123,   187,    13,   123,   109,
      -1,    19,   123,   187,    13,   123,   195,   123,   196,   123,
     109,    -1,   110,    -1,     7,    -1,     8,    -1,     9,    -1,
      10,    -1,    11,    -1,    13,    -1,    12,    -1,    17,    13,
      -1,    17,    13,    -1,    17,    17,    13,    -1,    17,    92,
     123,   189,   123,   101,    -1,    17,    91,   123,    14,   123,
     101,    -1,    17,    91,   123,   176,    81,   123,   101,    -1,
      17,    91,   123,    13,   123,   101,    -1,    17,    93,   123,
     188,   123,   101,    -1,    -1,   202,    -1,   200,   202,    -1,
     200,    -1,   201,    -1,   200,   201,    -1,   202,   102,   123,
      -1,   201,   102,   123,    -1,   200,   202,   102,   123,    -1,
     200,   201,   102,   123,    -1,     1,   230,   231,    -1,   204,
      17,   123,   206,   205,    -1,   204,   203,    -1,   204,    17,
     123,   206,   205,   203,    -1,    54,   123,   203,    -1,   204,
      17,   123,   203,    -1,     1,   230,   231,    -1,    13,   123,
      -1,    54,   123,    -1,    -1,   207,    -1,   207,   208,    -1,
     210,    -1,   207,   209,   210,    -1,     1,   230,   231,    -1,
     111,   123,    -1,   104,   123,    -1,    -1,   211,   123,    -1,
     177,   211,   123,    -1,    12,   123,    -1,    13,   123,    -1,
      77,   123,    -1,   177,    77,   123,    -1,    90,   123,    -1,
      97,   123,    -1,    15,   123,    -1,   112,   123,    -1,   212,
     123,    -1,   220,   123,    -1,   222,   123,    -1,   113,   123,
      -1,    81,    -1,    80,    -1,    79,    -1,    63,    -1,    64,
      -1,    65,    -1,    66,    -1,    67,    -1,    68,    -1,    69,
      -1,    70,    -1,    71,    -1,    72,    -1,    73,    -1,    74,
      -1,    75,    -1,    76,    -1,    61,    -1,    60,    -1,    62,
      -1,    58,    -1,    59,    -1,    82,    -1,    83,    -1,    84,
      -1,    85,    -1,    86,    -1,    87,    -1,    88,    -1,    89,
      -1,    91,   123,   206,   127,    -1,    91,   123,   127,    -1,
      91,   123,   208,   127,    -1,   211,    -1,   177,   211,    -1,
     122,   105,   122,    -1,   122,   108,   122,    -1,   215,    20,
     123,    -1,   215,   111,   123,    -1,    -1,     5,    -1,   103,
     123,   217,   215,   127,    -1,   218,    -1,   218,   208,    -1,
     213,    -1,   217,   214,   213,    -1,   217,   214,   216,    -1,
     216,    -1,   217,   215,    -1,   219,   104,   123,   217,   215,
      -1,    94,   123,   217,   215,   127,    -1,    94,   123,   208,
     127,    -1,    95,    -1,    96,    -1,   221,   123,   219,   127,
      -1,   221,   123,   208,   127,    -1,   126,    -1,     1,   126,
      -1,    53,     1,   226,    -1,    53,     1,   102,    -1,     1,
     226,    -1,    99,   231,   126,    -1,    19,   231,   109,    -1,
      19,   231,     0,    -1,   229,   231,   127,    -1,   103,    -1,
      91,    -1,    94,    -1,    95,    -1,    96,    -1,    92,    -1,
      93,    -1,    -1,    -1,   231,     1,    -1,   231,   226,    -1,
     231,   227,    -1,   231,   228,    -1
};

/* YYRLINE[YYN] -- source line where rule number YYN was defined.  */
static const yytype_uint16 yyrline[] =
{
       0,   287,   287,   288,   289,   290,   291,   292,   293,   299,
     301,   303,   306,   317,   320,   328,   328,   330,   330,   332,
     332,   332,   334,   334,   336,   336,   338,   338,   341,   347,
     348,   352,   352,   354,   356,   365,   366,   367,   368,   369,
     370,   371,   372,   373,   378,   382,   383,   384,   388,   389,
     400,   401,   412,   413,   414,   415,   416,   424,   428,   428,
     428,   428,   428,   428,   431,   438,   444,   447,   450,   456,
     460,   467,   468,   469,   470,   473,   473,   475,   475,   477,
     477,   480,   494,   498,   505,   508,   514,   517,   520,   526,
     530,   536,   536,   539,   544,   552,   560,   566,   572,   578,
     581,   584,   590,   596,   601,   601,   604,   605,   612,   615,
     619,   628,   629,   641,   647,   653,   665,   669,   676,   680,
     687,   692,   698,   698,   701,   701,   709,   712,   715,   718,
     721,   724,   727,   730,   733,   736,   739,   742,   745,   748,
     751,   754,   760,   766,   769,   773,   779,   785,   799,   806,
     815,   816,   817,   820,   820,   822,   822,   824,   827,   833,
     835,   838,   844,   847,   855,   865,   872,   875,   876,   877,
     886,   895,   902,   903,   904,   908,   911,   916,   921,   924,
     929,   937,   944,   953,   960,   965,   972,   973,   980,   987,
     994,  1005,  1006,  1007,  1011,  1021,  1026,  1032,  1037,  1046,
    1049,  1052,  1055,  1058,  1061,  1066,  1066,  1069,  1080,  1089,
    1098,  1111,  1121,  1131,  1150,  1168,  1169,  1170,  1171,  1172,
    1173,  1177,  1181,  1185,  1191,  1198,  1204,  1220,  1221,  1227,
    1231,  1238,  1240,  1242,  1242,  1244,  1244,  1247,  1251,  1268,
    1270,  1270,  1270,  1273,  1274,  1275,  1276,  1282,  1283,  1284,
    1285,  1286,  1287,  1289,  1290,  1291,  1292,  1298,  1299,  1300,
    1301,  1302,  1303,  1304,  1305,  1306,  1307,  1308,  1309,  1310,
    1311,  1312,  1313,  1314,  1315,  1316,  1317,  1318,  1325,  1326,
    1327,  1328,  1329,  1330,  1331,  1332,  1333,  1337,  1345,  1353,
    1364,  1365,  1374,  1377,  1380,  1383,  1388,  1388,  1391,  1406,
    1406,  1409,  1413,  1429,  1443,  1447,  1448,  1465,  1473,  1481,
    1481,  1484,  1492,  1501,  1501,  1503,  1503,  1505,  1507,  1509,
    1509,  1511,  1514,  1514,  1514,  1514,  1514,  1514,  1514,  1520,
    1522,  1524,  1525,  1526,  1527
};
#endif

#if YYDEBUG || YYERROR_VERBOSE || YYTOKEN_TABLE
/* YYTNAME[SYMBOL-NUM] -- String name of the symbol SYMBOL-NUM.
   First, the terminals, then, starting at YYNTOKENS, nonterminals.  */
static const char *const yytname[] =
{
  "TOKEN_EOF", "error", "$undefined", "LOWEST_PREC", "UNIMPORTANT_TOK",
  "WHITESPACE", "SGML_CD", "INCLUDES", "DASHMATCH", "BEGINSWITH",
  "ENDSWITH", "CONTAINS", "STRING", "IDENT", "NTH", "HEX", "IDSEL", "':'",
  "'.'", "'['", "'*'", "'|'", "IMPORT_SYM", "PAGE_SYM", "MEDIA_SYM",
  "FONT_FACE_SYM", "CHARSET_SYM", "NAMESPACE_SYM", "WEBKIT_RULE_SYM",
  "WEBKIT_DECLS_SYM", "WEBKIT_KEYFRAME_RULE_SYM", "WEBKIT_KEYFRAMES_SYM",
  "WEBKIT_VALUE_SYM", "WEBKIT_MEDIAQUERY_SYM", "WEBKIT_SELECTOR_SYM",
  "WEBKIT_REGION_RULE_SYM", "WEBKIT_VIEWPORT_RULE_SYM",
  "TOPLEFTCORNER_SYM", "TOPLEFT_SYM", "TOPCENTER_SYM", "TOPRIGHT_SYM",
  "TOPRIGHTCORNER_SYM", "BOTTOMLEFTCORNER_SYM", "BOTTOMLEFT_SYM",
  "BOTTOMCENTER_SYM", "BOTTOMRIGHT_SYM", "BOTTOMRIGHTCORNER_SYM",
  "LEFTTOP_SYM", "LEFTMIDDLE_SYM", "LEFTBOTTOM_SYM", "RIGHTTOP_SYM",
  "RIGHTMIDDLE_SYM", "RIGHTBOTTOM_SYM", "ATKEYWORD", "IMPORTANT_SYM",
  "MEDIA_ONLY", "MEDIA_NOT", "MEDIA_AND", "REMS", "CHS", "QEMS", "EMS",
  "EXS", "PXS", "CMS", "MMS", "INS", "PTS", "PCS", "DEGS", "RADS", "GRADS",
  "TURNS", "MSECS", "SECS", "HERTZ", "KHERTZ", "DIMEN", "INVALIDDIMEN",
  "PERCENTAGE", "FLOATTOKEN", "INTEGER", "VW", "VH", "VMIN", "VMAX",
  "DPPX", "DPI", "DPCM", "FR", "URI", "FUNCTION", "ANYFUNCTION",
  "NOTFUNCTION", "CALCFUNCTION", "MINFUNCTION", "MAXFUNCTION",
  "UNICODERANGE", "WEBKIT_FILTER_RULE_SYM", "'{'", "'}'", "')'", "';'",
  "'('", "','", "'+'", "'~'", "'>'", "'-'", "']'", "'='", "'/'", "'#'",
  "'%'", "$accept", "stylesheet", "webkit_rule", "webkit_keyframe_rule",
  "webkit_decls", "webkit_value", "webkit_mediaquery", "webkit_selector",
  "space", "maybe_space", "maybe_sgml", "maybe_charset", "closing_brace",
  "closing_parenthesis", "charset", "ignored_charset", "rule_list",
  "valid_rule", "rule", "block_rule_list", "block_valid_rule_list",
  "block_valid_rule", "block_rule", "at_import_header_end_maybe_space",
  "before_import_rule", "import", "namespace", "maybe_ns_prefix",
  "string_or_uri", "maybe_media_value", "media_query_exp",
  "media_query_exp_list", "maybe_and_media_query_exp_list",
  "maybe_media_restrictor", "media_query", "maybe_media_list",
  "media_list", "at_rule_body_start", "before_media_rule",
  "at_rule_header_end_maybe_space", "media", "before_keyframes_rule",
  "keyframes", "keyframe_name", "keyframes_rule", "keyframe_rule",
  "key_list", "key", "before_page_rule", "page", "page_selector",
  "declarations_and_margins", "margin_box", "@1", "margin_sym",
  "before_font_face_rule", "font_face", "before_region_rule", "region",
  "before_filter_rule", "filter", "combinator", "maybe_unary_operator",
  "unary_operator", "maybe_space_before_declaration",
  "before_selector_list", "at_rule_header_end", "at_selector_end",
  "ruleset", "before_selector_group_item", "selector_list",
  "selector_with_trailing_whitespace", "selector", "namespace_selector",
  "simple_selector", "simple_selector_list", "element_name",
  "specifier_list", "specifier", "class", "attrib", "match",
  "ident_or_string", "pseudo_page", "pseudo", "declaration_list",
  "decl_list", "decl_list_recovery", "declaration", "declaration_recovery",
  "property", "priority", "expr", "valid_expr", "expr_recovery",
  "operator", "term", "unary_term", "function", "calc_func_term",
  "calc_func_operator", "calc_maybe_space", "calc_func_paren_expr",
  "calc_func_expr", "valid_calc_func_expr", "calc_func_expr_list",
  "calc_function", "min_or_max", "min_or_max_function", "save_block",
  "invalid_at", "invalid_rule", "invalid_block",
  "invalid_square_brackets_block", "invalid_parentheses_block",
  "opening_parenthesis", "error_location", "error_recovery", 0
};
#endif

# ifdef YYPRINT
/* YYTOKNUM[YYLEX-NUM] -- Internal token number corresponding to
   token YYLEX-NUM.  */
static const yytype_uint16 yytoknum[] =
{
       0,   256,   257,   258,   259,   260,   261,   262,   263,   264,
     265,   266,   267,   268,   269,   270,   271,    58,    46,    91,
      42,   124,   272,   273,   274,   275,   276,   277,   278,   279,
     280,   281,   282,   283,   284,   285,   286,   287,   288,   289,
     290,   291,   292,   293,   294,   295,   296,   297,   298,   299,
     300,   301,   302,   303,   304,   305,   306,   307,   308,   309,
     310,   311,   312,   313,   314,   315,   316,   317,   318,   319,
     320,   321,   322,   323,   324,   325,   326,   327,   328,   329,
     330,   331,   332,   333,   334,   335,   336,   337,   338,   339,
     340,   341,   342,   343,   344,   345,   346,   347,   348,   123,
     125,    41,    59,    40,    44,    43,   126,    62,    45,    93,
      61,    47,    35,    37
};
# endif

/* YYR1[YYN] -- Symbol number of symbol that rule YYN derives.  */
static const yytype_uint8 yyr1[] =
{
       0,   114,   115,   115,   115,   115,   115,   115,   115,   116,
     117,   118,   119,   120,   121,   122,   122,   123,   123,   124,
     124,   124,   125,   125,   126,   126,   127,   127,   128,   128,
     128,   129,   129,   130,   130,   131,   131,   131,   131,   131,
     131,   131,   131,   131,   132,   132,   132,   132,   133,   133,
     134,   134,   135,   135,   135,   135,   135,   135,   136,   136,
     136,   136,   136,   136,   137,   138,   139,   139,   139,   139,
     139,   140,   140,   140,   140,   141,   141,   142,   142,   143,
     143,   144,   145,   145,   146,   146,   147,   147,   147,   148,
     148,   149,   149,   150,   150,   150,   151,   152,   153,   154,
     154,   154,   155,   156,   157,   157,   158,   158,   159,   160,
     160,   161,   161,   161,   162,   163,   163,   163,   164,   164,
     164,   164,   165,   165,   167,   166,   168,   168,   168,   168,
     168,   168,   168,   168,   168,   168,   168,   168,   168,   168,
     168,   168,   169,   170,   170,   170,   171,   172,   173,   174,
     175,   175,   175,   176,   176,   177,   177,   178,   179,   180,
     181,   182,   183,   184,   184,   184,   185,   186,   186,   186,
     186,   186,   187,   187,   187,   188,   188,   188,   188,   188,
     188,   189,   189,   189,   190,   190,   191,   191,   191,   192,
     192,   192,   192,   192,   193,   194,   194,   194,   194,   195,
     195,   195,   195,   195,   195,   196,   196,   197,   198,   198,
     198,   198,   198,   198,   198,   199,   199,   199,   199,   199,
     199,   200,   200,   200,   200,   201,   202,   202,   202,   202,
     202,   203,   204,   205,   205,   206,   206,   207,   207,   208,
     209,   209,   209,   210,   210,   210,   210,   210,   210,   210,
     210,   210,   210,   210,   210,   210,   210,   211,   211,   211,
     211,   211,   211,   211,   211,   211,   211,   211,   211,   211,
     211,   211,   211,   211,   211,   211,   211,   211,   211,   211,
     211,   211,   211,   211,   211,   211,   211,   212,   212,   212,
     213,   213,   214,   214,   214,   214,   215,   215,   216,   217,
     217,   218,   218,   218,   218,   219,   219,   220,   220,   221,
     221,   222,   222,   223,   223,   224,   224,   225,   226,   227,
     227,   228,   229,   229,   229,   229,   229,   229,   229,   230,
     231,   231,   231,   231,   231
};

/* YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.  */
static const yytype_uint8 yyr2[] =
{
       0,     2,     4,     2,     2,     2,     2,     2,     2,     6,
       6,     5,     5,     5,     5,     1,     2,     0,     2,     0,
       2,     2,     0,     1,     1,     1,     1,     1,     5,     3,
       3,     5,     3,     0,     3,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     0,     3,
       0,     3,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     0,     7,     7,     7,     4,
       4,     6,     6,     3,     3,     0,     2,     1,     1,     0,
       4,     9,     1,     5,     0,     3,     0,     1,     1,     1,
       5,     0,     1,     1,     4,     2,     0,     0,     1,    10,
       8,     4,     0,    10,     1,     1,     0,     3,     6,     1,
       5,     2,     1,     1,     0,    10,     4,     4,     1,     2,
       1,     0,     1,     4,     0,     7,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     0,     8,     4,     4,     0,    10,     0,    10,
       2,     2,     2,     1,     0,     1,     1,     1,     0,     0,
       0,     9,     0,     1,     6,     2,     2,     1,     1,     2,
       3,     2,     1,     2,     2,     1,     2,     1,     2,     3,
       2,     1,     5,     2,     1,     1,     1,     2,     2,     1,
       1,     1,     1,     1,     2,     5,     9,     6,    10,     1,
       1,     1,     1,     1,     1,     1,     1,     2,     2,     3,
       6,     6,     7,     6,     6,     0,     1,     2,     1,     1,
       2,     3,     3,     4,     4,     3,     5,     2,     6,     3,
       4,     3,     2,     2,     0,     1,     2,     1,     3,     3,
       2,     2,     0,     2,     3,     2,     2,     2,     3,     2,
       2,     2,     2,     2,     2,     2,     2,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     4,     3,     4,
       1,     2,     3,     3,     3,     3,     0,     1,     5,     1,
       2,     1,     3,     3,     1,     2,     5,     5,     4,     1,
       1,     4,     4,     1,     2,     3,     3,     2,     3,     3,
       3,     3,     1,     1,     1,     1,     1,     1,     1,     0,
       0,     2,     2,     2,     2
};

/* YYDEFACT[STATE-NAME] -- Default rule to reduce with in state
   STATE-NUM when YYTABLE doesn't specify something else to do.  Zero
   means the default is an error.  */
static const yytype_uint16 yydefact[] =
{
      17,     0,     0,     0,     0,     0,     0,     0,    17,    17,
      17,    17,    17,    17,    22,    17,    17,    17,    17,    17,
      17,     1,     3,     8,     4,     5,     6,     7,    18,     0,
      19,    23,   158,   157,     0,     0,     0,    86,     0,     0,
       0,    33,     0,    17,     0,    41,    40,     0,    36,     0,
      39,     0,    37,     0,    38,     0,    42,     0,    43,     0,
      35,   329,    17,    17,     0,     0,   219,   216,     0,   113,
     112,   156,   155,    17,    17,   109,     0,   153,    17,    17,
      17,   277,   278,   275,   274,   276,   260,   261,   262,   263,
     264,   265,   266,   267,   268,   269,   270,   271,   272,   273,
      17,   259,   258,   257,   279,   280,   281,   282,   283,   284,
     285,   286,    17,    17,    17,   309,   310,    17,    17,    17,
       0,     0,     0,   237,    17,    17,    17,    17,    17,    87,
      88,    82,    89,    17,     0,   184,   190,   189,     0,     0,
      17,   185,   172,     0,   168,     0,     0,   167,   175,     0,
     186,   191,   192,   193,   330,    30,    29,    17,    21,    20,
       0,     0,    75,     0,     0,    17,    17,     0,     0,    17,
      17,     0,   330,   232,     0,    11,   220,   217,    17,    17,
     329,    17,   227,     0,     0,   111,   245,   246,   251,   247,
     249,     0,     0,   250,   252,   256,    17,    17,    12,   329,
      17,    17,   236,     0,   243,   253,   254,     0,   255,     0,
       0,    13,   174,   208,     0,    17,    17,    17,   194,     0,
     173,   165,    14,     0,   169,   171,   166,    17,    17,    17,
       0,   184,   185,   178,     0,     0,   188,   187,     0,     0,
       0,    17,     0,    45,    44,    19,    47,    46,    74,    73,
      17,     0,     9,     0,    64,     0,    86,     0,     0,     0,
     121,     0,    98,     0,     0,     0,   159,     0,   229,    17,
      17,   222,   221,   330,     0,    10,    17,    17,    27,    26,
     288,     0,     0,    17,     0,     0,   290,   301,   304,   296,
       0,   248,   244,   330,   241,   240,   238,     0,   296,     0,
      17,    17,    17,   209,   154,     0,     0,    17,     0,     0,
      17,   150,   151,   152,   170,     0,    25,   331,   330,   323,
     327,   328,   324,   325,   326,    24,   322,   318,   332,   333,
     334,   330,    28,   317,     0,     0,    34,    76,    77,    78,
      17,    69,    70,    17,    93,     0,    96,   101,   105,   104,
      17,   117,   116,   118,     0,    17,   120,   145,   144,    96,
       0,    17,     0,   224,   223,     0,   230,   234,     0,     0,
     287,   289,     0,   291,   308,   297,     0,     0,     0,   300,
     239,   312,   305,    17,   311,    86,    84,     0,    17,    17,
       0,   181,     0,    17,     0,    17,   162,     0,     0,    17,
      32,   316,   315,     0,    91,    95,    17,     0,    17,     0,
     119,   207,     0,    17,     0,     0,    96,    17,     0,     0,
     110,   296,    16,     0,     0,   302,   303,    17,    17,   307,
       0,    83,    17,    17,    90,    17,     0,     0,    17,   183,
       0,     0,   200,   201,   202,   203,   204,   195,   199,    17,
       0,     0,   320,   319,   321,     0,    71,    72,     0,     0,
      86,    96,    48,    96,    96,     0,    96,    96,    17,   233,
     228,   108,     0,    15,   292,   293,   294,   295,   296,     0,
      86,    79,   213,   211,     0,   210,    17,   214,     0,   197,
      17,     0,    31,    67,    66,    68,    94,    17,     0,    17,
      17,     0,    17,    17,     0,   298,   306,    85,    17,     0,
     212,     0,   206,   205,    17,     0,    48,     0,   313,    58,
      19,    62,    61,    55,    56,    53,    54,    63,    57,    52,
     100,    60,    59,   106,     0,   143,    50,     0,     0,     0,
      17,   182,     0,    17,     0,   314,    49,     0,     0,   122,
       0,     0,   161,    17,    81,   196,     0,    99,   103,    17,
     126,   127,   128,   129,   130,   131,   132,   133,   134,   135,
     136,   137,   138,   139,   140,   141,   115,    17,   124,     0,
      19,   147,   149,    80,   198,   107,     0,    17,    51,   123,
       0,    17,     0,     0,   125
};

/* YYDEFGOTO[NTERM-NUM].  */
static const yytype_int16 yydefgoto[] =
{
      -1,     7,     8,     9,    10,    11,    12,    13,   376,    33,
      41,    30,   518,   280,    31,   243,   160,    43,   245,   498,
     550,   519,   520,   255,    44,    45,    46,   251,   340,   509,
     131,   132,   434,   133,   344,   458,   345,   408,    47,   257,
     523,    49,   524,   350,   547,    73,    74,    75,    51,   525,
     355,   548,   577,   587,   578,    53,   526,    55,    56,    57,
     528,   230,    76,   120,    34,    59,   362,   223,   529,   451,
     143,   144,   145,   146,   147,   392,   148,   149,   150,   151,
     152,   449,   514,   356,   153,    64,    65,    66,    67,   182,
      68,   418,   121,   122,   202,   203,   123,   124,   125,   287,
     377,   378,   288,   289,   290,   299,   126,   127,   128,   530,
     531,   532,   328,   329,   330,   331,   172,   238
};

/* YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing
   STATE-NUM.  */
#define YYPACT_NINF -485
static const yytype_int16 yypact[] =
{
     923,   -12,   114,   146,   148,    92,   152,   305,  -485,  -485,
    -485,  -485,  -485,  -485,    35,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,   322,   322,   322,   322,   322,   322,  -485,   504,
    -485,  -485,  1210,   322,   252,   217,   853,   437,   699,   -44,
     351,   251,   413,  -485,   336,  -485,  -485,   395,  -485,   398,
    -485,   447,  -485,   446,  -485,   460,  -485,   396,  -485,  1112,
    -485,  -485,  -485,  -485,   404,  1227,   408,   418,    53,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,   445,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    1440,   431,   555,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,    41,  -485,   432,   516,  -485,  -485,   789,   526,
    -485,   530,  -485,   133,  1112,   270,   529,  -485,   792,   429,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    1385,    21,   349,   126,   680,  -485,  -485,   549,   105,  -485,
    -485,    49,  -485,   322,    64,  -485,   450,   455,  -485,  -485,
    -485,  -485,  -485,   235,   249,  -485,   322,   322,   322,   322,
     322,   664,   393,   322,   322,   322,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  1111,   322,   322,   322,   393,   322,    48,
      80,  -485,  -485,  -485,   552,  -485,  -485,  -485,  -485,    62,
    -485,  -485,  -485,   480,  -485,  -485,  -485,  -485,  -485,  -485,
    1112,  -485,  -485,   792,   683,   692,  -485,  -485,   794,   280,
     486,  -485,   588,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,   360,  -485,   187,   322,   360,   341,   193,   510,   285,
      51,   439,   322,   509,   699,   355,   480,  1003,  -485,  -485,
    -485,   322,   322,  -485,   766,  -485,  -485,  -485,  -485,  -485,
    -485,    45,    45,  -485,  1472,    45,  -485,  -485,  -485,   605,
     151,   322,   322,  -485,   322,   322,  -485,    45,   605,    38,
    -485,  -485,  -485,  -485,   102,   699,   699,   516,   530,   599,
    -485,   322,   322,   322,  -485,   799,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,   207,   459,   251,   322,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,   107,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,   616,   634,  -485,  -485,  -485,  -485,  -485,
     159,  -485,   554,   322,   322,  1019,  -485,   600,   331,   217,
    -485,  -485,   926,  -485,  -485,   130,   156,  1389,    81,  -485,
     876,  -485,   260,  -485,  -485,   437,    54,   514,  -485,  -485,
     577,  -485,    94,  -485,   402,  -485,   322,   220,   487,  -485,
    -485,  -485,  -485,   303,   508,  -485,  -485,   562,  -485,   563,
    -485,  -485,   571,  -485,   572,   573,  -485,  -485,  1035,    47,
    -485,   605,  -485,   670,   670,  -485,  -485,  -485,  -485,  -485,
     926,  -485,  -485,  -485,  -485,  -485,   227,   229,  -485,  -485,
     277,   244,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
     564,  1112,  -485,  -485,  -485,   299,  -485,  -485,    39,    89,
     437,  -485,   322,  -485,  -485,   266,  -485,  -485,  -485,   322,
    -485,  -485,    81,  -485,   673,   673,   322,   322,   605,    86,
     437,    79,  -485,  -485,   279,  -485,  -485,  -485,   513,  -485,
    -485,   316,  -485,  -485,  -485,  -485,  -485,  -485,  1346,  -485,
    -485,    47,  -485,  -485,   266,  -485,   260,    41,  -485,   579,
    -485,   699,  -485,  -485,  -485,   513,   322,   199,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,   322,  1291,  -485,   322,   266,    47,   853,
    -485,  -485,    27,  -485,  1346,  -485,   251,   259,  1104,  -485,
    1282,    47,  -485,  -485,   322,  -485,    36,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,    47,
    -485,  -485,  -485,   322,  -485,   322,  1209,  -485,   251,  -485,
     292,  -485,   331,    47,  -485
};

/* YYPGOTO[NTERM-NUM].  */
static const yytype_int16 yypgoto[] =
{
    -485,  -485,  -485,  -485,  -485,  -485,  -485,  -485,    61,     0,
    -239,  -485,  -214,  -248,  -485,  -485,  -485,   522,  -485,   167,
    -485,   136,  -485,  -485,  -485,  -450,  -141,  -485,   434,  -485,
     302,   210,  -485,  -107,   -36,  -485,   287,  -173,  -485,  -147,
      -6,  -485,    -5,  -485,  -485,   147,  -485,   326,  -485,    -2,
    -485,  -485,  -485,  -485,  -485,  -485,    -1,  -485,   -61,  -485,
       3,  -485,   392,   -30,   -64,  -485,  -288,   532,    12,  -485,
     -55,  -485,   254,   494,  -121,  -485,   560,   343,  -113,  -485,
    -485,   271,   241,   389,  -485,  -361,  -485,   697,   698,  -172,
    -485,  -485,  -188,  -485,  -115,  -485,   561,  -104,  -485,   380,
    -485,  -284,   391,  -182,  -485,  -485,  -485,  -485,  -485,  -484,
     606,   613,   -17,  -485,  -485,  -485,  -128,  -144
};

/* YYTABLE[YYPACT[STATE-NUM]].  What to do in state STATE-NUM.  If
   positive, shift that token.  If negative, reduce the rule which
   number is the opposite.  If zero, do what YYDEFACT says.
   If YYTABLE_NINF, syntax error.  */
#define YYTABLE_NINF -300
static const yytype_int16 yytable[] =
{
      14,   134,   268,   281,   171,    77,   336,   419,    22,    23,
      24,    25,    26,    27,   382,    32,   197,    35,    36,    37,
      38,   263,   156,   224,   327,   298,    48,    50,   267,    40,
      52,    54,    28,   370,   371,    58,   237,   374,   278,   493,
      28,    28,   162,   163,    60,   278,   -17,   316,   521,   381,
     221,   384,   273,    28,   180,   154,    28,   407,   155,    28,
     557,    29,   173,   174,   353,   180,   581,    28,   354,    28,
     181,   293,   414,   183,   184,   307,   282,   285,   186,   187,
     188,   278,   308,   142,    28,    28,   367,    15,   286,   -92,
     405,    28,   297,   301,   521,   439,   508,    19,   -17,   -17,
     189,   427,   366,   286,   501,   300,   261,    28,   405,   314,
     -17,   433,   190,   191,   192,   388,   389,   193,   194,   195,
     154,   237,   237,   248,   204,   205,   206,   207,   208,   365,
     429,    28,   209,   210,   221,   -15,   555,   472,   154,   279,
     219,   494,   383,   538,   249,   584,   279,   325,  -160,   380,
     454,  -299,   199,  -160,    48,    50,  -299,   239,    52,    54,
     221,   422,   284,    58,   254,   256,   258,   260,   262,   264,
     265,  -299,    60,   549,   397,   379,   551,   284,   271,   272,
     373,   274,   279,   302,   391,   393,   413,   398,   -92,   302,
     421,   -92,   428,   406,   506,   -17,   291,   292,   -17,   316,
     294,   295,   237,   409,   -17,   471,  -159,    71,   412,   360,
      72,   406,    28,    16,   415,   304,   305,   306,    69,   399,
     452,   317,    28,   333,   505,   589,   252,   311,   312,   313,
      70,   593,    28,   222,    28,   -15,   342,  -160,   -15,   318,
      28,   334,   352,   468,   358,    17,   470,    18,   478,    28,
     337,    20,  -299,    61,    28,  -299,   158,   159,  -159,   316,
      69,   423,  -299,  -160,   424,    62,  -215,    61,   286,   363,
     364,   225,    70,   286,    77,   226,   368,   369,   432,    62,
     427,   546,    28,   372,    28,    28,   154,   535,   497,   341,
     499,   500,   346,   502,   503,   347,  -154,    28,   154,   325,
     385,   386,   387,   545,    28,    21,    63,   394,    28,   400,
     396,   319,   320,   321,   322,   323,   324,   225,   402,   154,
      63,   226,    71,   326,   552,    72,   286,    28,   482,   453,
     483,  -215,    61,   558,   576,   275,    28,   582,  -154,    77,
     403,   588,   284,   404,    62,   487,    28,   284,   276,   465,
     262,   553,  -215,   277,    28,   262,    28,   522,   164,   325,
      28,   262,   250,   157,    71,   545,  -215,    72,   361,  -163,
    -163,   428,   338,   432,  -163,   227,   228,   229,   485,   594,
     510,   486,   332,   430,   154,    63,   457,   351,   436,   437,
     541,   591,   440,   441,   199,   450,   129,   130,    28,   455,
     284,   492,   154,   522,   504,   456,   460,    28,   462,   442,
     443,   444,   445,   446,   161,  -164,  -164,   469,   -17,   165,
    -164,   227,   228,   229,   496,   -17,   -17,   476,   477,   166,
     236,  -215,   479,   480,  -177,   481,   534,   527,   484,   537,
     -98,   495,    28,   -98,   136,   137,   138,   139,   140,   488,
     339,    81,    82,    83,    84,    85,    86,    87,    88,    89,
      90,    91,    92,    93,    94,    95,    96,    97,    98,    99,
     167,   168,   101,   102,   103,   104,   105,   106,   107,   108,
     109,   110,   111,   527,   474,   475,   511,   278,   317,   234,
     515,   235,   129,   130,   170,   169,   283,   516,    71,   533,
     333,    72,   536,   -17,   175,    39,   318,   209,   539,   -17,
     178,   447,   448,    28,   542,    28,   -17,    77,    28,    28,
     179,   -86,   348,   349,   185,   512,   513,   435,  -177,  -177,
    -177,   198,   211,  -177,  -177,  -177,  -177,   212,   154,   218,
     554,   357,   231,   556,   136,   137,   138,   139,   140,   232,
     259,   220,   269,   583,   -17,  -235,   199,   270,   154,   585,
    -235,   401,   -17,   129,   130,   303,   -17,  -242,  -242,    28,
    -242,   442,   443,   444,   445,   446,   315,   586,   319,   320,
     321,   322,   323,   324,   310,   154,   154,   590,   279,   335,
     326,   592,  -235,  -235,  -235,  -235,  -235,  -235,  -235,  -235,
    -235,  -235,  -235,  -235,  -235,  -235,  -235,  -235,   359,  -235,
     375,   -86,   395,  -242,  -242,  -242,  -242,  -242,  -242,  -242,
    -242,  -242,  -242,  -242,  -242,  -242,  -242,  -242,  -242,  -242,
    -242,  -242,  -242,   354,  -242,  -242,  -242,  -242,  -242,  -242,
    -242,  -242,  -242,  -242,  -242,  -242,  -242,   411,   -17,  -242,
    -242,  -242,  -242,   416,   417,  -235,  -235,  -235,   438,   200,
    -242,   461,   463,  -242,   278,   199,   201,  -242,  -242,    28,
     464,   466,   467,   489,   448,   473,    78,    79,   422,    80,
     540,   253,   244,   544,   236,   -17,   580,   431,  -180,   343,
     507,   459,   -17,   236,   559,   420,   390,  -176,   136,   137,
     138,   139,   140,   266,    28,   491,   233,   136,   137,   138,
     139,   140,   135,   309,   136,   137,   138,   139,   140,   141,
     142,   490,    81,    82,    83,    84,    85,    86,    87,    88,
      89,    90,    91,    92,    93,    94,    95,    96,    97,    98,
      99,   100,   410,   101,   102,   103,   104,   105,   106,   107,
     108,   109,   110,   111,   112,   113,   543,   425,   114,   115,
     116,   117,   176,   177,   296,   279,   246,   180,   426,    71,
     -17,    28,    72,   247,     0,     0,   118,   119,    78,    79,
       0,    80,  -180,  -180,  -180,     0,     0,  -180,  -180,  -180,
    -180,  -176,  -176,  -176,   316,   317,  -176,  -176,  -176,  -176,
     236,     0,   213,     0,  -179,     0,   214,   136,   137,   138,
     139,   140,     0,   318,   136,   137,   138,   139,   140,     0,
       0,     0,     0,     0,    81,    82,    83,    84,    85,    86,
      87,    88,    89,    90,    91,    92,    93,    94,    95,    96,
      97,    98,    99,   100,     0,   101,   102,   103,   104,   105,
     106,   107,   108,   109,   110,   111,   112,   113,    28,     0,
     114,   115,   116,   117,     0,    78,    79,     0,    80,     0,
       0,    71,     0,     0,    72,     0,     0,  -300,   118,   119,
     215,   216,   217,     0,     0,   319,   320,   321,   322,   323,
     324,     0,     0,   154,   325,   318,     0,   326,  -179,  -179,
    -179,     0,     0,  -179,  -179,  -179,  -179,     0,     0,     0,
       0,    81,    82,    83,    84,    85,    86,    87,    88,    89,
      90,    91,    92,    93,    94,    95,    96,    97,    98,    99,
     100,    28,   101,   102,   103,   104,   105,   106,   107,   108,
     109,   110,   111,   112,   113,     0,     0,   114,   115,   116,
     117,     1,     2,     3,     0,     4,     5,     6,    71,     0,
       0,    72,     0,     0,     0,   118,   119,   319,   320,   321,
     322,   323,   324,     0,     0,   154,     0,     0,     0,   326,
       0,     0,     0,     0,    81,    82,    83,    84,    85,    86,
      87,    88,    89,    90,    91,    92,    93,    94,    95,    96,
      97,    98,    99,  -225,   317,   101,   102,   103,   104,   105,
     106,   107,   108,   109,   110,   111,     0,     0,     0,  -231,
     317,     0,   318,     0,     0,     0,     0,     0,     0,   283,
       0,    71,     0,     0,    72,  -226,   180,     0,   318,     0,
    -225,  -225,  -225,  -225,  -225,  -225,  -225,  -225,  -225,  -225,
    -225,  -225,  -225,  -225,  -225,  -225,  -231,  -231,  -231,  -231,
    -231,  -231,  -231,  -231,  -231,  -231,  -231,  -231,  -231,  -231,
    -231,  -231,  -226,  -226,  -226,  -226,  -226,  -226,  -226,  -226,
    -226,  -226,  -226,  -226,  -226,  -226,  -226,  -226,     0,     0,
       0,     0,     0,     0,   319,   320,   321,   322,   323,   324,
       0,     0,   154,  -225,   316,  -225,   326,     0,     0,     0,
     319,   320,   321,   322,   323,   324,     0,     0,   154,  -231,
       0,  -231,   326,    78,    79,   135,    80,   136,   137,   138,
     139,   140,   141,   142,     0,  -226,     0,  -226,     0,     0,
       0,   560,   561,   562,   563,   564,   565,   566,   567,   568,
     569,   570,   571,   572,   573,   574,   575,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    81,
      82,    83,    84,    85,    86,    87,    88,    89,    90,    91,
      92,    93,    94,    95,    96,    97,    98,    99,   100,     0,
     101,   102,   103,   104,   105,   106,   107,   108,   109,   110,
     111,   112,   113,     0,   325,   114,   115,   116,   117,  -215,
      61,     0,     0,     0,    28,    28,    71,     0,     0,    72,
       0,     0,    62,   118,   119,     0,     0,  -218,    61,     0,
       0,     0,   -65,  -114,   -97,  -142,     0,    42,     0,     0,
      62,  -102,     0,     0,     0,  -146,  -215,  -215,  -215,  -215,
    -215,  -215,  -215,  -215,  -215,  -215,  -215,  -215,  -215,  -215,
    -215,  -215,     0,    63,  -218,  -218,  -218,  -218,  -218,  -218,
    -218,  -218,  -218,  -218,  -218,  -218,  -218,  -218,  -218,  -218,
       0,    63,   316,   579,     0,     0,     0,     0,     0,     0,
       0,  -215,    61,     0,     0,  -158,     0,  -158,  -158,  -158,
    -158,  -158,  -158,  -158,    62,  -114,   -97,  -142,  -148,  -215,
       0,     0,     0,  -102,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,  -218,  -215,  -215,
    -215,  -215,  -215,  -215,  -215,  -215,  -215,  -215,  -215,  -215,
    -215,  -215,  -215,  -215,     0,    63,   316,   517,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -158,
       0,  -158,  -158,  -158,  -158,  -158,  -158,  -158,   -65,  -114,
     -97,  -142,     0,    42,     0,     0,     0,  -102,     0,     0,
    -148,  -146,   325,     0,     0,    -2,   240,     0,     0,     0,
       0,  -215,     0,     0,     0,     0,     0,     0,  -158,   242,
    -158,  -158,  -158,  -158,  -158,  -158,  -158,   -65,  -114,   -97,
    -142,   241,    42,     0,     0,     0,  -102,     0,     0,     0,
    -146,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   242,     0,
       0,     0,     0,     0,  -148,     0,   325,    81,    82,    83,
      84,    85,    86,    87,    88,    89,    90,    91,    92,    93,
      94,    95,    96,    97,    98,    99,     0,     0,   101,   102,
     103,   104,   105,   106,   107,   108,   109,   110,   111,     0,
       0,     0,     0,  -148,     0,     0,     0,     0,     0,     0,
       0,     0,   283,     0,    71,     0,     0,    72,    81,    82,
      83,    84,    85,    86,    87,    88,    89,    90,    91,    92,
      93,    94,    95,    96,    97,    98,    99,   196,     0,   101,
     102,   103,   104,   105,   106,   107,   108,   109,   110,   111,
      81,    82,    83,    84,    85,    86,    87,    88,    89,    90,
      91,    92,    93,    94,    95,    96,    97,    98,    99,     0,
       0,   101,   102,   103,   104,   105,   106,   107,   108,   109,
     110,   111
};

static const yytype_int16 yycheck[] =
{
       0,    37,   174,   191,    59,    35,   245,   368,     8,     9,
      10,    11,    12,    13,   298,    15,   120,    17,    18,    19,
      20,   168,    39,   144,   238,   207,    32,    32,   172,    29,
      32,    32,     5,   281,   282,    32,   149,   285,     0,     0,
       5,     5,    42,    43,    32,     0,     5,     0,   498,   297,
       1,   299,   180,     5,     1,    99,     5,   345,   102,     5,
     544,    26,    62,    63,    13,     1,   550,     5,    17,     5,
      17,   199,   360,    73,    74,    13,   191,   192,    78,    79,
      80,     0,    20,    21,     5,     5,   274,    99,   192,     0,
       1,     5,   207,    13,   544,     1,    17,     5,    57,     5,
     100,    20,   274,   207,   465,    57,     1,     5,     1,   230,
       5,    57,   112,   113,   114,    13,    14,   117,   118,   119,
      99,   234,   235,   102,   124,   125,   126,   127,   128,   273,
     378,     5,   132,   133,     1,     5,   109,   421,    99,   101,
     140,   102,   104,   504,   161,   109,   101,   100,    99,   293,
     398,     0,     1,   104,   160,   160,     5,   157,   160,   160,
       1,     5,   192,   160,   164,   165,   166,   167,   168,   169,
     170,    20,   160,   534,   318,   290,   537,   207,   178,   179,
     284,   181,   101,   103,   305,   306,   359,   331,    99,   103,
     372,   102,   111,   104,   478,   101,   196,   197,   104,     0,
     200,   201,   315,   350,    99,   419,    99,   105,   355,   264,
     108,   104,     5,    99,   361,   215,   216,   217,     1,    12,
       0,     1,     5,   240,   472,   586,   100,   227,   228,   229,
      13,   592,     5,   100,     5,   105,   253,   104,   108,    19,
       5,   241,   259,   416,   261,    99,   418,    99,   430,     5,
     250,    99,   101,     1,     5,   104,     5,     6,    99,     0,
       1,   105,   111,   104,   108,    13,     0,     1,   372,   269,
     270,     1,    13,   377,   304,     5,   276,   277,   385,    13,
      20,   520,     5,   283,     5,     5,    99,   501,   461,   102,
     463,   464,    99,   466,   467,   102,    79,     5,    99,   100,
     300,   301,   302,   517,     5,     0,    54,   307,     5,   102,
     310,    91,    92,    93,    94,    95,    96,     1,   335,    99,
      54,     5,   105,   103,   538,   108,   430,     5,   101,   109,
     101,     0,     1,   547,   548,   100,     5,   551,    79,   369,
     340,   580,   372,   343,    13,   101,     5,   377,    99,   413,
     350,   539,   100,   104,     5,   355,     5,   498,    22,   100,
       5,   361,    13,    12,   105,   579,   100,   108,    13,    99,
     100,   111,    12,   480,   104,   105,   106,   107,   101,   593,
     101,   104,   102,   383,    99,    54,   403,   102,   388,   389,
     511,    99,   392,   393,     1,   395,    55,    56,     5,   399,
     430,   102,    99,   544,   468,   102,   406,     5,   408,     7,
       8,     9,    10,    11,     1,    99,   100,   417,     5,    24,
     104,   105,   106,   107,   460,    12,    13,   427,   428,    31,
       1,   100,   432,   433,     5,   435,   500,   498,   438,   503,
      99,   458,     5,   102,    15,    16,    17,    18,    19,   449,
      90,    58,    59,    60,    61,    62,    63,    64,    65,    66,
      67,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      23,    25,    79,    80,    81,    82,    83,    84,    85,    86,
      87,    88,    89,   544,   423,   424,   486,     0,     1,   146,
     490,   148,    55,    56,    98,    35,   103,   497,   105,   499,
     517,   108,   502,    90,   100,     1,    19,   507,   508,     5,
     102,   109,   110,     5,   514,     5,    12,   547,     5,     5,
     102,    13,    12,    13,    79,    12,    13,    13,    99,   100,
     101,   100,   100,   104,   105,   106,   107,    21,    99,    13,
     540,   102,    13,   543,    15,    16,    17,    18,    19,    20,
       1,    21,   102,   553,     5,     0,     1,   102,    99,   559,
       5,   102,    13,    55,    56,    13,    17,    12,    13,     5,
      15,     7,     8,     9,    10,    11,   233,   577,    91,    92,
      93,    94,    95,    96,   104,    99,    99,   587,   101,     1,
     103,   591,    37,    38,    39,    40,    41,    42,    43,    44,
      45,    46,    47,    48,    49,    50,    51,    52,    99,    54,
       5,   103,    13,    58,    59,    60,    61,    62,    63,    64,
      65,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      75,    76,    77,    17,    79,    80,    81,    82,    83,    84,
      85,    86,    87,    88,    89,    90,    91,    13,    99,    94,
      95,    96,    97,    99,    54,   100,   101,   102,    81,   104,
     105,    99,    99,   108,     0,     1,   111,   112,   113,     5,
      99,    99,    99,   109,   110,     5,    12,    13,     5,    15,
     101,     1,   160,   516,     1,     5,   550,   385,     5,   255,
     480,   404,    12,     1,   547,   369,   304,     5,    15,    16,
      17,    18,    19,   171,     5,   451,   146,    15,    16,    17,
      18,    19,    13,   219,    15,    16,    17,    18,    19,    20,
      21,   450,    58,    59,    60,    61,    62,    63,    64,    65,
      66,    67,    68,    69,    70,    71,    72,    73,    74,    75,
      76,    77,   353,    79,    80,    81,    82,    83,    84,    85,
      86,    87,    88,    89,    90,    91,   515,   377,    94,    95,
      96,    97,    65,    65,   203,   101,   160,     1,   377,   105,
      90,     5,   108,   160,    -1,    -1,   112,   113,    12,    13,
      -1,    15,    99,   100,   101,    -1,    -1,   104,   105,   106,
     107,    99,   100,   101,     0,     1,   104,   105,   106,   107,
       1,    -1,    13,    -1,     5,    -1,    17,    15,    16,    17,
      18,    19,    -1,    19,    15,    16,    17,    18,    19,    -1,
      -1,    -1,    -1,    -1,    58,    59,    60,    61,    62,    63,
      64,    65,    66,    67,    68,    69,    70,    71,    72,    73,
      74,    75,    76,    77,    -1,    79,    80,    81,    82,    83,
      84,    85,    86,    87,    88,    89,    90,    91,     5,    -1,
      94,    95,    96,    97,    -1,    12,    13,    -1,    15,    -1,
      -1,   105,    -1,    -1,   108,    -1,    -1,     1,   112,   113,
      91,    92,    93,    -1,    -1,    91,    92,    93,    94,    95,
      96,    -1,    -1,    99,   100,    19,    -1,   103,    99,   100,
     101,    -1,    -1,   104,   105,   106,   107,    -1,    -1,    -1,
      -1,    58,    59,    60,    61,    62,    63,    64,    65,    66,
      67,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,     5,    79,    80,    81,    82,    83,    84,    85,    86,
      87,    88,    89,    90,    91,    -1,    -1,    94,    95,    96,
      97,    28,    29,    30,    -1,    32,    33,    34,   105,    -1,
      -1,   108,    -1,    -1,    -1,   112,   113,    91,    92,    93,
      94,    95,    96,    -1,    -1,    99,    -1,    -1,    -1,   103,
      -1,    -1,    -1,    -1,    58,    59,    60,    61,    62,    63,
      64,    65,    66,    67,    68,    69,    70,    71,    72,    73,
      74,    75,    76,     0,     1,    79,    80,    81,    82,    83,
      84,    85,    86,    87,    88,    89,    -1,    -1,    -1,     0,
       1,    -1,    19,    -1,    -1,    -1,    -1,    -1,    -1,   103,
      -1,   105,    -1,    -1,   108,     0,     1,    -1,    19,    -1,
      37,    38,    39,    40,    41,    42,    43,    44,    45,    46,
      47,    48,    49,    50,    51,    52,    37,    38,    39,    40,
      41,    42,    43,    44,    45,    46,    47,    48,    49,    50,
      51,    52,    37,    38,    39,    40,    41,    42,    43,    44,
      45,    46,    47,    48,    49,    50,    51,    52,    -1,    -1,
      -1,    -1,    -1,    -1,    91,    92,    93,    94,    95,    96,
      -1,    -1,    99,   100,     0,   102,   103,    -1,    -1,    -1,
      91,    92,    93,    94,    95,    96,    -1,    -1,    99,   100,
      -1,   102,   103,    12,    13,    13,    15,    15,    16,    17,
      18,    19,    20,    21,    -1,   100,    -1,   102,    -1,    -1,
      -1,    37,    38,    39,    40,    41,    42,    43,    44,    45,
      46,    47,    48,    49,    50,    51,    52,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    58,
      59,    60,    61,    62,    63,    64,    65,    66,    67,    68,
      69,    70,    71,    72,    73,    74,    75,    76,    77,    -1,
      79,    80,    81,    82,    83,    84,    85,    86,    87,    88,
      89,    90,    91,    -1,   100,    94,    95,    96,    97,     0,
       1,    -1,    -1,    -1,     5,     5,   105,    -1,    -1,   108,
      -1,    -1,    13,   112,   113,    -1,    -1,     0,     1,    -1,
      -1,    -1,    22,    23,    24,    25,    -1,    27,    -1,    -1,
      13,    31,    -1,    -1,    -1,    35,    37,    38,    39,    40,
      41,    42,    43,    44,    45,    46,    47,    48,    49,    50,
      51,    52,    -1,    54,    37,    38,    39,    40,    41,    42,
      43,    44,    45,    46,    47,    48,    49,    50,    51,    52,
      -1,    54,     0,     1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,     0,     1,    -1,    -1,    13,    -1,    15,    16,    17,
      18,    19,    20,    21,    13,    23,    24,    25,    98,   100,
      -1,    -1,    -1,    31,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   100,    37,    38,
      39,    40,    41,    42,    43,    44,    45,    46,    47,    48,
      49,    50,    51,    52,    -1,    54,     0,     1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    13,
      -1,    15,    16,    17,    18,    19,    20,    21,    22,    23,
      24,    25,    -1,    27,    -1,    -1,    -1,    31,    -1,    -1,
      98,    35,   100,    -1,    -1,     0,     1,    -1,    -1,    -1,
      -1,   100,    -1,    -1,    -1,    -1,    -1,    -1,    13,    53,
      15,    16,    17,    18,    19,    20,    21,    22,    23,    24,
      25,    26,    27,    -1,    -1,    -1,    31,    -1,    -1,    -1,
      35,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    53,    -1,
      -1,    -1,    -1,    -1,    98,    -1,   100,    58,    59,    60,
      61,    62,    63,    64,    65,    66,    67,    68,    69,    70,
      71,    72,    73,    74,    75,    76,    -1,    -1,    79,    80,
      81,    82,    83,    84,    85,    86,    87,    88,    89,    -1,
      -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   103,    -1,   105,    -1,    -1,   108,    58,    59,
      60,    61,    62,    63,    64,    65,    66,    67,    68,    69,
      70,    71,    72,    73,    74,    75,    76,    77,    -1,    79,
      80,    81,    82,    83,    84,    85,    86,    87,    88,    89,
      58,    59,    60,    61,    62,    63,    64,    65,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    75,    76,    -1,
      -1,    79,    80,    81,    82,    83,    84,    85,    86,    87,
      88,    89
};

/* YYSTOS[STATE-NUM] -- The (internal number of the) accessing
   symbol of state STATE-NUM.  */
static const yytype_uint8 yystos[] =
{
       0,    28,    29,    30,    32,    33,    34,   115,   116,   117,
     118,   119,   120,   121,   123,    99,    99,    99,    99,     5,
      99,     0,   123,   123,   123,   123,   123,   123,     5,    26,
     125,   128,   123,   123,   178,   123,   123,   123,   123,     1,
     123,   124,    27,   131,   138,   139,   140,   152,   154,   155,
     156,   162,   163,   169,   170,   171,   172,   173,   174,   179,
     182,     1,    13,    54,   199,   200,   201,   202,   204,     1,
      13,   105,   108,   159,   160,   161,   176,   177,    12,    13,
      15,    58,    59,    60,    61,    62,    63,    64,    65,    66,
      67,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    79,    80,    81,    82,    83,    84,    85,    86,    87,
      88,    89,    90,    91,    94,    95,    96,    97,   112,   113,
     177,   206,   207,   210,   211,   212,   220,   221,   222,    55,
      56,   144,   145,   147,   148,    13,    15,    16,    17,    18,
      19,    20,    21,   184,   185,   186,   187,   188,   190,   191,
     192,   193,   194,   198,    99,   102,   226,    12,     5,     6,
     130,     1,   123,   123,    22,    24,    31,    23,    25,    35,
      98,   184,   230,   123,   123,   100,   201,   202,   102,   102,
       1,    17,   203,   123,   123,    79,   123,   123,   123,   123,
     123,   123,   123,   123,   123,   123,    77,   211,   100,     1,
     104,   111,   208,   209,   123,   123,   123,   123,   123,   123,
     123,   100,    21,    13,    17,    91,    92,    93,    13,   123,
      21,     1,   100,   181,   188,     1,     5,   105,   106,   107,
     175,    13,    20,   190,   191,   191,     1,   192,   231,   123,
       1,    26,    53,   129,   131,   132,   224,   225,   102,   226,
      13,   141,   100,     1,   123,   137,   123,   153,   123,     1,
     123,     1,   123,   153,   123,   123,   181,   231,   203,   102,
     102,   123,   123,   230,   123,   100,    99,   104,     0,   101,
     127,   206,   208,   103,   177,   208,   211,   213,   216,   217,
     218,   123,   123,   230,   123,   123,   210,   208,   217,   219,
      57,    13,   103,    13,   123,   123,   123,    13,    20,   187,
     104,   123,   123,   123,   188,   191,     0,     1,    19,    91,
      92,    93,    94,    95,    96,   100,   103,   126,   226,   227,
     228,   229,   102,   226,   123,     1,   124,   123,    12,    90,
     142,   102,   226,   142,   148,   150,    99,   102,    12,    13,
     157,   102,   226,    13,    17,   164,   197,   102,   226,    99,
     184,    13,   180,   123,   123,   231,   203,   206,   123,   123,
     127,   127,   123,   211,   127,     5,   122,   214,   215,   208,
     231,   127,   215,   104,   127,   123,   123,   123,    13,    14,
     176,   188,   189,   188,   123,    13,   123,   231,   231,    12,
     102,   102,   226,   123,   123,     1,   104,   180,   151,   153,
     197,    13,   153,   151,   180,   153,    99,    54,   205,   199,
     161,   217,     5,   105,   108,   213,   216,    20,   111,   127,
     123,   144,   147,    57,   146,    13,   123,   123,    81,     1,
     123,   123,     7,     8,     9,    10,    11,   109,   110,   195,
     123,   183,     0,   109,   127,   123,   102,   226,   149,   150,
     123,    99,   123,    99,    99,   178,    99,    99,   151,   123,
     203,   126,   215,     5,   122,   122,   123,   123,   217,   123,
     123,   123,   101,   101,   123,   101,   104,   101,   123,   109,
     195,   186,   102,     0,   102,   226,   148,   151,   133,   151,
     151,   199,   151,   151,   178,   127,   215,   145,    17,   143,
     101,   123,    12,    13,   196,   123,   123,     1,   126,   135,
     136,   139,   140,   154,   156,   163,   170,   172,   174,   182,
     223,   224,   225,   123,   178,   126,   123,   178,   199,   123,
     101,   188,   123,   196,   133,   126,   124,   158,   165,   199,
     134,   199,   126,   206,   123,   109,   123,   223,   126,   159,
      37,    38,    39,    40,    41,    42,    43,    44,    45,    46,
      47,    48,    49,    50,    51,    52,   126,   166,   168,     1,
     135,   223,   126,   123,   109,   123,   123,   167,   124,   199,
     123,    99,   123,   199,   126
};

#define yyerrok		(yyerrstatus = 0)
#define yyclearin	(yychar = YYEMPTY)
#define YYEMPTY		(-2)
#define YYEOF		0

#define YYACCEPT	goto yyacceptlab
#define YYABORT		goto yyabortlab
#define YYERROR		goto yyerrorlab


/* Like YYERROR except do call yyerror.  This remains here temporarily
   to ease the transition to the new meaning of YYERROR, for GCC.
   Once GCC version 2 has supplanted version 1, this can go.  */

#define YYFAIL		goto yyerrlab

#define YYRECOVERING()  (!!yyerrstatus)

#define YYBACKUP(Token, Value)					\
do								\
  if (yychar == YYEMPTY && yylen == 1)				\
    {								\
      yychar = (Token);						\
      yylval = (Value);						\
      yytoken = YYTRANSLATE (yychar);				\
      YYPOPSTACK (1);						\
      goto yybackup;						\
    }								\
  else								\
    {								\
      yyerror (parser, YY_("syntax error: cannot back up")); \
      YYERROR;							\
    }								\
while (YYID (0))


#define YYTERROR	1
#define YYERRCODE	256


/* YYLLOC_DEFAULT -- Set CURRENT to span from RHS[1] to RHS[N].
   If N is 0, then set CURRENT to the empty location which ends
   the previous symbol: RHS[0] (always defined).  */

#define YYRHSLOC(Rhs, K) ((Rhs)[K])
#ifndef YYLLOC_DEFAULT
# define YYLLOC_DEFAULT(Current, Rhs, N)				\
    do									\
      if (YYID (N))                                                    \
	{								\
	  (Current).first_line   = YYRHSLOC (Rhs, 1).first_line;	\
	  (Current).first_column = YYRHSLOC (Rhs, 1).first_column;	\
	  (Current).last_line    = YYRHSLOC (Rhs, N).last_line;		\
	  (Current).last_column  = YYRHSLOC (Rhs, N).last_column;	\
	}								\
      else								\
	{								\
	  (Current).first_line   = (Current).last_line   =		\
	    YYRHSLOC (Rhs, 0).last_line;				\
	  (Current).first_column = (Current).last_column =		\
	    YYRHSLOC (Rhs, 0).last_column;				\
	}								\
    while (YYID (0))
#endif


/* YY_LOCATION_PRINT -- Print the location on the stream.
   This macro was not mandated originally: define only if we know
   we won't break user code: when these are the locations we know.  */

#ifndef YY_LOCATION_PRINT
# if defined YYLTYPE_IS_TRIVIAL && YYLTYPE_IS_TRIVIAL
#  define YY_LOCATION_PRINT(File, Loc)			\
     fprintf (File, "%d.%d-%d.%d",			\
	      (Loc).first_line, (Loc).first_column,	\
	      (Loc).last_line,  (Loc).last_column)
# else
#  define YY_LOCATION_PRINT(File, Loc) ((void) 0)
# endif
#endif


/* YYLEX -- calling `yylex' with the right arguments.  */

#ifdef YYLEX_PARAM
# define YYLEX yylex (&yylval, YYLEX_PARAM)
#else
# define YYLEX yylex (&yylval, parser)
#endif

/* Enable debugging if requested.  */
#if YYDEBUG

# ifndef YYFPRINTF
#  include <stdio.h> /* INFRINGES ON USER NAME SPACE */
#  define YYFPRINTF fprintf
# endif

# define YYDPRINTF(Args)			\
do {						\
  if (yydebug)					\
    YYFPRINTF Args;				\
} while (YYID (0))

# define YY_SYMBOL_PRINT(Title, Type, Value, Location)			  \
do {									  \
  if (yydebug)								  \
    {									  \
      YYFPRINTF (stderr, "%s ", Title);					  \
      yy_symbol_print (stderr,						  \
		  Type, Value, parser); \
      YYFPRINTF (stderr, "\n");						  \
    }									  \
} while (YYID (0))


/*--------------------------------.
| Print this symbol on YYOUTPUT.  |
`--------------------------------*/

/*ARGSUSED*/
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_symbol_value_print (FILE *yyoutput, int yytype, YYSTYPE const * const yyvaluep, CSSParser* parser)
#else
static void
yy_symbol_value_print (yyoutput, yytype, yyvaluep, parser)
    FILE *yyoutput;
    int yytype;
    YYSTYPE const * const yyvaluep;
    CSSParser* parser;
#endif
{
  if (!yyvaluep)
    return;
  YYUSE (parser);
# ifdef YYPRINT
  if (yytype < YYNTOKENS)
    YYPRINT (yyoutput, yytoknum[yytype], *yyvaluep);
# else
  YYUSE (yyoutput);
# endif
  switch (yytype)
    {
      default:
	break;
    }
}


/*--------------------------------.
| Print this symbol on YYOUTPUT.  |
`--------------------------------*/

#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_symbol_print (FILE *yyoutput, int yytype, YYSTYPE const * const yyvaluep, CSSParser* parser)
#else
static void
yy_symbol_print (yyoutput, yytype, yyvaluep, parser)
    FILE *yyoutput;
    int yytype;
    YYSTYPE const * const yyvaluep;
    CSSParser* parser;
#endif
{
  if (yytype < YYNTOKENS)
    YYFPRINTF (yyoutput, "token %s (", yytname[yytype]);
  else
    YYFPRINTF (yyoutput, "nterm %s (", yytname[yytype]);

  yy_symbol_value_print (yyoutput, yytype, yyvaluep, parser);
  YYFPRINTF (yyoutput, ")");
}

/*------------------------------------------------------------------.
| yy_stack_print -- Print the state stack from its BOTTOM up to its |
| TOP (included).                                                   |
`------------------------------------------------------------------*/

#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_stack_print (yytype_int16 *bottom, yytype_int16 *top)
#else
static void
yy_stack_print (bottom, top)
    yytype_int16 *bottom;
    yytype_int16 *top;
#endif
{
  YYFPRINTF (stderr, "Stack now");
  for (; bottom <= top; ++bottom)
    YYFPRINTF (stderr, " %d", *bottom);
  YYFPRINTF (stderr, "\n");
}

# define YY_STACK_PRINT(Bottom, Top)				\
do {								\
  if (yydebug)							\
    yy_stack_print ((Bottom), (Top));				\
} while (YYID (0))


/*------------------------------------------------.
| Report that the YYRULE is going to be reduced.  |
`------------------------------------------------*/

#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yy_reduce_print (YYSTYPE *yyvsp, int yyrule, CSSParser* parser)
#else
static void
yy_reduce_print (yyvsp, yyrule, parser)
    YYSTYPE *yyvsp;
    int yyrule;
    CSSParser* parser;
#endif
{
  int yynrhs = yyr2[yyrule];
  int yyi;
  unsigned long int yylno = yyrline[yyrule];
  YYFPRINTF (stderr, "Reducing stack by rule %d (line %lu):\n",
	     yyrule - 1, yylno);
  /* The symbols being reduced.  */
  for (yyi = 0; yyi < yynrhs; yyi++)
    {
      fprintf (stderr, "   $%d = ", yyi + 1);
      yy_symbol_print (stderr, yyrhs[yyprhs[yyrule] + yyi],
		       &(yyvsp[(yyi + 1) - (yynrhs)])
		       		       , parser);
      fprintf (stderr, "\n");
    }
}

# define YY_REDUCE_PRINT(Rule)		\
do {					\
  if (yydebug)				\
    yy_reduce_print (yyvsp, Rule, parser); \
} while (YYID (0))

/* Nonzero means print parse trace.  It is left uninitialized so that
   multiple parsers can coexist.  */
int yydebug;
#else /* !YYDEBUG */
# define YYDPRINTF(Args)
# define YY_SYMBOL_PRINT(Title, Type, Value, Location)
# define YY_STACK_PRINT(Bottom, Top)
# define YY_REDUCE_PRINT(Rule)
#endif /* !YYDEBUG */


/* YYINITDEPTH -- initial size of the parser's stacks.  */
#ifndef	YYINITDEPTH
# define YYINITDEPTH 200
#endif

/* YYMAXDEPTH -- maximum size the stacks can grow to (effective only
   if the built-in stack extension method is used).

   Do not make this value too large; the results are undefined if
   YYSTACK_ALLOC_MAXIMUM < YYSTACK_BYTES (YYMAXDEPTH)
   evaluated with infinite-precision integer arithmetic.  */

#ifndef YYMAXDEPTH
# define YYMAXDEPTH 10000
#endif



#if YYERROR_VERBOSE

# ifndef yystrlen
#  if defined __GLIBC__ && defined _STRING_H
#   define yystrlen strlen
#  else
/* Return the length of YYSTR.  */
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static YYSIZE_T
yystrlen (const char *yystr)
#else
static YYSIZE_T
yystrlen (yystr)
    const char *yystr;
#endif
{
  YYSIZE_T yylen;
  for (yylen = 0; yystr[yylen]; yylen++)
    continue;
  return yylen;
}
#  endif
# endif

# ifndef yystpcpy
#  if defined __GLIBC__ && defined _STRING_H && defined _GNU_SOURCE
#   define yystpcpy stpcpy
#  else
/* Copy YYSRC to YYDEST, returning the address of the terminating '\0' in
   YYDEST.  */
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static char *
yystpcpy (char *yydest, const char *yysrc)
#else
static char *
yystpcpy (yydest, yysrc)
    char *yydest;
    const char *yysrc;
#endif
{
  char *yyd = yydest;
  const char *yys = yysrc;

  while ((*yyd++ = *yys++) != '\0')
    continue;

  return yyd - 1;
}
#  endif
# endif

# ifndef yytnamerr
/* Copy to YYRES the contents of YYSTR after stripping away unnecessary
   quotes and backslashes, so that it's suitable for yyerror.  The
   heuristic is that double-quoting is unnecessary unless the string
   contains an apostrophe, a comma, or backslash (other than
   backslash-backslash).  YYSTR is taken from yytname.  If YYRES is
   null, do not copy; instead, return the length of what the result
   would have been.  */
static YYSIZE_T
yytnamerr (char *yyres, const char *yystr)
{
  if (*yystr == '"')
    {
      YYSIZE_T yyn = 0;
      char const *yyp = yystr;

      for (;;)
	switch (*++yyp)
	  {
	  case '\'':
	  case ',':
	    goto do_not_strip_quotes;

	  case '\\':
	    if (*++yyp != '\\')
	      goto do_not_strip_quotes;
	    /* Fall through.  */
	  default:
	    if (yyres)
	      yyres[yyn] = *yyp;
	    yyn++;
	    break;

	  case '"':
	    if (yyres)
	      yyres[yyn] = '\0';
	    return yyn;
	  }
    do_not_strip_quotes: ;
    }

  if (! yyres)
    return yystrlen (yystr);

  return yystpcpy (yyres, yystr) - yyres;
}
# endif

/* Copy into YYRESULT an error message about the unexpected token
   YYCHAR while in state YYSTATE.  Return the number of bytes copied,
   including the terminating null byte.  If YYRESULT is null, do not
   copy anything; just return the number of bytes that would be
   copied.  As a special case, return 0 if an ordinary "syntax error"
   message will do.  Return YYSIZE_MAXIMUM if overflow occurs during
   size calculation.  */
static YYSIZE_T
yysyntax_error (char *yyresult, int yystate, int yychar)
{
  int yyn = yypact[yystate];

  if (! (YYPACT_NINF < yyn && yyn <= YYLAST))
    return 0;
  else
    {
      int yytype = YYTRANSLATE (yychar);
      YYSIZE_T yysize0 = yytnamerr (0, yytname[yytype]);
      YYSIZE_T yysize = yysize0;
      YYSIZE_T yysize1;
      int yysize_overflow = 0;
      enum { YYERROR_VERBOSE_ARGS_MAXIMUM = 5 };
      char const *yyarg[YYERROR_VERBOSE_ARGS_MAXIMUM];
      int yyx;

# if 0
      /* This is so xgettext sees the translatable formats that are
	 constructed on the fly.  */
      YY_("syntax error, unexpected %s");
      YY_("syntax error, unexpected %s, expecting %s");
      YY_("syntax error, unexpected %s, expecting %s or %s");
      YY_("syntax error, unexpected %s, expecting %s or %s or %s");
      YY_("syntax error, unexpected %s, expecting %s or %s or %s or %s");
# endif
      char *yyfmt;
      char const *yyf;
      static char const yyunexpected[] = "syntax error, unexpected %s";
      static char const yyexpecting[] = ", expecting %s";
      static char const yyor[] = " or %s";
      char yyformat[sizeof yyunexpected
		    + sizeof yyexpecting - 1
		    + ((YYERROR_VERBOSE_ARGS_MAXIMUM - 2)
		       * (sizeof yyor - 1))];
      char const *yyprefix = yyexpecting;

      /* Start YYX at -YYN if negative to avoid negative indexes in
	 YYCHECK.  */
      int yyxbegin = yyn < 0 ? -yyn : 0;

      /* Stay within bounds of both yycheck and yytname.  */
      int yychecklim = YYLAST - yyn + 1;
      int yyxend = yychecklim < YYNTOKENS ? yychecklim : YYNTOKENS;
      int yycount = 1;

      yyarg[0] = yytname[yytype];
      yyfmt = yystpcpy (yyformat, yyunexpected);

      for (yyx = yyxbegin; yyx < yyxend; ++yyx)
	if (yycheck[yyx + yyn] == yyx && yyx != YYTERROR)
	  {
	    if (yycount == YYERROR_VERBOSE_ARGS_MAXIMUM)
	      {
		yycount = 1;
		yysize = yysize0;
		yyformat[sizeof yyunexpected - 1] = '\0';
		break;
	      }
	    yyarg[yycount++] = yytname[yyx];
	    yysize1 = yysize + yytnamerr (0, yytname[yyx]);
	    yysize_overflow |= (yysize1 < yysize);
	    yysize = yysize1;
	    yyfmt = yystpcpy (yyfmt, yyprefix);
	    yyprefix = yyor;
	  }

      yyf = YY_(yyformat);
      yysize1 = yysize + yystrlen (yyf);
      yysize_overflow |= (yysize1 < yysize);
      yysize = yysize1;

      if (yysize_overflow)
	return YYSIZE_MAXIMUM;

      if (yyresult)
	{
	  /* Avoid sprintf, as that infringes on the user's name space.
	     Don't have undefined behavior even if the translation
	     produced a string with the wrong number of "%s"s.  */
	  char *yyp = yyresult;
	  int yyi = 0;
	  while ((*yyp = *yyf) != '\0')
	    {
	      if (*yyp == '%' && yyf[1] == 's' && yyi < yycount)
		{
		  yyp += yytnamerr (yyp, yyarg[yyi++]);
		  yyf += 2;
		}
	      else
		{
		  yyp++;
		  yyf++;
		}
	    }
	}
      return yysize;
    }
}
#endif /* YYERROR_VERBOSE */


/*-----------------------------------------------.
| Release the memory associated to this symbol.  |
`-----------------------------------------------*/

/*ARGSUSED*/
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
static void
yydestruct (const char *yymsg, int yytype, YYSTYPE *yyvaluep, CSSParser* parser)
#else
static void
yydestruct (yymsg, yytype, yyvaluep, parser)
    const char *yymsg;
    int yytype;
    YYSTYPE *yyvaluep;
    CSSParser* parser;
#endif
{
  YYUSE (yyvaluep);
  YYUSE (parser);

  if (!yymsg)
    yymsg = "Deleting";
  YY_SYMBOL_PRINT (yymsg, yytype, yyvaluep, yylocationp);

  switch (yytype)
    {
      case 131: /* "valid_rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2120 "./CSSGrammar.cpp"
	break;
      case 132: /* "rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2125 "./CSSGrammar.cpp"
	break;
      case 133: /* "block_rule_list" */
#line 205 "./CSSGrammar.y"
	{ delete (yyvaluep->ruleList); };
#line 2130 "./CSSGrammar.cpp"
	break;
      case 134: /* "block_valid_rule_list" */
#line 205 "./CSSGrammar.y"
	{ delete (yyvaluep->ruleList); };
#line 2135 "./CSSGrammar.cpp"
	break;
      case 135: /* "block_valid_rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2140 "./CSSGrammar.cpp"
	break;
      case 136: /* "block_rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2145 "./CSSGrammar.cpp"
	break;
      case 139: /* "import" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2150 "./CSSGrammar.cpp"
	break;
      case 143: /* "maybe_media_value" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2155 "./CSSGrammar.cpp"
	break;
      case 144: /* "media_query_exp" */
#line 224 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQueryExp); };
#line 2160 "./CSSGrammar.cpp"
	break;
      case 145: /* "media_query_exp_list" */
#line 228 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQueryExpList); };
#line 2165 "./CSSGrammar.cpp"
	break;
      case 146: /* "maybe_and_media_query_exp_list" */
#line 228 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQueryExpList); };
#line 2170 "./CSSGrammar.cpp"
	break;
      case 148: /* "media_query" */
#line 217 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQuery); };
#line 2175 "./CSSGrammar.cpp"
	break;
      case 149: /* "maybe_media_list" */
#line 213 "./CSSGrammar.y"
	{ if ((yyvaluep->mediaList)) (yyvaluep->mediaList)->deref(); };
#line 2180 "./CSSGrammar.cpp"
	break;
      case 150: /* "media_list" */
#line 213 "./CSSGrammar.y"
	{ if ((yyvaluep->mediaList)) (yyvaluep->mediaList)->deref(); };
#line 2185 "./CSSGrammar.cpp"
	break;
      case 154: /* "media" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2190 "./CSSGrammar.cpp"
	break;
      case 156: /* "keyframes" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2195 "./CSSGrammar.cpp"
	break;
      case 158: /* "keyframes_rule" */
#line 238 "./CSSGrammar.y"
	{ delete (yyvaluep->keyframeRuleList); };
#line 2200 "./CSSGrammar.cpp"
	break;
      case 159: /* "keyframe_rule" */
#line 234 "./CSSGrammar.y"
	{ if ((yyvaluep->keyframe)) (yyvaluep->keyframe)->deref(); };
#line 2205 "./CSSGrammar.cpp"
	break;
      case 160: /* "key_list" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2210 "./CSSGrammar.cpp"
	break;
      case 163: /* "page" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2215 "./CSSGrammar.cpp"
	break;
      case 164: /* "page_selector" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2220 "./CSSGrammar.cpp"
	break;
      case 170: /* "font_face" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2225 "./CSSGrammar.cpp"
	break;
      case 172: /* "region" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2230 "./CSSGrammar.cpp"
	break;
      case 174: /* "filter" */
#line 283 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2235 "./CSSGrammar.cpp"
	break;
      case 182: /* "ruleset" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2240 "./CSSGrammar.cpp"
	break;
      case 184: /* "selector_list" */
#line 256 "./CSSGrammar.y"
	{ delete (yyvaluep->selectorList); };
#line 2245 "./CSSGrammar.cpp"
	break;
      case 185: /* "selector_with_trailing_whitespace" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2250 "./CSSGrammar.cpp"
	break;
      case 186: /* "selector" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2255 "./CSSGrammar.cpp"
	break;
      case 188: /* "simple_selector" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2260 "./CSSGrammar.cpp"
	break;
      case 189: /* "simple_selector_list" */
#line 256 "./CSSGrammar.y"
	{ delete (yyvaluep->selectorList); };
#line 2265 "./CSSGrammar.cpp"
	break;
      case 191: /* "specifier_list" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2270 "./CSSGrammar.cpp"
	break;
      case 192: /* "specifier" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2275 "./CSSGrammar.cpp"
	break;
      case 193: /* "class" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2280 "./CSSGrammar.cpp"
	break;
      case 194: /* "attrib" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2285 "./CSSGrammar.cpp"
	break;
      case 197: /* "pseudo_page" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2290 "./CSSGrammar.cpp"
	break;
      case 198: /* "pseudo" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2295 "./CSSGrammar.cpp"
	break;
      case 206: /* "expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2300 "./CSSGrammar.cpp"
	break;
      case 207: /* "valid_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2305 "./CSSGrammar.cpp"
	break;
      case 210: /* "term" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2310 "./CSSGrammar.cpp"
	break;
      case 212: /* "function" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2315 "./CSSGrammar.cpp"
	break;
      case 213: /* "calc_func_term" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2320 "./CSSGrammar.cpp"
	break;
      case 216: /* "calc_func_paren_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2325 "./CSSGrammar.cpp"
	break;
      case 217: /* "calc_func_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2330 "./CSSGrammar.cpp"
	break;
      case 218: /* "valid_calc_func_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2335 "./CSSGrammar.cpp"
	break;
      case 219: /* "calc_func_expr_list" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2340 "./CSSGrammar.cpp"
	break;
      case 220: /* "calc_function" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2345 "./CSSGrammar.cpp"
	break;
      case 222: /* "min_or_max_function" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2350 "./CSSGrammar.cpp"
	break;

      default:
	break;
    }
}


/* Prevent warnings from -Wmissing-prototypes.  */

#ifdef YYPARSE_PARAM
#if defined __STDC__ || defined __cplusplus
int yyparse (void *YYPARSE_PARAM);
#else
int yyparse ();
#endif
#else /* ! YYPARSE_PARAM */
#if defined __STDC__ || defined __cplusplus
int yyparse (CSSParser* parser);
#else
int yyparse ();
#endif
#endif /* ! YYPARSE_PARAM */






/*----------.
| yyparse.  |
`----------*/

#ifdef YYPARSE_PARAM
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
int
yyparse (void *YYPARSE_PARAM)
#else
int
yyparse (YYPARSE_PARAM)
    void *YYPARSE_PARAM;
#endif
#else /* ! YYPARSE_PARAM */
#if (defined __STDC__ || defined __C99__FUNC__ \
     || defined __cplusplus || defined _MSC_VER)
int
yyparse (CSSParser* parser)
#else
int
yyparse (parser)
    CSSParser* parser;
#endif
#endif
{
  /* The look-ahead symbol.  */
int yychar;

/* The semantic value of the look-ahead symbol.  */
YYSTYPE yylval;

/* Number of syntax errors so far.  */
int yynerrs;

  int yystate;
  int yyn;
  int yyresult;
  /* Number of tokens to shift before error messages enabled.  */
  int yyerrstatus;
  /* Look-ahead token as an internal (translated) token number.  */
  int yytoken = 0;
#if YYERROR_VERBOSE
  /* Buffer for error messages, and its allocated size.  */
  char yymsgbuf[128];
  char *yymsg = yymsgbuf;
  YYSIZE_T yymsg_alloc = sizeof yymsgbuf;
#endif

  /* Three stacks and their tools:
     `yyss': related to states,
     `yyvs': related to semantic values,
     `yyls': related to locations.

     Refer to the stacks thru separate pointers, to allow yyoverflow
     to reallocate them elsewhere.  */

  /* The state stack.  */
  yytype_int16 yyssa[YYINITDEPTH];
  yytype_int16 *yyss = yyssa;
  yytype_int16 *yyssp;

  /* The semantic value stack.  */
  YYSTYPE yyvsa[YYINITDEPTH];
  YYSTYPE *yyvs = yyvsa;
  YYSTYPE *yyvsp;



#define YYPOPSTACK(N)   (yyvsp -= (N), yyssp -= (N))

  YYSIZE_T yystacksize = YYINITDEPTH;

  /* The variables used to return semantic value and location from the
     action routines.  */
  YYSTYPE yyval;


  /* The number of symbols on the RHS of the reduced rule.
     Keep to zero when no symbol should be popped.  */
  int yylen = 0;

  YYDPRINTF ((stderr, "Starting parse\n"));

  yystate = 0;
  yyerrstatus = 0;
  yynerrs = 0;
  yychar = YYEMPTY;		/* Cause a token to be read.  */

  /* Initialize stack pointers.
     Waste one element of value and location stack
     so that they stay on the same level as the state stack.
     The wasted elements are never initialized.  */

  yyssp = yyss;
  yyvsp = yyvs;

  goto yysetstate;

/*------------------------------------------------------------.
| yynewstate -- Push a new state, which is found in yystate.  |
`------------------------------------------------------------*/
 yynewstate:
  /* In all cases, when you get here, the value and location stacks
     have just been pushed.  So pushing a state here evens the stacks.  */
  yyssp++;

 yysetstate:
  *yyssp = yystate;

  if (yyss + yystacksize - 1 <= yyssp)
    {
      /* Get the current used size of the three stacks, in elements.  */
      YYSIZE_T yysize = yyssp - yyss + 1;

#ifdef yyoverflow
      {
	/* Give user a chance to reallocate the stack.  Use copies of
	   these so that the &'s don't force the real ones into
	   memory.  */
	YYSTYPE *yyvs1 = yyvs;
	yytype_int16 *yyss1 = yyss;


	/* Each stack pointer address is followed by the size of the
	   data in use in that stack, in bytes.  This used to be a
	   conditional around just the two extra args, but that might
	   be undefined if yyoverflow is a macro.  */
	yyoverflow (YY_("memory exhausted"),
		    &yyss1, yysize * sizeof (*yyssp),
		    &yyvs1, yysize * sizeof (*yyvsp),

		    &yystacksize);

	yyss = yyss1;
	yyvs = yyvs1;
      }
#else /* no yyoverflow */
# ifndef YYSTACK_RELOCATE
      goto yyexhaustedlab;
# else
      /* Extend the stack our own way.  */
      if (YYMAXDEPTH <= yystacksize)
	goto yyexhaustedlab;
      yystacksize *= 2;
      if (YYMAXDEPTH < yystacksize)
	yystacksize = YYMAXDEPTH;

      {
	yytype_int16 *yyss1 = yyss;
	union yyalloc *yyptr =
	  (union yyalloc *) YYSTACK_ALLOC (YYSTACK_BYTES (yystacksize));
	if (! yyptr)
	  goto yyexhaustedlab;
	YYSTACK_RELOCATE (yyss);
	YYSTACK_RELOCATE (yyvs);

#  undef YYSTACK_RELOCATE
	if (yyss1 != yyssa)
	  YYSTACK_FREE (yyss1);
      }
# endif
#endif /* no yyoverflow */

      yyssp = yyss + yysize - 1;
      yyvsp = yyvs + yysize - 1;


      YYDPRINTF ((stderr, "Stack size increased to %lu\n",
		  (unsigned long int) yystacksize));

      if (yyss + yystacksize - 1 <= yyssp)
	YYABORT;
    }

  YYDPRINTF ((stderr, "Entering state %d\n", yystate));

  goto yybackup;

/*-----------.
| yybackup.  |
`-----------*/
yybackup:

  /* Do appropriate processing given the current state.  Read a
     look-ahead token if we need one and don't already have one.  */

  /* First try to decide what to do without reference to look-ahead token.  */
  yyn = yypact[yystate];
  if (yyn == YYPACT_NINF)
    goto yydefault;

  /* Not known => get a look-ahead token if don't already have one.  */

  /* YYCHAR is either YYEMPTY or YYEOF or a valid look-ahead symbol.  */
  if (yychar == YYEMPTY)
    {
      YYDPRINTF ((stderr, "Reading a token: "));
      yychar = YYLEX;
    }

  if (yychar <= YYEOF)
    {
      yychar = yytoken = YYEOF;
      YYDPRINTF ((stderr, "Now at end of input.\n"));
    }
  else
    {
      yytoken = YYTRANSLATE (yychar);
      YY_SYMBOL_PRINT ("Next token is", yytoken, &yylval, &yylloc);
    }

  /* If the proper action on seeing token YYTOKEN is to reduce or to
     detect an error, take that action.  */
  yyn += yytoken;
  if (yyn < 0 || YYLAST < yyn || yycheck[yyn] != yytoken)
    goto yydefault;
  yyn = yytable[yyn];
  if (yyn <= 0)
    {
      if (yyn == 0 || yyn == YYTABLE_NINF)
	goto yyerrlab;
      yyn = -yyn;
      goto yyreduce;
    }

  if (yyn == YYFINAL)
    YYACCEPT;

  /* Count tokens shifted since error; after three, turn off error
     status.  */
  if (yyerrstatus)
    yyerrstatus--;

  /* Shift the look-ahead token.  */
  YY_SYMBOL_PRINT ("Shifting", yytoken, &yylval, &yylloc);

  /* Discard the shifted token unless it is eof.  */
  if (yychar != YYEOF)
    yychar = YYEMPTY;

  yystate = yyn;
  *++yyvsp = yylval;

  goto yynewstate;


/*-----------------------------------------------------------.
| yydefault -- do the default action for the current state.  |
`-----------------------------------------------------------*/
yydefault:
  yyn = yydefact[yystate];
  if (yyn == 0)
    goto yyerrlab;
  goto yyreduce;


/*-----------------------------.
| yyreduce -- Do a reduction.  |
`-----------------------------*/
yyreduce:
  /* yyn is the number of a rule to reduce with.  */
  yylen = yyr2[yyn];

  /* If YYLEN is nonzero, implement the default value of the action:
     `$$ = $1'.

     Otherwise, the following line sets YYVAL to garbage.
     This behavior is undocumented and Bison
     users should not rely upon it.  Assigning to YYVAL
     unconditionally makes the parser a bit smaller, and it avoids a
     GCC warning that YYVAL may be used uninitialized.  */
  yyval = yyvsp[1-yylen];


  YY_REDUCE_PRINT (yyn);
  switch (yyn)
    {
        case 9:
#line 299 "./CSSGrammar.y"
    { parser->m_rule = adoptRef((yyvsp[(4) - (6)].rule)); ;}
    break;

  case 10:
#line 301 "./CSSGrammar.y"
    { parser->m_keyframe = adoptRef((yyvsp[(4) - (6)].keyframe)); ;}
    break;

  case 12:
#line 306 "./CSSGrammar.y"
    {
        if ((yyvsp[(4) - (5)].valueList)) {
            parser->m_valueList = adoptPtr((yyvsp[(4) - (5)].valueList));
            int oldParsedProperties = parser->m_parsedProperties.size();
            if (!parser->parseValue(parser->m_id, parser->m_important))
                parser->rollbackLastProperties(parser->m_parsedProperties.size() - oldParsedProperties);
            parser->m_valueList = nullptr;
        }
    ;}
    break;

  case 13:
#line 317 "./CSSGrammar.y"
    { parser->m_mediaQuery = adoptPtr((yyvsp[(4) - (5)].mediaQuery)); ;}
    break;

  case 14:
#line 320 "./CSSGrammar.y"
    {
        if ((yyvsp[(4) - (5)].selectorList)) {
            if (parser->m_selectorListForParseSelector)
                parser->m_selectorListForParseSelector->adoptSelectorVector(*(yyvsp[(4) - (5)].selectorList));
            parser->recycleSelectorVector(adoptPtr((yyvsp[(4) - (5)].selectorList)));
        }
    ;}
    break;

  case 28:
#line 341 "./CSSGrammar.y"
    {
     if (parser->m_styleSheet)
         parser->m_styleSheet->parserSetEncodingFromCharsetRule((yyvsp[(3) - (5)].string));
     if (parser->isExtractingSourceData() && parser->m_currentRuleDataStack->isEmpty() && parser->m_ruleSourceDataResult)
         parser->addNewRuleToSourceTree(CSSRuleSourceData::createUnknown());
  ;}
    break;

  case 34:
#line 356 "./CSSGrammar.y"
    {
        if (RefPtr<StyleRuleBase> rule = adoptRef((yyvsp[(2) - (3)].rule))) {
            if (parser->m_styleSheet)
                parser->m_styleSheet->parserAppendRule(rule.releaseNonNull());
        }
    ;}
    break;

  case 40:
#line 370 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 44:
#line 378 "./CSSGrammar.y"
    {
        (yyval.rule) = (yyvsp[(1) - (1)].rule);
        parser->m_hadSyntacticallyValidCSSRule = true;
    ;}
    break;

  case 45:
#line 382 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 46:
#line 383 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 47:
#line 384 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 48:
#line 388 "./CSSGrammar.y"
    { (yyval.ruleList) = nullptr; ;}
    break;

  case 49:
#line 389 "./CSSGrammar.y"
    {
      (yyval.ruleList) = (yyvsp[(1) - (3)].ruleList);
      if (RefPtr<StyleRuleBase> rule = adoptRef((yyvsp[(2) - (3)].rule))) {
          if (!(yyval.ruleList))
              (yyval.ruleList) = new Vector<RefPtr<StyleRuleBase>>;
          (yyval.ruleList)->append(rule.release());
      }
  ;}
    break;

  case 50:
#line 400 "./CSSGrammar.y"
    { (yyval.ruleList) = nullptr; ;}
    break;

  case 51:
#line 401 "./CSSGrammar.y"
    {
      (yyval.ruleList) = (yyvsp[(1) - (3)].ruleList);
      if (RefPtr<StyleRuleBase> rule = adoptRef((yyvsp[(2) - (3)].rule))) {
          if (!(yyval.ruleList))
              (yyval.ruleList) = new Vector<RefPtr<StyleRuleBase>>;
          (yyval.ruleList)->append(rule.release());
      }
  ;}
    break;

  case 59:
#line 428 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 60:
#line 428 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 61:
#line 428 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 64:
#line 431 "./CSSGrammar.y"
    {
        parser->markRuleHeaderEnd();
        parser->markRuleBodyStart();
    ;}
    break;

  case 65:
#line 438 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::IMPORT_RULE);
    ;}
    break;

  case 66:
#line 444 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createImportRule((yyvsp[(4) - (7)].string), adoptRef((yyvsp[(6) - (7)].mediaList))).leakRef();
    ;}
    break;

  case 67:
#line 447 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createImportRule((yyvsp[(4) - (7)].string), adoptRef((yyvsp[(6) - (7)].mediaList))).leakRef();
    ;}
    break;

  case 68:
#line 450 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
        if ((yyvsp[(6) - (7)].mediaList))
            (yyvsp[(6) - (7)].mediaList)->deref();
    ;}
    break;

  case 69:
#line 456 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 70:
#line 460 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 71:
#line 467 "./CSSGrammar.y"
    { parser->addNamespace((yyvsp[(3) - (6)].string), (yyvsp[(4) - (6)].string)); ;}
    break;

  case 75:
#line 473 "./CSSGrammar.y"
    { (yyval.string).clear(); ;}
    break;

  case 79:
#line 477 "./CSSGrammar.y"
    { (yyval.valueList) = nullptr; ;}
    break;

  case 80:
#line 477 "./CSSGrammar.y"
    { (yyval.valueList) = (yyvsp[(3) - (4)].valueList); ;}
    break;

  case 81:
#line 480 "./CSSGrammar.y"
    {


        OwnPtr<CSSParserValueList> mediaValue = adoptPtr((yyvsp[(7) - (9)].valueList));
        if ((yyvsp[(1) - (9)].mediaQueryRestrictor) != MediaQuery::None)
            (yyval.mediaQueryExp) = MediaQueryExp::create(emptyString(), nullptr).leakPtr();
        else {
            (yyvsp[(5) - (9)].string).lower();
            (yyval.mediaQueryExp) = MediaQueryExp::create((yyvsp[(5) - (9)].string), mediaValue.get()).leakPtr();
        }
    ;}
    break;

  case 82:
#line 494 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = new Vector<OwnPtr<MediaQueryExp>>;
        (yyval.mediaQueryExpList)->append(adoptPtr((yyvsp[(1) - (1)].mediaQueryExp)));
    ;}
    break;

  case 83:
#line 498 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = (yyvsp[(1) - (5)].mediaQueryExpList);
        (yyval.mediaQueryExpList)->append(adoptPtr((yyvsp[(5) - (5)].mediaQueryExp)));
    ;}
    break;

  case 84:
#line 505 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = new Vector<OwnPtr<MediaQueryExp>>;
    ;}
    break;

  case 85:
#line 508 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = (yyvsp[(3) - (3)].mediaQueryExpList);
    ;}
    break;

  case 86:
#line 514 "./CSSGrammar.y"
    {
        (yyval.mediaQueryRestrictor) = MediaQuery::None;
    ;}
    break;

  case 87:
#line 517 "./CSSGrammar.y"
    {
        (yyval.mediaQueryRestrictor) = MediaQuery::Only;
    ;}
    break;

  case 88:
#line 520 "./CSSGrammar.y"
    {
        (yyval.mediaQueryRestrictor) = MediaQuery::Not;
    ;}
    break;

  case 89:
#line 526 "./CSSGrammar.y"
    {
        (yyval.mediaQuery) = new MediaQuery(MediaQuery::None, "all", adoptPtr((yyvsp[(1) - (1)].mediaQueryExpList)));
    ;}
    break;

  case 90:
#line 530 "./CSSGrammar.y"
    {
        (yyvsp[(3) - (5)].string).lower();
        (yyval.mediaQuery) = new MediaQuery((yyvsp[(1) - (5)].mediaQueryRestrictor), (yyvsp[(3) - (5)].string), adoptPtr((yyvsp[(5) - (5)].mediaQueryExpList)));
    ;}
    break;

  case 91:
#line 536 "./CSSGrammar.y"
    { (yyval.mediaList) = MediaQuerySet::create().leakRef(); ;}
    break;

  case 93:
#line 539 "./CSSGrammar.y"
    {
        (yyval.mediaList) = MediaQuerySet::create().leakRef();
        (yyval.mediaList)->addMediaQuery(adoptPtr((yyvsp[(1) - (1)].mediaQuery)));
        parser->updateLastMediaLine((yyval.mediaList));
    ;}
    break;

  case 94:
#line 544 "./CSSGrammar.y"
    {
        (yyval.mediaList) = (yyvsp[(1) - (4)].mediaList);
        OwnPtr<MediaQuery> mediaQuery = adoptPtr((yyvsp[(4) - (4)].mediaQuery));
        if ((yyval.mediaList)) {
            (yyval.mediaList)->addMediaQuery(mediaQuery.release());
            parser->updateLastMediaLine((yyval.mediaList));
        }
    ;}
    break;

  case 95:
#line 552 "./CSSGrammar.y"
    {
        (yyval.mediaList) = nullptr;
        if ((yyvsp[(1) - (2)].mediaList))
            (yyvsp[(1) - (2)].mediaList)->deref();
    ;}
    break;

  case 96:
#line 560 "./CSSGrammar.y"
    {
        parser->markRuleBodyStart();
    ;}
    break;

  case 97:
#line 566 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::MEDIA_RULE);
    ;}
    break;

  case 98:
#line 572 "./CSSGrammar.y"
    {
        parser->markRuleHeaderEnd();
    ;}
    break;

  case 99:
#line 578 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createMediaRule(adoptRef((yyvsp[(4) - (10)].mediaList)), adoptPtr((yyvsp[(9) - (10)].ruleList)).get()).leakRef();
    ;}
    break;

  case 100:
#line 581 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createEmptyMediaRule(adoptPtr((yyvsp[(7) - (8)].ruleList)).get()).leakRef();
    ;}
    break;

  case 101:
#line 584 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 102:
#line 590 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::KEYFRAMES_RULE);
    ;}
    break;

  case 103:
#line 596 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createKeyframesRule((yyvsp[(4) - (10)].string), adoptPtr((yyvsp[(9) - (10)].keyframeRuleList))).leakRef();
    ;}
    break;

  case 106:
#line 604 "./CSSGrammar.y"
    { (yyval.keyframeRuleList) = new Vector<RefPtr<StyleKeyframe>>; ;}
    break;

  case 107:
#line 605 "./CSSGrammar.y"
    {
        (yyval.keyframeRuleList) = (yyvsp[(1) - (3)].keyframeRuleList);
        if (RefPtr<StyleKeyframe> keyframe = adoptRef((yyvsp[(2) - (3)].keyframe)))
            (yyval.keyframeRuleList)->append(keyframe.release());
    ;}
    break;

  case 108:
#line 612 "./CSSGrammar.y"
    { (yyval.keyframe) = parser->createKeyframe(*adoptPtr((yyvsp[(1) - (6)].valueList))).leakRef(); ;}
    break;

  case 109:
#line 615 "./CSSGrammar.y"
    {
        (yyval.valueList) = new CSSParserValueList;
        (yyval.valueList)->addValue((yyvsp[(1) - (1)].value));
    ;}
    break;

  case 110:
#line 619 "./CSSGrammar.y"
    {
        (yyval.valueList) = (yyvsp[(1) - (5)].valueList);
        ASSERT((yyvsp[(5) - (5)].value).unit != CSSParserValue::Function);
        if ((yyval.valueList))
            (yyval.valueList)->addValue((yyvsp[(5) - (5)].value));
    ;}
    break;

  case 111:
#line 628 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = false; (yyval.value).fValue = (yyvsp[(1) - (2)].integer) * (yyvsp[(2) - (2)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER; ;}
    break;

  case 112:
#line 629 "./CSSGrammar.y"
    {
        (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = false; (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER;
        CSSParserString& str = (yyvsp[(1) - (1)].string);
        if (str.equalIgnoringCase("from"))
            (yyval.value).fValue = 0;
        else if (str.equalIgnoringCase("to"))
            (yyval.value).fValue = 100;
        else {
            (yyval.value).unit = 0;
            YYERROR;
        }
    ;}
    break;

  case 113:
#line 641 "./CSSGrammar.y"
    {
        (yyval.value).unit = 0;
    ;}
    break;

  case 114:
#line 647 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::PAGE_RULE);
    ;}
    break;

  case 115:
#line 654 "./CSSGrammar.y"
    {
        if ((yyvsp[(4) - (10)].selector))
            (yyval.rule) = parser->createPageRule(adoptPtr((yyvsp[(4) - (10)].selector))).leakRef();
        else {

            parser->clearProperties();

            (yyval.rule) = nullptr;
            parser->popRuleData();
        }
    ;}
    break;

  case 116:
#line 665 "./CSSGrammar.y"
    {
        parser->popRuleData();
        (yyval.rule) = nullptr;
    ;}
    break;

  case 117:
#line 669 "./CSSGrammar.y"
    {
        parser->popRuleData();
        (yyval.rule) = nullptr;
    ;}
    break;

  case 118:
#line 676 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector(QualifiedName(nullAtom, (yyvsp[(1) - (1)].string), parser->m_defaultNamespace));
        (yyval.selector)->setForPage();
    ;}
    break;

  case 119:
#line 680 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(2) - (2)].selector);
        if ((yyval.selector)) {
            (yyval.selector)->prependTagSelector(QualifiedName(nullAtom, (yyvsp[(1) - (2)].string), parser->m_defaultNamespace));
            (yyval.selector)->setForPage();
        }
    ;}
    break;

  case 120:
#line 687 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(1) - (1)].selector);
        if ((yyval.selector))
            (yyval.selector)->setForPage();
    ;}
    break;

  case 121:
#line 692 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setForPage();
    ;}
    break;

  case 124:
#line 701 "./CSSGrammar.y"
    {
        parser->startDeclarationsForMarginBox();
    ;}
    break;

  case 125:
#line 703 "./CSSGrammar.y"
    {
        parser->createMarginAtRule((yyvsp[(1) - (7)].marginBox));
    ;}
    break;

  case 126:
#line 709 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopLeftCornerMarginBox;
    ;}
    break;

  case 127:
#line 712 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopLeftMarginBox;
    ;}
    break;

  case 128:
#line 715 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopCenterMarginBox;
    ;}
    break;

  case 129:
#line 718 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopRightMarginBox;
    ;}
    break;

  case 130:
#line 721 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopRightCornerMarginBox;
    ;}
    break;

  case 131:
#line 724 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomLeftCornerMarginBox;
    ;}
    break;

  case 132:
#line 727 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomLeftMarginBox;
    ;}
    break;

  case 133:
#line 730 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomCenterMarginBox;
    ;}
    break;

  case 134:
#line 733 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomRightMarginBox;
    ;}
    break;

  case 135:
#line 736 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomRightCornerMarginBox;
    ;}
    break;

  case 136:
#line 739 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::LeftTopMarginBox;
    ;}
    break;

  case 137:
#line 742 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::LeftMiddleMarginBox;
    ;}
    break;

  case 138:
#line 745 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::LeftBottomMarginBox;
    ;}
    break;

  case 139:
#line 748 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::RightTopMarginBox;
    ;}
    break;

  case 140:
#line 751 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::RightMiddleMarginBox;
    ;}
    break;

  case 141:
#line 754 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::RightBottomMarginBox;
    ;}
    break;

  case 142:
#line 760 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::FONT_FACE_RULE);
    ;}
    break;

  case 143:
#line 766 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createFontFaceRule().leakRef();
    ;}
    break;

  case 144:
#line 769 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 145:
#line 773 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 146:
#line 779 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::REGION_RULE);
    ;}
    break;

  case 147:
#line 785 "./CSSGrammar.y"
    {
        OwnPtr<Vector<RefPtr<StyleRuleBase>>> ruleList = adoptPtr((yyvsp[(9) - (10)].ruleList));
        if ((yyvsp[(4) - (10)].selectorList))
            (yyval.rule) = parser->createRegionRule(adoptPtr((yyvsp[(4) - (10)].selectorList)).get(), ruleList.get()).leakRef();
        else {
            (yyval.rule) = nullptr;
            parser->popRuleData();
        }
    ;}
    break;

  case 148:
#line 799 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::FILTER_RULE);
        parser->m_inFilterRule = true;
    ;}
    break;

  case 149:
#line 806 "./CSSGrammar.y"
    {
        parser->m_inFilterRule = false;
        (yyval.rule) = parser->createFilterRule((yyvsp[(4) - (10)].string)).leakRef();
    ;}
    break;

  case 150:
#line 815 "./CSSGrammar.y"
    { (yyval.relation) = CSSSelector::DirectAdjacent; ;}
    break;

  case 151:
#line 816 "./CSSGrammar.y"
    { (yyval.relation) = CSSSelector::IndirectAdjacent; ;}
    break;

  case 152:
#line 817 "./CSSGrammar.y"
    { (yyval.relation) = CSSSelector::Child; ;}
    break;

  case 154:
#line 820 "./CSSGrammar.y"
    { (yyval.integer) = 1; ;}
    break;

  case 155:
#line 822 "./CSSGrammar.y"
    { (yyval.integer) = -1; ;}
    break;

  case 156:
#line 822 "./CSSGrammar.y"
    { (yyval.integer) = 1; ;}
    break;

  case 157:
#line 824 "./CSSGrammar.y"
    { parser->markPropertyStart(); ;}
    break;

  case 158:
#line 827 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::STYLE_RULE);
        parser->markSelectorStart();
    ;}
    break;

  case 159:
#line 833 "./CSSGrammar.y"
    { parser->markRuleHeaderEnd(); ;}
    break;

  case 160:
#line 835 "./CSSGrammar.y"
    { parser->markSelectorEnd(); ;}
    break;

  case 161:
#line 838 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createStyleRule((yyvsp[(2) - (9)].selectorList)).leakRef();
        parser->recycleSelectorVector(adoptPtr((yyvsp[(2) - (9)].selectorList)));
    ;}
    break;

  case 162:
#line 844 "./CSSGrammar.y"
    { parser->markSelectorStart(); ;}
    break;

  case 163:
#line 847 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        if ((yyvsp[(1) - (1)].selector)) {
            (yyval.selectorList) = parser->createSelectorVector().leakPtr();
            (yyval.selectorList)->append(adoptPtr((yyvsp[(1) - (1)].selector)));
            parser->updateLastSelectorLineAndPosition();
        }
    ;}
    break;

  case 164:
#line 855 "./CSSGrammar.y"
    {
        OwnPtr<Vector<OwnPtr<CSSParserSelector>>> selectorList = adoptPtr((yyvsp[(1) - (6)].selectorList));
        OwnPtr<CSSParserSelector> selector = adoptPtr((yyvsp[(6) - (6)].selector));
        (yyval.selectorList) = nullptr;
        if (selectorList && selector) {
            (yyval.selectorList) = selectorList.leakPtr();
            (yyval.selectorList)->append(selector.release());
            parser->updateLastSelectorLineAndPosition();
        }
    ;}
    break;

  case 165:
#line 865 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        delete (yyvsp[(1) - (2)].selectorList);
    ;}
    break;

  case 169:
#line 877 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserSelector> left = adoptPtr((yyvsp[(1) - (2)].selector));
        OwnPtr<CSSParserSelector> right = adoptPtr((yyvsp[(2) - (2)].selector));
        (yyval.selector) = nullptr;
        if (left && right) {
            right->appendTagHistory(CSSSelector::Descendant, left.release());
            (yyval.selector) = right.leakPtr();
        }
    ;}
    break;

  case 170:
#line 886 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserSelector> left = adoptPtr((yyvsp[(1) - (3)].selector));
        OwnPtr<CSSParserSelector> right = adoptPtr((yyvsp[(3) - (3)].selector));
        (yyval.selector) = nullptr;
        if (left && right) {
            right->appendTagHistory((yyvsp[(2) - (3)].relation), left.release());
            (yyval.selector) = right.leakPtr();
        }
    ;}
    break;

  case 171:
#line 895 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        delete (yyvsp[(1) - (2)].selector);
    ;}
    break;

  case 172:
#line 902 "./CSSGrammar.y"
    { (yyval.string).clear(); ;}
    break;

  case 173:
#line 903 "./CSSGrammar.y"
    { static LChar star = '*'; (yyval.string).init(&star, 1); ;}
    break;

  case 175:
#line 908 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector(QualifiedName(nullAtom, (yyvsp[(1) - (1)].string), parser->m_defaultNamespace));
    ;}
    break;

  case 176:
#line 911 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(2) - (2)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithElementName(nullAtom, (yyvsp[(1) - (2)].string), *(yyval.selector));
    ;}
    break;

  case 177:
#line 916 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(1) - (1)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithNamespaceIfNeeded(*(yyval.selector));
    ;}
    break;

  case 178:
#line 921 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector(parser->determineNameInNamespace((yyvsp[(1) - (2)].string), (yyvsp[(2) - (2)].string)));
    ;}
    break;

  case 179:
#line 924 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(3) - (3)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithElementName((yyvsp[(1) - (3)].string), (yyvsp[(2) - (3)].string), *(yyval.selector));
    ;}
    break;

  case 180:
#line 929 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(2) - (2)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithElementName((yyvsp[(1) - (2)].string), starAtom, *(yyval.selector));
    ;}
    break;

  case 181:
#line 937 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        if ((yyvsp[(1) - (1)].selector)) {
            (yyval.selectorList) = parser->createSelectorVector().leakPtr();
            (yyval.selectorList)->append(adoptPtr((yyvsp[(1) - (1)].selector)));
        }
    ;}
    break;

  case 182:
#line 944 "./CSSGrammar.y"
    {
        OwnPtr<Vector<OwnPtr<CSSParserSelector>>> list = adoptPtr((yyvsp[(1) - (5)].selectorList));
        OwnPtr<CSSParserSelector> selector = adoptPtr((yyvsp[(5) - (5)].selector));
        (yyval.selectorList) = nullptr;
        if (list && selector) {
            (yyval.selectorList) = list.leakPtr();
            (yyval.selectorList)->append(selector.release());
        }
    ;}
    break;

  case 183:
#line 953 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        delete (yyvsp[(1) - (2)].selectorList);
    ;}
    break;

  case 184:
#line 960 "./CSSGrammar.y"
    {
        if (parser->m_context.isHTMLDocument)
            (yyvsp[(1) - (1)].string).lower();
        (yyval.string) = (yyvsp[(1) - (1)].string);
    ;}
    break;

  case 185:
#line 965 "./CSSGrammar.y"
    {
        static LChar star = '*';
        (yyval.string).init(&star, 1);
    ;}
    break;

  case 187:
#line 973 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserSelector> list = adoptPtr((yyvsp[(1) - (2)].selector));
        OwnPtr<CSSParserSelector> specifier = adoptPtr((yyvsp[(2) - (2)].selector));
        (yyval.selector) = nullptr;
        if (list && specifier)
            (yyval.selector) = parser->rewriteSpecifiers(list.release(), specifier.release()).leakPtr();
    ;}
    break;

  case 188:
#line 980 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        delete (yyvsp[(1) - (2)].selector);
    ;}
    break;

  case 189:
#line 987 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setMatch(CSSSelector::Id);
        if (parser->m_context.mode == CSSQuirksMode)
            (yyvsp[(1) - (1)].string).lower();
        (yyval.selector)->setValue((yyvsp[(1) - (1)].string));
    ;}
    break;

  case 190:
#line 994 "./CSSGrammar.y"
    {
        if ((yyvsp[(1) - (1)].string)[0] >= '0' && (yyvsp[(1) - (1)].string)[0] <= '9')
            (yyval.selector) = nullptr;
        else {
            (yyval.selector) = new CSSParserSelector;
            (yyval.selector)->setMatch(CSSSelector::Id);
            if (parser->m_context.mode == CSSQuirksMode)
                (yyvsp[(1) - (1)].string).lower();
            (yyval.selector)->setValue((yyvsp[(1) - (1)].string));
        }
    ;}
    break;

  case 194:
#line 1011 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setMatch(CSSSelector::Class);
        if (parser->m_context.mode == CSSQuirksMode)
            (yyvsp[(2) - (2)].string).lower();
        (yyval.selector)->setValue((yyvsp[(2) - (2)].string));
    ;}
    break;

  case 195:
#line 1021 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(QualifiedName(nullAtom, (yyvsp[(3) - (5)].string), nullAtom), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch(CSSSelector::Set);
    ;}
    break;

  case 196:
#line 1026 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(QualifiedName(nullAtom, (yyvsp[(3) - (9)].string), nullAtom), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch((yyvsp[(5) - (9)].match));
        (yyval.selector)->setValue((yyvsp[(7) - (9)].string));
    ;}
    break;

  case 197:
#line 1032 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(parser->determineNameInNamespace((yyvsp[(3) - (6)].string), (yyvsp[(4) - (6)].string)), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch(CSSSelector::Set);
    ;}
    break;

  case 198:
#line 1037 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(parser->determineNameInNamespace((yyvsp[(3) - (10)].string), (yyvsp[(4) - (10)].string)), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch((yyvsp[(6) - (10)].match));
        (yyval.selector)->setValue((yyvsp[(8) - (10)].string));
    ;}
    break;

  case 199:
#line 1046 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Exact;
    ;}
    break;

  case 200:
#line 1049 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::List;
    ;}
    break;

  case 201:
#line 1052 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Hyphen;
    ;}
    break;

  case 202:
#line 1055 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Begin;
    ;}
    break;

  case 203:
#line 1058 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::End;
    ;}
    break;

  case 204:
#line 1061 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Contain;
    ;}
    break;

  case 207:
#line 1069 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        auto selector = std::make_unique<CSSParserSelector>();
        selector->setMatch(CSSSelector::PagePseudoClass);
        (yyvsp[(2) - (2)].string).lower();
        selector->setValue((yyvsp[(2) - (2)].string));
        if (selector->pseudoType() != CSSSelector::PseudoUnknown)
            (yyval.selector) = selector.release();
    ;}
    break;

  case 208:
#line 1080 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        auto selector = std::make_unique<CSSParserSelector>();
        selector->setMatch(CSSSelector::PseudoClass);
        (yyvsp[(2) - (2)].string).lower();
        selector->setValue((yyvsp[(2) - (2)].string));
        if (selector->pseudoType() != CSSSelector::PseudoUnknown)
            (yyval.selector) = selector.release();
    ;}
    break;

  case 209:
#line 1089 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        auto selector = std::make_unique<CSSParserSelector>();
        selector->setMatch(CSSSelector::PseudoElement);
        (yyvsp[(3) - (3)].string).lower();
        selector->setValue((yyvsp[(3) - (3)].string));
        if (selector->pseudoType() != CSSSelector::PseudoUnknown)
            (yyval.selector) = selector.release();
    ;}
    break;

  case 210:
#line 1098 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        if ((yyvsp[(4) - (6)].selectorList)) {
            auto selector = std::make_unique<CSSParserSelector>();
            selector->setMatch(CSSSelector::PseudoClass);
            selector->adoptSelectorVector(*adoptPtr((yyvsp[(4) - (6)].selectorList)));
            (yyvsp[(2) - (6)].string).lower();
            selector->setValue((yyvsp[(2) - (6)].string));
            if (selector->pseudoType() == CSSSelector::PseudoAny)
                (yyval.selector) = selector.release();
        }
    ;}
    break;

  case 211:
#line 1111 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        auto selector = std::make_unique<CSSParserSelector>();
        selector->setMatch(CSSSelector::PseudoClass);
        selector->setArgument((yyvsp[(4) - (6)].string));
        selector->setValue((yyvsp[(2) - (6)].string));
        if (selector->pseudoType() != CSSSelector::PseudoUnknown)
            (yyval.selector) = selector.release();
    ;}
    break;

  case 212:
#line 1121 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        auto selector = std::make_unique<CSSParserSelector>();
        selector->setMatch(CSSSelector::PseudoClass);
        selector->setArgument(AtomicString::number((yyvsp[(4) - (7)].integer) * (yyvsp[(5) - (7)].number)));
        selector->setValue((yyvsp[(2) - (7)].string));
        if (selector->pseudoType() != CSSSelector::PseudoUnknown)
            (yyval.selector) = selector.release();
    ;}
    break;

  case 213:
#line 1131 "./CSSGrammar.y"
    {
        auto selector = std::make_unique<CSSParserSelector>();
        selector->setMatch(CSSSelector::PseudoClass);
        selector->setArgument((yyvsp[(4) - (6)].string));
        (yyvsp[(2) - (6)].string).lower();
        selector->setValue((yyvsp[(2) - (6)].string));
        CSSSelector::PseudoType type = selector->pseudoType();
        if (type == CSSSelector::PseudoUnknown)
            selector = nullptr;
        else if (type == CSSSelector::PseudoNthChild ||
                 type == CSSSelector::PseudoNthOfType ||
                 type == CSSSelector::PseudoNthLastChild ||
                 type == CSSSelector::PseudoNthLastOfType) {
            if (!isValidNthToken((yyvsp[(4) - (6)].string)))
                selector = nullptr;
        }
        (yyval.selector) = selector.release();
    ;}
    break;

  case 214:
#line 1150 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserSelector> selector = adoptPtr((yyvsp[(4) - (6)].selector));
        (yyval.selector) = nullptr;
        if (selector && selector->isSimple()) {
            (yyval.selector) = new CSSParserSelector;
            (yyval.selector)->setMatch(CSSSelector::PseudoClass);

            Vector<OwnPtr<CSSParserSelector>> selectorVector;
            selectorVector.append(selector.release());
            (yyval.selector)->adoptSelectorVector(selectorVector);

            (yyvsp[(2) - (6)].string).lower();
            (yyval.selector)->setValue((yyvsp[(2) - (6)].string));
        }
    ;}
    break;

  case 215:
#line 1168 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 217:
#line 1170 "./CSSGrammar.y"
    { (yyval.boolean) = (yyvsp[(1) - (2)].boolean) || (yyvsp[(2) - (2)].boolean); ;}
    break;

  case 219:
#line 1172 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 221:
#line 1177 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = (yyvsp[(1) - (3)].boolean);
    ;}
    break;

  case 222:
#line 1181 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = false;
    ;}
    break;

  case 223:
#line 1185 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = (yyvsp[(1) - (4)].boolean);
        if ((yyvsp[(2) - (4)].boolean))
            (yyval.boolean) = (yyvsp[(2) - (4)].boolean);
    ;}
    break;

  case 224:
#line 1191 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = (yyvsp[(1) - (4)].boolean);
    ;}
    break;

  case 225:
#line 1198 "./CSSGrammar.y"
    {
        parser->syntaxError((yyvsp[(2) - (3)].location), CSSParser::PropertyDeclarationError);
    ;}
    break;

  case 226:
#line 1204 "./CSSGrammar.y"
    {
        (yyval.boolean) = false;
        bool isPropertyParsed = false;
        OwnPtr<CSSParserValueList> propertyValue = adoptPtr((yyvsp[(4) - (5)].valueList));
        if ((yyvsp[(1) - (5)].id) && propertyValue) {
            parser->m_valueList = propertyValue.release();
            int oldParsedProperties = parser->m_parsedProperties.size();
            (yyval.boolean) = parser->parseValue((yyvsp[(1) - (5)].id), (yyvsp[(5) - (5)].boolean));
            if (!(yyval.boolean))
                parser->rollbackLastProperties(parser->m_parsedProperties.size() - oldParsedProperties);
            else
                isPropertyParsed = true;
            parser->m_valueList = nullptr;
        }
        parser->markPropertyEnd((yyvsp[(5) - (5)].boolean), isPropertyParsed);
    ;}
    break;

  case 227:
#line 1220 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 228:
#line 1221 "./CSSGrammar.y"
    {

        parser->markPropertyEnd(false, false);
        delete (yyvsp[(4) - (6)].valueList);
        (yyval.boolean) = false;
    ;}
    break;

  case 229:
#line 1227 "./CSSGrammar.y"
    {

        (yyval.boolean) = false;
    ;}
    break;

  case 230:
#line 1231 "./CSSGrammar.y"
    {

        parser->markPropertyEnd(false, false);
        (yyval.boolean) = false;
    ;}
    break;

  case 231:
#line 1238 "./CSSGrammar.y"
    { parser->syntaxError((yyvsp[(2) - (3)].location)); ;}
    break;

  case 232:
#line 1240 "./CSSGrammar.y"
    { (yyval.id) = cssPropertyID((yyvsp[(1) - (2)].string)); ;}
    break;

  case 233:
#line 1242 "./CSSGrammar.y"
    { (yyval.boolean) = true; ;}
    break;

  case 234:
#line 1242 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 236:
#line 1244 "./CSSGrammar.y"
    { (yyval.valueList) = nullptr; delete (yyvsp[(1) - (2)].valueList); ;}
    break;

  case 237:
#line 1247 "./CSSGrammar.y"
    {
        (yyval.valueList) = new CSSParserValueList;
        (yyval.valueList)->addValue((yyvsp[(1) - (1)].value));
    ;}
    break;

  case 238:
#line 1251 "./CSSGrammar.y"
    {
        (yyval.valueList) = (yyvsp[(1) - (3)].valueList);
        if (!(yyval.valueList))
            destroy((yyvsp[(3) - (3)].value));
        else {
            if ((yyvsp[(2) - (3)].character)) {
                CSSParserValue v;
                v.id = CSSValueInvalid;
                v.unit = CSSParserValue::Operator;
                v.iValue = (yyvsp[(2) - (3)].character);
                (yyval.valueList)->addValue(v);
            }
            (yyval.valueList)->addValue((yyvsp[(3) - (3)].value));
        }
    ;}
    break;

  case 240:
#line 1270 "./CSSGrammar.y"
    { (yyval.character) = '/'; ;}
    break;

  case 241:
#line 1270 "./CSSGrammar.y"
    { (yyval.character) = ','; ;}
    break;

  case 242:
#line 1270 "./CSSGrammar.y"
    { (yyval.character) = 0; ;}
    break;

  case 244:
#line 1274 "./CSSGrammar.y"
    { (yyval.value) = (yyvsp[(2) - (3)].value); (yyval.value).fValue *= (yyvsp[(1) - (3)].integer); ;}
    break;

  case 245:
#line 1275 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_STRING; ;}
    break;

  case 246:
#line 1276 "./CSSGrammar.y"
    {
      (yyval.value).id = cssValueKeywordID((yyvsp[(1) - (2)].string));
      (yyval.value).unit = CSSPrimitiveValue::CSS_IDENT;
      (yyval.value).string = (yyvsp[(1) - (2)].string);
  ;}
    break;

  case 247:
#line 1282 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_DIMENSION; ;}
    break;

  case 248:
#line 1283 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(2) - (3)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_DIMENSION; ;}
    break;

  case 249:
#line 1284 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_URI; ;}
    break;

  case 250:
#line 1285 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_UNICODE_RANGE; ;}
    break;

  case 251:
#line 1286 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_PARSER_HEXCOLOR; ;}
    break;

  case 252:
#line 1287 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = CSSParserString(); (yyval.value).unit = CSSPrimitiveValue::CSS_PARSER_HEXCOLOR; ;}
    break;

  case 256:
#line 1292 "./CSSGrammar.y"
    {
      (yyval.value).id = CSSValueInvalid; (yyval.value).unit = 0;
  ;}
    break;

  case 257:
#line 1298 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = true; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER; ;}
    break;

  case 258:
#line 1299 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = false; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER; ;}
    break;

  case 259:
#line 1300 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PERCENTAGE; ;}
    break;

  case 260:
#line 1301 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PX; ;}
    break;

  case 261:
#line 1302 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_CM; ;}
    break;

  case 262:
#line 1303 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_MM; ;}
    break;

  case 263:
#line 1304 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_IN; ;}
    break;

  case 264:
#line 1305 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PT; ;}
    break;

  case 265:
#line 1306 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PC; ;}
    break;

  case 266:
#line 1307 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DEG; ;}
    break;

  case 267:
#line 1308 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_RAD; ;}
    break;

  case 268:
#line 1309 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_GRAD; ;}
    break;

  case 269:
#line 1310 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_TURN; ;}
    break;

  case 270:
#line 1311 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_MS; ;}
    break;

  case 271:
#line 1312 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_S; ;}
    break;

  case 272:
#line 1313 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_HZ; ;}
    break;

  case 273:
#line 1314 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_KHZ; ;}
    break;

  case 274:
#line 1315 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_EMS; ;}
    break;

  case 275:
#line 1316 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSParserValue::Q_EMS; ;}
    break;

  case 276:
#line 1317 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_EXS; ;}
    break;

  case 277:
#line 1318 "./CSSGrammar.y"
    {
      (yyval.value).id = CSSValueInvalid;
      (yyval.value).fValue = (yyvsp[(1) - (1)].number);
      (yyval.value).unit = CSSPrimitiveValue::CSS_REMS;
      if (parser->m_styleSheet)
          parser->m_styleSheet->parserSetUsesRemUnits(true);
  ;}
    break;

  case 278:
#line 1325 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_CHS; ;}
    break;

  case 279:
#line 1326 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VW; ;}
    break;

  case 280:
#line 1327 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VH; ;}
    break;

  case 281:
#line 1328 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VMIN; ;}
    break;

  case 282:
#line 1329 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VMAX; ;}
    break;

  case 283:
#line 1330 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DPPX; ;}
    break;

  case 284:
#line 1331 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DPI; ;}
    break;

  case 285:
#line 1332 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DPCM; ;}
    break;

  case 286:
#line 1333 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_FR; ;}
    break;

  case 287:
#line 1337 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (4)].string);
        f->args = adoptPtr((yyvsp[(3) - (4)].valueList));
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 288:
#line 1345 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (3)].string);
        f->args = adoptPtr(new CSSParserValueList);
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 289:
#line 1353 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (4)].string);
        f->args = nullptr;
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
  ;}
    break;

  case 291:
#line 1365 "./CSSGrammar.y"
    { (yyval.value) = (yyvsp[(2) - (2)].value); (yyval.value).fValue *= (yyvsp[(1) - (2)].integer); ;}
    break;

  case 292:
#line 1374 "./CSSGrammar.y"
    {
        (yyval.character) = '+';
    ;}
    break;

  case 293:
#line 1377 "./CSSGrammar.y"
    {
        (yyval.character) = '-';
    ;}
    break;

  case 294:
#line 1380 "./CSSGrammar.y"
    {
        (yyval.character) = '*';
    ;}
    break;

  case 295:
#line 1383 "./CSSGrammar.y"
    {
        (yyval.character) = '/';
    ;}
    break;

  case 298:
#line 1391 "./CSSGrammar.y"
    {
        (yyval.valueList) = nullptr;
        if ((yyvsp[(3) - (5)].valueList)) {
            (yyval.valueList) = (yyvsp[(3) - (5)].valueList);
            CSSParserValue v;
            v.id = CSSValueInvalid;
            v.unit = CSSParserValue::Operator;
            v.iValue = '(';
            (yyval.valueList)->insertValueAt(0, v);
            v.iValue = ')';
            (yyval.valueList)->addValue(v);
        }
    ;}
    break;

  case 300:
#line 1406 "./CSSGrammar.y"
    { (yyval.valueList) = nullptr; delete (yyvsp[(1) - (2)].valueList); ;}
    break;

  case 301:
#line 1409 "./CSSGrammar.y"
    {
        (yyval.valueList) = new CSSParserValueList;
        (yyval.valueList)->addValue((yyvsp[(1) - (1)].value));
    ;}
    break;

  case 302:
#line 1413 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserValueList> expression = adoptPtr((yyvsp[(1) - (3)].valueList));
        (yyval.valueList) = nullptr;
        if (expression && (yyvsp[(2) - (3)].character)) {
            (yyval.valueList) = expression.leakPtr();
            CSSParserValue v;
            v.id = CSSValueInvalid;
            v.unit = CSSParserValue::Operator;
            v.iValue = (yyvsp[(2) - (3)].character);
            (yyval.valueList)->addValue(v);
            (yyval.valueList)->addValue((yyvsp[(3) - (3)].value));
        } else {
            destroy((yyvsp[(3) - (3)].value));
        }

    ;}
    break;

  case 303:
#line 1429 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserValueList> left = adoptPtr((yyvsp[(1) - (3)].valueList));
        OwnPtr<CSSParserValueList> right = adoptPtr((yyvsp[(3) - (3)].valueList));
        (yyval.valueList) = nullptr;
        if (left && (yyvsp[(2) - (3)].character) && right) {
            CSSParserValue v;
            v.id = CSSValueInvalid;
            v.unit = CSSParserValue::Operator;
            v.iValue = (yyvsp[(2) - (3)].character);
            left->addValue(v);
            left->extend(*right);
            (yyval.valueList) = left.leakPtr();
        }
    ;}
    break;

  case 306:
#line 1448 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserValueList> list = adoptPtr((yyvsp[(1) - (5)].valueList));
        OwnPtr<CSSParserValueList> expression = adoptPtr((yyvsp[(4) - (5)].valueList));
        (yyval.valueList) = nullptr;
        if (list && expression) {
            (yyval.valueList) = list.leakPtr();
            CSSParserValue v;
            v.id = CSSValueInvalid;
            v.unit = CSSParserValue::Operator;
            v.iValue = ',';
            (yyval.valueList)->addValue(v);
            (yyval.valueList)->extend(*expression);
        }
    ;}
    break;

  case 307:
#line 1465 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (5)].string);
        f->args = adoptPtr((yyvsp[(3) - (5)].valueList));
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 308:
#line 1473 "./CSSGrammar.y"
    {
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = 0;
        YYERROR;
    ;}
    break;

  case 311:
#line 1484 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (4)].string);
        f->args = adoptPtr((yyvsp[(3) - (4)].valueList));
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 312:
#line 1492 "./CSSGrammar.y"
    {
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = 0;
        YYERROR;
    ;}
    break;

  case 318:
#line 1507 "./CSSGrammar.y"
    { parser->invalidBlockHit(); ;}
    break;

  case 329:
#line 1520 "./CSSGrammar.y"
    { (yyval.location) = parser->currentLocation(); ;}
    break;


/* Line 1267 of yacc.c.  */
#line 4470 "./CSSGrammar.cpp"
      default: break;
    }
  YY_SYMBOL_PRINT ("-> $$ =", yyr1[yyn], &yyval, &yyloc);

  YYPOPSTACK (yylen);
  yylen = 0;
  YY_STACK_PRINT (yyss, yyssp);

  *++yyvsp = yyval;


  /* Now `shift' the result of the reduction.  Determine what state
     that goes to, based on the state we popped back to and the rule
     number reduced by.  */

  yyn = yyr1[yyn];

  yystate = yypgoto[yyn - YYNTOKENS] + *yyssp;
  if (0 <= yystate && yystate <= YYLAST && yycheck[yystate] == *yyssp)
    yystate = yytable[yystate];
  else
    yystate = yydefgoto[yyn - YYNTOKENS];

  goto yynewstate;


/*------------------------------------.
| yyerrlab -- here on detecting error |
`------------------------------------*/
yyerrlab:
  /* If not already recovering from an error, report this error.  */
  if (!yyerrstatus)
    {
      ++yynerrs;
#if ! YYERROR_VERBOSE
      yyerror (parser, YY_("syntax error"));
#else
      {
	YYSIZE_T yysize = yysyntax_error (0, yystate, yychar);
	if (yymsg_alloc < yysize && yymsg_alloc < YYSTACK_ALLOC_MAXIMUM)
	  {
	    YYSIZE_T yyalloc = 2 * yysize;
	    if (! (yysize <= yyalloc && yyalloc <= YYSTACK_ALLOC_MAXIMUM))
	      yyalloc = YYSTACK_ALLOC_MAXIMUM;
	    if (yymsg != yymsgbuf)
	      YYSTACK_FREE (yymsg);
	    yymsg = (char *) YYSTACK_ALLOC (yyalloc);
	    if (yymsg)
	      yymsg_alloc = yyalloc;
	    else
	      {
		yymsg = yymsgbuf;
		yymsg_alloc = sizeof yymsgbuf;
	      }
	  }

	if (0 < yysize && yysize <= yymsg_alloc)
	  {
	    (void) yysyntax_error (yymsg, yystate, yychar);
	    yyerror (parser, yymsg);
	  }
	else
	  {
	    yyerror (parser, YY_("syntax error"));
	    if (yysize != 0)
	      goto yyexhaustedlab;
	  }
      }
#endif
    }



  if (yyerrstatus == 3)
    {
      /* If just tried and failed to reuse look-ahead token after an
	 error, discard it.  */

      if (yychar <= YYEOF)
	{
	  /* Return failure if at end of input.  */
	  if (yychar == YYEOF)
	    YYABORT;
	}
      else
	{
	  yydestruct ("Error: discarding",
		      yytoken, &yylval, parser);
	  yychar = YYEMPTY;
	}
    }

  /* Else will try to reuse look-ahead token after shifting the error
     token.  */
  goto yyerrlab1;


/*---------------------------------------------------.
| yyerrorlab -- error raised explicitly by YYERROR.  |
`---------------------------------------------------*/
yyerrorlab:

  /* Pacify compilers like GCC when the user code never invokes
     YYERROR and the label yyerrorlab therefore never appears in user
     code.  */
  if (/*CONSTCOND*/ 0)
     goto yyerrorlab;

  /* Do not reclaim the symbols of the rule which action triggered
     this YYERROR.  */
  YYPOPSTACK (yylen);
  yylen = 0;
  YY_STACK_PRINT (yyss, yyssp);
  yystate = *yyssp;
  goto yyerrlab1;


/*-------------------------------------------------------------.
| yyerrlab1 -- common code for both syntax error and YYERROR.  |
`-------------------------------------------------------------*/
yyerrlab1:
  yyerrstatus = 3;	/* Each real token shifted decrements this.  */

  for (;;)
    {
      yyn = yypact[yystate];
      if (yyn != YYPACT_NINF)
	{
	  yyn += YYTERROR;
	  if (0 <= yyn && yyn <= YYLAST && yycheck[yyn] == YYTERROR)
	    {
	      yyn = yytable[yyn];
	      if (0 < yyn)
		break;
	    }
	}

      /* Pop the current state because it cannot handle the error token.  */
      if (yyssp == yyss)
	YYABORT;


      yydestruct ("Error: popping",
		  yystos[yystate], yyvsp, parser);
      YYPOPSTACK (1);
      yystate = *yyssp;
      YY_STACK_PRINT (yyss, yyssp);
    }

  if (yyn == YYFINAL)
    YYACCEPT;

  *++yyvsp = yylval;


  /* Shift the error token.  */
  YY_SYMBOL_PRINT ("Shifting", yystos[yyn], yyvsp, yylsp);

  yystate = yyn;
  goto yynewstate;


/*-------------------------------------.
| yyacceptlab -- YYACCEPT comes here.  |
`-------------------------------------*/
yyacceptlab:
  yyresult = 0;
  goto yyreturn;

/*-----------------------------------.
| yyabortlab -- YYABORT comes here.  |
`-----------------------------------*/
yyabortlab:
  yyresult = 1;
  goto yyreturn;

#ifndef yyoverflow
/*-------------------------------------------------.
| yyexhaustedlab -- memory exhaustion comes here.  |
`-------------------------------------------------*/
yyexhaustedlab:
  yyerror (parser, YY_("memory exhausted"));
  yyresult = 2;
  /* Fall through.  */
#endif

yyreturn:
  if (yychar != YYEOF && yychar != YYEMPTY)
     yydestruct ("Cleanup: discarding lookahead",
		 yytoken, &yylval, parser);
  /* Do not reclaim the symbols of the rule which action triggered
     this YYABORT or YYACCEPT.  */
  YYPOPSTACK (yylen);
  YY_STACK_PRINT (yyss, yyssp);
  while (yyssp != yyss)
    {
      yydestruct ("Cleanup: popping",
		  yystos[*yyssp], yyvsp, parser);
      YYPOPSTACK (1);
    }
#ifndef yyoverflow
  if (yyss != yyssa)
    YYSTACK_FREE (yyss);
#endif
#if YYERROR_VERBOSE
  if (yymsg != yymsgbuf)
    YYSTACK_FREE (yymsg);
#endif
  /* Make sure YYID is used.  */
  return YYID (yyresult);
}


#line 1530 "./CSSGrammar.y"


