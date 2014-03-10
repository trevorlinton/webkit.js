/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
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
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#include "config.h"
#include "StorageArea.h"
#include "DebuggerJS.h"
#include "Document.h"
#include "ExceptionCode.h"
#include "Frame.h"
#include "Page.h"
#include "SchemeRegistry.h"
#include "SecurityOrigin.h"
#include "Settings.h"
#include "StorageAreaSync.h"
#include "StorageEventDispatcher.h"
#include "StorageMap.h"
#include "StorageSyncManager.h"
#include "StorageTracker.h"
#include <wtf/MainThread.h>

namespace WebCore {
/*
StorageArea::~StorageArea()
{
  notImplemented();
}

StorageArea::StorageArea(StorageType storageType, PassRefPtr<SecurityOrigin> origin, PassRefPtr<StorageSyncManager> syncManager, unsigned quota)
    : m_storageType(storageType)
    , m_securityOrigin(origin)
    , m_storageMap(StorageMap::create(quota))
    , m_storageSyncManager(syncManager)
#ifndef NDEBUG
    , m_isShutdown(false)
#endif
    , m_accessCount(0)
    , m_closeDatabaseTimer(this, &StorageArea::closeDatabaseTimerFired)
{
    notImplemented();
}

PassRefPtr<StorageArea> StorageArea::create(StorageType storageType, PassRefPtr<SecurityOrigin> origin, PassRefPtr<StorageSyncManager> syncManager, unsigned quota)
{
    return nullptr;
}

PassRefPtr<StorageArea> StorageArea::copy()
{
  return nullptr;
}*/

bool StorageArea::canAccessStorage(Frame* frame)
{
  notImplemented();
  return false;
}

StorageType StorageArea::storageType() const
{
  notImplemented();
  return LocalStorage;
}

unsigned StorageArea::length()
{
  notImplemented();
  return 0;
}

String StorageArea::key(unsigned index)
{
  notImplemented();
  return String();
}

String StorageArea::item(const String& key)
{
  notImplemented();
  return key;
}

void StorageArea::setItem(Frame* sourceFrame, const String& key, const String& value, bool& quotaException)
{
  notImplemented();
}

void StorageArea::removeItem(Frame* sourceFrame, const String& key)
{
  notImplemented();
}

void StorageArea::clear(Frame* sourceFrame)
  {
    notImplemented();
  }


bool StorageArea::contains(const String& key)
  {
    notImplemented();
    return false;
  }
/*

void StorageArea::importItems(const HashMap<String, String>& items)
  {
    notImplemented();
  }


void StorageArea::close()
  {
    notImplemented();
  }


void StorageArea::clearForOriginDeletion()
  {
    notImplemented();
  }

    
void StorageArea::sync()
  {
    notImplemented();
  }


void StorageArea::blockUntilImportComplete() const
  {
    notImplemented();
  }
*/

size_t StorageArea::memoryBytesUsedByCache()
{
  notImplemented();
    return 0;
}
/*
void StorageArea::incrementAccessCount()
  {
    notImplemented();
  }


void StorageArea::decrementAccessCount()
  {
    notImplemented();
  }


void StorageArea::closeDatabaseTimerFired(Timer<StorageArea> *)
  {
    notImplemented();
  }
*/
/*
void StorageArea::closeDatabaseIfIdle()
  {
    notImplemented();
  }


void StorageArea::dispatchStorageEvent(const String& key, const String& oldValue, const String& newValue, Frame* sourceFrame)
  {
    notImplemented();
  }
*/

} // namespace WebCore
