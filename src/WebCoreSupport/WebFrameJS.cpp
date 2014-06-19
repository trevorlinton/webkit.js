#include "config.h"

#include "Document.h"
#include "WebFrameJS.h"
#include "Frame.h"
#include "FrameLoaderClientJS.h"
#include "HTMLFrameOwnerElement.h"
#include "DebuggerJS.h"
#include "WebView.h"

namespace WebCore {

	WebFrameJS::WebFrameJS(WebView* container, WebFrameJS* parent, WebFrameData* data)
		: m_webView(container)
	{
	}

	void WebFrameJS::init() {
    FrameLoaderClient* client = FrameLoaderClientJS::createClient(this); //new FrameLoaderClientJS(this);
    RefPtr<WebCore::Frame> newFrame = Frame::create(m_webView->p()->corePage, NULL, client);
    m_coreFrame = newFrame.get();
    //if (data)
		//	m_coreFrame->tree().setName(data->name);
		// Subframes expect to be added to the FrameTree before init is called.
		//if (parentFrame)
		//	parentFrame->document().frame()->tree().appendChild(m_coreFrame);
		//if (data && data->ownerElement)
		//	m_coreFrame->ref();
		m_coreFrame->init();
	}
	String WebFrameJS::userAgentForURL(const URL&) const
	{
    // FIXME: Retrieve the user agent string from WebSettings.
    return String("Mozilla/5.0 (Linux; U; JavaScript 2.3.1; en-us; sdk Build/GSI11) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 webkit.js");
	}
}