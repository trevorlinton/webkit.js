/*
 * THIS FILE WAS AUTOMATICALLY GENERATED, DO NOT EDIT.
 *
 * Copyright (C) 2011 Google Inc.  All rights reserved.
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
 * THIS SOFTWARE IS PROVIDED BY GOOGLE, INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef InternalSettingsGenerated_h
#define InternalSettingsGenerated_h

#include "RefCountedSupplement.h"
#include <wtf/PassRefPtr.h>
#include <wtf/RefCounted.h>
#include <wtf/text/WTFString.h>

namespace WebCore {

class Page;

class InternalSettingsGenerated : public RefCounted<InternalSettingsGenerated> {
public:
    explicit InternalSettingsGenerated(Page*);
    virtual ~InternalSettingsGenerated();
    void resetToConsistentState();
    void setDOMPasteAllowed(bool DOMPasteAllowed);
    void setAccelerated2dCanvasEnabled(bool accelerated2dCanvasEnabled);
    void setAcceleratedCompositedAnimationsEnabled(bool acceleratedCompositedAnimationsEnabled);
    void setAcceleratedCompositingEnabled(bool acceleratedCompositingEnabled);
    void setAcceleratedCompositingForFixedPositionEnabled(bool acceleratedCompositingForFixedPositionEnabled);
    void setAcceleratedCompositingForOverflowScrollEnabled(bool acceleratedCompositingForOverflowScrollEnabled);
    void setAcceleratedCompositingForScrollableFramesEnabled(bool acceleratedCompositingForScrollableFramesEnabled);
    void setAcceleratedDrawingEnabled(bool acceleratedDrawingEnabled);
    void setAcceleratedFiltersEnabled(bool acceleratedFiltersEnabled);
    void setAllowCustomScrollbarInMainFrame(bool allowCustomScrollbarInMainFrame);
    void setAllowDisplayOfInsecureContent(bool allowDisplayOfInsecureContent);
    void setAllowFileAccessFromFileURLs(bool allowFileAccessFromFileURLs);
    void setAllowMultiElementImplicitSubmission(bool allowMultiElementImplicitSubmission);
    void setAllowRunningOfInsecureContent(bool allowRunningOfInsecureContent);
    void setAllowScriptsToCloseWindows(bool allowScriptsToCloseWindows);
    void setAllowUniversalAccessFromFileURLs(bool allowUniversalAccessFromFileURLs);
    void setAntialiased2dCanvasEnabled(bool antialiased2dCanvasEnabled);
    void setApplicationChromeMode(bool applicationChromeMode);
    void setApplyDeviceScaleFactorInCompositor(bool applyDeviceScaleFactorInCompositor);
    void setAsynchronousSpellCheckingEnabled(bool asynchronousSpellCheckingEnabled);
    void setAuthorAndUserStylesEnabled(bool authorAndUserStylesEnabled);
    void setAutoscrollForDragAndDropEnabled(bool autoscrollForDragAndDropEnabled);
    void setAutostartOriginPlugInSnapshottingEnabled(bool autostartOriginPlugInSnapshottingEnabled);
    void setBackForwardCacheExpirationInterval(double backForwardCacheExpirationInterval);
    void setBackgroundShouldExtendBeyondPage(bool backgroundShouldExtendBeyondPage);
    void setBackspaceKeyNavigationEnabled(bool backspaceKeyNavigationEnabled);
    void setCanvasUsesAcceleratedDrawing(bool canvasUsesAcceleratedDrawing);
    void setCaretBrowsingEnabled(bool caretBrowsingEnabled);
    void setCompositedScrollingForFramesEnabled(bool compositedScrollingForFramesEnabled);
    void setCookieEnabled(bool cookieEnabled);
    void setCrossOriginCheckInGetMatchedCSSRulesDisabled(bool crossOriginCheckInGetMatchedCSSRulesDisabled);
    void setCSSGridLayoutEnabled(bool cssGridLayoutEnabled);
    void setDefaultFixedFontSize(int defaultFixedFontSize);
    void setDefaultFontSize(int defaultFontSize);
    void setDefaultTextEncodingName(const String& defaultTextEncodingName);
    void setDefaultVideoPosterURL(const String& defaultVideoPosterURL);
    void setDelegatesPageScaling(bool delegatesPageScaling);
    void setDeveloperExtrasEnabled(bool developerExtrasEnabled);
    void setDeviceHeight(int deviceHeight);
    void setDeviceSupportsMouse(bool deviceSupportsMouse);
    void setDeviceSupportsTouch(bool deviceSupportsTouch);
    void setDeviceWidth(int deviceWidth);
    void setDiagnosticLoggingEnabled(bool diagnosticLoggingEnabled);
    void setDownloadableBinaryFontsEnabled(bool downloadableBinaryFontsEnabled);
    void setEnforceCSSMIMETypeInNoQuirksMode(bool enforceCSSMIMETypeInNoQuirksMode);
    void setExperimentalNotificationsEnabled(bool experimentalNotificationsEnabled);
    void setFixedElementsLayoutRelativeToFrame(bool fixedElementsLayoutRelativeToFrame);
    void setFixedPositionCreatesStackingContext(bool fixedPositionCreatesStackingContext);
    void setForceCompositingMode(bool forceCompositingMode);
    void setForceFTPDirectoryListings(bool forceFTPDirectoryListings);
    void setForceSoftwareWebGLRendering(bool forceSoftwareWebGLRendering);
    void setFrameFlatteningEnabled(bool frameFlatteningEnabled);
    void setFTPDirectoryTemplatePath(const String& ftpDirectoryTemplatePath);
    void setFullScreenEnabled(bool fullScreenEnabled);
    void setHyperlinkAuditingEnabled(bool hyperlinkAuditingEnabled);
    void setIncrementalRenderingSuppressionTimeoutInSeconds(double incrementalRenderingSuppressionTimeoutInSeconds);
    void setInteractiveFormValidationEnabled(bool interactiveFormValidationEnabled);
    void setJavaScriptCanAccessClipboard(bool javaScriptCanAccessClipboard);
    void setJavaScriptCanOpenWindowsAutomatically(bool javaScriptCanOpenWindowsAutomatically);
    void setJavaScriptExperimentsEnabled(bool javaScriptExperimentsEnabled);
    void setLayoutFallbackWidth(int layoutFallbackWidth);
    void setLoadDeferringEnabled(bool loadDeferringEnabled);
    void setLoadsSiteIconsIgnoringImageLoadingSetting(bool loadsSiteIconsIgnoringImageLoadingSetting);
    void setLocalFileContentSniffingEnabled(bool localFileContentSniffingEnabled);
    void setLocalStorageDatabasePath(const String& localStorageDatabasePath);
    void setLocalStorageEnabled(bool localStorageEnabled);
    void setLogsPageMessagesToSystemConsoleEnabled(bool logsPageMessagesToSystemConsoleEnabled);
    void setMaximumDecodedImageSize(size_t maximumDecodedImageSize);
    void setMaximumHTMLParserDOMTreeDepth(unsigned maximumHTMLParserDOMTreeDepth);
    void setMaximumPlugInSnapshotAttempts(unsigned maximumPlugInSnapshotAttempts);
    void setMediaEnabled(bool mediaEnabled);
    void setMediaPlaybackAllowsAirPlay(bool mediaPlaybackAllowsAirPlay);
    void setMediaPlaybackAllowsInline(bool mediaPlaybackAllowsInline);
    void setMediaPlaybackRequiresUserGesture(bool mediaPlaybackRequiresUserGesture);
    void setMediaSourceEnabled(bool mediaSourceEnabled);
    void setMediaStreamEnabled(bool mediaStreamEnabled);
    void setMinimumAccelerated2dCanvasSize(int minimumAccelerated2dCanvasSize);
    void setMinimumFontSize(int minimumFontSize);
    void setMinimumLogicalFontSize(int minimumLogicalFontSize);
    void setMinimumZoomFontSize(float minimumZoomFontSize);
    void setMultithreadedWebGLEnabled(bool multithreadedWebGLEnabled);
    void setNeedsIsLoadingInAPISenseQuirk(bool needsIsLoadingInAPISenseQuirk);
    void setNeedsKeyboardEventDisambiguationQuirks(bool needsKeyboardEventDisambiguationQuirks);
    void setNeedsSiteSpecificQuirks(bool needsSiteSpecificQuirks);
    void setNotificationsEnabled(bool notificationsEnabled);
    void setOfflineWebApplicationCacheEnabled(bool offlineWebApplicationCacheEnabled);
    void setOpenGLMultisamplingEnabled(bool openGLMultisamplingEnabled);
    void setPageCacheSupportsPlugins(bool pageCacheSupportsPlugins);
    void setPaginateDuringLayoutEnabled(bool paginateDuringLayoutEnabled);
    void setPasswordEchoDurationInSeconds(double passwordEchoDurationInSeconds);
    void setPasswordEchoEnabled(bool passwordEchoEnabled);
    void setPlugInSnapshottingEnabled(bool plugInSnapshottingEnabled);
    void setPrimaryPlugInSnapshotDetectionEnabled(bool primaryPlugInSnapshotDetectionEnabled);
    void setPrivilegedWebGLExtensionsEnabled(bool privilegedWebGLExtensionsEnabled);
    void setRegionBasedColumnsEnabled(bool regionBasedColumnsEnabled);
    void setRequestAnimationFrameEnabled(bool requestAnimationFrameEnabled);
    void setScriptMarkupEnabled(bool scriptMarkupEnabled);
    void setScrollAnimatorEnabled(bool scrollAnimatorEnabled);
    void setScrollingCoordinatorEnabled(bool scrollingCoordinatorEnabled);
    void setSelectTrailingWhitespaceEnabled(bool selectTrailingWhitespaceEnabled);
    void setSelectionIncludesAltImageText(bool selectionIncludesAltImageText);
    void setSessionStorageQuota(unsigned sessionStorageQuota);
    void setShouldDisplayCaptions(bool shouldDisplayCaptions);
    void setShouldDisplaySubtitles(bool shouldDisplaySubtitles);
    void setShouldDisplayTextDescriptions(bool shouldDisplayTextDescriptions);
    void setShouldInjectUserScriptsInInitialEmptyDocument(bool shouldInjectUserScriptsInInitialEmptyDocument);
    void setShouldPrintBackgrounds(bool shouldPrintBackgrounds);
    void setShouldRespectImageOrientation(bool shouldRespectImageOrientation);
    void setShowDebugBorders(bool showDebugBorders);
    void setShowRepaintCounter(bool showRepaintCounter);
    void setShowsToolTipOverTruncatedText(bool showsToolTipOverTruncatedText);
    void setShowsURLsInToolTips(bool showsURLsInToolTips);
    void setShrinksStandaloneImagesToFit(bool shrinksStandaloneImagesToFit);
    void setSimpleLineLayoutDebugBordersEnabled(bool simpleLineLayoutDebugBordersEnabled);
    void setSimpleLineLayoutEnabled(bool simpleLineLayoutEnabled);
    void setSmartInsertDeleteEnabled(bool smartInsertDeleteEnabled);
    void setSnapshotAllPlugIns(bool snapshotAllPlugIns);
    void setSpatialNavigationEnabled(bool spatialNavigationEnabled);
    void setSupportsMultipleWindows(bool supportsMultipleWindows);
    void setSuppressesIncrementalRendering(bool suppressesIncrementalRendering);
    void setSyncXHRInDocumentsEnabled(bool syncXHRInDocumentsEnabled);
    void setTextAreasAreResizable(bool textAreasAreResizable);
    void setThreadedHTMLParser(bool threadedHTMLParser);
    void setTouchAdjustmentEnabled(bool touchAdjustmentEnabled);
    void setTouchDragDropEnabled(bool touchDragDropEnabled);
    void setTreatsAnyTextCSSLinkAsStylesheet(bool treatsAnyTextCSSLinkAsStylesheet);
    void setUnifiedTextCheckerEnabled(bool unifiedTextCheckerEnabled);
    void setUnsafePluginPastingEnabled(bool unsafePluginPastingEnabled);
    void setUseLegacyBackgroundSizeShorthandBehavior(bool useLegacyBackgroundSizeShorthandBehavior);
    void setUseLegacyTextAlignPositionedElementBehavior(bool useLegacyTextAlignPositionedElementBehavior);
    void setUsePreHTML5ParserQuirks(bool usePreHTML5ParserQuirks);
    void setUseThreadedHTMLParserForDataURLs(bool useThreadedHTMLParserForDataURLs);
    void setUsesDashboardBackwardCompatibilityMode(bool usesDashboardBackwardCompatibilityMode);
    void setUsesEncodingDetector(bool usesEncodingDetector);
    void setValidationMessageTimerMagnification(int validationMessageTimerMagnification);
    void setWantsBalancedSetDefersLoadingBehavior(bool wantsBalancedSetDefersLoadingBehavior);
    void setWebArchiveDebugModeEnabled(bool webArchiveDebugModeEnabled);
    void setWebAudioEnabled(bool webAudioEnabled);
    void setWebGLEnabled(bool webGLEnabled);
    void setWebGLErrorsToConsoleEnabled(bool webGLErrorsToConsoleEnabled);
    void setWebSecurityEnabled(bool webSecurityEnabled);
    void setWindowFocusRestricted(bool windowFocusRestricted);
    void setXSSAuditorEnabled(bool xssAuditorEnabled);

private:
    Page* m_page;

    bool m_DOMPasteAllowed;
    bool m_accelerated2dCanvasEnabled;
    bool m_acceleratedCompositedAnimationsEnabled;
    bool m_acceleratedCompositingEnabled;
    bool m_acceleratedCompositingForFixedPositionEnabled;
    bool m_acceleratedCompositingForOverflowScrollEnabled;
    bool m_acceleratedCompositingForScrollableFramesEnabled;
    bool m_acceleratedDrawingEnabled;
    bool m_acceleratedFiltersEnabled;
    bool m_allowCustomScrollbarInMainFrame;
    bool m_allowDisplayOfInsecureContent;
    bool m_allowFileAccessFromFileURLs;
    bool m_allowMultiElementImplicitSubmission;
    bool m_allowRunningOfInsecureContent;
    bool m_allowScriptsToCloseWindows;
    bool m_allowUniversalAccessFromFileURLs;
    bool m_antialiased2dCanvasEnabled;
    bool m_applicationChromeMode;
    bool m_applyDeviceScaleFactorInCompositor;
    bool m_asynchronousSpellCheckingEnabled;
    bool m_authorAndUserStylesEnabled;
    bool m_autoscrollForDragAndDropEnabled;
    bool m_autostartOriginPlugInSnapshottingEnabled;
    double m_backForwardCacheExpirationInterval;
    bool m_backgroundShouldExtendBeyondPage;
    bool m_backspaceKeyNavigationEnabled;
    bool m_canvasUsesAcceleratedDrawing;
    bool m_caretBrowsingEnabled;
    bool m_compositedScrollingForFramesEnabled;
    bool m_cookieEnabled;
    bool m_crossOriginCheckInGetMatchedCSSRulesDisabled;
    bool m_cssGridLayoutEnabled;
    int m_defaultFixedFontSize;
    int m_defaultFontSize;
    String m_defaultTextEncodingName;
    String m_defaultVideoPosterURL;
    bool m_delegatesPageScaling;
    bool m_developerExtrasEnabled;
    int m_deviceHeight;
    bool m_deviceSupportsMouse;
    bool m_deviceSupportsTouch;
    int m_deviceWidth;
    bool m_diagnosticLoggingEnabled;
    bool m_downloadableBinaryFontsEnabled;
    bool m_enforceCSSMIMETypeInNoQuirksMode;
    bool m_experimentalNotificationsEnabled;
    bool m_fixedElementsLayoutRelativeToFrame;
    bool m_fixedPositionCreatesStackingContext;
    bool m_forceCompositingMode;
    bool m_forceFTPDirectoryListings;
    bool m_forceSoftwareWebGLRendering;
    bool m_frameFlatteningEnabled;
    String m_ftpDirectoryTemplatePath;
#if ENABLE(FULLSCREEN_API)
    bool m_fullScreenEnabled;
#endif
    bool m_hyperlinkAuditingEnabled;
    double m_incrementalRenderingSuppressionTimeoutInSeconds;
    bool m_interactiveFormValidationEnabled;
    bool m_javaScriptCanAccessClipboard;
    bool m_javaScriptCanOpenWindowsAutomatically;
    bool m_javaScriptExperimentsEnabled;
    int m_layoutFallbackWidth;
    bool m_loadDeferringEnabled;
    bool m_loadsSiteIconsIgnoringImageLoadingSetting;
    bool m_localFileContentSniffingEnabled;
    String m_localStorageDatabasePath;
    bool m_localStorageEnabled;
    bool m_logsPageMessagesToSystemConsoleEnabled;
    size_t m_maximumDecodedImageSize;
    unsigned m_maximumHTMLParserDOMTreeDepth;
    unsigned m_maximumPlugInSnapshotAttempts;
    bool m_mediaEnabled;
#if ENABLE(IOS_AIRPLAY)
    bool m_mediaPlaybackAllowsAirPlay;
#endif
    bool m_mediaPlaybackAllowsInline;
    bool m_mediaPlaybackRequiresUserGesture;
    bool m_mediaSourceEnabled;
    bool m_mediaStreamEnabled;
    int m_minimumAccelerated2dCanvasSize;
    int m_minimumFontSize;
    int m_minimumLogicalFontSize;
#if ENABLE(IOS_TEXT_AUTOSIZING)
    float m_minimumZoomFontSize;
#endif
    bool m_multithreadedWebGLEnabled;
    bool m_needsIsLoadingInAPISenseQuirk;
    bool m_needsKeyboardEventDisambiguationQuirks;
    bool m_needsSiteSpecificQuirks;
    bool m_notificationsEnabled;
    bool m_offlineWebApplicationCacheEnabled;
    bool m_openGLMultisamplingEnabled;
    bool m_pageCacheSupportsPlugins;
    bool m_paginateDuringLayoutEnabled;
    double m_passwordEchoDurationInSeconds;
    bool m_passwordEchoEnabled;
    bool m_plugInSnapshottingEnabled;
    bool m_primaryPlugInSnapshotDetectionEnabled;
    bool m_privilegedWebGLExtensionsEnabled;
    bool m_regionBasedColumnsEnabled;
    bool m_requestAnimationFrameEnabled;
    bool m_scriptMarkupEnabled;
#if ENABLE(SMOOTH_SCROLLING)
    bool m_scrollAnimatorEnabled;
#endif
    bool m_scrollingCoordinatorEnabled;
    bool m_selectTrailingWhitespaceEnabled;
    bool m_selectionIncludesAltImageText;
    unsigned m_sessionStorageQuota;
#if ENABLE(VIDEO_TRACK)
    bool m_shouldDisplayCaptions;
#endif
#if ENABLE(VIDEO_TRACK)
    bool m_shouldDisplaySubtitles;
#endif
#if ENABLE(VIDEO_TRACK)
    bool m_shouldDisplayTextDescriptions;
#endif
    bool m_shouldInjectUserScriptsInInitialEmptyDocument;
    bool m_shouldPrintBackgrounds;
    bool m_shouldRespectImageOrientation;
    bool m_showDebugBorders;
    bool m_showRepaintCounter;
    bool m_showsToolTipOverTruncatedText;
    bool m_showsURLsInToolTips;
    bool m_shrinksStandaloneImagesToFit;
    bool m_simpleLineLayoutDebugBordersEnabled;
    bool m_simpleLineLayoutEnabled;
    bool m_smartInsertDeleteEnabled;
    bool m_snapshotAllPlugIns;
    bool m_spatialNavigationEnabled;
    bool m_supportsMultipleWindows;
    bool m_suppressesIncrementalRendering;
    bool m_syncXHRInDocumentsEnabled;
    bool m_textAreasAreResizable;
#if ENABLE(THREADED_HTML_PARSER)
    bool m_threadedHTMLParser;
#endif
    bool m_touchAdjustmentEnabled;
    bool m_touchDragDropEnabled;
    bool m_treatsAnyTextCSSLinkAsStylesheet;
    bool m_unifiedTextCheckerEnabled;
    bool m_unsafePluginPastingEnabled;
    bool m_useLegacyBackgroundSizeShorthandBehavior;
    bool m_useLegacyTextAlignPositionedElementBehavior;
    bool m_usePreHTML5ParserQuirks;
#if ENABLE(THREADED_HTML_PARSER)
    bool m_useThreadedHTMLParserForDataURLs;
#endif
#if ENABLE(DASHBOARD_SUPPORT)
    bool m_usesDashboardBackwardCompatibilityMode;
#endif
    bool m_usesEncodingDetector;
    int m_validationMessageTimerMagnification;
    bool m_wantsBalancedSetDefersLoadingBehavior;
#if ENABLE(WEB_ARCHIVE)
    bool m_webArchiveDebugModeEnabled;
#endif
    bool m_webAudioEnabled;
    bool m_webGLEnabled;
    bool m_webGLErrorsToConsoleEnabled;
    bool m_webSecurityEnabled;
    bool m_windowFocusRestricted;
    bool m_xssAuditorEnabled;
};

} // namespace WebCore
#endif // InternalSettingsGenerated_h
