//
//  DocumentLoader.cpp
//  all
//
//  Created by Trevor Linton on 2/18/14.
//
//

#include "config.h"
#include <emscripten.h>
#include "DebuggerJS.h"
#include "DocumentLoaderJS.h"

namespace WebCore {

  DocumentLoaderJS::~DocumentLoaderJS() {
    notImplemented();
  }
/*
  static PassRefPtr<DocumentLoader> create(const ResourceRequest& request, const SubstituteData& data) {
    
  }*/

  void DocumentLoaderJS::attachToFrame() {
    notImplemented();
  }

  void DocumentLoaderJS::detachFromFrame() {
    notImplemented();
  }

  void DocumentLoaderJS::redirectReceived(CachedResource* c_resource, ResourceRequest& r_request, const ResourceResponse& r_response) {
    notImplemented();
  }

  void DocumentLoaderJS::responseReceived(CachedResource* c_resource, const ResourceResponse& r_response)  {
    notImplemented();
  }

  void DocumentLoaderJS::dataReceived(CachedResource* c_resource, const char* data, int length)  {
    notImplemented();
  }

  void DocumentLoaderJS::notifyFinished(CachedResource* c_resource)  {
    notImplemented();
  }


};