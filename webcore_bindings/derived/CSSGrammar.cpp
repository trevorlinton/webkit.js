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
     UNICODERANGE = 347
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
#line 397 "./CSSGrammar.cpp"
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
#line 417 "./CSSGrammar.cpp"

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
#define YYLAST   1613

/* YYNTOKENS -- Number of terminals.  */
#define YYNTOKENS  113
/* YYNNTS -- Number of nonterminals.  */
#define YYNNTS  116
/* YYNRULES -- Number of rules.  */
#define YYNRULES  330
/* YYNRULES -- Number of states.  */
#define YYNSTATES  583

/* YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.  */
#define YYUNDEFTOK  2
#define YYMAXUTOK   347

#define YYTRANSLATE(YYX)						\
  ((unsigned int) (YYX) <= YYMAXUTOK ? yytranslate[YYX] : YYUNDEFTOK)

/* YYTRANSLATE[YYLEX] -- Bison symbol number corresponding to YYLEX.  */
static const yytype_uint8 yytranslate[] =
{
       0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,   111,     2,   112,     2,     2,
     102,   100,    20,   104,   103,   107,    18,   110,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,    17,   101,
       2,   109,   106,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,    19,     2,   108,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,    98,    21,    99,   105,     2,     2,     2,
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
      90,    91,    92,    93,    94,    95,    96,    97
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
     130,   132,   134,   136,   138,   140,   142,   144,   145,   149,
     150,   154,   156,   158,   160,   162,   164,   166,   168,   170,
     172,   174,   176,   178,   179,   187,   195,   203,   208,   213,
     220,   227,   231,   235,   236,   239,   241,   243,   244,   249,
     259,   261,   267,   268,   272,   273,   275,   277,   279,   285,
     286,   288,   290,   295,   298,   299,   300,   302,   313,   322,
     327,   328,   339,   341,   343,   344,   348,   355,   357,   363,
     366,   368,   370,   371,   382,   387,   392,   394,   397,   399,
     400,   402,   407,   408,   416,   418,   420,   422,   424,   426,
     428,   430,   432,   434,   436,   438,   440,   442,   444,   446,
     448,   449,   458,   463,   468,   469,   480,   483,   486,   489,
     491,   492,   494,   496,   498,   499,   500,   501,   511,   512,
     514,   521,   524,   527,   529,   531,   534,   538,   541,   543,
     546,   549,   551,   554,   556,   559,   563,   566,   568,   574,
     577,   579,   581,   583,   586,   589,   591,   593,   595,   597,
     599,   602,   608,   618,   625,   636,   638,   640,   642,   644,
     646,   648,   650,   652,   655,   658,   662,   669,   676,   684,
     691,   698,   699,   701,   704,   706,   708,   711,   715,   719,
     724,   729,   733,   739,   742,   749,   753,   758,   762,   765,
     768,   769,   771,   774,   776,   780,   784,   787,   790,   791,
     794,   798,   801,   804,   807,   811,   814,   817,   820,   823,
     826,   829,   832,   835,   837,   839,   841,   843,   845,   847,
     849,   851,   853,   855,   857,   859,   861,   863,   865,   867,
     869,   871,   873,   875,   877,   879,   881,   883,   885,   887,
     889,   891,   893,   895,   900,   904,   909,   911,   914,   918,
     922,   926,   930,   931,   933,   939,   941,   944,   946,   950,
     954,   956,   959,   965,   971,   976,   978,   980,   985,   990,
     992,   995,   999,  1003,  1006,  1010,  1014,  1018,  1022,  1024,
    1026,  1028,  1030,  1032,  1034,  1036,  1037,  1038,  1041,  1044,
    1047
};

/* YYRHS -- A `-1'-separated list of the rules' RHS.  */
static const yytype_int16 yyrhs[] =
{
     114,     0,    -1,   122,   124,   123,   129,    -1,   115,   122,
      -1,   117,   122,    -1,   118,   122,    -1,   119,   122,    -1,
     120,   122,    -1,   116,   122,    -1,    28,    98,   122,   130,
     122,    99,    -1,    30,    98,   122,   158,   122,    99,    -1,
      29,    98,   175,   196,    99,    -1,    32,    98,   122,   203,
      99,    -1,    33,     5,   122,   147,    99,    -1,    34,    98,
     122,   181,    99,    -1,     5,    -1,   121,     5,    -1,    -1,
     122,     5,    -1,    -1,   123,     6,    -1,   123,     5,    -1,
      -1,   127,    -1,    99,    -1,     0,    -1,   100,    -1,     0,
      -1,    26,   122,    12,   122,   101,    -1,    26,     1,   223,
      -1,    26,     1,   101,    -1,    26,   122,    12,   122,   101,
      -1,    26,   122,   101,    -1,    -1,   129,   131,   123,    -1,
     179,    -1,   153,    -1,   162,    -1,   169,    -1,   155,    -1,
     139,    -1,   138,    -1,   171,    -1,   130,    -1,   128,    -1,
     222,    -1,   221,    -1,    -1,   132,   135,   123,    -1,    -1,
     133,   134,   123,    -1,   179,    -1,   162,    -1,   169,    -1,
     153,    -1,   155,    -1,   134,    -1,   222,    -1,   221,    -1,
     139,    -1,   138,    -1,   171,    -1,   122,    -1,    -1,   137,
      22,   136,   141,   122,   148,   101,    -1,   137,    22,   136,
     141,   122,   148,     0,    -1,   137,    22,   136,   141,   122,
     148,   223,    -1,   137,    22,     1,   101,    -1,   137,    22,
       1,   223,    -1,    27,   122,   140,   141,   122,   101,    -1,
      27,   122,   140,   141,   122,   223,    -1,    27,     1,   223,
      -1,    27,     1,   101,    -1,    -1,    13,   122,    -1,    12,
      -1,    90,    -1,    -1,    17,   122,   203,   122,    -1,   146,
     122,   102,   122,    13,   122,   142,   100,   122,    -1,   143,
      -1,   144,   122,    57,   122,   143,    -1,    -1,    57,   122,
     144,    -1,    -1,    55,    -1,    56,    -1,   144,    -1,   146,
     122,    13,   122,   145,    -1,    -1,   149,    -1,   147,    -1,
     149,   103,   122,   147,    -1,   149,     1,    -1,    -1,    -1,
     122,    -1,   151,    24,   122,   149,   177,    98,   150,   122,
     132,   220,    -1,   151,    24,   152,    98,   150,   122,   132,
     220,    -1,   151,    24,   152,   101,    -1,    -1,   154,    31,
     122,   156,   152,    98,   150,   122,   157,   125,    -1,    13,
      -1,    12,    -1,    -1,   157,   158,   122,    -1,   159,   122,
      98,   122,   196,   125,    -1,   160,    -1,   159,   122,   103,
     122,   160,    -1,   173,    79,    -1,    13,    -1,     1,    -1,
      -1,   161,    23,   122,   163,   152,    98,   150,   175,   164,
     125,    -1,   161,    23,     1,   223,    -1,   161,    23,     1,
     101,    -1,    13,    -1,    13,   194,    -1,   194,    -1,    -1,
     196,    -1,   164,   165,   122,   196,    -1,    -1,   167,   166,
     122,    98,   122,   196,   125,    -1,    37,    -1,    38,    -1,
      39,    -1,    40,    -1,    41,    -1,    42,    -1,    43,    -1,
      44,    -1,    45,    -1,    46,    -1,    47,    -1,    48,    -1,
      49,    -1,    50,    -1,    51,    -1,    52,    -1,    -1,   168,
      25,   152,    98,   150,   175,   196,   125,    -1,   168,    25,
       1,   223,    -1,   168,    25,     1,   101,    -1,    -1,   170,
      35,   122,   181,   177,    98,   150,   122,   133,   220,    -1,
     104,   122,    -1,   105,   122,    -1,   106,   122,    -1,   174,
      -1,    -1,   107,    -1,   104,    -1,   122,    -1,    -1,    -1,
      -1,   176,   181,   178,   177,    98,   150,   175,   196,   125,
      -1,    -1,   183,    -1,   181,   178,   103,   122,   180,   183,
      -1,   181,     1,    -1,   183,     5,    -1,   185,    -1,   182,
      -1,   182,   185,    -1,   183,   172,   185,    -1,   183,     1,
      -1,    21,    -1,    20,    21,    -1,    13,    21,    -1,   187,
      -1,   187,   188,    -1,   188,    -1,   184,   187,    -1,   184,
     187,   188,    -1,   184,   188,    -1,   185,    -1,   186,   122,
     103,   122,   185,    -1,   186,     1,    -1,    13,    -1,    20,
      -1,   189,    -1,   188,   189,    -1,   188,     1,    -1,    16,
      -1,    15,    -1,   190,    -1,   191,    -1,   195,    -1,    18,
      13,    -1,    19,   122,    13,   122,   108,    -1,    19,   122,
      13,   122,   192,   122,   193,   122,   108,    -1,    19,   122,
     184,    13,   122,   108,    -1,    19,   122,   184,    13,   122,
     192,   122,   193,   122,   108,    -1,   109,    -1,     7,    -1,
       8,    -1,     9,    -1,    10,    -1,    11,    -1,    13,    -1,
      12,    -1,    17,    13,    -1,    17,    13,    -1,    17,    17,
      13,    -1,    17,    92,   122,   186,   122,   100,    -1,    17,
      91,   122,    14,   122,   100,    -1,    17,    91,   122,   173,
      81,   122,   100,    -1,    17,    91,   122,    13,   122,   100,
      -1,    17,    93,   122,   185,   122,   100,    -1,    -1,   199,
      -1,   197,   199,    -1,   197,    -1,   198,    -1,   197,   198,
      -1,   199,   101,   122,    -1,   198,   101,   122,    -1,   197,
     199,   101,   122,    -1,   197,   198,   101,   122,    -1,     1,
     227,   228,    -1,   201,    17,   122,   203,   202,    -1,   201,
     200,    -1,   201,    17,   122,   203,   202,   200,    -1,    54,
     122,   200,    -1,   201,    17,   122,   200,    -1,     1,   227,
     228,    -1,    13,   122,    -1,    54,   122,    -1,    -1,   204,
      -1,   204,   205,    -1,   207,    -1,   204,   206,   207,    -1,
       1,   227,   228,    -1,   110,   122,    -1,   103,   122,    -1,
      -1,   208,   122,    -1,   174,   208,   122,    -1,    12,   122,
      -1,    13,   122,    -1,    77,   122,    -1,   174,    77,   122,
      -1,    90,   122,    -1,    97,   122,    -1,    15,   122,    -1,
     111,   122,    -1,   209,   122,    -1,   217,   122,    -1,   219,
     122,    -1,   112,   122,    -1,    81,    -1,    80,    -1,    79,
      -1,    63,    -1,    64,    -1,    65,    -1,    66,    -1,    67,
      -1,    68,    -1,    69,    -1,    70,    -1,    71,    -1,    72,
      -1,    73,    -1,    74,    -1,    75,    -1,    76,    -1,    61,
      -1,    60,    -1,    62,    -1,    58,    -1,    59,    -1,    82,
      -1,    83,    -1,    84,    -1,    85,    -1,    86,    -1,    87,
      -1,    88,    -1,    89,    -1,    91,   122,   203,   126,    -1,
      91,   122,   126,    -1,    91,   122,   205,   126,    -1,   208,
      -1,   174,   208,    -1,   121,   104,   121,    -1,   121,   107,
     121,    -1,   212,    20,   122,    -1,   212,   110,   122,    -1,
      -1,     5,    -1,   102,   122,   214,   212,   126,    -1,   215,
      -1,   215,   205,    -1,   210,    -1,   214,   211,   210,    -1,
     214,   211,   213,    -1,   213,    -1,   214,   212,    -1,   216,
     103,   122,   214,   212,    -1,    94,   122,   214,   212,   126,
      -1,    94,   122,   205,   126,    -1,    95,    -1,    96,    -1,
     218,   122,   216,   126,    -1,   218,   122,   205,   126,    -1,
     125,    -1,     1,   125,    -1,    53,     1,   223,    -1,    53,
       1,   101,    -1,     1,   223,    -1,    98,   228,   125,    -1,
      19,   228,   108,    -1,    19,   228,     0,    -1,   226,   228,
     126,    -1,   102,    -1,    91,    -1,    94,    -1,    95,    -1,
      96,    -1,    92,    -1,    93,    -1,    -1,    -1,   228,     1,
      -1,   228,   223,    -1,   228,   224,    -1,   228,   225,    -1
};

/* YYRLINE[YYN] -- source line where rule number YYN was defined.  */
static const yytype_uint16 yyrline[] =
{
       0,   283,   283,   284,   285,   286,   287,   288,   289,   295,
     297,   299,   302,   313,   316,   324,   324,   326,   326,   328,
     328,   328,   330,   330,   332,   332,   334,   334,   337,   343,
     344,   348,   348,   350,   352,   361,   362,   363,   364,   365,
     366,   367,   368,   372,   376,   377,   378,   382,   383,   394,
     395,   406,   407,   408,   409,   410,   413,   413,   413,   413,
     413,   413,   416,   423,   429,   432,   435,   441,   445,   452,
     453,   454,   455,   458,   458,   460,   460,   462,   462,   465,
     479,   483,   490,   493,   499,   502,   505,   511,   515,   521,
     521,   524,   529,   537,   545,   551,   557,   563,   566,   569,
     575,   581,   586,   586,   589,   590,   597,   600,   604,   613,
     614,   626,   632,   638,   650,   654,   661,   665,   672,   677,
     683,   683,   686,   686,   694,   697,   700,   703,   706,   709,
     712,   715,   718,   721,   724,   727,   730,   733,   736,   739,
     745,   751,   754,   758,   764,   770,   781,   782,   783,   786,
     786,   788,   788,   790,   793,   799,   801,   804,   810,   813,
     821,   831,   838,   841,   842,   843,   852,   861,   868,   869,
     870,   874,   877,   882,   887,   890,   895,   903,   910,   919,
     926,   931,   938,   939,   946,   953,   960,   971,   972,   973,
     977,   987,   992,   998,  1003,  1012,  1015,  1018,  1021,  1024,
    1027,  1032,  1032,  1035,  1046,  1055,  1064,  1077,  1087,  1097,
    1116,  1134,  1135,  1136,  1137,  1138,  1139,  1143,  1147,  1151,
    1157,  1164,  1170,  1186,  1187,  1193,  1197,  1204,  1206,  1208,
    1208,  1210,  1210,  1213,  1217,  1234,  1236,  1236,  1236,  1239,
    1240,  1241,  1242,  1248,  1249,  1250,  1251,  1252,  1253,  1255,
    1256,  1257,  1258,  1264,  1265,  1266,  1267,  1268,  1269,  1270,
    1271,  1272,  1273,  1274,  1275,  1276,  1277,  1278,  1279,  1280,
    1281,  1282,  1283,  1284,  1291,  1292,  1293,  1294,  1295,  1296,
    1297,  1298,  1299,  1303,  1311,  1319,  1330,  1331,  1340,  1343,
    1346,  1349,  1354,  1354,  1357,  1372,  1372,  1375,  1379,  1395,
    1409,  1413,  1414,  1431,  1439,  1447,  1447,  1450,  1458,  1467,
    1467,  1469,  1469,  1471,  1473,  1475,  1475,  1477,  1480,  1480,
    1480,  1480,  1480,  1480,  1480,  1486,  1488,  1490,  1491,  1492,
    1493
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
  "UNICODERANGE", "'{'", "'}'", "')'", "';'", "'('", "','", "'+'", "'~'",
  "'>'", "'-'", "']'", "'='", "'/'", "'#'", "'%'", "$accept", "stylesheet",
  "webkit_rule", "webkit_keyframe_rule", "webkit_decls", "webkit_value",
  "webkit_mediaquery", "webkit_selector", "space", "maybe_space",
  "maybe_sgml", "maybe_charset", "closing_brace", "closing_parenthesis",
  "charset", "ignored_charset", "rule_list", "valid_rule", "rule",
  "block_rule_list", "block_valid_rule_list", "block_valid_rule",
  "block_rule", "at_import_header_end_maybe_space", "before_import_rule",
  "import", "namespace", "maybe_ns_prefix", "string_or_uri",
  "maybe_media_value", "media_query_exp", "media_query_exp_list",
  "maybe_and_media_query_exp_list", "maybe_media_restrictor",
  "media_query", "maybe_media_list", "media_list", "at_rule_body_start",
  "before_media_rule", "at_rule_header_end_maybe_space", "media",
  "before_keyframes_rule", "keyframes", "keyframe_name", "keyframes_rule",
  "keyframe_rule", "key_list", "key", "before_page_rule", "page",
  "page_selector", "declarations_and_margins", "margin_box", "@1",
  "margin_sym", "before_font_face_rule", "font_face", "before_region_rule",
  "region", "combinator", "maybe_unary_operator", "unary_operator",
  "maybe_space_before_declaration", "before_selector_list",
  "at_rule_header_end", "at_selector_end", "ruleset",
  "before_selector_group_item", "selector_list",
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
     340,   341,   342,   343,   344,   345,   346,   347,   123,   125,
      41,    59,    40,    44,    43,   126,    62,    45,    93,    61,
      47,    35,    37
};
# endif

/* YYR1[YYN] -- Symbol number of symbol that rule YYN derives.  */
static const yytype_uint8 yyr1[] =
{
       0,   113,   114,   114,   114,   114,   114,   114,   114,   115,
     116,   117,   118,   119,   120,   121,   121,   122,   122,   123,
     123,   123,   124,   124,   125,   125,   126,   126,   127,   127,
     127,   128,   128,   129,   129,   130,   130,   130,   130,   130,
     130,   130,   130,   131,   131,   131,   131,   132,   132,   133,
     133,   134,   134,   134,   134,   134,   135,   135,   135,   135,
     135,   135,   136,   137,   138,   138,   138,   138,   138,   139,
     139,   139,   139,   140,   140,   141,   141,   142,   142,   143,
     144,   144,   145,   145,   146,   146,   146,   147,   147,   148,
     148,   149,   149,   149,   150,   151,   152,   153,   153,   153,
     154,   155,   156,   156,   157,   157,   158,   159,   159,   160,
     160,   160,   161,   162,   162,   162,   163,   163,   163,   163,
     164,   164,   166,   165,   167,   167,   167,   167,   167,   167,
     167,   167,   167,   167,   167,   167,   167,   167,   167,   167,
     168,   169,   169,   169,   170,   171,   172,   172,   172,   173,
     173,   174,   174,   175,   176,   177,   178,   179,   180,   181,
     181,   181,   182,   183,   183,   183,   183,   183,   184,   184,
     184,   185,   185,   185,   185,   185,   185,   186,   186,   186,
     187,   187,   188,   188,   188,   189,   189,   189,   189,   189,
     190,   191,   191,   191,   191,   192,   192,   192,   192,   192,
     192,   193,   193,   194,   195,   195,   195,   195,   195,   195,
     195,   196,   196,   196,   196,   196,   196,   197,   197,   197,
     197,   198,   199,   199,   199,   199,   199,   200,   201,   202,
     202,   203,   203,   204,   204,   205,   206,   206,   206,   207,
     207,   207,   207,   207,   207,   207,   207,   207,   207,   207,
     207,   207,   207,   208,   208,   208,   208,   208,   208,   208,
     208,   208,   208,   208,   208,   208,   208,   208,   208,   208,
     208,   208,   208,   208,   208,   208,   208,   208,   208,   208,
     208,   208,   208,   209,   209,   209,   210,   210,   211,   211,
     211,   211,   212,   212,   213,   214,   214,   215,   215,   215,
     215,   216,   216,   217,   217,   218,   218,   219,   219,   220,
     220,   221,   221,   222,   223,   224,   224,   225,   226,   226,
     226,   226,   226,   226,   226,   227,   228,   228,   228,   228,
     228
};

/* YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.  */
static const yytype_uint8 yyr2[] =
{
       0,     2,     4,     2,     2,     2,     2,     2,     2,     6,
       6,     5,     5,     5,     5,     1,     2,     0,     2,     0,
       2,     2,     0,     1,     1,     1,     1,     1,     5,     3,
       3,     5,     3,     0,     3,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     0,     3,     0,
       3,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     0,     7,     7,     7,     4,     4,     6,
       6,     3,     3,     0,     2,     1,     1,     0,     4,     9,
       1,     5,     0,     3,     0,     1,     1,     1,     5,     0,
       1,     1,     4,     2,     0,     0,     1,    10,     8,     4,
       0,    10,     1,     1,     0,     3,     6,     1,     5,     2,
       1,     1,     0,    10,     4,     4,     1,     2,     1,     0,
       1,     4,     0,     7,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       0,     8,     4,     4,     0,    10,     2,     2,     2,     1,
       0,     1,     1,     1,     0,     0,     0,     9,     0,     1,
       6,     2,     2,     1,     1,     2,     3,     2,     1,     2,
       2,     1,     2,     1,     2,     3,     2,     1,     5,     2,
       1,     1,     1,     2,     2,     1,     1,     1,     1,     1,
       2,     5,     9,     6,    10,     1,     1,     1,     1,     1,
       1,     1,     1,     2,     2,     3,     6,     6,     7,     6,
       6,     0,     1,     2,     1,     1,     2,     3,     3,     4,
       4,     3,     5,     2,     6,     3,     4,     3,     2,     2,
       0,     1,     2,     1,     3,     3,     2,     2,     0,     2,
       3,     2,     2,     2,     3,     2,     2,     2,     2,     2,
       2,     2,     2,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     4,     3,     4,     1,     2,     3,     3,
       3,     3,     0,     1,     5,     1,     2,     1,     3,     3,
       1,     2,     5,     5,     4,     1,     1,     4,     4,     1,
       2,     3,     3,     2,     3,     3,     3,     3,     1,     1,
       1,     1,     1,     1,     1,     0,     0,     2,     2,     2,
       2
};

/* YYDEFACT[STATE-NAME] -- Default rule to reduce with in state
   STATE-NUM when YYTABLE doesn't specify something else to do.  Zero
   means the default is an error.  */
static const yytype_uint16 yydefact[] =
{
      17,     0,     0,     0,     0,     0,     0,     0,    17,    17,
      17,    17,    17,    17,    22,    17,    17,    17,    17,    17,
      17,     1,     3,     8,     4,     5,     6,     7,    18,     0,
      19,    23,   154,   153,     0,     0,     0,    84,     0,     0,
       0,    33,     0,    17,     0,    41,    40,     0,    36,     0,
      39,     0,    37,     0,    38,     0,    42,     0,    35,   325,
      17,    17,     0,     0,   215,   212,     0,   111,   110,   152,
     151,    17,    17,   107,     0,   149,    17,    17,    17,   273,
     274,   271,   270,   272,   256,   257,   258,   259,   260,   261,
     262,   263,   264,   265,   266,   267,   268,   269,    17,   255,
     254,   253,   275,   276,   277,   278,   279,   280,   281,   282,
      17,    17,    17,   305,   306,    17,    17,    17,     0,     0,
       0,   233,    17,    17,    17,    17,    17,    85,    86,    80,
      87,    17,     0,   180,   186,   185,     0,     0,    17,   181,
     168,     0,   164,     0,     0,   163,   171,     0,   182,   187,
     188,   189,   326,    30,    29,    17,    21,    20,     0,     0,
      73,     0,     0,    17,    17,     0,     0,    17,     0,   326,
     228,     0,    11,   216,   213,    17,    17,   325,    17,   223,
       0,     0,   109,   241,   242,   247,   243,   245,     0,     0,
     246,   248,   252,    17,    17,    12,   325,    17,    17,   232,
       0,   239,   249,   250,     0,   251,     0,     0,    13,   170,
     204,     0,    17,    17,    17,   190,     0,   169,   161,    14,
       0,   165,   167,   162,    17,    17,    17,     0,   180,   181,
     174,     0,     0,   184,   183,     0,     0,     0,    17,     0,
      44,    43,    19,    46,    45,    72,    71,    17,     0,     9,
       0,    62,     0,    84,     0,     0,     0,   119,     0,    96,
       0,     0,   155,     0,   225,    17,    17,   218,   217,   326,
       0,    10,    17,    17,    27,    26,   284,     0,     0,    17,
       0,     0,   286,   297,   300,   292,     0,   244,   240,   326,
     237,   236,   234,     0,   292,     0,    17,    17,    17,   205,
     150,     0,     0,    17,     0,     0,    17,   146,   147,   148,
     166,     0,    25,   327,   326,   319,   323,   324,   320,   321,
     322,    24,   318,   314,   328,   329,   330,   326,    28,   313,
       0,     0,    34,    74,    75,    76,    17,    67,    68,    17,
      91,     0,    94,    99,   103,   102,    17,   115,   114,   116,
       0,    17,   118,   143,   142,    94,     0,     0,   220,   219,
       0,   226,   230,     0,     0,   283,   285,     0,   287,   304,
     293,     0,     0,     0,   296,   235,   308,   301,    17,   307,
      84,    82,     0,    17,    17,     0,   177,     0,    17,     0,
      17,   158,     0,     0,    17,    32,   312,   311,     0,    89,
      93,    17,     0,    17,     0,   117,   203,     0,    17,     0,
      94,    17,     0,     0,   108,   292,    16,     0,     0,   298,
     299,    17,    17,   303,     0,    81,    17,    17,    88,    17,
       0,     0,    17,   179,     0,     0,   196,   197,   198,   199,
     200,   191,   195,    17,     0,     0,   316,   315,   317,     0,
      69,    70,     0,     0,    84,    94,    47,    94,    94,     0,
      94,    17,   229,   224,   106,     0,    15,   288,   289,   290,
     291,   292,     0,    84,    77,   209,   207,     0,   206,    17,
     210,     0,   193,    17,     0,    31,    65,    64,    66,    92,
      17,     0,    17,    17,     0,    17,     0,   294,   302,    83,
      17,     0,   208,     0,   202,   201,    17,     0,    47,     0,
     309,    56,    19,    60,    59,    54,    55,    52,    53,    61,
      51,    98,    58,    57,   104,     0,   141,    49,     0,     0,
      17,   178,     0,    17,     0,   310,    48,     0,     0,   120,
       0,   157,    17,    79,   192,     0,    97,   101,    17,   124,
     125,   126,   127,   128,   129,   130,   131,   132,   133,   134,
     135,   136,   137,   138,   139,   113,    17,   122,     0,    19,
     145,    78,   194,   105,     0,    17,    50,   121,     0,    17,
       0,     0,   123
};

/* YYDEFGOTO[NTERM-NUM].  */
static const yytype_int16 yydefgoto[] =
{
      -1,     7,     8,     9,    10,    11,    12,    13,   371,    33,
      41,    30,   510,   276,    31,   240,   158,    43,   242,   491,
     540,   511,   512,   252,    44,    45,    46,   248,   336,   501,
     129,   130,   428,   131,   340,   452,   341,   403,    47,   254,
     515,    49,   516,   346,   537,    71,    72,    73,    51,   517,
     351,   538,   566,   575,   567,    53,   518,    55,    56,   227,
      74,   118,    34,    57,   357,   220,   520,   445,   141,   142,
     143,   144,   145,   387,   146,   147,   148,   149,   150,   443,
     506,   352,   151,    62,    63,    64,    65,   179,    66,   412,
     119,   120,   199,   200,   121,   122,   123,   283,   372,   373,
     284,   285,   286,   295,   124,   125,   126,   521,   522,   523,
     324,   325,   326,   327,   169,   235
};

/* YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing
   STATE-NUM.  */
#define YYPACT_NINF -476
static const yytype_int16 yypact[] =
{
     641,    -9,    -4,    21,   141,    57,   146,   302,  -476,  -476,
    -476,  -476,  -476,  -476,    47,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,   307,   307,   307,   307,   307,   307,  -476,   475,
    -476,  -476,  1223,   307,   280,   128,   840,   447,   687,   267,
     245,   514,   453,  -476,   294,  -476,  -476,   243,  -476,   313,
    -476,   368,  -476,   374,  -476,   351,  -476,   552,  -476,  -476,
    -476,  -476,   326,  1243,   311,   343,   403,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,   405,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  1492,   414,
     544,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
      46,  -476,   455,   483,  -476,  -476,   460,   502,  -476,   525,
    -476,   112,   552,   186,   521,  -476,   545,   423,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  1446,   268,
      51,   102,   395,  -476,  -476,    62,   282,  -476,   215,  -476,
     307,    87,  -476,   473,   476,  -476,  -476,  -476,  -476,  -476,
     130,   172,  -476,   307,   307,   307,   307,   307,   652,   937,
     307,   307,   307,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    1125,   307,   307,   307,   937,   307,    52,   101,  -476,  -476,
    -476,   563,  -476,  -476,  -476,  -476,   410,  -476,  -476,  -476,
     494,  -476,  -476,  -476,  -476,  -476,  -476,   552,  -476,  -476,
     545,   671,   680,  -476,  -476,   376,   140,   480,  -476,   598,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,   198,  -476,
     361,   307,   198,   400,   363,   484,   390,   393,   449,   307,
     503,   687,   494,  1064,  -476,  -476,  -476,   307,   307,  -476,
     753,  -476,  -476,  -476,  -476,  -476,  -476,    28,    28,  -476,
    1524,    28,  -476,  -476,  -476,   595,    80,   307,   307,  -476,
     307,   307,  -476,    28,   595,   105,  -476,  -476,  -476,  -476,
     223,   687,   687,   483,   525,   609,  -476,   307,   307,   307,
    -476,   786,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
     336,   457,   514,   307,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,   244,  -476,  -476,  -476,  -476,  -476,  -476,  -476,   619,
     624,  -476,  -476,  -476,  -476,  -476,   247,   548,   307,   307,
    1080,  -476,   588,   481,   128,  -476,  -476,   987,  -476,  -476,
     145,   213,  1442,    48,  -476,   780,  -476,   262,  -476,  -476,
     447,    61,   320,  -476,  -476,   568,  -476,    85,  -476,   253,
    -476,   307,   355,   416,  -476,  -476,  -476,  -476,   272,   358,
    -476,  -476,   560,  -476,   561,  -476,  -476,   562,  -476,   564,
    -476,  -476,   932,    70,  -476,   595,  -476,   645,   645,  -476,
    -476,  -476,  -476,  -476,   987,  -476,  -476,  -476,  -476,  -476,
     238,   264,  -476,  -476,   226,   281,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,   300,   552,  -476,  -476,  -476,   177,
    -476,  -476,   132,    39,   447,  -476,   307,  -476,  -476,    37,
    -476,  -476,   307,  -476,  -476,    48,  -476,   656,   656,   307,
     307,   595,   217,   447,   428,  -476,  -476,   289,  -476,  -476,
    -476,   512,  -476,  -476,   254,  -476,  -476,  -476,  -476,  -476,
    -476,  1361,  -476,  -476,    70,  -476,    37,  -476,   262,    46,
    -476,   566,  -476,   687,  -476,  -476,  -476,   512,   307,    97,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,   307,  1306,  -476,   307,    70,   840,
    -476,  -476,    36,  -476,  1361,  -476,   514,    82,  1387,  -476,
    1310,  -476,  -476,   307,  -476,    41,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,    70,  -476,
    -476,   307,  -476,   307,  1225,  -476,   514,  -476,   295,  -476,
     481,    70,  -476
};

/* YYPGOTO[NTERM-NUM].  */
static const yytype_int16 yypgoto[] =
{
    -476,  -476,  -476,  -476,  -476,  -476,  -476,  -476,   114,     0,
    -238,  -476,  -214,  -246,  -476,  -476,  -476,   505,  -476,   160,
    -476,   137,  -476,  -476,  -476,  -447,  -438,  -476,   426,  -476,
     299,   207,  -476,   -76,   -36,  -476,   283,  -204,  -476,  -142,
      -6,  -476,    -5,  -476,  -476,   147,  -476,   319,  -476,    -2,
    -476,  -476,  -476,  -476,  -476,  -476,     1,  -476,  -433,  -476,
     391,   -32,   -59,  -476,  -287,   526,    13,  -476,   -41,  -476,
     248,   485,  -128,  -476,   565,   155,  -111,  -476,  -476,   286,
     237,   396,  -476,  -357,  -476,   688,   690,  -166,  -476,  -476,
    -186,  -476,   133,  -476,   550,   -96,  -476,   383,  -476,  -269,
     385,  -197,  -476,  -476,  -476,  -476,  -476,  -475,   602,   603,
     -16,  -476,  -476,  -476,  -122,  -135
};

/* YYTABLE[YYPACT[STATE-NUM]].  What to do in state STATE-NUM.  If
   positive, shift that token.  If negative, reduce the rule which
   number is the opposite.  If zero, do what YYDEFACT says.
   If YYTABLE_NINF, syntax error.  */
#define YYTABLE_NINF -296
static const yytype_int16 yytable[] =
{
      14,   132,   277,    75,   332,   264,   413,   294,    22,    23,
      24,    25,    26,    27,   221,    32,   168,    35,    36,    37,
      38,   323,   194,   154,   260,   377,    48,    50,   274,    40,
      52,   365,   366,    54,   263,   369,   234,  -211,    59,   -90,
     400,    28,   160,   161,   513,    58,    28,   376,   274,   379,
      60,   -17,    28,   514,   402,   269,    28,    28,   519,   546,
     170,   171,    19,   256,   247,   570,    28,   -17,   421,   409,
     312,   180,   181,    29,   289,   -17,   183,   184,   185,   -17,
    -295,   196,   312,    67,   362,  -295,   433,   513,   177,    15,
     -17,    61,    28,   282,    16,    68,   514,   312,   186,   310,
    -295,   519,   494,   -17,   361,   274,    28,    28,   282,   296,
     187,   188,   189,   218,   297,   190,   191,   192,   427,    17,
     234,   234,   201,   202,   203,   204,   205,   423,   275,    67,
     206,   207,   486,    28,   360,    28,  -211,   -90,   216,   528,
     -90,    68,   401,   246,   544,    28,   465,   448,   275,   572,
     -15,   408,    48,    50,   375,   236,    52,   280,   422,    54,
     -17,  -150,   251,   253,   255,   257,   259,   261,   539,   321,
     415,    58,   280,   386,   388,   267,   268,    28,   270,   392,
    -295,   321,    28,  -295,   368,   -17,    69,   222,   -17,    70,
    -295,   223,   393,   287,   288,   152,   321,   290,   291,   464,
     234,   249,   498,   298,   404,   275,   461,  -150,   378,   407,
     334,   219,   300,   301,   302,  -156,   218,   577,   416,   497,
     356,   329,    28,   581,   307,   308,   309,   471,    28,   271,
     152,    28,    69,   487,   338,    70,   383,   384,   330,    18,
     348,   328,   354,    28,    20,   400,   463,   333,   218,   -15,
      28,   490,   -15,   492,   493,   222,   495,   155,    28,   223,
     436,   437,   438,   439,   440,   358,   359,   163,    75,    28,
     272,   282,   363,   364,   536,   273,   282,    28,   485,   367,
     526,    59,   421,   258,  -159,  -159,    28,   -17,   335,  -159,
     224,   225,   226,    60,    28,   535,   380,   381,   382,   231,
      28,   232,    21,   389,   426,    28,   391,   436,   437,   438,
     439,   440,    28,  -156,   541,   397,   162,   417,  -156,   298,
     418,   278,   281,   547,   565,    28,   478,    69,   282,   479,
      70,   576,    75,   429,    61,   280,   398,   293,   475,   399,
     280,    28,  -155,   542,   164,  -155,   259,   401,   394,   459,
    -156,   259,  -160,  -160,   535,   446,   313,  -160,   224,   225,
     226,   441,   442,    28,   476,   152,   152,   582,   153,   245,
     152,   -84,   422,   450,   314,   531,   312,   313,   424,  -211,
     -17,   480,   451,   430,   431,   311,   167,   434,   435,   502,
     444,   165,   280,   579,   449,   314,   250,   426,    28,   166,
     -17,   454,   496,   456,   177,    28,   349,   -17,   482,   442,
     350,   462,   175,   127,   128,    28,   274,   313,   489,   374,
     178,   469,   470,   303,   233,   172,   472,   473,  -173,   474,
     304,   140,   477,    28,   525,   314,   488,   395,   134,   135,
     136,   137,   138,   481,   176,   500,   315,   316,   317,   318,
     319,   320,    28,   152,   159,   127,   128,   322,   -17,   152,
     -84,   342,   337,   447,   343,   -17,   -17,   315,   316,   317,
     318,   319,   320,   210,   152,   321,    39,   211,   322,   503,
     -17,  -211,    59,   507,   182,   -17,    28,   -17,   152,    28,
     508,   347,   524,   329,    60,   527,   344,   345,   -96,   206,
     529,   -96,   127,   128,   209,    75,   532,   315,   316,   317,
     318,   319,   320,   195,   152,   215,   275,    28,   322,   156,
     157,  -173,  -173,  -173,   504,   505,  -173,  -173,  -173,  -173,
     543,   467,   468,   545,   228,    61,   134,   135,   136,   137,
     138,   229,   571,   -17,  -231,   196,   217,   152,   573,  -231,
     353,   212,   213,   214,   208,   152,  -238,  -238,   396,  -238,
     134,   135,   136,   137,   138,   133,   574,   134,   135,   136,
     137,   138,   139,   140,   265,   578,   299,   266,   152,   580,
    -211,  -231,  -231,  -231,  -231,  -231,  -231,  -231,  -231,  -231,
    -231,  -231,  -231,  -231,  -231,  -231,  -231,   306,  -231,   331,
     370,   355,  -238,  -238,  -238,  -238,  -238,  -238,  -238,  -238,
    -238,  -238,  -238,  -238,  -238,  -238,  -238,  -238,  -238,  -238,
    -238,  -238,   390,  -238,  -238,  -238,  -238,  -238,  -238,  -238,
    -238,  -238,  -238,  -238,  -238,  -238,   350,   406,  -238,  -238,
    -238,  -238,   411,  -231,  -231,  -231,   410,   197,  -238,   432,
     466,  -238,   274,   196,   198,  -238,  -238,    28,   455,   457,
     458,   416,   460,   241,    76,    77,   530,    78,   534,     1,
       2,     3,   233,     4,     5,     6,  -176,   569,   339,   425,
     499,   233,   453,   414,   548,  -172,   134,   135,   136,   137,
     138,   385,    28,   484,   262,   134,   135,   136,   137,   138,
     133,   305,   134,   135,   136,   137,   138,   139,   140,   230,
      79,    80,    81,    82,    83,    84,    85,    86,    87,    88,
      89,    90,    91,    92,    93,    94,    95,    96,    97,    98,
     483,    99,   100,   101,   102,   103,   104,   105,   106,   107,
     108,   109,   110,   111,   533,   405,   112,   113,   114,   115,
     292,   173,   275,   174,   177,   419,    69,   420,    28,    70,
     243,   244,     0,   116,   117,    76,    77,     0,    78,  -176,
    -176,  -176,     0,     0,  -176,  -176,  -176,  -176,  -172,  -172,
    -172,  -296,     0,  -172,  -172,  -172,  -172,   233,     0,     0,
       0,  -175,     0,     0,     0,     0,     0,     0,     0,   314,
       0,   134,   135,   136,   137,   138,     0,     0,     0,     0,
       0,    79,    80,    81,    82,    83,    84,    85,    86,    87,
      88,    89,    90,    91,    92,    93,    94,    95,    96,    97,
      98,     0,    99,   100,   101,   102,   103,   104,   105,   106,
     107,   108,   109,   110,   111,    28,     0,   112,   113,   114,
     115,     0,    76,    77,     0,    78,     0,    69,     0,     0,
      70,     0,     0,     0,   116,   117,     0,     0,     0,     0,
       0,   315,   316,   317,   318,   319,   320,     0,   152,     0,
       0,     0,   322,     0,  -175,  -175,  -175,     0,     0,  -175,
    -175,  -175,  -175,     0,     0,     0,     0,     0,    79,    80,
      81,    82,    83,    84,    85,    86,    87,    88,    89,    90,
      91,    92,    93,    94,    95,    96,    97,    98,     0,    99,
     100,   101,   102,   103,   104,   105,   106,   107,   108,   109,
     110,   111,  -222,   177,   112,   113,   114,   115,   196,     0,
       0,     0,    28,     0,    69,     0,     0,    70,     0,     0,
       0,   116,   117,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -222,
    -222,  -222,  -222,  -222,  -222,  -222,  -222,  -222,  -222,  -222,
    -222,  -222,  -222,  -222,  -222,     0,     0,     0,     0,     0,
       0,     0,    28,     0,     0,    79,    80,    81,    82,    83,
      84,    85,    86,    87,    88,    89,    90,    91,    92,    93,
      94,    95,    96,    97,     0,     0,    99,   100,   101,   102,
     103,   104,   105,   106,   107,   108,   109,     0,     0,     0,
       0,  -222,     0,  -222,     0,     0,     0,     0,     0,   279,
       0,    69,     0,     0,    70,    79,    80,    81,    82,    83,
      84,    85,    86,    87,    88,    89,    90,    91,    92,    93,
      94,    95,    96,    97,  -221,   313,    99,   100,   101,   102,
     103,   104,   105,   106,   107,   108,   109,     0,     0,     0,
    -227,   313,     0,   314,     0,     0,     0,     0,     0,   279,
       0,    69,     0,     0,    70,     0,     0,     0,     0,   314,
       0,  -221,  -221,  -221,  -221,  -221,  -221,  -221,  -221,  -221,
    -221,  -221,  -221,  -221,  -221,  -221,  -221,  -227,  -227,  -227,
    -227,  -227,  -227,  -227,  -227,  -227,  -227,  -227,  -227,  -227,
    -227,  -227,  -227,     0,     0,     0,     0,    76,    77,     0,
      78,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   315,   316,   317,   318,   319,
     320,     0,   152,  -221,     0,  -221,   322,     0,     0,     0,
       0,   315,   316,   317,   318,   319,   320,     0,   152,  -227,
       0,  -227,   322,    79,    80,    81,    82,    83,    84,    85,
      86,    87,    88,    89,    90,    91,    92,    93,    94,    95,
      96,    97,    98,     0,    99,   100,   101,   102,   103,   104,
     105,   106,   107,   108,   109,   110,   111,     0,     0,   112,
     113,   114,   115,     0,     0,  -211,    59,     0,    28,    69,
      28,     0,    70,     0,     0,     0,   116,   117,    60,     0,
       0,     0,     0,  -214,    59,   -63,  -112,   -95,  -140,     0,
      42,     0,     0,     0,  -100,     0,    60,     0,  -144,     0,
       0,     0,  -211,  -211,  -211,  -211,  -211,  -211,  -211,  -211,
    -211,  -211,  -211,  -211,  -211,  -211,  -211,  -211,     0,    61,
    -214,  -214,  -214,  -214,  -214,  -214,  -214,  -214,  -214,  -214,
    -214,  -214,  -214,  -214,  -214,  -214,     0,    61,     0,     0,
       0,     0,     0,     0,     0,     0,  -211,    59,     0,     0,
     312,   568,     0,     0,     0,     0,     0,     0,     0,    60,
       0,     0,     0,  -154,  -211,  -154,  -154,  -154,  -154,  -154,
    -154,  -154,     0,  -112,   -95,  -140,     0,     0,     0,     0,
       0,  -100,  -214,  -211,  -211,  -211,  -211,  -211,  -211,  -211,
    -211,  -211,  -211,  -211,  -211,  -211,  -211,  -211,  -211,     0,
      61,   312,   509,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,  -154,     0,  -154,  -154,  -154,  -154,
    -154,  -154,  -154,   -63,  -112,   -95,  -140,   312,    42,     0,
       0,     0,  -100,     0,     0,     0,  -144,     0,     0,     0,
       0,     0,     0,     0,     0,  -211,     0,     0,     0,   321,
       0,     0,     0,     0,   239,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   549,   550,   551,   552,   553,   554,
     555,   556,   557,   558,   559,   560,   561,   562,   563,   564,
       0,     0,     0,     0,     0,     0,    -2,   237,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -154,
     321,  -154,  -154,  -154,  -154,  -154,  -154,  -154,   -63,  -112,
     -95,  -140,   238,    42,     0,     0,     0,  -100,     0,     0,
       0,  -144,     0,     0,     0,     0,   321,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   239,
      79,    80,    81,    82,    83,    84,    85,    86,    87,    88,
      89,    90,    91,    92,    93,    94,    95,    96,    97,     0,
       0,    99,   100,   101,   102,   103,   104,   105,   106,   107,
     108,   109,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   279,     0,    69,     0,     0,    70,
      79,    80,    81,    82,    83,    84,    85,    86,    87,    88,
      89,    90,    91,    92,    93,    94,    95,    96,    97,   193,
       0,    99,   100,   101,   102,   103,   104,   105,   106,   107,
     108,   109,    79,    80,    81,    82,    83,    84,    85,    86,
      87,    88,    89,    90,    91,    92,    93,    94,    95,    96,
      97,     0,     0,    99,   100,   101,   102,   103,   104,   105,
     106,   107,   108,   109
};

static const yytype_int16 yycheck[] =
{
       0,    37,   188,    35,   242,   171,   363,   204,     8,     9,
      10,    11,    12,    13,   142,    15,    57,    17,    18,    19,
      20,   235,   118,    39,   166,   294,    32,    32,     0,    29,
      32,   277,   278,    32,   169,   281,   147,     0,     1,     0,
       1,     5,    42,    43,   491,    32,     5,   293,     0,   295,
      13,     5,     5,   491,   341,   177,     5,     5,   491,   534,
      60,    61,     5,     1,    13,   540,     5,     5,    20,   356,
       0,    71,    72,    26,   196,    13,    76,    77,    78,    17,
       0,     1,     0,     1,   270,     5,     1,   534,     1,    98,
       5,    54,     5,   189,    98,    13,   534,     0,    98,   227,
      20,   534,   459,    57,   270,     0,     5,     5,   204,    57,
     110,   111,   112,     1,    13,   115,   116,   117,    57,    98,
     231,   232,   122,   123,   124,   125,   126,   373,   100,     1,
     130,   131,     0,     5,   269,     5,    99,    98,   138,   496,
     101,    13,   103,   159,   108,     5,   415,   393,   100,   108,
       5,   355,   158,   158,   289,   155,   158,   189,   110,   158,
      98,    79,   162,   163,   164,   165,   166,   167,   525,    99,
     367,   158,   204,   301,   302,   175,   176,     5,   178,   314,
     100,    99,     5,   103,   280,   100,   104,     1,   103,   107,
     110,     5,   327,   193,   194,    98,    99,   197,   198,   413,
     311,    99,   471,   102,   346,   100,   410,    79,   103,   351,
      12,    99,   212,   213,   214,   103,     1,   574,     5,   465,
     261,   237,     5,   580,   224,   225,   226,   424,     5,    99,
      98,     5,   104,   101,   250,   107,    13,    14,   238,    98,
     256,   101,   258,     5,    98,     1,   412,   247,     1,   104,
       5,   455,   107,   457,   458,     1,   460,    12,     5,     5,
       7,     8,     9,    10,    11,   265,   266,    24,   300,     5,
      98,   367,   272,   273,   512,   103,   372,     5,   101,   279,
     494,     1,    20,     1,    98,    99,     5,     5,    90,   103,
     104,   105,   106,    13,     5,   509,   296,   297,   298,   144,
       5,   146,     0,   303,   380,     5,   306,     7,     8,     9,
      10,    11,     5,    98,   528,   331,    22,   104,   103,   102,
     107,   188,   189,   537,   538,     5,   100,   104,   424,   103,
     107,   569,   364,    13,    54,   367,   336,   204,   100,   339,
     372,     5,    98,   529,    31,    98,   346,   103,    12,   408,
     103,   351,    98,    99,   568,     0,     1,   103,   104,   105,
     106,   108,   109,     5,   100,    98,    98,   581,   101,   101,
      98,    13,   110,   101,    19,   503,     0,     1,   378,    99,
      98,   100,   398,   383,   384,   230,    35,   387,   388,   100,
     390,    23,   424,    98,   394,    19,     1,   473,     5,    25,
       5,   401,   461,   403,     1,     5,    13,    12,   108,   109,
      17,   411,   101,    55,    56,     5,     0,     1,   454,   286,
      17,   421,   422,    13,     1,    99,   426,   427,     5,   429,
      20,    21,   432,     5,   493,    19,   452,   101,    15,    16,
      17,    18,    19,   443,   101,    17,    91,    92,    93,    94,
      95,    96,     5,    98,     1,    55,    56,   102,     5,    98,
     102,    98,   101,   108,   101,    12,    13,    91,    92,    93,
      94,    95,    96,    13,    98,    99,     1,    17,   102,   479,
       5,     0,     1,   483,    79,    90,     5,    12,    98,     5,
     490,   101,   492,   509,    13,   495,    12,    13,    98,   499,
     500,   101,    55,    56,    21,   537,   506,    91,    92,    93,
      94,    95,    96,    99,    98,    13,   100,     5,   102,     5,
       6,    98,    99,   100,    12,    13,   103,   104,   105,   106,
     530,   417,   418,   533,    13,    54,    15,    16,    17,    18,
      19,    20,   542,    90,     0,     1,    21,    98,   548,     5,
     101,    91,    92,    93,    99,    98,    12,    13,   101,    15,
      15,    16,    17,    18,    19,    13,   566,    15,    16,    17,
      18,    19,    20,    21,   101,   575,    13,   101,    98,   579,
      99,    37,    38,    39,    40,    41,    42,    43,    44,    45,
      46,    47,    48,    49,    50,    51,    52,   103,    54,     1,
       5,    98,    58,    59,    60,    61,    62,    63,    64,    65,
      66,    67,    68,    69,    70,    71,    72,    73,    74,    75,
      76,    77,    13,    79,    80,    81,    82,    83,    84,    85,
      86,    87,    88,    89,    90,    91,    17,    13,    94,    95,
      96,    97,    54,    99,   100,   101,    98,   103,   104,    81,
       5,   107,     0,     1,   110,   111,   112,     5,    98,    98,
      98,     5,    98,   158,    12,    13,   100,    15,   508,    28,
      29,    30,     1,    32,    33,    34,     5,   540,   252,   380,
     473,     1,   399,   364,   537,     5,    15,    16,    17,    18,
      19,   300,     5,   445,   168,    15,    16,    17,    18,    19,
      13,   216,    15,    16,    17,    18,    19,    20,    21,   144,
      58,    59,    60,    61,    62,    63,    64,    65,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    75,    76,    77,
     444,    79,    80,    81,    82,    83,    84,    85,    86,    87,
      88,    89,    90,    91,   507,   349,    94,    95,    96,    97,
     200,    63,   100,    63,     1,   372,   104,   372,     5,   107,
     158,   158,    -1,   111,   112,    12,    13,    -1,    15,    98,
      99,   100,    -1,    -1,   103,   104,   105,   106,    98,    99,
     100,     1,    -1,   103,   104,   105,   106,     1,    -1,    -1,
      -1,     5,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    19,
      -1,    15,    16,    17,    18,    19,    -1,    -1,    -1,    -1,
      -1,    58,    59,    60,    61,    62,    63,    64,    65,    66,
      67,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    -1,    79,    80,    81,    82,    83,    84,    85,    86,
      87,    88,    89,    90,    91,     5,    -1,    94,    95,    96,
      97,    -1,    12,    13,    -1,    15,    -1,   104,    -1,    -1,
     107,    -1,    -1,    -1,   111,   112,    -1,    -1,    -1,    -1,
      -1,    91,    92,    93,    94,    95,    96,    -1,    98,    -1,
      -1,    -1,   102,    -1,    98,    99,   100,    -1,    -1,   103,
     104,   105,   106,    -1,    -1,    -1,    -1,    -1,    58,    59,
      60,    61,    62,    63,    64,    65,    66,    67,    68,    69,
      70,    71,    72,    73,    74,    75,    76,    77,    -1,    79,
      80,    81,    82,    83,    84,    85,    86,    87,    88,    89,
      90,    91,     0,     1,    94,    95,    96,    97,     1,    -1,
      -1,    -1,     5,    -1,   104,    -1,    -1,   107,    -1,    -1,
      -1,   111,   112,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    37,
      38,    39,    40,    41,    42,    43,    44,    45,    46,    47,
      48,    49,    50,    51,    52,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,     5,    -1,    -1,    58,    59,    60,    61,    62,
      63,    64,    65,    66,    67,    68,    69,    70,    71,    72,
      73,    74,    75,    76,    -1,    -1,    79,    80,    81,    82,
      83,    84,    85,    86,    87,    88,    89,    -1,    -1,    -1,
      -1,    99,    -1,   101,    -1,    -1,    -1,    -1,    -1,   102,
      -1,   104,    -1,    -1,   107,    58,    59,    60,    61,    62,
      63,    64,    65,    66,    67,    68,    69,    70,    71,    72,
      73,    74,    75,    76,     0,     1,    79,    80,    81,    82,
      83,    84,    85,    86,    87,    88,    89,    -1,    -1,    -1,
       0,     1,    -1,    19,    -1,    -1,    -1,    -1,    -1,   102,
      -1,   104,    -1,    -1,   107,    -1,    -1,    -1,    -1,    19,
      -1,    37,    38,    39,    40,    41,    42,    43,    44,    45,
      46,    47,    48,    49,    50,    51,    52,    37,    38,    39,
      40,    41,    42,    43,    44,    45,    46,    47,    48,    49,
      50,    51,    52,    -1,    -1,    -1,    -1,    12,    13,    -1,
      15,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    91,    92,    93,    94,    95,
      96,    -1,    98,    99,    -1,   101,   102,    -1,    -1,    -1,
      -1,    91,    92,    93,    94,    95,    96,    -1,    98,    99,
      -1,   101,   102,    58,    59,    60,    61,    62,    63,    64,
      65,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      75,    76,    77,    -1,    79,    80,    81,    82,    83,    84,
      85,    86,    87,    88,    89,    90,    91,    -1,    -1,    94,
      95,    96,    97,    -1,    -1,     0,     1,    -1,     5,   104,
       5,    -1,   107,    -1,    -1,    -1,   111,   112,    13,    -1,
      -1,    -1,    -1,     0,     1,    22,    23,    24,    25,    -1,
      27,    -1,    -1,    -1,    31,    -1,    13,    -1,    35,    -1,
      -1,    -1,    37,    38,    39,    40,    41,    42,    43,    44,
      45,    46,    47,    48,    49,    50,    51,    52,    -1,    54,
      37,    38,    39,    40,    41,    42,    43,    44,    45,    46,
      47,    48,    49,    50,    51,    52,    -1,    54,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,     0,     1,    -1,    -1,
       0,     1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    13,
      -1,    -1,    -1,    13,    99,    15,    16,    17,    18,    19,
      20,    21,    -1,    23,    24,    25,    -1,    -1,    -1,    -1,
      -1,    31,    99,    37,    38,    39,    40,    41,    42,    43,
      44,    45,    46,    47,    48,    49,    50,    51,    52,    -1,
      54,     0,     1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    13,    -1,    15,    16,    17,    18,
      19,    20,    21,    22,    23,    24,    25,     0,    27,    -1,
      -1,    -1,    31,    -1,    -1,    -1,    35,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    99,    -1,    -1,    -1,    99,
      -1,    -1,    -1,    -1,    53,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    37,    38,    39,    40,    41,    42,
      43,    44,    45,    46,    47,    48,    49,    50,    51,    52,
      -1,    -1,    -1,    -1,    -1,    -1,     0,     1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    13,
      99,    15,    16,    17,    18,    19,    20,    21,    22,    23,
      24,    25,    26,    27,    -1,    -1,    -1,    31,    -1,    -1,
      -1,    35,    -1,    -1,    -1,    -1,    99,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    53,
      58,    59,    60,    61,    62,    63,    64,    65,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    75,    76,    -1,
      -1,    79,    80,    81,    82,    83,    84,    85,    86,    87,
      88,    89,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   102,    -1,   104,    -1,    -1,   107,
      58,    59,    60,    61,    62,    63,    64,    65,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    75,    76,    77,
      -1,    79,    80,    81,    82,    83,    84,    85,    86,    87,
      88,    89,    58,    59,    60,    61,    62,    63,    64,    65,
      66,    67,    68,    69,    70,    71,    72,    73,    74,    75,
      76,    -1,    -1,    79,    80,    81,    82,    83,    84,    85,
      86,    87,    88,    89
};

/* YYSTOS[STATE-NUM] -- The (internal number of the) accessing
   symbol of state STATE-NUM.  */
static const yytype_uint8 yystos[] =
{
       0,    28,    29,    30,    32,    33,    34,   114,   115,   116,
     117,   118,   119,   120,   122,    98,    98,    98,    98,     5,
      98,     0,   122,   122,   122,   122,   122,   122,     5,    26,
     124,   127,   122,   122,   175,   122,   122,   122,   122,     1,
     122,   123,    27,   130,   137,   138,   139,   151,   153,   154,
     155,   161,   162,   168,   169,   170,   171,   176,   179,     1,
      13,    54,   196,   197,   198,   199,   201,     1,    13,   104,
     107,   158,   159,   160,   173,   174,    12,    13,    15,    58,
      59,    60,    61,    62,    63,    64,    65,    66,    67,    68,
      69,    70,    71,    72,    73,    74,    75,    76,    77,    79,
      80,    81,    82,    83,    84,    85,    86,    87,    88,    89,
      90,    91,    94,    95,    96,    97,   111,   112,   174,   203,
     204,   207,   208,   209,   217,   218,   219,    55,    56,   143,
     144,   146,   147,    13,    15,    16,    17,    18,    19,    20,
      21,   181,   182,   183,   184,   185,   187,   188,   189,   190,
     191,   195,    98,   101,   223,    12,     5,     6,   129,     1,
     122,   122,    22,    24,    31,    23,    25,    35,   181,   227,
     122,   122,    99,   198,   199,   101,   101,     1,    17,   200,
     122,   122,    79,   122,   122,   122,   122,   122,   122,   122,
     122,   122,   122,    77,   208,    99,     1,   103,   110,   205,
     206,   122,   122,   122,   122,   122,   122,   122,    99,    21,
      13,    17,    91,    92,    93,    13,   122,    21,     1,    99,
     178,   185,     1,     5,   104,   105,   106,   172,    13,    20,
     187,   188,   188,     1,   189,   228,   122,     1,    26,    53,
     128,   130,   131,   221,   222,   101,   223,    13,   140,    99,
       1,   122,   136,   122,   152,   122,     1,   122,     1,   122,
     152,   122,   178,   228,   200,   101,   101,   122,   122,   227,
     122,    99,    98,   103,     0,   100,   126,   203,   205,   102,
     174,   205,   208,   210,   213,   214,   215,   122,   122,   227,
     122,   122,   207,   205,   214,   216,    57,    13,   102,    13,
     122,   122,   122,    13,    20,   184,   103,   122,   122,   122,
     185,   188,     0,     1,    19,    91,    92,    93,    94,    95,
      96,    99,   102,   125,   223,   224,   225,   226,   101,   223,
     122,     1,   123,   122,    12,    90,   141,   101,   223,   141,
     147,   149,    98,   101,    12,    13,   156,   101,   223,    13,
      17,   163,   194,   101,   223,    98,   181,   177,   122,   122,
     228,   200,   203,   122,   122,   126,   126,   122,   208,   126,
       5,   121,   211,   212,   205,   228,   126,   212,   103,   126,
     122,   122,   122,    13,    14,   173,   185,   186,   185,   122,
      13,   122,   228,   228,    12,   101,   101,   223,   122,   122,
       1,   103,   177,   150,   152,   194,    13,   152,   150,   177,
      98,    54,   202,   196,   160,   214,     5,   104,   107,   210,
     213,    20,   110,   126,   122,   143,   146,    57,   145,    13,
     122,   122,    81,     1,   122,   122,     7,     8,     9,    10,
      11,   108,   109,   192,   122,   180,     0,   108,   126,   122,
     101,   223,   148,   149,   122,    98,   122,    98,    98,   175,
      98,   150,   122,   200,   125,   212,     5,   121,   121,   122,
     122,   214,   122,   122,   122,   100,   100,   122,   100,   103,
     100,   122,   108,   192,   183,   101,     0,   101,   223,   147,
     150,   132,   150,   150,   196,   150,   175,   126,   212,   144,
      17,   142,   100,   122,    12,    13,   193,   122,   122,     1,
     125,   134,   135,   138,   139,   153,   155,   162,   169,   171,
     179,   220,   221,   222,   122,   175,   125,   122,   196,   122,
     100,   185,   122,   193,   132,   125,   123,   157,   164,   196,
     133,   125,   203,   122,   108,   122,   220,   125,   158,    37,
      38,    39,    40,    41,    42,    43,    44,    45,    46,    47,
      48,    49,    50,    51,    52,   125,   165,   167,     1,   134,
     220,   122,   108,   122,   122,   166,   123,   196,   122,    98,
     122,   196,   125
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
      case 130: /* "valid_rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2122 "./CSSGrammar.cpp"
	break;
      case 131: /* "rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2127 "./CSSGrammar.cpp"
	break;
      case 132: /* "block_rule_list" */
#line 205 "./CSSGrammar.y"
	{ delete (yyvaluep->ruleList); };
#line 2132 "./CSSGrammar.cpp"
	break;
      case 133: /* "block_valid_rule_list" */
#line 205 "./CSSGrammar.y"
	{ delete (yyvaluep->ruleList); };
#line 2137 "./CSSGrammar.cpp"
	break;
      case 134: /* "block_valid_rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2142 "./CSSGrammar.cpp"
	break;
      case 135: /* "block_rule" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2147 "./CSSGrammar.cpp"
	break;
      case 138: /* "import" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2152 "./CSSGrammar.cpp"
	break;
      case 142: /* "maybe_media_value" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2157 "./CSSGrammar.cpp"
	break;
      case 143: /* "media_query_exp" */
#line 224 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQueryExp); };
#line 2162 "./CSSGrammar.cpp"
	break;
      case 144: /* "media_query_exp_list" */
#line 228 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQueryExpList); };
#line 2167 "./CSSGrammar.cpp"
	break;
      case 145: /* "maybe_and_media_query_exp_list" */
#line 228 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQueryExpList); };
#line 2172 "./CSSGrammar.cpp"
	break;
      case 147: /* "media_query" */
#line 217 "./CSSGrammar.y"
	{ delete (yyvaluep->mediaQuery); };
#line 2177 "./CSSGrammar.cpp"
	break;
      case 148: /* "maybe_media_list" */
#line 213 "./CSSGrammar.y"
	{ if ((yyvaluep->mediaList)) (yyvaluep->mediaList)->deref(); };
#line 2182 "./CSSGrammar.cpp"
	break;
      case 149: /* "media_list" */
#line 213 "./CSSGrammar.y"
	{ if ((yyvaluep->mediaList)) (yyvaluep->mediaList)->deref(); };
#line 2187 "./CSSGrammar.cpp"
	break;
      case 153: /* "media" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2192 "./CSSGrammar.cpp"
	break;
      case 155: /* "keyframes" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2197 "./CSSGrammar.cpp"
	break;
      case 157: /* "keyframes_rule" */
#line 238 "./CSSGrammar.y"
	{ delete (yyvaluep->keyframeRuleList); };
#line 2202 "./CSSGrammar.cpp"
	break;
      case 158: /* "keyframe_rule" */
#line 234 "./CSSGrammar.y"
	{ if ((yyvaluep->keyframe)) (yyvaluep->keyframe)->deref(); };
#line 2207 "./CSSGrammar.cpp"
	break;
      case 159: /* "key_list" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2212 "./CSSGrammar.cpp"
	break;
      case 162: /* "page" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2217 "./CSSGrammar.cpp"
	break;
      case 163: /* "page_selector" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2222 "./CSSGrammar.cpp"
	break;
      case 169: /* "font_face" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2227 "./CSSGrammar.cpp"
	break;
      case 171: /* "region" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2232 "./CSSGrammar.cpp"
	break;
      case 179: /* "ruleset" */
#line 201 "./CSSGrammar.y"
	{ if ((yyvaluep->rule)) (yyvaluep->rule)->deref(); };
#line 2237 "./CSSGrammar.cpp"
	break;
      case 181: /* "selector_list" */
#line 256 "./CSSGrammar.y"
	{ delete (yyvaluep->selectorList); };
#line 2242 "./CSSGrammar.cpp"
	break;
      case 182: /* "selector_with_trailing_whitespace" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2247 "./CSSGrammar.cpp"
	break;
      case 183: /* "selector" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2252 "./CSSGrammar.cpp"
	break;
      case 185: /* "simple_selector" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2257 "./CSSGrammar.cpp"
	break;
      case 186: /* "simple_selector_list" */
#line 256 "./CSSGrammar.y"
	{ delete (yyvaluep->selectorList); };
#line 2262 "./CSSGrammar.cpp"
	break;
      case 188: /* "specifier_list" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2267 "./CSSGrammar.cpp"
	break;
      case 189: /* "specifier" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2272 "./CSSGrammar.cpp"
	break;
      case 190: /* "class" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2277 "./CSSGrammar.cpp"
	break;
      case 191: /* "attrib" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2282 "./CSSGrammar.cpp"
	break;
      case 194: /* "pseudo_page" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2287 "./CSSGrammar.cpp"
	break;
      case 195: /* "pseudo" */
#line 252 "./CSSGrammar.y"
	{ delete (yyvaluep->selector); };
#line 2292 "./CSSGrammar.cpp"
	break;
      case 203: /* "expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2297 "./CSSGrammar.cpp"
	break;
      case 204: /* "valid_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2302 "./CSSGrammar.cpp"
	break;
      case 207: /* "term" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2307 "./CSSGrammar.cpp"
	break;
      case 209: /* "function" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2312 "./CSSGrammar.cpp"
	break;
      case 210: /* "calc_func_term" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2317 "./CSSGrammar.cpp"
	break;
      case 213: /* "calc_func_paren_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2322 "./CSSGrammar.cpp"
	break;
      case 214: /* "calc_func_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2327 "./CSSGrammar.cpp"
	break;
      case 215: /* "valid_calc_func_expr" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2332 "./CSSGrammar.cpp"
	break;
      case 216: /* "calc_func_expr_list" */
#line 272 "./CSSGrammar.y"
	{ delete (yyvaluep->valueList); };
#line 2337 "./CSSGrammar.cpp"
	break;
      case 217: /* "calc_function" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2342 "./CSSGrammar.cpp"
	break;
      case 219: /* "min_or_max_function" */
#line 245 "./CSSGrammar.y"
	{ destroy((yyvaluep->value)); };
#line 2347 "./CSSGrammar.cpp"
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
#line 295 "./CSSGrammar.y"
    { parser->m_rule = adoptRef((yyvsp[(4) - (6)].rule)); ;}
    break;

  case 10:
#line 297 "./CSSGrammar.y"
    { parser->m_keyframe = adoptRef((yyvsp[(4) - (6)].keyframe)); ;}
    break;

  case 12:
#line 302 "./CSSGrammar.y"
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
#line 313 "./CSSGrammar.y"
    { parser->m_mediaQuery = adoptPtr((yyvsp[(4) - (5)].mediaQuery)); ;}
    break;

  case 14:
#line 316 "./CSSGrammar.y"
    {
        if ((yyvsp[(4) - (5)].selectorList)) {
            if (parser->m_selectorListForParseSelector)
                parser->m_selectorListForParseSelector->adoptSelectorVector(*(yyvsp[(4) - (5)].selectorList));
            parser->recycleSelectorVector(adoptPtr((yyvsp[(4) - (5)].selectorList)));
        }
    ;}
    break;

  case 28:
#line 337 "./CSSGrammar.y"
    {
     if (parser->m_styleSheet)
         parser->m_styleSheet->parserSetEncodingFromCharsetRule((yyvsp[(3) - (5)].string));
     if (parser->isExtractingSourceData() && parser->m_currentRuleDataStack->isEmpty() && parser->m_ruleSourceDataResult)
         parser->addNewRuleToSourceTree(CSSRuleSourceData::createUnknown());
  ;}
    break;

  case 34:
#line 352 "./CSSGrammar.y"
    {
        if (RefPtr<StyleRuleBase> rule = adoptRef((yyvsp[(2) - (3)].rule))) {
            if (parser->m_styleSheet)
                parser->m_styleSheet->parserAppendRule(rule.releaseNonNull());
        }
    ;}
    break;

  case 40:
#line 366 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 43:
#line 372 "./CSSGrammar.y"
    {
        (yyval.rule) = (yyvsp[(1) - (1)].rule);
        parser->m_hadSyntacticallyValidCSSRule = true;
    ;}
    break;

  case 44:
#line 376 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 45:
#line 377 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 46:
#line 378 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 47:
#line 382 "./CSSGrammar.y"
    { (yyval.ruleList) = nullptr; ;}
    break;

  case 48:
#line 383 "./CSSGrammar.y"
    {
      (yyval.ruleList) = (yyvsp[(1) - (3)].ruleList);
      if (RefPtr<StyleRuleBase> rule = adoptRef((yyvsp[(2) - (3)].rule))) {
          if (!(yyval.ruleList))
              (yyval.ruleList) = new Vector<RefPtr<StyleRuleBase>>;
          (yyval.ruleList)->append(rule.release());
      }
  ;}
    break;

  case 49:
#line 394 "./CSSGrammar.y"
    { (yyval.ruleList) = nullptr; ;}
    break;

  case 50:
#line 395 "./CSSGrammar.y"
    {
      (yyval.ruleList) = (yyvsp[(1) - (3)].ruleList);
      if (RefPtr<StyleRuleBase> rule = adoptRef((yyvsp[(2) - (3)].rule))) {
          if (!(yyval.ruleList))
              (yyval.ruleList) = new Vector<RefPtr<StyleRuleBase>>;
          (yyval.ruleList)->append(rule.release());
      }
  ;}
    break;

  case 57:
#line 413 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 58:
#line 413 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 59:
#line 413 "./CSSGrammar.y"
    { (yyval.rule) = nullptr; ;}
    break;

  case 62:
#line 416 "./CSSGrammar.y"
    {
        parser->markRuleHeaderEnd();
        parser->markRuleBodyStart();
    ;}
    break;

  case 63:
#line 423 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::IMPORT_RULE);
    ;}
    break;

  case 64:
#line 429 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createImportRule((yyvsp[(4) - (7)].string), adoptRef((yyvsp[(6) - (7)].mediaList))).leakRef();
    ;}
    break;

  case 65:
#line 432 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createImportRule((yyvsp[(4) - (7)].string), adoptRef((yyvsp[(6) - (7)].mediaList))).leakRef();
    ;}
    break;

  case 66:
#line 435 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
        if ((yyvsp[(6) - (7)].mediaList))
            (yyvsp[(6) - (7)].mediaList)->deref();
    ;}
    break;

  case 67:
#line 441 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 68:
#line 445 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 69:
#line 452 "./CSSGrammar.y"
    { parser->addNamespace((yyvsp[(3) - (6)].string), (yyvsp[(4) - (6)].string)); ;}
    break;

  case 73:
#line 458 "./CSSGrammar.y"
    { (yyval.string).clear(); ;}
    break;

  case 77:
#line 462 "./CSSGrammar.y"
    { (yyval.valueList) = nullptr; ;}
    break;

  case 78:
#line 462 "./CSSGrammar.y"
    { (yyval.valueList) = (yyvsp[(3) - (4)].valueList); ;}
    break;

  case 79:
#line 465 "./CSSGrammar.y"
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

  case 80:
#line 479 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = new Vector<OwnPtr<MediaQueryExp>>;
        (yyval.mediaQueryExpList)->append(adoptPtr((yyvsp[(1) - (1)].mediaQueryExp)));
    ;}
    break;

  case 81:
#line 483 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = (yyvsp[(1) - (5)].mediaQueryExpList);
        (yyval.mediaQueryExpList)->append(adoptPtr((yyvsp[(5) - (5)].mediaQueryExp)));
    ;}
    break;

  case 82:
#line 490 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = new Vector<OwnPtr<MediaQueryExp>>;
    ;}
    break;

  case 83:
#line 493 "./CSSGrammar.y"
    {
        (yyval.mediaQueryExpList) = (yyvsp[(3) - (3)].mediaQueryExpList);
    ;}
    break;

  case 84:
#line 499 "./CSSGrammar.y"
    {
        (yyval.mediaQueryRestrictor) = MediaQuery::None;
    ;}
    break;

  case 85:
#line 502 "./CSSGrammar.y"
    {
        (yyval.mediaQueryRestrictor) = MediaQuery::Only;
    ;}
    break;

  case 86:
#line 505 "./CSSGrammar.y"
    {
        (yyval.mediaQueryRestrictor) = MediaQuery::Not;
    ;}
    break;

  case 87:
#line 511 "./CSSGrammar.y"
    {
        (yyval.mediaQuery) = new MediaQuery(MediaQuery::None, "all", adoptPtr((yyvsp[(1) - (1)].mediaQueryExpList)));
    ;}
    break;

  case 88:
#line 515 "./CSSGrammar.y"
    {
        (yyvsp[(3) - (5)].string).lower();
        (yyval.mediaQuery) = new MediaQuery((yyvsp[(1) - (5)].mediaQueryRestrictor), (yyvsp[(3) - (5)].string), adoptPtr((yyvsp[(5) - (5)].mediaQueryExpList)));
    ;}
    break;

  case 89:
#line 521 "./CSSGrammar.y"
    { (yyval.mediaList) = MediaQuerySet::create().leakRef(); ;}
    break;

  case 91:
#line 524 "./CSSGrammar.y"
    {
        (yyval.mediaList) = MediaQuerySet::create().leakRef();
        (yyval.mediaList)->addMediaQuery(adoptPtr((yyvsp[(1) - (1)].mediaQuery)));
        parser->updateLastMediaLine((yyval.mediaList));
    ;}
    break;

  case 92:
#line 529 "./CSSGrammar.y"
    {
        (yyval.mediaList) = (yyvsp[(1) - (4)].mediaList);
        OwnPtr<MediaQuery> mediaQuery = adoptPtr((yyvsp[(4) - (4)].mediaQuery));
        if ((yyval.mediaList)) {
            (yyval.mediaList)->addMediaQuery(mediaQuery.release());
            parser->updateLastMediaLine((yyval.mediaList));
        }
    ;}
    break;

  case 93:
#line 537 "./CSSGrammar.y"
    {
        (yyval.mediaList) = nullptr;
        if ((yyvsp[(1) - (2)].mediaList))
            (yyvsp[(1) - (2)].mediaList)->deref();
    ;}
    break;

  case 94:
#line 545 "./CSSGrammar.y"
    {
        parser->markRuleBodyStart();
    ;}
    break;

  case 95:
#line 551 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::MEDIA_RULE);
    ;}
    break;

  case 96:
#line 557 "./CSSGrammar.y"
    {
        parser->markRuleHeaderEnd();
    ;}
    break;

  case 97:
#line 563 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createMediaRule(adoptRef((yyvsp[(4) - (10)].mediaList)), adoptPtr((yyvsp[(9) - (10)].ruleList)).get()).leakRef();
    ;}
    break;

  case 98:
#line 566 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createEmptyMediaRule(adoptPtr((yyvsp[(7) - (8)].ruleList)).get()).leakRef();
    ;}
    break;

  case 99:
#line 569 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 100:
#line 575 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::KEYFRAMES_RULE);
    ;}
    break;

  case 101:
#line 581 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createKeyframesRule((yyvsp[(4) - (10)].string), adoptPtr((yyvsp[(9) - (10)].keyframeRuleList))).leakRef();
    ;}
    break;

  case 104:
#line 589 "./CSSGrammar.y"
    { (yyval.keyframeRuleList) = new Vector<RefPtr<StyleKeyframe>>; ;}
    break;

  case 105:
#line 590 "./CSSGrammar.y"
    {
        (yyval.keyframeRuleList) = (yyvsp[(1) - (3)].keyframeRuleList);
        if (RefPtr<StyleKeyframe> keyframe = adoptRef((yyvsp[(2) - (3)].keyframe)))
            (yyval.keyframeRuleList)->append(keyframe.release());
    ;}
    break;

  case 106:
#line 597 "./CSSGrammar.y"
    { (yyval.keyframe) = parser->createKeyframe(*adoptPtr((yyvsp[(1) - (6)].valueList))).leakRef(); ;}
    break;

  case 107:
#line 600 "./CSSGrammar.y"
    {
        (yyval.valueList) = new CSSParserValueList;
        (yyval.valueList)->addValue((yyvsp[(1) - (1)].value));
    ;}
    break;

  case 108:
#line 604 "./CSSGrammar.y"
    {
        (yyval.valueList) = (yyvsp[(1) - (5)].valueList);
        ASSERT((yyvsp[(5) - (5)].value).unit != CSSParserValue::Function);
        if ((yyval.valueList))
            (yyval.valueList)->addValue((yyvsp[(5) - (5)].value));
    ;}
    break;

  case 109:
#line 613 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = false; (yyval.value).fValue = (yyvsp[(1) - (2)].integer) * (yyvsp[(2) - (2)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER; ;}
    break;

  case 110:
#line 614 "./CSSGrammar.y"
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

  case 111:
#line 626 "./CSSGrammar.y"
    {
        (yyval.value).unit = 0;
    ;}
    break;

  case 112:
#line 632 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::PAGE_RULE);
    ;}
    break;

  case 113:
#line 639 "./CSSGrammar.y"
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

  case 114:
#line 650 "./CSSGrammar.y"
    {
        parser->popRuleData();
        (yyval.rule) = nullptr;
    ;}
    break;

  case 115:
#line 654 "./CSSGrammar.y"
    {
        parser->popRuleData();
        (yyval.rule) = nullptr;
    ;}
    break;

  case 116:
#line 661 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector(QualifiedName(nullAtom, (yyvsp[(1) - (1)].string), parser->m_defaultNamespace));
        (yyval.selector)->setForPage();
    ;}
    break;

  case 117:
#line 665 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(2) - (2)].selector);
        if ((yyval.selector)) {
            (yyval.selector)->prependTagSelector(QualifiedName(nullAtom, (yyvsp[(1) - (2)].string), parser->m_defaultNamespace));
            (yyval.selector)->setForPage();
        }
    ;}
    break;

  case 118:
#line 672 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(1) - (1)].selector);
        if ((yyval.selector))
            (yyval.selector)->setForPage();
    ;}
    break;

  case 119:
#line 677 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setForPage();
    ;}
    break;

  case 122:
#line 686 "./CSSGrammar.y"
    {
        parser->startDeclarationsForMarginBox();
    ;}
    break;

  case 123:
#line 688 "./CSSGrammar.y"
    {
        parser->createMarginAtRule((yyvsp[(1) - (7)].marginBox));
    ;}
    break;

  case 124:
#line 694 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopLeftCornerMarginBox;
    ;}
    break;

  case 125:
#line 697 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopLeftMarginBox;
    ;}
    break;

  case 126:
#line 700 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopCenterMarginBox;
    ;}
    break;

  case 127:
#line 703 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopRightMarginBox;
    ;}
    break;

  case 128:
#line 706 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::TopRightCornerMarginBox;
    ;}
    break;

  case 129:
#line 709 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomLeftCornerMarginBox;
    ;}
    break;

  case 130:
#line 712 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomLeftMarginBox;
    ;}
    break;

  case 131:
#line 715 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomCenterMarginBox;
    ;}
    break;

  case 132:
#line 718 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomRightMarginBox;
    ;}
    break;

  case 133:
#line 721 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::BottomRightCornerMarginBox;
    ;}
    break;

  case 134:
#line 724 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::LeftTopMarginBox;
    ;}
    break;

  case 135:
#line 727 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::LeftMiddleMarginBox;
    ;}
    break;

  case 136:
#line 730 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::LeftBottomMarginBox;
    ;}
    break;

  case 137:
#line 733 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::RightTopMarginBox;
    ;}
    break;

  case 138:
#line 736 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::RightMiddleMarginBox;
    ;}
    break;

  case 139:
#line 739 "./CSSGrammar.y"
    {
        (yyval.marginBox) = CSSSelector::RightBottomMarginBox;
    ;}
    break;

  case 140:
#line 745 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::FONT_FACE_RULE);
    ;}
    break;

  case 141:
#line 751 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createFontFaceRule().leakRef();
    ;}
    break;

  case 142:
#line 754 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 143:
#line 758 "./CSSGrammar.y"
    {
        (yyval.rule) = nullptr;
        parser->popRuleData();
    ;}
    break;

  case 144:
#line 764 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::REGION_RULE);
    ;}
    break;

  case 145:
#line 770 "./CSSGrammar.y"
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

  case 146:
#line 781 "./CSSGrammar.y"
    { (yyval.relation) = CSSSelector::DirectAdjacent; ;}
    break;

  case 147:
#line 782 "./CSSGrammar.y"
    { (yyval.relation) = CSSSelector::IndirectAdjacent; ;}
    break;

  case 148:
#line 783 "./CSSGrammar.y"
    { (yyval.relation) = CSSSelector::Child; ;}
    break;

  case 150:
#line 786 "./CSSGrammar.y"
    { (yyval.integer) = 1; ;}
    break;

  case 151:
#line 788 "./CSSGrammar.y"
    { (yyval.integer) = -1; ;}
    break;

  case 152:
#line 788 "./CSSGrammar.y"
    { (yyval.integer) = 1; ;}
    break;

  case 153:
#line 790 "./CSSGrammar.y"
    { parser->markPropertyStart(); ;}
    break;

  case 154:
#line 793 "./CSSGrammar.y"
    {
        parser->markRuleHeaderStart(CSSRuleSourceData::STYLE_RULE);
        parser->markSelectorStart();
    ;}
    break;

  case 155:
#line 799 "./CSSGrammar.y"
    { parser->markRuleHeaderEnd(); ;}
    break;

  case 156:
#line 801 "./CSSGrammar.y"
    { parser->markSelectorEnd(); ;}
    break;

  case 157:
#line 804 "./CSSGrammar.y"
    {
        (yyval.rule) = parser->createStyleRule((yyvsp[(2) - (9)].selectorList)).leakRef();
        parser->recycleSelectorVector(adoptPtr((yyvsp[(2) - (9)].selectorList)));
    ;}
    break;

  case 158:
#line 810 "./CSSGrammar.y"
    { parser->markSelectorStart(); ;}
    break;

  case 159:
#line 813 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        if ((yyvsp[(1) - (1)].selector)) {
            (yyval.selectorList) = parser->createSelectorVector().leakPtr();
            (yyval.selectorList)->append(adoptPtr((yyvsp[(1) - (1)].selector)));
            parser->updateLastSelectorLineAndPosition();
        }
    ;}
    break;

  case 160:
#line 821 "./CSSGrammar.y"
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

  case 161:
#line 831 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        delete (yyvsp[(1) - (2)].selectorList);
    ;}
    break;

  case 165:
#line 843 "./CSSGrammar.y"
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

  case 166:
#line 852 "./CSSGrammar.y"
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

  case 167:
#line 861 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        delete (yyvsp[(1) - (2)].selector);
    ;}
    break;

  case 168:
#line 868 "./CSSGrammar.y"
    { (yyval.string).clear(); ;}
    break;

  case 169:
#line 869 "./CSSGrammar.y"
    { static LChar star = '*'; (yyval.string).init(&star, 1); ;}
    break;

  case 171:
#line 874 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector(QualifiedName(nullAtom, (yyvsp[(1) - (1)].string), parser->m_defaultNamespace));
    ;}
    break;

  case 172:
#line 877 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(2) - (2)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithElementName(nullAtom, (yyvsp[(1) - (2)].string), *(yyval.selector));
    ;}
    break;

  case 173:
#line 882 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(1) - (1)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithNamespaceIfNeeded(*(yyval.selector));
    ;}
    break;

  case 174:
#line 887 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector(parser->determineNameInNamespace((yyvsp[(1) - (2)].string), (yyvsp[(2) - (2)].string)));
    ;}
    break;

  case 175:
#line 890 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(3) - (3)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithElementName((yyvsp[(1) - (3)].string), (yyvsp[(2) - (3)].string), *(yyval.selector));
    ;}
    break;

  case 176:
#line 895 "./CSSGrammar.y"
    {
        (yyval.selector) = (yyvsp[(2) - (2)].selector);
        if ((yyval.selector))
            parser->rewriteSpecifiersWithElementName((yyvsp[(1) - (2)].string), starAtom, *(yyval.selector));
    ;}
    break;

  case 177:
#line 903 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        if ((yyvsp[(1) - (1)].selector)) {
            (yyval.selectorList) = parser->createSelectorVector().leakPtr();
            (yyval.selectorList)->append(adoptPtr((yyvsp[(1) - (1)].selector)));
        }
    ;}
    break;

  case 178:
#line 910 "./CSSGrammar.y"
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

  case 179:
#line 919 "./CSSGrammar.y"
    {
        (yyval.selectorList) = nullptr;
        delete (yyvsp[(1) - (2)].selectorList);
    ;}
    break;

  case 180:
#line 926 "./CSSGrammar.y"
    {
        if (parser->m_context.isHTMLDocument)
            (yyvsp[(1) - (1)].string).lower();
        (yyval.string) = (yyvsp[(1) - (1)].string);
    ;}
    break;

  case 181:
#line 931 "./CSSGrammar.y"
    {
        static LChar star = '*';
        (yyval.string).init(&star, 1);
    ;}
    break;

  case 183:
#line 939 "./CSSGrammar.y"
    {
        OwnPtr<CSSParserSelector> list = adoptPtr((yyvsp[(1) - (2)].selector));
        OwnPtr<CSSParserSelector> specifier = adoptPtr((yyvsp[(2) - (2)].selector));
        (yyval.selector) = nullptr;
        if (list && specifier)
            (yyval.selector) = parser->rewriteSpecifiers(list.release(), specifier.release()).leakPtr();
    ;}
    break;

  case 184:
#line 946 "./CSSGrammar.y"
    {
        (yyval.selector) = nullptr;
        delete (yyvsp[(1) - (2)].selector);
    ;}
    break;

  case 185:
#line 953 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setMatch(CSSSelector::Id);
        if (parser->m_context.mode == CSSQuirksMode)
            (yyvsp[(1) - (1)].string).lower();
        (yyval.selector)->setValue((yyvsp[(1) - (1)].string));
    ;}
    break;

  case 186:
#line 960 "./CSSGrammar.y"
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

  case 190:
#line 977 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setMatch(CSSSelector::Class);
        if (parser->m_context.mode == CSSQuirksMode)
            (yyvsp[(2) - (2)].string).lower();
        (yyval.selector)->setValue((yyvsp[(2) - (2)].string));
    ;}
    break;

  case 191:
#line 987 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(QualifiedName(nullAtom, (yyvsp[(3) - (5)].string), nullAtom), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch(CSSSelector::Set);
    ;}
    break;

  case 192:
#line 992 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(QualifiedName(nullAtom, (yyvsp[(3) - (9)].string), nullAtom), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch((yyvsp[(5) - (9)].match));
        (yyval.selector)->setValue((yyvsp[(7) - (9)].string));
    ;}
    break;

  case 193:
#line 998 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(parser->determineNameInNamespace((yyvsp[(3) - (6)].string), (yyvsp[(4) - (6)].string)), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch(CSSSelector::Set);
    ;}
    break;

  case 194:
#line 1003 "./CSSGrammar.y"
    {
        (yyval.selector) = new CSSParserSelector;
        (yyval.selector)->setAttribute(parser->determineNameInNamespace((yyvsp[(3) - (10)].string), (yyvsp[(4) - (10)].string)), parser->m_context.isHTMLDocument);
        (yyval.selector)->setMatch((yyvsp[(6) - (10)].match));
        (yyval.selector)->setValue((yyvsp[(8) - (10)].string));
    ;}
    break;

  case 195:
#line 1012 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Exact;
    ;}
    break;

  case 196:
#line 1015 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::List;
    ;}
    break;

  case 197:
#line 1018 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Hyphen;
    ;}
    break;

  case 198:
#line 1021 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Begin;
    ;}
    break;

  case 199:
#line 1024 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::End;
    ;}
    break;

  case 200:
#line 1027 "./CSSGrammar.y"
    {
        (yyval.match) = CSSSelector::Contain;
    ;}
    break;

  case 203:
#line 1035 "./CSSGrammar.y"
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

  case 204:
#line 1046 "./CSSGrammar.y"
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

  case 205:
#line 1055 "./CSSGrammar.y"
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

  case 206:
#line 1064 "./CSSGrammar.y"
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

  case 207:
#line 1077 "./CSSGrammar.y"
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

  case 208:
#line 1087 "./CSSGrammar.y"
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

  case 209:
#line 1097 "./CSSGrammar.y"
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

  case 210:
#line 1116 "./CSSGrammar.y"
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

  case 211:
#line 1134 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 213:
#line 1136 "./CSSGrammar.y"
    { (yyval.boolean) = (yyvsp[(1) - (2)].boolean) || (yyvsp[(2) - (2)].boolean); ;}
    break;

  case 215:
#line 1138 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 217:
#line 1143 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = (yyvsp[(1) - (3)].boolean);
    ;}
    break;

  case 218:
#line 1147 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = false;
    ;}
    break;

  case 219:
#line 1151 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = (yyvsp[(1) - (4)].boolean);
        if ((yyvsp[(2) - (4)].boolean))
            (yyval.boolean) = (yyvsp[(2) - (4)].boolean);
    ;}
    break;

  case 220:
#line 1157 "./CSSGrammar.y"
    {
        parser->markPropertyStart();
        (yyval.boolean) = (yyvsp[(1) - (4)].boolean);
    ;}
    break;

  case 221:
#line 1164 "./CSSGrammar.y"
    {
        parser->syntaxError((yyvsp[(2) - (3)].location), CSSParser::PropertyDeclarationError);
    ;}
    break;

  case 222:
#line 1170 "./CSSGrammar.y"
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

  case 223:
#line 1186 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 224:
#line 1187 "./CSSGrammar.y"
    {

        parser->markPropertyEnd(false, false);
        delete (yyvsp[(4) - (6)].valueList);
        (yyval.boolean) = false;
    ;}
    break;

  case 225:
#line 1193 "./CSSGrammar.y"
    {

        (yyval.boolean) = false;
    ;}
    break;

  case 226:
#line 1197 "./CSSGrammar.y"
    {

        parser->markPropertyEnd(false, false);
        (yyval.boolean) = false;
    ;}
    break;

  case 227:
#line 1204 "./CSSGrammar.y"
    { parser->syntaxError((yyvsp[(2) - (3)].location)); ;}
    break;

  case 228:
#line 1206 "./CSSGrammar.y"
    { (yyval.id) = cssPropertyID((yyvsp[(1) - (2)].string)); ;}
    break;

  case 229:
#line 1208 "./CSSGrammar.y"
    { (yyval.boolean) = true; ;}
    break;

  case 230:
#line 1208 "./CSSGrammar.y"
    { (yyval.boolean) = false; ;}
    break;

  case 232:
#line 1210 "./CSSGrammar.y"
    { (yyval.valueList) = nullptr; delete (yyvsp[(1) - (2)].valueList); ;}
    break;

  case 233:
#line 1213 "./CSSGrammar.y"
    {
        (yyval.valueList) = new CSSParserValueList;
        (yyval.valueList)->addValue((yyvsp[(1) - (1)].value));
    ;}
    break;

  case 234:
#line 1217 "./CSSGrammar.y"
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

  case 236:
#line 1236 "./CSSGrammar.y"
    { (yyval.character) = '/'; ;}
    break;

  case 237:
#line 1236 "./CSSGrammar.y"
    { (yyval.character) = ','; ;}
    break;

  case 238:
#line 1236 "./CSSGrammar.y"
    { (yyval.character) = 0; ;}
    break;

  case 240:
#line 1240 "./CSSGrammar.y"
    { (yyval.value) = (yyvsp[(2) - (3)].value); (yyval.value).fValue *= (yyvsp[(1) - (3)].integer); ;}
    break;

  case 241:
#line 1241 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_STRING; ;}
    break;

  case 242:
#line 1242 "./CSSGrammar.y"
    {
      (yyval.value).id = cssValueKeywordID((yyvsp[(1) - (2)].string));
      (yyval.value).unit = CSSPrimitiveValue::CSS_IDENT;
      (yyval.value).string = (yyvsp[(1) - (2)].string);
  ;}
    break;

  case 243:
#line 1248 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_DIMENSION; ;}
    break;

  case 244:
#line 1249 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(2) - (3)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_DIMENSION; ;}
    break;

  case 245:
#line 1250 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_URI; ;}
    break;

  case 246:
#line 1251 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_UNICODE_RANGE; ;}
    break;

  case 247:
#line 1252 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = (yyvsp[(1) - (2)].string); (yyval.value).unit = CSSPrimitiveValue::CSS_PARSER_HEXCOLOR; ;}
    break;

  case 248:
#line 1253 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).string = CSSParserString(); (yyval.value).unit = CSSPrimitiveValue::CSS_PARSER_HEXCOLOR; ;}
    break;

  case 252:
#line 1258 "./CSSGrammar.y"
    {
      (yyval.value).id = CSSValueInvalid; (yyval.value).unit = 0;
  ;}
    break;

  case 253:
#line 1264 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = true; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER; ;}
    break;

  case 254:
#line 1265 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).isInt = false; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_NUMBER; ;}
    break;

  case 255:
#line 1266 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PERCENTAGE; ;}
    break;

  case 256:
#line 1267 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PX; ;}
    break;

  case 257:
#line 1268 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_CM; ;}
    break;

  case 258:
#line 1269 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_MM; ;}
    break;

  case 259:
#line 1270 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_IN; ;}
    break;

  case 260:
#line 1271 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PT; ;}
    break;

  case 261:
#line 1272 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_PC; ;}
    break;

  case 262:
#line 1273 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DEG; ;}
    break;

  case 263:
#line 1274 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_RAD; ;}
    break;

  case 264:
#line 1275 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_GRAD; ;}
    break;

  case 265:
#line 1276 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_TURN; ;}
    break;

  case 266:
#line 1277 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_MS; ;}
    break;

  case 267:
#line 1278 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_S; ;}
    break;

  case 268:
#line 1279 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_HZ; ;}
    break;

  case 269:
#line 1280 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_KHZ; ;}
    break;

  case 270:
#line 1281 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_EMS; ;}
    break;

  case 271:
#line 1282 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSParserValue::Q_EMS; ;}
    break;

  case 272:
#line 1283 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_EXS; ;}
    break;

  case 273:
#line 1284 "./CSSGrammar.y"
    {
      (yyval.value).id = CSSValueInvalid;
      (yyval.value).fValue = (yyvsp[(1) - (1)].number);
      (yyval.value).unit = CSSPrimitiveValue::CSS_REMS;
      if (parser->m_styleSheet)
          parser->m_styleSheet->parserSetUsesRemUnits(true);
  ;}
    break;

  case 274:
#line 1291 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_CHS; ;}
    break;

  case 275:
#line 1292 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VW; ;}
    break;

  case 276:
#line 1293 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VH; ;}
    break;

  case 277:
#line 1294 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VMIN; ;}
    break;

  case 278:
#line 1295 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_VMAX; ;}
    break;

  case 279:
#line 1296 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DPPX; ;}
    break;

  case 280:
#line 1297 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DPI; ;}
    break;

  case 281:
#line 1298 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_DPCM; ;}
    break;

  case 282:
#line 1299 "./CSSGrammar.y"
    { (yyval.value).id = CSSValueInvalid; (yyval.value).fValue = (yyvsp[(1) - (1)].number); (yyval.value).unit = CSSPrimitiveValue::CSS_FR; ;}
    break;

  case 283:
#line 1303 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (4)].string);
        f->args = adoptPtr((yyvsp[(3) - (4)].valueList));
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 284:
#line 1311 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (3)].string);
        f->args = adoptPtr(new CSSParserValueList);
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 285:
#line 1319 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (4)].string);
        f->args = nullptr;
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
  ;}
    break;

  case 287:
#line 1331 "./CSSGrammar.y"
    { (yyval.value) = (yyvsp[(2) - (2)].value); (yyval.value).fValue *= (yyvsp[(1) - (2)].integer); ;}
    break;

  case 288:
#line 1340 "./CSSGrammar.y"
    {
        (yyval.character) = '+';
    ;}
    break;

  case 289:
#line 1343 "./CSSGrammar.y"
    {
        (yyval.character) = '-';
    ;}
    break;

  case 290:
#line 1346 "./CSSGrammar.y"
    {
        (yyval.character) = '*';
    ;}
    break;

  case 291:
#line 1349 "./CSSGrammar.y"
    {
        (yyval.character) = '/';
    ;}
    break;

  case 294:
#line 1357 "./CSSGrammar.y"
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

  case 296:
#line 1372 "./CSSGrammar.y"
    { (yyval.valueList) = nullptr; delete (yyvsp[(1) - (2)].valueList); ;}
    break;

  case 297:
#line 1375 "./CSSGrammar.y"
    {
        (yyval.valueList) = new CSSParserValueList;
        (yyval.valueList)->addValue((yyvsp[(1) - (1)].value));
    ;}
    break;

  case 298:
#line 1379 "./CSSGrammar.y"
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

  case 299:
#line 1395 "./CSSGrammar.y"
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

  case 302:
#line 1414 "./CSSGrammar.y"
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

  case 303:
#line 1431 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (5)].string);
        f->args = adoptPtr((yyvsp[(3) - (5)].valueList));
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 304:
#line 1439 "./CSSGrammar.y"
    {
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = 0;
        YYERROR;
    ;}
    break;

  case 307:
#line 1450 "./CSSGrammar.y"
    {
        CSSParserFunction* f = new CSSParserFunction;
        f->name = (yyvsp[(1) - (4)].string);
        f->args = adoptPtr((yyvsp[(3) - (4)].valueList));
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = CSSParserValue::Function;
        (yyval.value).function = f;
    ;}
    break;

  case 308:
#line 1458 "./CSSGrammar.y"
    {
        (yyval.value).id = CSSValueInvalid;
        (yyval.value).unit = 0;
        YYERROR;
    ;}
    break;

  case 314:
#line 1473 "./CSSGrammar.y"
    { parser->invalidBlockHit(); ;}
    break;

  case 325:
#line 1486 "./CSSGrammar.y"
    { (yyval.location) = parser->currentLocation(); ;}
    break;


/* Line 1267 of yacc.c.  */
#line 4451 "./CSSGrammar.cpp"
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


#line 1496 "./CSSGrammar.y"


