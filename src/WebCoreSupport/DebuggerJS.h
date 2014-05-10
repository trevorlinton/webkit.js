
#ifndef webkit_Debugger_h
#define webkit_Debugger_h

#ifdef notImplemented
#undef notImplemented
#endif

#ifdef DEBUG
#define		webkitTrace() \
fprintf(stdout, "WebKit Trace: %s[%i] %s\n", __FILE__, __LINE__, __PRETTY_FUNCTION__)
#define notImplemented() \
fprintf(stdout, "WebKit Not Implemented: %s[%i] %s\n", __FILE__, __LINE__, __PRETTY_FUNCTION__)
#else
#define webkitTrace() \
  /* Do nothing */;
#define notImplemented() \
/* Do nothing */;
#endif

#endif
