/*
 * Copyright (C) 2010, 2011, 2012 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#include "config.h"
#include "WebKitJSStrategies.h"

// #include "BlockingResponseMap.h"
// #include "DataReference.h"
// #include "NetworkResourceLoadParameters.h"
// #include "PluginInfoStore.h"
#include "StorageNamespace.h"
#include "StorageNamespaceImpl.h"
// #include "WebContextMessages.h"
// #include "WebCookieManager.h"
// #include "WebCoreArgumentCoders.h"
// #include "WebErrors.h"
#include "FrameJS.h"
#include "FrameLoaderClientJS.h"
#include "FrameNetworkingContextJS.h"
// #include "WebIDBFactoryBackend.h"
// #include "WebPage.h"
// #include "WebProcess.h"
// #include "WebProcessProxyMessages.h"
#include "Color.h"
#include "IDBFactoryBackendInterface.h"
#include "LoaderStrategy.h"
#include "MainFrame.h"
#include "NetworkStorageSession.h"
#include "NetworkingContext.h"
#include "Page.h"
#include "PageGroup.h"
#include "PlatformCookieJar.h"
#include "PlatformPasteboard.h"
#include "ResourceError.h"
#include "StorageNamespace.h"
#include "SubframeLoader.h"
#include "URL.h"
#include <wtf/Atomics.h>
#include "DebuggerJS.h"

#if ENABLE(NETWORK_PROCESS)
#include "BlobRegistryProxy.h"
#include "NetworkConnectionToWebProcessMessages.h"
#include "NetworkProcessConnection.h"
#include "WebResourceLoadScheduler.h"
#endif


namespace WebCore {

void WebKitJSStrategies::initialize()
{
    static NeverDestroyed<WebKitJSStrategies> platformStrategies;
    setPlatformStrategies(&platformStrategies.get());
}

WebKitJSStrategies::WebKitJSStrategies()
{
}

CookiesStrategy* WebKitJSStrategies::createCookiesStrategy()
{
    return this;
}

DatabaseStrategy* WebKitJSStrategies::createDatabaseStrategy()
{
    return this;
}

LoaderStrategy* WebKitJSStrategies::createLoaderStrategy()
{
    return this;
}

PasteboardStrategy* WebKitJSStrategies::createPasteboardStrategy()
{
    return this;
}

PluginStrategy* WebKitJSStrategies::createPluginStrategy()
{
    return this;
}

SharedWorkerStrategy* WebKitJSStrategies::createSharedWorkerStrategy()
{
    return this;
}

StorageStrategy* WebKitJSStrategies::createStorageStrategy()
{
    return this;
}

VisitedLinkStrategy* WebKitJSStrategies::createVisitedLinkStrategy()
{
    return this;
}

// CookiesStrategy

String WebKitJSStrategies::cookiesForDOM(const NetworkStorageSession& session, const URL& firstParty, const URL& url)
{
 
    return WebCore::cookiesForDOM(session, firstParty, url);
}

void WebKitJSStrategies::setCookiesFromDOM(const NetworkStorageSession& session, const URL& firstParty, const URL& url, const String& cookieString)
{
 
    WebCore::setCookiesFromDOM(session, firstParty, url, cookieString);
}

bool WebKitJSStrategies::cookiesEnabled(const NetworkStorageSession& session, const URL& firstParty, const URL& url)
{
 
   return WebCore::cookiesEnabled(session, firstParty, url);
}

String WebKitJSStrategies::cookieRequestHeaderFieldValue(const NetworkStorageSession& session, const URL& firstParty, const URL& url)
{
 
   return WebCore::cookieRequestHeaderFieldValue(session, firstParty, url);
}

bool WebKitJSStrategies::getRawCookies(const NetworkStorageSession& session, const URL& firstParty, const URL& url, Vector<Cookie>& rawCookies)
{
 
   return WebCore::getRawCookies(session, firstParty, url, rawCookies);
}

void WebKitJSStrategies::deleteCookie(const NetworkStorageSession& session, const URL& url, const String& cookieName)
{
 
    WebCore::deleteCookie(session, url, cookieName);
}

// DatabaseStrategy

#if ENABLE(SQL_DATABASE)
AbstractDatabaseServer* WebKitJSStrategies::getDatabaseServer()
{
 
    return DatabaseStrategy::getDatabaseServer();
}
#endif // ENABLE(SQL_DATABASE)

#if ENABLE(INDEXED_DATABASE)
PassRefPtr<IDBFactoryBackendInterface> WebKitJSStrategies::createIDBFactoryBackend(const String& databaseDirectoryIdentifier)
{
 
#if !ENABLE(DATABASE_PROCESS)
    return DatabaseStrategy::createIDBFactoryBackend(databaseDirectoryIdentifier);
#endif

    return WebIDBFactoryBackend::create(databaseDirectoryIdentifier);
}
#endif // ENABLE(INDEXED_DATABASE)

// LoaderStrategy

#if ENABLE(NETWORK_PROCESS)
ResourceLoadScheduler* WebKitJSStrategies::resourceLoadScheduler()
{
 
   static ResourceLoadScheduler* scheduler;
    if (!scheduler) {
        if (WebProcess::shared().usesNetworkProcess())
            scheduler = &WebProcess::shared().webResourceLoadScheduler();
        else
            scheduler = WebCore::resourceLoadScheduler();
    }
    
    return scheduler;
}

void WebKitJSStrategies::loadResourceSynchronously(NetworkingContext* context, unsigned long resourceLoadIdentifier, const ResourceRequest& request, StoredCredentials storedCredentials, ClientCredentialPolicy clientCredentialPolicy, ResourceError& error, ResourceResponse& response, Vector<char>& data)
{
 
   if (!WebProcess::shared().usesNetworkProcess()) {
        LoaderStrategy::loadResourceSynchronously(context, resourceLoadIdentifier, request, storedCredentials, clientCredentialPolicy, error, response, data);
        return;
    }

    WebFrameNetworkingContext* webContext = static_cast<WebFrameNetworkingContext*>(context);
    // FIXME: Some entities in WebCore use WebCore's "EmptyFrameLoaderClient" instead of having a proper WebFrameLoaderClient.
    // EmptyFrameLoaderClient shouldn't exist and everything should be using a WebFrameLoaderClient,
    // but in the meantime we have to make sure not to mis-cast.
    WebFrameLoaderClient* webFrameLoaderClient = webContext->webFrameLoaderClient();
    WebFrame* webFrame = webFrameLoaderClient ? webFrameLoaderClient->webFrame() : 0;
    WebPage* webPage = webFrame ? webFrame->page() : 0;

    NetworkResourceLoadParameters loadParameters;
    loadParameters.identifier = resourceLoadIdentifier;
    loadParameters.webPageID = webPage ? webPage->pageID() : 0;
    loadParameters.webFrameID = webFrame ? webFrame->frameID() : 0;
    loadParameters.request = request;
    loadParameters.priority = ResourceLoadPriorityHighest;
    loadParameters.contentSniffingPolicy = SniffContent;
    loadParameters.allowStoredCredentials = storedCredentials;
    loadParameters.clientCredentialPolicy = clientCredentialPolicy;
    loadParameters.inPrivateBrowsingMode = context->storageSession().isPrivateBrowsingSession();
    loadParameters.shouldClearReferrerOnHTTPSToHTTPRedirect = context->shouldClearReferrerOnHTTPSToHTTPRedirect();

    data.resize(0);

    if (!WebProcess::shared().networkConnection()->connection()->sendSync(Messages::NetworkConnectionToWebProcess::PerformSynchronousLoad(loadParameters), Messages::NetworkConnectionToWebProcess::PerformSynchronousLoad::Reply(error, response, data), 0)) {
        response = ResourceResponse();
        error = internalError(request.url());
    }
}

#if ENABLE(BLOB)
BlobRegistry* WebKitJSStrategies::createBlobRegistry()
{
 
    if (!WebProcess::shared().usesNetworkProcess())
        return LoaderStrategy::createBlobRegistry();
    return new BlobRegistryProxy;    
}
#endif
#endif

// PluginStrategy

void WebKitJSStrategies::refreshPlugins()
{
 
}

void WebKitJSStrategies::getPluginInfo(const WebCore::Page* page, Vector<WebCore::PluginInfo>& plugins)
{
 
    UNUSED_PARAM(page);
    UNUSED_PARAM(plugins);
}

// SharedWorkerStrategy

bool WebKitJSStrategies::isAvailable() const
{
 
    // Shared workers do not work across multiple processes, and using network process is tied to multiple secondary process model.
    //return !WebProcess::shared().usesNetworkProcess();
  return true;
}

// StorageStrategy

PassRefPtr<StorageNamespace> StorageStrategy::localStorageNamespace(PageGroup* pageGroup)
{
  notImplemented();
    //return StorageStrategy::localStorageNamespace(pageGroup);
  return nullptr;
}

PassRefPtr<StorageNamespace> StorageStrategy::transientLocalStorageNamespace(PageGroup* pageGroup, SecurityOrigin*securityOrigin)
{
  notImplemented();
/*#if ENABLE(UI_PROCESS_STORAGE)
    UNUSED_PARAM(securityOrigin);
    // FIXME: This could be more clever and made to work across processes.
    return StorageStrategy::sessionStorageNamespace(*pageGroup->pages().begin());
#else*/
    //return StorageStrategy::transientLocalStorageNamespace(pageGroup, securityOrigin);
//#endif
  return nullptr;
}

PassRefPtr<StorageNamespace> StorageStrategy::sessionStorageNamespace(Page* page)
{
  notImplemented();
  //();
  //return StorageNamespace::sessionStorageNamespace(page);
//#if ENABLE(UI_PROCESS_STORAGE)
 //   return StorageNamespace::createSessionStorageNamespace(WebPage::fromCorePage(page));
//#else
//    return StorageStrategy::sessionStorageNamespace(page);
//#endif
  return nullptr;
}

// VisitedLinkStrategy

bool WebKitJSStrategies::isLinkVisited(Page*, LinkHash linkHash, const URL&, const AtomicString&)
{
 
  //TODO:isLinkVisited
  return false; //return WebProcess::shared().isLinkVisited(linkHash);
}

void WebKitJSStrategies::addVisitedLink(Page*, LinkHash linkHash)
{
 
  //TODO:addVisitedLink
   // WebProcess::shared().addVisitedLink(linkHash);
}
/*
#if PLATFORM(MAC)
// PasteboardStrategy

void WebKitJSStrategies::getTypes(Vector<String>& types, const String& pasteboardName)
{
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardTypes(pasteboardName),
                                                Messages::WebContext::GetPasteboardTypes::Reply(types), 0);
}

PassRefPtr<WebCore::SharedBuffer> WebKitJSStrategies::bufferForType(const String& pasteboardType, const String& pasteboardName)
{
    SharedMemory::Handle handle;
    uint64_t size = 0;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardBufferForType(pasteboardName, pasteboardType),
                                                Messages::WebContext::GetPasteboardBufferForType::Reply(handle, size), 0);
    if (handle.isNull())
        return 0;
    RefPtr<SharedMemory> sharedMemoryBuffer = SharedMemory::create(handle, SharedMemory::ReadOnly);
    return SharedBuffer::create(static_cast<unsigned char *>(sharedMemoryBuffer->data()), size);
}

void WebKitJSStrategies::getPathnamesForType(Vector<String>& pathnames, const String& pasteboardType, const String& pasteboardName)
{
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardPathnamesForType(pasteboardName, pasteboardType),
                                                Messages::WebContext::GetPasteboardPathnamesForType::Reply(pathnames), 0);
}

String WebKitJSStrategies::stringForType(const String& pasteboardType, const String& pasteboardName)
{
    String value;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardStringForType(pasteboardName, pasteboardType),
                                                Messages::WebContext::GetPasteboardStringForType::Reply(value), 0);
    return value;
}

long WebKitJSStrategies::copy(const String& fromPasteboard, const String& toPasteboard)
{
    uint64_t newChangeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::PasteboardCopy(fromPasteboard, toPasteboard),
        Messages::WebContext::PasteboardCopy::Reply(newChangeCount), 0);
    return newChangeCount;
}

long WebKitJSStrategies::changeCount(const WTF::String &pasteboardName)
{
    uint64_t changeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardChangeCount(pasteboardName),
                                                Messages::WebContext::GetPasteboardChangeCount::Reply(changeCount), 0);
    return changeCount;
}

String WebKitJSStrategies::uniqueName()
{
    String pasteboardName;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardUniqueName(),
                                                Messages::WebContext::GetPasteboardUniqueName::Reply(pasteboardName), 0);
    return pasteboardName;
}

Color WebKitJSStrategies::color(const String& pasteboardName)
{
    Color color;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardColor(pasteboardName),
                                                Messages::WebContext::GetPasteboardColor::Reply(color), 0);
    return color;
}

URL WebKitJSStrategies::url(const String& pasteboardName)
{
    String urlString;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardURL(pasteboardName),
                                                Messages::WebContext::GetPasteboardURL::Reply(urlString), 0);
    return URL(ParsedURLString, urlString);
}

long WebKitJSStrategies::addTypes(const Vector<String>& pasteboardTypes, const String& pasteboardName)
{
    uint64_t newChangeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::AddPasteboardTypes(pasteboardName, pasteboardTypes),
        Messages::WebContext::AddPasteboardTypes::Reply(newChangeCount), 0);
    return newChangeCount;
}

long WebKitJSStrategies::setTypes(const Vector<String>& pasteboardTypes, const String& pasteboardName)
{
    uint64_t newChangeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::SetPasteboardTypes(pasteboardName, pasteboardTypes),
        Messages::WebContext::SetPasteboardTypes::Reply(newChangeCount), 0);
    return newChangeCount;
}

long WebKitJSStrategies::setBufferForType(PassRefPtr<SharedBuffer> buffer, const String& pasteboardType, const String& pasteboardName)
{
    SharedMemory::Handle handle;
    if (buffer) {
        RefPtr<SharedMemory> sharedMemoryBuffer = SharedMemory::create(buffer->size());
        memcpy(sharedMemoryBuffer->data(), buffer->data(), buffer->size());
        sharedMemoryBuffer->createHandle(handle, SharedMemory::ReadOnly);
    }
    uint64_t newChangeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::SetPasteboardBufferForType(pasteboardName, pasteboardType, handle, buffer ? buffer->size() : 0),
        Messages::WebContext::SetPasteboardBufferForType::Reply(newChangeCount), 0);
    return newChangeCount;
}

long WebKitJSStrategies::setPathnamesForType(const Vector<String>& pathnames, const String& pasteboardType, const String& pasteboardName)
{
    uint64_t newChangeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::SetPasteboardPathnamesForType(pasteboardName, pasteboardType, pathnames),
        Messages::WebContext::SetPasteboardPathnamesForType::Reply(newChangeCount), 0);
    return newChangeCount;
}

long WebKitJSStrategies::setStringForType(const String& string, const String& pasteboardType, const String& pasteboardName)
{
    uint64_t newChangeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::SetPasteboardStringForType(pasteboardName, pasteboardType, string),
        Messages::WebContext::SetPasteboardStringForType::Reply(newChangeCount), 0);
    return newChangeCount;
}

#if PLATFORM(IOS)
void WebKitJSStrategies::writeToPasteboard(const WebCore::PasteboardWebContent& content)
{
    WebProcess::shared().parentProcessConnection()->send(Messages::WebContext::WriteWebContentToPasteboard(content), 0);
}

void WebKitJSStrategies::writeToPasteboard(const WebCore::PasteboardImage& image)
{
    WebProcess::shared().parentProcessConnection()->send(Messages::WebContext::WriteImageToPasteboard(image), 0);
}

void WebKitJSStrategies::writeToPasteboard(const String& pasteboardType, const String& text)
{
    WebProcess::shared().parentProcessConnection()->send(Messages::WebContext::WriteStringToPasteboard(pasteboardType, text), 0);
}

int WebKitJSStrategies::getPasteboardItemsCount()
{
    uint64_t itemsCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardItemsCount(),
        Messages::WebContext::GetPasteboardItemsCount::Reply(itemsCount), 0);
    return itemsCount;
}

PassRefPtr<WebCore::SharedBuffer> WebKitJSStrategies::readBufferFromPasteboard(int index, const String& pasteboardType)
{
    SharedMemory::Handle handle;
    uint64_t size = 0;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::ReadBufferFromPasteboard(index, pasteboardType),
        Messages::WebContext::ReadBufferFromPasteboard::Reply(handle, size), 0);
    if (handle.isNull())
        return 0;
    RefPtr<SharedMemory> sharedMemoryBuffer = SharedMemory::create(handle, SharedMemory::ReadOnly);
    return SharedBuffer::create(static_cast<unsigned char *>(sharedMemoryBuffer->data()), size);
}

WebCore::URL WebKitJSStrategies::readURLFromPasteboard(int index, const String& pasteboardType)
{
    String urlString;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::ReadURLFromPasteboard(index, pasteboardType),
        Messages::WebContext::ReadURLFromPasteboard::Reply(urlString), 0);
    return URL(ParsedURLString, urlString);
}

String WebKitJSStrategies::readStringFromPasteboard(int index, const String& pasteboardType)
{
    String value;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::ReadStringFromPasteboard(index, pasteboardType),
        Messages::WebContext::ReadStringFromPasteboard::Reply(value), 0);
    return value;
}

long WebKitJSStrategies::changeCount()
{
    uint64_t changeCount;
    WebProcess::shared().parentProcessConnection()->sendSync(Messages::WebContext::GetPasteboardChangeCount(String()),
        Messages::WebContext::GetPasteboardChangeCount::Reply(changeCount), 0);
    return changeCount;
}

#endif

#endif
*/
} // namespace WebKit
