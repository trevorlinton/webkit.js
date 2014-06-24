#include "config.h"
#include "ResourceHandle.h"

#include "CachedResourceLoader.h"
#include "CredentialStorage.h"
#include "NetworkingContext.h"
#include "NotImplemented.h"
#include "ResourceHandleInternal.h"
#include "Cookie.h"


namespace WebCore {
	/*
	 class WebCoreSynchronousLoader : public ResourceHandleClient {
	 public:
	 WebCoreSynchronousLoader();

	 virtual void didReceiveResponse(ResourceHandle*, const ResourceResponse&);
	 virtual void didReceiveData(ResourceHandle*, const char*, unsigned, int encodedDataLength);
	 virtual void didFinishLoading(ResourceHandle*, double ); //finishtime
	 virtual void didFail(ResourceHandle*, const ResourceError&);

	 ResourceResponse resourceResponse() const { return m_response; }
	 ResourceError resourceError() const { return m_error; }
	 Vector<char> data() const { return m_data; }

	 private:
	 ResourceResponse m_response;
	 ResourceError m_error;
	 Vector<char> m_data;
	 };

	 WebCoreSynchronousLoader::WebCoreSynchronousLoader()
	 {
	 }

	 void WebCoreSynchronousLoader::didReceiveResponse(ResourceHandle*, const ResourceResponse& response)
	 {
	 m_response = response;
	 }

	 void WebCoreSynchronousLoader::didReceiveData(ResourceHandle*, const char* data, unsigned length, int)
	 {
	 m_data.append(data, length);
	 }

	 void WebCoreSynchronousLoader::didFinishLoading(ResourceHandle*, double)
	 {
	 }

	 void WebCoreSynchronousLoader::didFail(ResourceHandle*, const ResourceError& error)
	 {
	 m_error = error;
	 }
	 */

void prefetchDNS(String const&) {
	notImplemented();
}
void deleteCookie(const NetworkStorageSession&, const URL&, const String&)
{
	notImplemented();
}

String cookieRequestHeaderFieldValue(const NetworkStorageSession& session, const URL& firstParty, const URL& url)
{
	notImplemented();
	return String();
}
bool getRawCookies(const NetworkStorageSession&, const URL& /*firstParty*/, const URL& /*url*/, Vector<Cookie>& rawCookies)
{
	notImplemented();
	// FIXME: Not yet implemented
	rawCookies.clear();
	return false; // return true when implemented
}

bool cookiesEnabled(const NetworkStorageSession&, const URL& /*firstParty*/, const URL& /*url*/)
{
	notImplemented();
	return true;
}
void setCookiesFromDOM(const NetworkStorageSession&, const URL&, const URL&, const String&)
{
	notImplemented();
}
String cookiesForDOM(const NetworkStorageSession&, const URL&, const URL&)
{
	notImplemented();
	return String();
}


ResourceHandleInternal::~ResourceHandleInternal()
{
    //fastFree(m_url);
    //if (m_customHeaders)
    //    curl_slist_free_all(m_customHeaders);
}

ResourceHandle::~ResourceHandle()
{
    //cancel();
}

bool ResourceHandle::start()
{
    // The frame could be null if the ResourceHandle is not associated to any
    // Frame, e.g. if we are downloading a file.
    // If the frame is not null but the page is null this must be an attempted
    // load from an unload handler, so let's just block it.
    // If both the frame and the page are not null the context is valid.
    //if (d->m_context && !d->m_context->isValid())
    //    return false;

    //ResourceHandleManager::sharedInstance()->add(this);
    //return true;
	return false;
}

void ResourceHandle::cancel()
{
    //ResourceHandleManager::sharedInstance()->cancel(this);
}

//void ResourceHandle::setHostAllowsAnyHTTPSCertificate(const String& host)
//{
//	UNUSED_PARAM(host);
//}

void ResourceHandle::platformSetDefersLoading(bool defers)
{
		UNUSED_PARAM(defers);
//    if (!d->m_handle)
//        return;
//
//    if (defers) {
//        CURLcode error = curl_easy_pause(d->m_handle, CURLPAUSE_ALL);
        // If we could not defer the handle, so don't do it.
//        if (error != CURLE_OK)
//            return;
//    } else {
//        CURLcode error = curl_easy_pause(d->m_handle, CURLPAUSE_CONT);
//        if (error != CURLE_OK)
            // Restarting the handle has failed so just cancel it.
//            cancel();
//    }
}

bool ResourceHandle::loadsBlocked()
{
	return false;
//    notImplemented();
//    return false;
}

bool ResourceHandle::shouldUseCredentialStorage()
{
	return false;
//    return (!client() || client()->shouldUseCredentialStorage(this)) && firstRequest().url().protocolIsInHTTPFamily();
}


void ResourceHandle::platformLoadResourceSynchronously(NetworkingContext* context, const ResourceRequest& request, StoredCredentials storedCredentials, ResourceError& error, ResourceResponse& response, Vector<char>& data)
{
		UNUSED_PARAM(context);
		UNUSED_PARAM(request);
		UNUSED_PARAM(storedCredentials);
		UNUSED_PARAM(error);
		UNUSED_PARAM(response);
		UNUSED_PARAM(data);
//    WebCoreSynchronousLoader syncLoader;
//    RefPtr<ResourceHandle> handle = adoptRef(new ResourceHandle(context, request, &syncLoader, true, false));

//    ResourceHandleManager* manager = ResourceHandleManager::sharedInstance();

//    manager->dispatchSynchronousJob(handle.get());

//    error = syncLoader.resourceError();
//    data = syncLoader.data();
//    response = syncLoader.resourceResponse();
}

void ResourceHandle::didReceiveAuthenticationChallenge(const AuthenticationChallenge& challenge)
{
		UNUSED_PARAM(challenge);
//    if (!d->m_user.isNull() && !d->m_pass.isNull()) {
//        Credential credential(d->m_user, d->m_pass, CredentialPersistenceNone);

//        URL urlToStore;
//        if (challenge.failureResponse().httpStatusCode() == 401)
//            urlToStore = challenge.failureResponse().url();
//        CredentialStorage::set(credential, challenge.protectionSpace(), urlToStore);
        
//        String userpass = credential.user() + ":" + credential.password();
//        curl_easy_setopt(d->m_handle, CURLOPT_USERPWD, userpass.utf8().data());

//        d->m_user = String();
//        d->m_pass = String();
        // FIXME: Per the specification, the user shouldn't be asked for credentials if there were incorrect ones provided explicitly.
//        return;
//    }

//    if (shouldUseCredentialStorage()) {
//        if (!d->m_initialCredential.isEmpty() || challenge.previousFailureCount()) {
            // The stored credential wasn't accepted, stop using it.
            // There is a race condition here, since a different credential might have already been stored by another ResourceHandle,
            // but the observable effect should be very minor, if any.
//            CredentialStorage::remove(challenge.protectionSpace());
//        }

//        if (!challenge.previousFailureCount()) {
//            Credential credential = CredentialStorage::get(challenge.protectionSpace());
//            if (!credential.isEmpty() && credential != d->m_initialCredential) {
//                ASSERT(credential.persistence() == CredentialPersistenceNone);
//                if (challenge.failureResponse().httpStatusCode() == 401) {
                    // Store the credential back, possibly adding it as a default for this directory.
//                    CredentialStorage::set(credential, challenge.protectionSpace(), challenge.failureResponse().url());
//                }
//                String userpass = credential.user() + ":" + credential.password();
//                curl_easy_setopt(d->m_handle, CURLOPT_USERPWD, userpass.utf8().data());
//                return;
//            }
//        }
//    }

//    d->m_currentWebChallenge = challenge;
    
//    if (client())
//        client()->didReceiveAuthenticationChallenge(this, d->m_currentWebChallenge);
}

void ResourceHandle::receivedCredential(const AuthenticationChallenge& challenge, const Credential& credential)
{
		UNUSED_PARAM(challenge);
		UNUSED_PARAM(credential);
//    if (challenge != d->m_currentWebChallenge)
//        return;

//    if (credential.isEmpty()) {
//        receivedRequestToContinueWithoutCredential(challenge);
//        return;
//    }

//    if (shouldUseCredentialStorage()) {
//        if (challenge.failureResponse().httpStatusCode() == 401) {
//            URL urlToStore = challenge.failureResponse().url();
//            CredentialStorage::set(credential, challenge.protectionSpace(), urlToStore);
//        }
//    }

//    String userpass = credential.user() + ":" + credential.password();
//    curl_easy_setopt(d->m_handle, CURLOPT_USERPWD, userpass.utf8().data());

//    clearAuthentication();
}

void ResourceHandle::receivedRequestToContinueWithoutCredential(const AuthenticationChallenge& challenge)
{
		UNUSED_PARAM(challenge);
//    if (challenge != d->m_currentWebChallenge)
//        return;

//    String userpass = "";
//    curl_easy_setopt(d->m_handle, CURLOPT_USERPWD, userpass.utf8().data());

//    clearAuthentication();
}

void ResourceHandle::receivedCancellation(const AuthenticationChallenge& challenge)
{
		UNUSED_PARAM(challenge);
//    if (challenge != d->m_currentWebChallenge)
//        return;

//    if (client())
//        client()->receivedCancellation(this, challenge);
}

} // namespace WebCore


