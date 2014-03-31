#ifndef WebFrameJS_h
#define WebFrameJS_h

#include "URL.h"
#include <wtf/text/WTFString.h>

namespace WebKit {
		class WebView;
}

namespace WebCore {
	class Frame;
	class HTMLFrameOwnerElement;
	class Page;
	class FrameLoaderClient;

	struct WebFrameData {
    WebCore::URL url;
    WTF::String name;
    WebCore::HTMLFrameOwnerElement* ownerElement;
    WTF::String referrer;
    bool allowsScrolling;
    int marginWidth;
    int marginHeight;
	};
	class WebFrameJS {
	public:
    WebFrameJS(WebKit::WebView* container, WebFrameJS* parent = 0, WebFrameData* data = 0);
		void init();
    WebCore::Frame* coreFrame() const { return m_coreFrame; }
		WebKit::WebView* webView() const { return m_webView; }
    WTF::String userAgentForURL(const WebCore::URL&) const;
	private:
		WebKit::WebView* m_webView;
    WebCore::Frame* m_coreFrame;
	};
}

#endif // WebFrameJS_h