#ifndef WEBKIT_WEBVIEW_H
#define WEBKIT_WEBVIEW_H

#include "config.h"

#include "Page.h"
#include "Frame.h"
#include "FrameLoader.h"
#include "MainFrame.h"
#include "BitmapImage.h"
#include "GraphicsContext.h"
#include "FloatRect.h"
#include "WebFrameJS.h"
#if USE(CAIRO)
#include "cairo.h"
#include <platform/cairo/WidgetBackingStore.h>
#elif USE(SKIA)
#endif

#include "SDL.h"
#if USE(ACCELERATED_COMPOSITING)
//#include <GLES2/gl2.h>
//#include <EGL/egl.h>
#include "SDL/SDL_opengles2.h"
#include "GLContext.h"
#endif

namespace WebCore {
	class AcceleratedContext;
	class ChromeClientJS;
	class FrameLoaderClientJS;
	class WebFrameJS;
}

namespace WebKit {
	struct WebViewPrivate {
		WebCore::GraphicsContext* context = NULL;
		OwnPtr<WebCore::WidgetBackingStore> backingStore = NULL;
#if USE(CAIRO)
		cairo_surface_t* cairo_surface = NULL;
		cairo_t* cairo_device = NULL;
#endif
    SDL_Surface* sdl_screen = NULL;
    SDL_Surface* sdl_surface = NULL;
    WebCore::Page* corePage = NULL;
		WebCore::WebFrameJS* mainFrame = NULL;
    bool transparent = false;
    WebCore::FloatRect size;
#if USE(ACCELERATED_COMPOSITING)
		OwnPtr<WebCore::AcceleratedContext> acceleratedContext;
		OwnPtr<WebCore::GLContext> glContext;
#endif
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
		WebCore::FloatRect positionAndSize();
		void scrollBy(int offsetX, int offsetY);
		void scalefactor(float t);
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
		WebViewPrivate* p() { return m_private; }
	protected:
		friend class WebCore::ChromeClientJS;
		friend class WebCore::FrameLoaderClientJS;
		friend class WebCore::WebFrameJS;
		friend class WebCore::AcceleratedContext;
		void invalidate(WebCore::IntRect rect, int immediate);
	private:
		void draw(WebCore::IntRect rect, int immediate);
    void handleSDLEvent(const SDL_Event& event);
		bool recreateSurface(int width, int height);
		WebViewPrivate* m_private;
	};
}

#endif // WEBKIT_WEBVIEW_H