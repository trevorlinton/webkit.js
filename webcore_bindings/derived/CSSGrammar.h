#ifndef CSSGRAMMAR_H
#define CSSGRAMMAR_H
/* A Bison parser, made by GNU Bison 2.3.  */

/* Skeleton interface for Bison's Yacc-like parsers in C

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
/* Line 1529 of yacc.c.  */
#line 282 "./CSSGrammar.hpp"
	YYSTYPE;
# define yystype YYSTYPE /* obsolescent; will be withdrawn */
# define YYSTYPE_IS_DECLARED 1
# define YYSTYPE_IS_TRIVIAL 1
#endif



#endif
