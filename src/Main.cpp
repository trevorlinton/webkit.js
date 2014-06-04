#include "WebView.h"
#include "IntSize.h"
#include <emscripten.h>

namespace WebKit {
	static WebKit::WebView* mainView = NULL;
}

// Private
void tick() {
	if(!WebKit::mainView) return;
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

// Public
extern "C" {
	void setHtml(char *html) { WebKit::mainView->setHtml(html,strlen(html)); }
	void setTransparent(bool transparent) { WebKit::mainView->setTransparent(transparent); }
	void scrollBy(int x, int y) { WebKit::mainView->scrollBy(x,y); }
	void resize(int w, int h) { WebKit::mainView->resize(w,h); }
	void scalefactor(float sf) {
		WebKit::mainView->scalefactor(sf);
		//WebCore::IntSize rect = WebKit::mainView->size();
		//WebKit::mainView->resize(rect.width(),rect.height());
	}
	void createWebKit(int width, int height) {
		//if (SDL_Init(SDL_INIT_VIDEO | SDL_INIT_TIMER) < 0) {
		//	exit(1);
		//}
		WebKit::mainView = new WebKit::WebView(width, height);
		//emscripten_set_main_loop(&tick, 0, false);
	}
	int main(int argc, char** argv) {
		//"<!doctype html><html><body>Hello World</body></html>";//
		char tmp[] = "<!doctype html><html><body><div style='position:absolute;top:10px;left:10px;width:300px;height:300px;border-radius:5px;box-shadow:5px 5px 5px #000000;border:solid 1px white;color:white;background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);-webkit-transform:rotate(7deg);'>Hello World</div></body></html>";
		createWebKit(500,500);
		scalefactor(2.0);
		setHtml(tmp);
		emscripten_set_main_loop(&tick, 0, false);
	}
}
