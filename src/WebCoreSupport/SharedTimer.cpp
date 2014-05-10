#include <emscripten.h>

#include "config.h"
#include "DebuggerJS.h"
#include <wtf/Forward.h>
#include <wtf/HashMap.h>
#include <wtf/PassRefPtr.h>
#include <wtf/RefCounted.h>
#include <wtf/RefPtr.h>

namespace WebCore {
  static bool timerActive = false;
  static unsigned timerInterval = 0;
  static void (*sharedTimerFiredFunction)() = NULL;

  void sharedTimerRun(void *args) {
    if(timerActive && sharedTimerFiredFunction != NULL) {
      sharedTimerFiredFunction();
    }
  }

  void stopSharedTimer()
  {
    if (timerActive) {
      timerActive = false;
    }
  }

  void setSharedTimerFiredFunction(void (*f)())
  {
    sharedTimerFiredFunction = f;
    if(timerInterval && timerInterval > 0) {
      timerActive = true;
    }
  }

  void setSharedTimerFireInterval(double interval)
  {
    ASSERT(sharedTimerFiredFunction);

    unsigned intervalInMS;
    if (interval < 0)
      intervalInMS = 0;
    else {
      interval *= 1000;
      intervalInMS = (unsigned)interval;
    }

    stopSharedTimer();
    timerInterval = intervalInMS;
    timerActive = true;
		emscripten_async_call(sharedTimerRun, NULL, timerInterval);
  }
}