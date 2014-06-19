#ifndef WebFrameJS_h
#define WebFrameJS_h

#include "URL.h"
#include <wtf/text/WTFString.h>

namespace WebCore {
	class Frame;
	class HTMLFrameOwnerElement;
	class Page;
	class FrameLoaderClient;
	class WebView;

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
		WebFrameJS(WebView* container, WebFrameJS* parent = 0, WebFrameData* data = 0);
		void init();
		Frame* coreFrame() const { return m_coreFrame; }
		WebView* webView() const { return m_webView; }
		WTF::String userAgentForURL(const WebCore::URL&) const;
	private:
		WebView* m_webView;
		Frame* m_coreFrame;
	};
}
#endif // WebFrameJS_h