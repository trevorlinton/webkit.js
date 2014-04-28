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
#if USE(CAIRO)
#include "cairo.h"
#include "cairosdl.h"
#include "cairo-gl.h"
#include "PlatformContextCairo.h"
#elif USE(SKIA)
#endif
#include <SDL.h>

using namespace WebCore;
using namespace WTF;
/*
static void
unpremultiply_bgra (unsigned char* data,
										int            width,
										int            height,
										int            stride,
										unsigned char* retdata)
{
	unsigned char* end = data + stride * height;
	for (unsigned char* in = data, *out = retdata;
			 in < end;
			 in += stride, out += stride)
	{
		for (int i = 0; i < width; i ++) {
	    uint8_t *b = &out[4*i];
	    uint32_t pixel;
	    uint8_t  alpha;

	    memcpy (&pixel, &data[4*i], sizeof (uint32_t));
	    alpha = pixel & 0xff;
	    if (alpha == 0) {
				b[0] = b[1] = b[2] = b[3] = 0;
	    } else {
				b[0] = (((pixel >> 24) & 0xff) * 255 + alpha / 2) / alpha;
				b[1] = (((pixel >> 16) & 0xff) * 255 + alpha / 2) / alpha;
				b[2] = (((pixel >>  8) & 0xff) * 255 + alpha / 2) / alpha;
				b[3] = alpha;
	    }
		}
	}
}
*/
#define RED_OFFSET 0
#define GREEN_OFFSET 1
#define BLUE_OFFSET 2
#define ALPHA_OFFSET 3

// TODO: We want this gone, cairo uses a premultiplied format that's opposite
// of what SDL and subsequently a canvas wants, this causes unnecessary flipping
// of channels and going through each bitblt, if cairo or canvas can be coaxed to
// work together we can remove this code and there will be celebrations.
static void unpremultiply_swap_rb(unsigned char* data,
																	int width,
																	int height,
																	int stride,
																	SDL_Rect *rect)
{
	uint8_t buf;
	for(int col=0; col < width; col++) {
		for(int row=0; row < height; row++) {
			if(col >= rect->x && col < rect->x+rect->w &&
				 row >= rect->y && row < rect->y+rect->h)
			{
				int array_pos = (col + row * width) * stride;
				buf = data[array_pos + BLUE_OFFSET];
				data[array_pos + BLUE_OFFSET] = data[array_pos + RED_OFFSET];
				data[array_pos + RED_OFFSET] = buf;
			}
		}
	}
	/*
	Arithematic pointer math seems to run a muck on emscripten, 
	this may be more altruistic bitflip, but causes undefined behavior.
	unsigned char* end = data + ((rect->x + rect->w) + (rect->y + rect->h)*width) * stride;
	unsigned char* in = data + (rect->x + rect->y * width) * stride;

	fprintf(stderr, "Remapping: start: %i, end %i, diff: %i\n",(int)in,(int)end,(int)(end-in));
	uint8_t buf;
	for (;
			 in < end;
			 in += stride)
	{
		if((in - data - rect->x) % (rect->w) == 0)	// if we're at the end of the rectangle
			in += (width - rect->w) * stride;					// jump to the next new row
		//if(in[ALPHA_OFFSET] != 0) {
		//	in[RED_OFFSET] = in[RED_OFFSET]/in[ALPHA_OFFSET];
		//	in[GREEN_OFFSET] = in[GREEN_OFFSET]/in[ALPHA_OFFSET];
		//	in[BLUE_OFFSET] = in[BLUE_OFFSET]/in[ALPHA_OFFSET];
		//}
		buf = in[BLUE_OFFSET];
		in[BLUE_OFFSET] = in[RED_OFFSET];
		in[RED_OFFSET] = buf;
	}
	 
	 */
}


namespace WebKit {

	WebView::WebView(int width, int height)
	{
		webkitTrace();

		// This must occur prior to anything else,
		// unless you like assertion failures.
		WebKitJSStrategies::initialize();

		m_private = new WebViewPrivate();
#if USE(ACCELERATED_COMPOSITING)
		m_private->sdl_screen = SDL_SetVideoMode(width, height, 32, SDL_HWSURFACE);
		if (!m_private->sdl_screen) {
			fprintf(stderr, "Couldn't set video mode: %s\n", SDL_GetError());
			SDL_Quit();
			exit(2);
		}
#endif
		m_private->transparent = false;

		Page::PageClients pageClients;

		fillWithEmptyClients(pageClients);
		pageClients.chromeClient = WebCore::ChromeClientJS::createClient(this);
    m_private->mainFrame = new WebCore::WebFrameJS(this);
		pageClients.loaderClientForMainFrame = WebCore::FrameLoaderClientJS::createClient(m_private->mainFrame);

		m_private->corePage = new Page(pageClients);

    m_private->corePage->setGroupName(L"webkit.js");

		m_private->corePage->settings().setMediaEnabled(false);
		m_private->corePage->settings().setScreenFontSubstitutionEnabled(true);
		m_private->corePage->settings().setWebSecurityEnabled(false);
		m_private->corePage->settings().setJavaEnabled(false);
		m_private->corePage->settings().setMockScrollbarsEnabled(true);
    m_private->corePage->settings().setLoadsImagesAutomatically(true);
    m_private->corePage->settings().setDefaultFixedFontSize(13);
    m_private->corePage->settings().setDefaultFontSize(16);
		m_private->corePage->settings().setStandardFontFamily("Liberation");
		m_private->corePage->settings().setScreenFontSubstitutionEnabled(true);

    m_private->corePage->settings().setScriptEnabled(false);
		m_private->corePage->settings().setPluginsEnabled(false);

#if USE(ACCELERATED_COMPOSITING)
		m_private->corePage->settings().setMinimumAccelerated2dCanvasSize(1);
		m_private->corePage->settings().setAcceleratedCompositedAnimationsEnabled(true);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(true);
		m_private->corePage->settings().setAcceleratedFiltersEnabled(true);
		m_private->corePage->settings().setAcceleratedCompositingEnabled(true);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(true);
		m_private->corePage->settings().setTiledBackingStoreEnabled(true);
#else
		m_private->corePage->settings().setAcceleratedCompositedAnimationsEnabled(false);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(false);
		m_private->corePage->settings().setAcceleratedFiltersEnabled(false);
		m_private->corePage->settings().setAcceleratedCompositingEnabled(false);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(false);
		m_private->corePage->settings().setTiledBackingStoreEnabled(false);
#endif

		fprintf(stderr, "WebKit: Settings successfully initialized.\n");

		m_private->mainFrame->init();
		m_private->mainFrame->coreFrame()->view()->enterCompositingMode();
		m_private->corePage->setIsVisible(true, true);
		m_private->corePage->setIsInWindow(true);

		resize(width, height);
	}

	WebView::~WebView() {
		webkitTrace();
		if (m_private->sdl_surface)
			SDL_FreeSurface(m_private->sdl_surface);
    if (m_private->mainFrame && m_private->mainFrame->coreFrame())
			m_private->mainFrame->coreFrame()->loader().detachFromParent();

    delete m_private->corePage;
		m_private->corePage = 0;
		delete m_private;
	}

	void WebView::draw(WebCore::IntRect clipRect, int immediate)
	{
		webkitTrace();
		if(clipRect.width()==0 && clipRect.height()==0)
			return;

		ASSERT(m_private->context);

    if (SDL_MUSTLOCK(m_private->sdl_surface)) {
			if (SDL_LockSurface(m_private->sdl_surface) < 0)
				return;
		}

		SDL_Rect rect;
		rect.x = clipRect.x();
		rect.y = clipRect.y();
		rect.w = clipRect.width();
		rect.h = clipRect.height();

		Frame* coreFrame = m_private->mainFrame->coreFrame();
		if (coreFrame->contentRenderer() && coreFrame->view()) {
			coreFrame->view()->updateLayoutAndStyleIfNeededRecursive();

			if (m_private->transparent)
				m_private->context->clearRect(clipRect);

			coreFrame->view()->paintContents(m_private->context, clipRect);

			// Unpremultiply and swap the red and blue channel to normalize to the
			// canvas.  I'm hopeful at some point cairo and canvas can work together
			// without the need to swap channels as its unnecessary overhead.
			unpremultiply_swap_rb((unsigned char *)m_private->sdl_surface->pixels,
														m_private->sdl_surface->w,
														m_private->sdl_surface->h,
														4,
														&rect);
		}

		// Note, in SDL for Emscripten the surface when unlocked is automatically copied,
		// this may make the BlitSurface call unnecessary, this should be explored further.
    if (SDL_MUSTLOCK(m_private->sdl_surface))
			SDL_UnlockSurface(m_private->sdl_surface);

		//int result = SDL_BlitSurface(m_private->sdl_surface, &rect, m_private->sdl_screen, &rect);
		//ASSERT_UNUSED(result, !result);
		//SDL_UpdateRect(m_private->sdl_screen, clipRect.x(), clipRect.y(), clipRect.width(), clipRect.height());
	}
	void WebView::setUrl(char *) {
		webkitTrace();
	}
	char *WebView::url() {
		webkitTrace();
		return NULL;
	}
	void WebView::setHtml(char *data, int length) {
		webkitTrace();

		WebCore::MainFrame& frame = m_private->mainFrame->coreFrame()->mainFrame();
		ASSERT(frame.isMainFrame());

		WebCore::FrameLoader& loader = frame.loader();
		ASSERT(loader.activeDocumentLoader());
		loader.activeDocumentLoader()->writer().begin(URL());
		loader.activeDocumentLoader()->writer().addData(data, length);
		loader.activeDocumentLoader()->writer().end();
	}
	char *WebView::html() {
		webkitTrace();
		return NULL;
	}

	IntSize WebView::size() {
		return m_private->size;
	}

	void WebView::invalidate(WebCore::IntRect rect, int immediate) {
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
		// uhm, what do we do?
#else
		draw(rect, immediate);
#endif
	}

	void WebView::resize(int width, int height)
	{
		webkitTrace();
    m_private->size = IntSize(width, height);
		recreateSurface(width,height);
		if(m_private->mainFrame) {
			Frame* coreFrame = m_private->mainFrame->coreFrame();
			if (!coreFrame->view())
				return;

			coreFrame->view()->resize(m_private->size);
		}
	}

	void WebView::scrollBy(int offsetX, int offsetY)
	{
		webkitTrace();
    Frame* coreFrame = m_private->mainFrame->coreFrame();
    if (!coreFrame->view())
			return;
    coreFrame->view()->scrollBy(IntSize(offsetX, offsetY));
	}

	bool WebView::recreateSurface(int width, int height) {
		webkitTrace();

#if USE(ACCELERATED_COMPOSITING)

#else
		if(m_private->sdl_screen) {
			SDL_FreeSurface(m_private->sdl_screen);
			m_private->sdl_screen = NULL;
		}
		if(m_private->sdl_surface) {
			SDL_FreeSurface(m_private->sdl_surface);
			m_private->sdl_surface = NULL;
		}
		if(m_private->context) {
			delete m_private->context;
			m_private->context = NULL;
		}

		m_private->sdl_screen = SDL_SetVideoMode(width, height, 32, SDL_SWSURFACE);
		if (!m_private->sdl_screen) {
			fprintf(stderr, "Couldn't set video mode: %s\n", SDL_GetError());
			SDL_Quit();
			exit(2);
		}
#if USE(CAIRO)
		if(m_private->cairo_surface) {
			cairo_surface_destroy(m_private->cairo_surface);
			m_private->cairo_surface = NULL;
		}
		if(m_private->cairo_device) {
			cairo_destroy(m_private->cairo_device);
			m_private->cairo_surface = NULL;
		}
#elif USE(SKIA)
#endif

		m_private->sdl_surface = SDL_CreateRGBSurface(
				SDL_SWSURFACE,
				m_private->sdl_screen->w,
				m_private->sdl_screen->h,
				32,
				0x000000ff,
				0x0000ff00,
				0x00ff0000,
				0x00000000);

		ASSERT(m_private->sdl_surface);
#if USE(CAIRO)
		m_private->cairo_surface = cairo_image_surface_create_for_data(
		 (unsigned char*)m_private->sdl_surface->pixels,
		 CAIRO_FORMAT_ARGB32,
		 m_private->sdl_screen->w,
		 m_private->sdl_screen->h,
		 m_private->sdl_surface->pitch);


		m_private->cairo_device = cairo_create(m_private->cairo_surface);
		m_private->context = new GraphicsContext(m_private->cairo_device);
#elif USE(SKIA)
#endif
#endif
		return true;
	}

	void WebView::handleSDLEvent(const SDL_Event& event)
	{
		// Note: do not add a webkitTrace here, this funciton executes quite
		// a few times that it will cause the browser to slow down to a crawl
		// to finish writing console messages.
    switch (event.type) {
			case SDL_VIDEORESIZE:
				fprintf(stderr, "WebKit: handleSDLEvent: Received a resize request\n");
        resize(event.resize.w, event.resize.h);
        break;
			case SDL_VIDEOEXPOSE:
        break;
			case SDL_USEREVENT:
				// We use SDL_USEREVENT to fire the shared timer.
        //fireSharedTimer();
        break;
			case SDL_MOUSEMOTION:
        //handleMotionEvent(m_private->corePage->mainFrame(), event.motion);
        break;
			case SDL_MOUSEBUTTONDOWN:
			case SDL_MOUSEBUTTONUP:
        //handleMouseEvent(m_private->corePage->mainFrame(), event.button);
        break;
			case SDL_KEYDOWN:
			case SDL_KEYUP:
        //handleKeyboardEvent(m_private->corePage, event.key);
			default:
        break;
    }
	}
	void WebView::scalefactor(float t) {
		m_private->context->applyDeviceScaleFactor(t);
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


