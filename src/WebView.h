#ifndef WEBKIT_WEBVIEW_H
#define WEBKIT_WEBVIEW_H

#include "config.h"

#include "Page.h"
#include "Frame.h"
#include "FrameLoader.h"
#include "MainFrame.h"
#include "BitmapImage.h"
#include "GraphicsContext.h"
#include "IntSize.h"
#include "WebFrameJS.h"

// Platform level surfaces.
#if USE(CAIRO)
#include "cairo.h"
#elif USE(SKIA)
#endif

#include "SDL.h"

namespace WebCore {
	class ChromeClientJS;
	class FrameLoaderClientJS;
	class WebFrameJS;
}

namespace WebKit {
	class AcceleratedContext;

	struct WebViewPrivate {
		WebCore::GraphicsContext* context = NULL;
#if USE(CAIRO)
		cairo_surface_t* cairo_surface = NULL;
		cairo_t* cairo_device = NULL;
#endif
    SDL_Surface* sdl_screen = NULL;
    SDL_Surface* sdl_surface = NULL;
    WebCore::Page* corePage = NULL;
		WebCore::WebFrameJS* mainFrame = NULL;
    bool transparent = false;
    WebCore::IntSize size;
	};

	class WebView {
	public:
		WebView(int width, int height);
		~WebView();

		void setTransparent(bool transparent) { m_private->transparent = transparent; };
		bool transparent() { return m_private->transparent; };
		
		void setUrl(char *);
		char *url();
		void setHtml(char *, int len);
		char *html();

		void resize(int width, int height);
		WebCore::IntSize size();
		void scrollBy(int offsetX, int offsetY);
		void resizeEvent(void *);
    void paintEvent(void *);
    void changeEvent(void *);
    void mouseMoveEvent(void *);
    void mousePressEvent(void *);
    void mouseDoubleClickEvent(void *);
    void mouseReleaseEvent(void *);
    void contextMenuEvent(void *);
    void wheelEvent(void *);
    void keyPressEvent(void *);
    void keyReleaseEvent(void *);
    void dragEnterEvent(void *);
    void dragLeaveEvent(void *);
    void dragMoveEvent(void *);
    void dropEvent(void *);
    void focusInEvent(void *);
    void focusOutEvent(void *);
    void inputMethodEvent(void *);
    bool focusNextPrevChild(bool next);
	protected:
		friend class WebCore::ChromeClientJS;
		friend class WebCore::FrameLoaderClientJS;
		friend class WebCore::WebFrameJS;
		friend class WebKit::AcceleratedContext;

		WebViewPrivate* p() { return m_private; }
		void invalidate(WebCore::IntRect rect, int immediate);
	private:
		void draw(WebCore::IntRect rect, int immediate);
    void handleSDLEvent(const SDL_Event& event);
		bool recreateSurface(int width, int height);
		WebViewPrivate* m_private;
	};
}

#endif // WEBKIT_WEBVIEW_H