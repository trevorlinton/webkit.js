#include <emscripten.h>

#include "config.h"
#include "Page.h"
#include "Frame.h"
#include "MainFrame.h"
#include "ChromeClientJS.h"
#include "FrameLoaderClientJS.h"

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

#include "EmptyClients.h"

using namespace WebCore;

static std::unique_ptr<WebCore::Page> page;

int main(int argc, char **argv) {
  EM_ASM(
         console.log("WebKit: main();");
         );

  Page::PageClients pageClients;
  fillWithEmptyClients(pageClients);
  EM_ASM(
         console.log("WebKit: fillWithEmptyClients();");
         );
  pageClients.chromeClient = ChromeClientJS::createClient();
  //pageClients.loaderClientForMainFrame = FrameLoaderClientJS::createClient();

  page = std::make_unique<Page>(pageClients);
  EM_ASM(
         console.log("WebKit: settingsInitialized;");
         );
  page->settings().setMediaEnabled(false);
  page->settings().setScriptEnabled(false);
  page->settings().setPluginsEnabled(false);

  Frame& frame = page->mainFrame();
  frame.setView(FrameView::create(frame));
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
  loader.activeDocumentLoader()->writer().begin(URL()); // create the empty document
  loader.activeDocumentLoader()->writer().addData(argv[0], strlen(argv[0])); // Go ahead and render whatever is in argv[0].
  loader.activeDocumentLoader()->writer().end();
  EM_ASM(
         console.log("WebKit: finished;");
         );

}