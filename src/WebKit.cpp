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
  EM_ASM(
         console.log("WebKit: main();");
         );
  WebKitJSStrategies::initialize();
  EM_ASM(
         console.log("WebKit: setPlatformStrategies();");
         );

  Page::PageClients pageClients;
  fillWithEmptyClients(pageClients);
  EM_ASM(
         console.log("WebKit: fillWithEmptyClients();");
         );
  pageClients.chromeClient = ChromeClientJS::createClient();
  pageClients.loaderClientForMainFrame = FrameLoaderClientJS::createClient();

  EM_ASM(
         console.log("WebKit: Page::Page();");
         );
  page = std::make_unique<Page>(pageClients);
  EM_ASM(
         console.log("WebKit: settingsInitialized;");
         );
  page->settings().setMediaEnabled(false);
  page->settings().setScriptEnabled(false);
  page->settings().setPluginsEnabled(false);

  Frame& frame = page->mainFrame();
  EM_ASM(
         console.log("WebKit: got main frame;");
         );
  frame.setView(FrameView::create(frame));
  EM_ASM(
         console.log("WebKit: creating frame view;");
         );
  frame.init();
  EM_ASM(
         console.log("WebKit: frameInitialized;");
         );
  FrameLoader& loader = frame.loader();
  loader.forceSandboxFlags(SandboxAll);

  frame.view()->setCanHaveScrollbars(false); // ignore view info.
  frame.view()->setTransparent(true);

  ASSERT(loader.activeDocumentLoader()); // DocumentLoader should have been created by frame->init().
  EM_ASM(
         console.log("WebKit: frameLoaderInitialized;");
         );
  loader.activeDocumentLoader()->writer().setMIMEType("text/html");
  EM_ASM(
         console.log("WebKit: setMimeType();");
         );
  loader.activeDocumentLoader()->writer().begin(URL()); // create the empty document
  EM_ASM(
         console.log("WebKit: begin(URL);");
         );
  loader.activeDocumentLoader()->writer().addData(argv[0], strlen(argv[0])); // Go ahead and render whatever is in argv[0].
  EM_ASM(
         console.log("WebKit: added data();");
         );
  loader.activeDocumentLoader()->writer().end();
  EM_ASM(
         console.log("WebKit: finished;");
         );

}