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
#include <SDL.h>

using namespace WebCore;
using namespace WTF;

namespace WebKit {

	WebView::WebView(int width, int height)
	{
		webkitTrace();

		// This must occur prior to anything else,
		// unless you like assertion failures.
		WebKitJSStrategies::initialize();

		m_private = new WebViewPrivate();
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
		m_private->corePage->settings().setAcceleratedCompositingEnabled(true);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(true);
		m_private->corePage->settings().setTiledBackingStoreEnabled(false);
		fprintf(stderr, "WebKit: Settings successfully initialized.\n");

		m_private->mainFrame->init();
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
		Frame* coreFrame = m_private->mainFrame->coreFrame();
		if (coreFrame->contentRenderer() && coreFrame->view()) {
			coreFrame->view()->updateLayoutAndStyleIfNeededRecursive();

			if (m_private->transparent)
				m_private->context->clearRect(clipRect);

			coreFrame->view()->paintContents(m_private->context, clipRect);
		}
    if (SDL_MUSTLOCK(m_private->sdl_surface))
			SDL_UnlockSurface(m_private->sdl_surface);

		SDL_Rect rect;
		rect.x = clipRect.x();
		rect.y = clipRect.y();
		rect.w = clipRect.width();
		rect.h = clipRect.height();

		int result = SDL_BlitSurface(m_private->sdl_surface, &rect, m_private->sdl_screen, &rect);
		ASSERT_UNUSED(result, !result);
		SDL_UpdateRect(m_private->sdl_screen, clipRect.x(), clipRect.y(), clipRect.width(), clipRect.height());
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
		draw(rect, immediate);
	}

	void WebView::resize(int width, int height)
	{
		webkitTrace();
    m_private->size = IntSize(width, height);
		recreateSurface(width,height);
    Frame* coreFrame = m_private->mainFrame->coreFrame();
    if (!coreFrame->view())
			return;
    coreFrame->view()->resize(m_private->size);
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
		if(m_private->sdl_screen) {
			SDL_FreeSurface(m_private->sdl_screen);
			m_private->sdl_screen = NULL;
		}
		if(m_private->sdl_surface) {
			SDL_FreeSurface(m_private->sdl_surface);
			m_private->sdl_surface = NULL;
		}
		if(m_private->cairo_surface) {
			cairo_surface_destroy(m_private->cairo_surface);
			m_private->cairo_surface = NULL;
		}
		if(m_private->cairo_device) {
			cairo_destroy(m_private->cairo_device);
			m_private->cairo_surface = NULL;
		}
		if(m_private->context) {
			delete m_private->context;
			m_private->context = NULL;
		}

		m_private->sdl_screen = SDL_SetVideoMode(width, height, 32, SDL_HWSURFACE);
		if (!m_private->sdl_screen) {
			fprintf(stderr, "Couldn't set video mode: %s\n", SDL_GetError());
			SDL_Quit();
			exit(2);
		}

		m_private->sdl_surface = SDL_CreateRGBSurface(
				SDL_SWSURFACE, // | SDL_OPENGL
				m_private->sdl_screen->w,
				m_private->sdl_screen->h,
				32,
				0x000000ff,
				0x0000ff00,
				0x00ff0000,
				0xff000000);

		ASSERT(m_private->sdl_surface);

		m_private->cairo_surface = cairo_image_surface_create_for_data(
				(unsigned char*)m_private->sdl_surface->pixels,
				CAIRO_FORMAT_ARGB32,
				m_private->sdl_screen->w,
				m_private->sdl_screen->h,
				m_private->sdl_surface->pitch);

		m_private->cairo_device = cairo_create(m_private->cairo_surface);
		cairo_set_antialias(m_private->cairo_device,CAIRO_ANTIALIAS_SUBPIXEL);
		m_private->context = new GraphicsContext(m_private->cairo_device);

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


