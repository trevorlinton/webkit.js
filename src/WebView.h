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

#include "cairo.h"

namespace WebKit {
	class WebView {
	public:
		WebView();

		bool initialize();
		void tictoc();

		void setUrl(char *);
		char *getUrl();
		void setHtml(char *, int len);
		char *getHtml();
		void render(WebCore::GraphicsContext* context, WebCore::IntRect clip);
		WebCore::BitmapImage *render(WebCore::IntRect clip);
		void setViewPortSize(WebCore::FloatRect size);
		WebCore::FloatRect& getViewPortSize();
		void invalidate(WebCore::IntRect rect, int immediate);
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
		WebCore::Page *page();
	private:
		std::unique_ptr<WebCore::Page> m_page;
		WebCore::Page::PageClients m_pageClients;
		WebCore::FloatRect m_viewPortSize;
		WebCore::GraphicsContext *context;
	};
}

#endif // WEBKIT_WEBVIEW_H