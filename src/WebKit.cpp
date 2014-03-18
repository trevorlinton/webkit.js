/*
 * Copyright (C) 2014 True Interactions. BSD-style License
 */

#include <emscripten.h>
#include <cstdio>

#include "config.h"
#include "WebView.h"
#include "Page.h"
#include "Frame.h"
#include "MainFrame.h"
#include "ChromeClientJS.h"
#include "FrameLoaderClientJS.h"
#include "WebKitJSStrategies.h"
#include "DebuggerJS.h"
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
#include "GraphicsContext.h"

#include "EmptyClients.h"

#include "EGL/egl.h"
#include "cairo.h"
#include "cairo-gl.h"
#include "PlatformContextCairo.h"

using namespace WebCore;
using namespace WTF;

namespace WebCore {
	static RuntimeEnabledFeatures* features;
}

namespace WebKit {
	WebView::WebView()
	{
		fillWithEmptyClients(m_pageClients);
	}

	bool WebView::initialize() {
		webkitTrace();

		cairo_surface_t *surface = cairo_image_surface_create(CAIRO_FORMAT_ARGB32, 1024, 768);
		cairo_status_t surface_error = cairo_surface_status(surface);
		if(surface_error != CAIRO_STATUS_SUCCESS) {
			fprintf(stderr, "WebKit: FATAL: Cannot create surface:\n%s\n",cairo_status_to_string(surface_error));
			abort();
		}
		cairo_t *graphics = cairo_create(surface);
		context = new GraphicsContext(graphics);

		WebKitJSStrategies::initialize();
		m_pageClients.chromeClient = WebCore::ChromeClientJS::createClient(this);
		m_pageClients.loaderClientForMainFrame = WebCore::FrameLoaderClientJS::createClient();
		m_page = std::make_unique<WebCore::Page>(m_pageClients);

		//m_page->settings().forceCompositingMode();
		m_page->settings().setMediaEnabled(false);
		m_page->settings().setScriptEnabled(false);
		m_page->settings().setPluginsEnabled(false);
		m_page->settings().setMinimumLogicalFontSize(9);
		m_page->settings().setDefaultFontSize(10);
		m_page->settings().setDefaultFixedFontSize(13);
		m_page->settings().setDownloadableBinaryFontsEnabled(false);
		m_page->settings().setMockScrollbarsEnabled(true);
		//m_page->settings().setAcceleratedDrawingEnabled(true);
		m_page->settings().setScreenFontSubstitutionEnabled(true);
		m_page->settings().setStandardFontFamily("Liberation");
		m_page->settings().setMinimumFontSize(6);
		//m_page->settings().setAcceleratedCompositingEnabled(true);
		m_page->settings().setJavaEnabled(false);
		//m_page->settings().setTiledBackingStoreEnabled(true);
		m_page->settings().setUsePreHTML5ParserQuirks(true);
		m_page->settings().setWebGLEnabled(true);
		m_page->settings().setWebSecurityEnabled(false);
		m_page->setGroupName(L"Main");

		WebCore::MainFrame& frame = m_page->mainFrame();
		ASSERT(frame.isMainFrame());
		((WebCore::FrameLoaderClientJS *)m_pageClients.loaderClientForMainFrame)->setFrame(&frame);

		m_page->setIsVisible(true, true);
		m_page->setIsInWindow(true);
		//m_page->setIsPainting(true);

		frame.init();

		frame.view()->setCanHaveScrollbars(true);
		frame.view()->setTransparent(true);

		if(m_page)
			return true;
		else
			return false;
	}
	void WebView::tictoc() {
		webkitTrace();
	}

	void WebView::setUrl(char *) {
		webkitTrace();
	}
	char *WebView::getUrl() {
		webkitTrace();
		return NULL;
	}
	void WebView::setViewPortSize(FloatRect view) {
		m_viewPortSize = view;
	}
	FloatRect& WebView::getViewPortSize() {
		return m_viewPortSize;
	}
	void WebView::setHtml(char *data, int length) {
		webkitTrace();

		WebCore::MainFrame& frame = m_page->mainFrame();
		ASSERT(frame.isMainFrame());

		WebCore::FrameLoader& loader = frame.loader();
		ASSERT(loader.activeDocumentLoader());

		((WebCore::FrameLoaderClientJS *)m_pageClients.loaderClientForMainFrame)->setFrame(&frame);

		loader.activeDocumentLoader()->writer().begin(URL());
		loader.activeDocumentLoader()->writer().addData(data, length);
		loader.activeDocumentLoader()->writer().end();
	}
	char *WebView::getHtml() {
		webkitTrace();
		return NULL;
	}
	void WebView::render(GraphicsContext* context, IntRect clip) {
		webkitTrace();
	}

	cairo_status_t flushbitmap(void *ignored, const unsigned char* data, unsigned int length)
	{
		int out = std::fwrite(data, sizeof(char), length, stdout);
		return length == out ? CAIRO_STATUS_SUCCESS : CAIRO_STATUS_WRITE_ERROR;
	}

	BitmapImage *WebView::render(IntRect clip) {
		webkitTrace();
		if(clip.width()==0 || clip.height()==0) {
			fprintf(stderr, "WebKit: Not rendering; the clip is empty.\n");
			return NULL;
		}
		cairo_status_t c_error;

		FrameView *view = m_page->mainFrame().view();
		view->layout();
		view->paint(context, clip);

		cairo_surface_t *surface = cairo_get_target(context->platformContext()->cr());
		cairo_status_t surface_error = cairo_surface_status(surface);
		if(surface_error != CAIRO_STATUS_SUCCESS) {
			fprintf(stderr, "WebKit: FATAL: Cannot create surface:\n%s\n",cairo_status_to_string(surface_error));
			abort();
		}
		if((c_error = cairo_surface_write_to_png_stream(surface, flushbitmap, NULL)) != CAIRO_STATUS_SUCCESS) {
			fprintf(stderr, "WebKit: Error, cannot write new bitmap:\n%s\n",cairo_status_to_string(c_error));
		}
		//if((c_error = cairo_surface_write_to_png(surface, "img.png")) != CAIRO_STATUS_SUCCESS) {
		//	fprintf(stderr, "WebKit: Error, cannot write new bitmap:\n%s\n", cairo_status_to_string(c_error));
		//	abort();
		//}
		//cairo_surface_destroy(surface);


		return NULL;
	}

	void WebView::invalidate(WebCore::IntRect rect, int immediate) {
		webkitTrace();
		this->render(rect);
	}

	void WebView::resizeEvent(void *) {
		webkitTrace();
	}
	void WebView::paintEvent(void *) {
		webkitTrace();
	}
	void WebView::changeEvent(void *) {
		webkitTrace();
	}
	void WebView::mouseMoveEvent(void *) {
		webkitTrace();
	}
	void WebView::mousePressEvent(void *) {
		webkitTrace();
	}
	void WebView::mouseDoubleClickEvent(void *) {
		webkitTrace();
	}
	void WebView::mouseReleaseEvent(void *) {
		webkitTrace();
	}
	void WebView::contextMenuEvent(void *) {
		webkitTrace();
	}
	void WebView::wheelEvent(void *) {
		webkitTrace();
	}
	void WebView::keyPressEvent(void *) {
		webkitTrace();
	}
	void WebView::keyReleaseEvent(void *) {
		webkitTrace();
	}
	void WebView::dragEnterEvent(void *) {
		webkitTrace();
	}
	void WebView::dragLeaveEvent(void *) {
		webkitTrace();
	}
	void WebView::dragMoveEvent(void *) {
		webkitTrace();
	}
	void WebView::dropEvent(void *) {
		webkitTrace();
	}
	void WebView::focusInEvent(void *) {
		webkitTrace();
	}
	void WebView::focusOutEvent(void *) {
		webkitTrace();
	}
	void WebView::inputMethodEvent(void *) {
		webkitTrace();
	}
	bool WebView::focusNextPrevChild(bool next) {
		webkitTrace();
		return false;
	}

}

void tick() { }

int main(int argc, char **argv) {
  if(argc < 1) {
    fprintf(stderr, "WebKit: Nothing to render.\n");
    return -1;
  }
	WebKit::WebView* view = new WebKit::WebView();
	view->initialize();
	view->setViewPortSize(WebCore::FloatRect(0,0,1024,768));
	view->setHtml(argv[1], strlen(argv[1]));

	fprintf(stderr, "WebKit: Entering main loop.\n");
	emscripten_set_main_loop(&tick, 60, true);

	/** These are ticks and node.js main support. **/

	//void tick() {
	//#if USE(TILED_BACKING_STORE)
	//if(page->mainFrame().tiledBackingStore()) {
	//	page->mainFrame().tiledBackingStorePaintBegin();
	//	page->mainFrame().tiledBackingStorePaint(g_context, IntRect(0,0,1024,768));
	//}
	//#endif
	//}

	//void
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
	
	
	
}