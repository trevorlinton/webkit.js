#ifndef __all__FrameJS__
#define __all__FrameJS__

#include "config.h"
#include <emscripten.h>
#include "Frame.h"

namespace WebCore {
class FrameJS : Frame {
public:
  ~FrameJS() OVERRIDE;
};
}
#endif
