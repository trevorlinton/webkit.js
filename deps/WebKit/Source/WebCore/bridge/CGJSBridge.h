// (c) 2014 True Interactions
//
//

#ifndef WebCore_CGJSBridge_h
#define WebCore_CGJSBridge_h
#if PLATFORM(JS)

// Simple types
typedef float CGFloat;
typedef float JSFloat;

typedef signed long CFIndex;
typedef signed long JSIndex;

struct JSPoint {
  JSFloat x;
  JSFloat y;
};

typedef struct JSPoint JSPoint;

// structured types
struct JSSize {
  JSFloat width;
  JSFloat height;
};

typedef struct JSSize JSSize;

struct JSRange {
  JSIndex location;
  JSIndex length;
};

typedef struct JSRange JSRange;

// Map back to CG
typedef JSPoint CGPoint;
typedef JSSize CGSize;
typedef JSRange CFRange;

#endif // PLATFORM(JS)
#endif
