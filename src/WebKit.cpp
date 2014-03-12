/*
 * Copyright (C) 2014 True Interactions. BSD-style License
 */

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
#include <WTF/PassRef.h>
#include "Frame.h"
#include "GraphicsContext.h"

#include "EmptyClients.h"

#include "EGL/egl.h"
#include "cairo.h"
#include "cairo-gl.h"
#include "PlatformContextCairo.h"

using namespace WebCore;
using namespace WTF;

static std::unique_ptr<WebCore::Page> page;
static Page::PageClients pageClients;
static cairo_surface_t* surf = NULL;
static cairo_t* cr;
static unsigned char* surf_data;
static GraphicsContext *g_context;

namespace WebCore {
static RuntimeEnabledFeatures* features;
}

void tick() {
#if USE(TILED_BACKING_STORE)
	//if(page->mainFrame().tiledBackingStore()) {
	//	page->mainFrame().tiledBackingStorePaintBegin();
	//	page->mainFrame().tiledBackingStorePaint(g_context, IntRect(0,0,1024,768));
	//}
#endif
}

int main(int argc, char **argv) {
  if(argc < 1) {
    fprintf(stderr, "WebKit: Nothing to render.\n");
    return -1;
  }

	//cairo.h
	//cairo-gl.h
	// CAIRO DEVICE? EGL?....
	//EGLDisplay display = eglGetCurrentDisplay();
	//EGLContext context = eglGetCurrentContext();
	//EGLSurface surface = eglGetCurrentSurface(0);
	//cairo_public cairo_device_t *c_device = cairo_egl_device_create(display, context);
	//cairo_public cairo_surface_t *c_surface = cairo_gl_surface_create_for_egl(c_device, surface, 1024, 768);
	//cairo_public cairo_surface_t * cairo_gl_surface = cairo_gl_surface_create (cairo_device_t *device,);
	//cairo_public cairo_t *cairo_handle = cairo_create (cairo_surface_t *target);
	//
	//
	/*
#if USE(TILED_BACKING_STORE)
	void *p=0;
	if (WebCore::TiledBackingStore* backingStore = page->mainFrame().tiledBackingStore()) {
		// FIXME: We should set the backing store viewport earlier than in paint
		//backingStore->adjustVisibleRect();
		// QWebFrame::render is a public API, bypass it for tiled rendering so behavior does not need to change.
		WebCore::GraphicsContext context(p);
		page->mainFrame().tiledBackingStorePaint(&context, IntRect(1024,768));
		return;
	}
#endif
	*/

	//
	//static cairo_bool_t _cairo_surface_is_gl (cairo_surface_t *surface)
	//cr = create_cairo_context (1024, 768, 4, &surf, &surf_data);
	//g_context = new GraphicsContext(cr);

	fprintf(stderr,"WebKit: Rendering: %s\n", argv[1]);
  fprintf(stderr,"WebKit: main();\n");

  WebKitJSStrategies::initialize();

  fprintf(stderr,"WebKit: setPlatformStrategies();\n");

  fillWithEmptyClients(pageClients);
  fprintf(stderr,"WebKit: fillWithEmptyClients();\n");
  
  pageClients.chromeClient = ChromeClientJS::createClient();
  pageClients.loaderClientForMainFrame = FrameLoaderClientJS::createClient();

  fprintf(stderr,"WebKit: Page::Page();\n");

  page = std::make_unique<Page>(pageClients);
  fprintf(stderr,"WebKit: settingsInitialized;\n");
	//page->settings().forceCompositingMode();
  page->settings().setMediaEnabled(false);
  page->settings().setScriptEnabled(false);
  page->settings().setPluginsEnabled(false);
  page->settings().setMinimumLogicalFontSize(9);
  page->settings().setDefaultFontSize(10);
  page->settings().setDefaultFixedFontSize(13);
  page->settings().setDownloadableBinaryFontsEnabled(false);
  //page->settings().setAcceleratedDrawingEnabled(true);
  page->settings().setScreenFontSubstitutionEnabled(false);
  page->settings().setStandardFontFamily("Helvetica");
  page->settings().setMinimumFontSize(6);
	//page->settings().setAcceleratedCompositingEnabled(true);
	page->settings().setJavaEnabled(false);
	//page->settings().setTiledBackingStoreEnabled(true);
	page->settings().setUsePreHTML5ParserQuirks(true);
	page->settings().setWebGLEnabled(true);
	page->settings().setWebSecurityEnabled(false);

  page->setGroupName("Main");

	//unsigned layoutMilestones = DidFirstLayout | DidFirstVisuallyNonEmptyLayout;
	//page->addLayoutMilestones(static_cast<LayoutMilestones>(layoutMilestones));
	page->setIsVisible(true, true);
	page->setIsInWindow(true);
	page->setIsPainting(true);
	Frame& frame = page->mainFrame();
  fprintf(stderr,"WebKit: got main frame;\n");

	((FrameLoaderClientJS *)pageClients.loaderClientForMainFrame)->setFrame(&frame);

  //rame.setView(FrameView::create(frame));
  //fprintf(stderr,"WebKit: creating frame view;\n");

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

  loader.activeDocumentLoader()->writer().addData(argv[1], strlen(argv[1])); // Go ahead and render whatever is in argv[0].
  fprintf(stderr,"WebKit: added data();\n");

  loader.activeDocumentLoader()->writer().end();
  fprintf(stderr,"WebKit: finished;\n");

	emscripten_set_main_loop(&tick, 60, true);


}