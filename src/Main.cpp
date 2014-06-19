#include "WebView.h"
#include "IntSize.h"
#include <emscripten.h>
#ifdef DEBUG
#include "Logging.h"
#include <wtf/text/WTFString.h>
#endif

namespace WebCore {
	static WebCore::WebView* mainView = NULL;
#ifdef DEBUG
	String logLevelString() { return getenv("WEBKIT_DEBUG"); }
#endif
}

void tick() {
	if(!WebCore::mainView) return;
	// Note: do not add a  here, this funciton executes quite
	// a few times that it will cause the browser to slow down to a crawl
	// to finish writing console messages.
	SDL_Event event;
	SDL_PollEvent(&event);
	switch (event.type) {
		case SDL_QUIT:
			exit(1);
		case SDL_KEYDOWN:
		case SDL_KEYUP:
		default:
			//WebKit::mainView->handleSDLEvent(event);
			break;
	}
}
extern "C" {
	void setHtml(char *html) { WebCore::mainView->setHtml(html,strlen(html)); }
	void setTransparent(bool transparent) { WebCore::mainView->setTransparent(transparent); }
	void scrollBy(int x, int y) { WebCore::mainView->scrollBy(x,y); }
	void resize(int w, int h) { WebCore::mainView->resize(w,h); }
	void scalefactor(float sf) { WebCore::mainView->scalefactor(sf); }
	void createWebKit(int width, int height, bool accel) { WebCore::mainView = new WebCore::WebView(width, height, accel); }
	int main(int argc, char** argv) {
		createWebKit(500,500,true);
		emscripten_set_main_loop(&tick, 0, false);
	}
}
