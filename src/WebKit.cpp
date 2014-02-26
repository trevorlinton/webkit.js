#include "config.h"
#include "Page.h"
#include "Frame.h"
#include "MainFrame.h"
#include "ChromeClientJS.h"
#include "FrameLoaderClientJS.h"

using namespace WebCore;

static Page* page;

int main(int argc, char **argv) {
  Page::PageClients pageClients;
  pageClients.chromeClient = ChromeClientJS::createClient();
//  pageClients.editorClient = new WebKit::EditorClientJS();
//  pageClients.inspectorClient = new WebKit::InspectorClientJS();
  pageClients.loaderClientForMainFrame = FrameLoaderClientJS::createClient();

  page = new Page(pageClients);
  MainFrame& frame = page->mainFrame();
  
}