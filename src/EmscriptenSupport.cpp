/*
 * Copyright (C) 2014 True Interactions. BSD-style License
 */

/*
 * nextafter, nextafterf implementations are taken from
 * s_nextafter.c 1.3 and fdlibm.h 5.1 09/24/1993
 * with the following copyright:
 *
 * ====================================================
 * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
 *
 * Developed at SunPro, a Sun Microsystems, Inc. business.
 * Permission to use, copy, modify, and distribute this
 * software is freely granted, provided that this notice
 * is preserved.
 * ====================================================
 */

/* Set a double from two 32 bit ints.  */
typedef union
{
  double value;
  struct
  {
    u_int32_t lsw;
    u_int32_t msw;
  } parts;
  uint64_t word;
} ieee_double_shape_type;

typedef union
{
  float value;
  u_int32_t word;
} ieee_float_shape_type;

#define GET_FLOAT_WORD(i,d)					\
do {								\
ieee_float_shape_type gf_u;					\
gf_u.value = (d);						\
(i) = gf_u.word;						\
} while (0)


#define SET_FLOAT_WORD(d,i)					\
do {								\
ieee_float_shape_type sf_u;					\
sf_u.word = (i);						\
(d) = sf_u.value;						\
} while (0)

#define INSERT_WORDS(d,ix0,ix1)					\
do {								\
ieee_double_shape_type iw_u;					\
iw_u.parts.msw = (ix0);					\
iw_u.parts.lsw = (ix1);					\
(d) = iw_u.value;						\
} while (0)


#define EXTRACT_WORDS(ix0,ix1,d)				\
do {								\
ieee_double_shape_type ew_u;					\
ew_u.value = (d);						\
(ix0) = ew_u.parts.msw;					\
(ix1) = ew_u.parts.lsw;					\
} while (0)
/*
#define math_opt_barrier(x) \
({ __typeof(x) __x;					\
__asm ("" : "=t" (__x) : "0" (x));			\
__x; })

#define math_force_eval(x) \
do							\
{							\
if (sizeof (x) <= sizeof (double))			\
__asm __volatile ("" : : "m" (x));		\
else						\
__asm __volatile ("" : : "f" (x));		\
}							\
while (0)
*/
#define FLT_EVAL_METHOD 0 // float and double are the same type.

#ifdef __cplusplus
  extern "C" {
#endif

double nextafter(double x, double y) {
	int32_t hx,hy,ix,iy;
	u_int32_t lx,ly;

	EXTRACT_WORDS(hx,lx,x);
	EXTRACT_WORDS(hy,ly,y);
	ix = hx&0x7fffffff;		/* |x| */
	iy = hy&0x7fffffff;		/* |y| */

	if(((ix>=0x7ff00000)&&((ix-0x7ff00000)|lx)!=0) ||   /* x is nan */
	   ((iy>=0x7ff00000)&&((iy-0x7ff00000)|ly)!=0))     /* y is nan */
    return x+y;
	if(x==y) return y;		/* x=y, return y */
	if((ix|lx)==0) {			/* x == 0 */
    double u;
    INSERT_WORDS(x,hy&0x80000000,1);	/* return +-minsubnormal */
    //u = math_opt_barrier (x);
    //u = u*u;
    //math_force_eval (u);		/* raise underflow flag */
    return x;
	}
	if(hx>=0) {				/* x > 0 */
    if(hx>hy||((hx==hy)&&(lx>ly))) {	/* x > y, x -= ulp */
      if(lx==0) hx -= 1;
      lx -= 1;
    } else {				/* x < y, x += ulp */
      lx += 1;
      if(lx==0) hx += 1;
    }
	} else {				/* x < 0 */
    if(hy>=0||hx>hy||((hx==hy)&&(lx>ly))){/* x < y, x -= ulp */
      if(lx==0) hx -= 1;
      lx -= 1;
    } else {				/* x > y, x += ulp */
      lx += 1;
      if(lx==0) hx += 1;
    }
	}
	hy = hx&0x7ff00000;
	if(hy>=0x7ff00000) {
	  x = x+x;	/* overflow  */
	  //if (FLT_EVAL_METHOD != 0 && FLT_EVAL_METHOD != 1)
	  //  asm ("" : "+m"(x));
	  return x;	/* overflow  */
	}
	//if(hy<0x00100000) {
    //double u = x*x;			/* underflow */
    //math_force_eval (u);		/* raise underflow flag */
	//}
	INSERT_WORDS(x,hx,lx);
	return x;
}

float nextafterf(float x, float y)
{
	int32_t hx,hy,ix,iy;

	GET_FLOAT_WORD(hx,x);
	GET_FLOAT_WORD(hy,y);
	ix = hx&0x7fffffff;		/* |x| */
	iy = hy&0x7fffffff;		/* |y| */

	if((ix>0x7f800000) ||   /* x is nan */
	   (iy>0x7f800000))     /* y is nan */
    return x+y;
	if(x==y) return y;		/* x=y, return y */
	if(ix==0) {				/* x == 0 */
    //float u;
    SET_FLOAT_WORD(x,(hy&0x80000000)|1);/* return +-minsubnormal */
    //u = math_opt_barrier (x);
    //u = u*u;
    //math_force_eval (u);		/* raise underflow flag */
    return x;
	}
	if(hx>=0) {				/* x > 0 */
    if(hx>hy) {				/* x > y, x -= ulp */
      hx -= 1;
    } else {				/* x < y, x += ulp */
      hx += 1;
    }
	} else {				/* x < 0 */
    if(hy>=0||hx>hy){			/* x < y, x -= ulp */
      hx -= 1;
    } else {				/* x > y, x += ulp */
      hx += 1;
    }
	}
	hy = hx&0x7f800000;
	if(hy>=0x7f800000) {
	  x = x+x;	/* overflow  */
	  //if (FLT_EVAL_METHOD != 0)
	  //  asm ("" : "+m"(x));
	  return x;	/* overflow  */
	}
	//if(hy<0x00800000) {
  //  float u = x*x;			/* underflow */
  //  math_force_eval (u);		/* raise underflow flag */
	//}
	SET_FLOAT_WORD(x,hx);
	return x;
}
#ifdef __cplusplus
}
#endif


//scandir
//getsockopt
//sigsetjmp
//siglongjmp
//getifaddrs
//freeifaddrs
/*
 warning: unresolved symbol: emscripten_glDeleteObjectARB
 warning: unresolved symbol: emscripten_glGetObjectParameterivARB
 warning: unresolved symbol: emscripten_glGetInfoLogARB
 warning: unresolved symbol: emscripten_glBindProgramARB
 warning: unresolved symbol: emscripten_glGetPointerv
 warning: unresolved symbol: emscripten_glDrawRangeElements
 warning: unresolved symbol: emscripten_glEnableClientState
 warning: unresolved symbol: emscripten_glTexCoordPointer
 warning: unresolved symbol: emscripten_glNormalPointer
 warning: unresolved symbol: emscripten_glColorPointer
 warning: unresolved symbol: emscripten_glClientActiveTexture
 warning: unresolved symbol: emscripten_glLoadMatrixf
 warning: unresolved symbol: emscripten_glFrustum
 warning: unresolved symbol: emscripten_glRotatef
*/