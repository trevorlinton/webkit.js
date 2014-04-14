#include "WebView.h"
#include <emscripten.h>

namespace WebKit {
	static WebKit::WebView* mainView = NULL;
}

// Private
void tick() {
	if(!WebKit::mainView) return;
	// Note: do not add a webkitTrace here, this funciton executes quite
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

// Public
extern "C" {
	void setHtml(char *html) { WebKit::mainView->setHtml(html,strlen(html)); }
	void setTransparent(bool transparent) { WebKit::mainView->setTransparent(transparent); }
	void scrollBy(int x, int y) { WebKit::mainView->scrollBy(x,y); }
	void resize(int w, int h) { WebKit::mainView->resize(w,h); }

	void createWebKit(int width, int height) {
		if (SDL_Init(SDL_INIT_VIDEO | SDL_INIT_TIMER) < 0) {
			exit(1);
		}
		WebKit::mainView = new WebKit::WebView(width, height);
		//emscripten_set_main_loop(&tick, 0, false);
	}
	//int main(int argc, char** argv) {
	//	fprintf(stderr, "WebKit Loaded. Waiting on call to createWebKit.");
	//	emscripten_set_main_loop(&tick, 0, false);
	//}
}
