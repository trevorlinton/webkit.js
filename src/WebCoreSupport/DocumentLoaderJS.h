
#ifndef all_DocumentLoaderJS_h
#define all_DocumentLoaderJS_h

#include "DocumentLoader.h"

namespace WebCore {
class DocumentLoaderJS : public WebCore::DocumentLoader {
public:
  ~DocumentLoaderJS() OVERRIDE;
  void attachToFrame() OVERRIDE;
  void detachFromFrame() OVERRIDE;
 // static PassRefPtr<DocumentLoader> create(const ResourceRequest& request, const SubstituteData& data);

private:
  void redirectReceived(CachedResource*, ResourceRequest&, const ResourceResponse&) OVERRIDE;
  void responseReceived(CachedResource*, const ResourceResponse&) OVERRIDE;
  void dataReceived(CachedResource*, const char* data, int length) OVERRIDE;
  void notifyFinished(CachedResource*) OVERRIDE;
};
}


#endif
