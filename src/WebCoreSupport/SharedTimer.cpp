#include <emscripten.h>

#include "config.h"
#include "DebuggerJS.h"
#include <wtf/Forward.h>
#include <wtf/HashMap.h>
#include <wtf/PassRefPtr.h>
#include <wtf/RefCounted.h>
#include <wtf/RefPtr.h>

namespace WebCore {
  static bool timerActive;
  static unsigned timerInterval;
  static void (*sharedTimerFiredFunction)();

  void sharedTimerRun(void *args) {
		webkitTrace();
    if(timerActive) {
      sharedTimerFiredFunction();
      //emscripten_async_call(sharedTimerRun, args, timerInterval);
    }
  }

  void stopSharedTimer()
  {
		webkitTrace();
    if (timerActive) {
      timerActive = false;
    }
  }

  void setSharedTimerFiredFunction(void (*f)())
  {
		webkitTrace();
    sharedTimerFiredFunction = f;
    if(timerInterval && timerInterval > 0) {
      timerActive = true;
    }
  }

  void setSharedTimerFireInterval(double interval)
  {
		webkitTrace();
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