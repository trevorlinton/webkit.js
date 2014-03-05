#include <emscripten.h>

#include "config.h"
#include "Page.h"
#include "Frame.h"
#include "MainFrame.h"
#include "ChromeClientJS.h"
#include "FrameLoaderClientJS.h"
#include "WebKitJSStrategies.h"

#include "Chrome.h"
#include "DocumentLoader.h"
#include "ElementIterator.h"
#include "FrameView.h"
#include "ImageBuffer.h"
#include "ImageObserver.h"
#include "IntRect.h"
#include "MainFrame.h"
#include "RenderStyle.h"
#include "Settings.h"
#include "RuntimeEnabledFeaturesJS.h"

#include "EmptyClients.h"

using namespace WebCore;

static std::unique_ptr<WebCore::Page> page;
namespace WebCore {
static RuntimeEnabledFeatures* features;
}

int main(int argc, char **argv) {

  fprintf(stderr,"WebKit: main();\n");

  WebKitJSStrategies::initialize();

  fprintf(stderr,"WebKit: setPlatformStrategies();\n");

  Page::PageClients pageClients;
  fillWithEmptyClients(pageClients);
  fprintf(stderr,"WebKit: fillWithEmptyClients();\n");
  
  pageClients.chromeClient = ChromeClientJS::createClient();
  pageClients.loaderClientForMainFrame = FrameLoaderClientJS::createClient();

  fprintf(stderr,"WebKit: Page::Page();\n");

  page = std::make_unique<Page>(pageClients);
  fprintf(stderr,"WebKit: settingsInitialized;\n");

  page->settings().setMediaEnabled(false);
  page->settings().setScriptEnabled(false);
  page->settings().setPluginsEnabled(false);
  page->settings().setMinimumLogicalFontSize(9);
  page->settings().setDefaultFontSize(10);
  page->settings().setDefaultFixedFontSize(13);
  page->settings().setDownloadableBinaryFontsEnabled(false);
  page->settings().setAcceleratedDrawingEnabled(true);
  page->settings().setScreenFontSubstitutionEnabled(false);
  page->settings().setStandardFontFamily("Helvetica");
  page->settings().setMinimumFontSize(6);
  page->setGroupName("Main");


  Frame& frame = page->mainFrame();
  fprintf(stderr,"WebKit: got main frame;\n");

  frame.setView(FrameView::create(frame));
  fprintf(stderr,"WebKit: creating frame view;\n");

  frame.init();
  fprintf(stderr,"WebKit: frameInitialized;\n");

  FrameLoader& loader = frame.loader();
  loader.forceSandboxFlags(SandboxAll);

  frame.view()->setCanHaveScrollbars(false); // ignore view info.
  frame.view()->setTransparent(true);

  ASSERT(loader.activeDocumentLoader()); // DocumentLoader should have been created by frame->init().
  fprintf(stderr,"WebKit: frameLoaderInitialized;\n");

  loader.activeDocumentLoader()->writer().setMIMEType("text/html");
  fprintf(stderr,"WebKit: setMimeType();\n");

  loader.activeDocumentLoader()->writer().begin(URL()); // create the empty document
  fprintf(stderr,"WebKit: begin(URL);\n");

  loader.activeDocumentLoader()->writer().addData(argv[0], strlen(argv[0])); // Go ahead and render whatever is in argv[0].
  fprintf(stderr,"WebKit: added data();\n");

  loader.activeDocumentLoader()->writer().end();
  fprintf(stderr,"WebKit: finished;\n");

}