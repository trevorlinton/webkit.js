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

#ifndef EventInterfaces_h
#define EventInterfaces_h

#if ENABLE(CSP_NEXT)
#define DOM_EVENT_INTERFACES_FOR_EACH_CSP_NEXT(macro) \
    macro(SecurityPolicyViolationEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_CSP_NEXT
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_CSP_NEXT(macro)
#endif

#if ENABLE(DEVICE_ORIENTATION)
#define DOM_EVENT_INTERFACES_FOR_EACH_DEVICE_ORIENTATION(macro) \
    macro(DeviceMotionEvent) \
    macro(DeviceOrientationEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_DEVICE_ORIENTATION
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_DEVICE_ORIENTATION(macro)
#endif

#if ENABLE(ENCRYPTED_MEDIA)
#define DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA(macro) \
    macro(MediaKeyEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA(macro)
#endif

#if ENABLE(ENCRYPTED_MEDIA_V2)
#define DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA_V2(macro) \
    macro(MediaKeyMessageEvent) \
    macro(MediaKeyNeededEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA_V2
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA_V2(macro)
#endif

#if ENABLE(FONT_LOAD_EVENTS)
#define DOM_EVENT_INTERFACES_FOR_EACH_FONT_LOAD_EVENTS(macro) \
    macro(CSSFontFaceLoadEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_FONT_LOAD_EVENTS
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_FONT_LOAD_EVENTS(macro)
#endif

#if ENABLE(INDEXED_DATABASE)
#define DOM_EVENT_INTERFACES_FOR_EACH_INDEXED_DATABASE(macro) \
    macro(IDBVersionChangeEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_INDEXED_DATABASE
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_INDEXED_DATABASE(macro)
#endif

#if ENABLE(INDIE_UI)
#define DOM_EVENT_INTERFACES_FOR_EACH_INDIE_UI(macro) \
    macro(UIRequestEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_INDIE_UI
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_INDIE_UI(macro)
#endif

#if ENABLE(INPUT_SPEECH)
#define DOM_EVENT_INTERFACES_FOR_EACH_INPUT_SPEECH(macro) \
    macro(SpeechInputEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_INPUT_SPEECH
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_INPUT_SPEECH(macro)
#endif

#if ENABLE(IOS_AIRPLAY)
#define DOM_EVENT_INTERFACES_FOR_EACH_IOS_AIRPLAY(macro) \
    macro(WebKitPlaybackTargetAvailabilityEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_IOS_AIRPLAY
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_IOS_AIRPLAY(macro)
#endif

#if ENABLE(IOS_GESTURE_EVENTS)
#define DOM_EVENT_INTERFACES_FOR_EACH_IOS_GESTURE_EVENTS(macro) \
    macro(GestureEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_IOS_GESTURE_EVENTS
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_IOS_GESTURE_EVENTS(macro)
#endif

#if ENABLE(MEDIA_STREAM)
#define DOM_EVENT_INTERFACES_FOR_EACH_MEDIA_STREAM(macro) \
    macro(MediaStreamEvent) \
    macro(MediaStreamTrackEvent) \
    macro(RTCDTMFToneChangeEvent) \
    macro(RTCDataChannelEvent) \
    macro(RTCIceCandidateEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_MEDIA_STREAM
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_MEDIA_STREAM(macro)
#endif

#if ENABLE(ORIENTATION_EVENTS)
#define DOM_EVENT_INTERFACES_FOR_EACH_ORIENTATION_EVENTS(macro) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_ORIENTATION_EVENTS
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_ORIENTATION_EVENTS(macro)
#endif

#if ENABLE(PROXIMITY_EVENTS)
#define DOM_EVENT_INTERFACES_FOR_EACH_PROXIMITY_EVENTS(macro) \
    macro(DeviceProximityEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_PROXIMITY_EVENTS
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_PROXIMITY_EVENTS(macro)
#endif

#if ENABLE(SCRIPTED_SPEECH)
#define DOM_EVENT_INTERFACES_FOR_EACH_SCRIPTED_SPEECH(macro) \
    macro(SpeechRecognitionError) \
    macro(SpeechRecognitionEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_SCRIPTED_SPEECH
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_SCRIPTED_SPEECH(macro)
#endif

#if ENABLE(SPEECH_SYNTHESIS)
#define DOM_EVENT_INTERFACES_FOR_EACH_SPEECH_SYNTHESIS(macro) \
    macro(SpeechSynthesisEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_SPEECH_SYNTHESIS
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_SPEECH_SYNTHESIS(macro)
#endif

#if ENABLE(SVG)
#define DOM_EVENT_INTERFACES_FOR_EACH_SVG(macro) \
    macro(SVGZoomEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_SVG
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_SVG(macro)
#endif

#if ENABLE(TOUCH_EVENTS)
#define DOM_EVENT_INTERFACES_FOR_EACH_TOUCH_EVENTS(macro) \
    macro(TouchEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_TOUCH_EVENTS
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_TOUCH_EVENTS(macro)
#endif

#if ENABLE(VIDEO_TRACK)
#define DOM_EVENT_INTERFACES_FOR_EACH_VIDEO_TRACK(macro) \
    macro(TrackEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_VIDEO_TRACK
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_VIDEO_TRACK(macro)
#endif

#if ENABLE(WEBGL)
#define DOM_EVENT_INTERFACES_FOR_EACH_WEBGL(macro) \
    macro(WebGLContextEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_WEBGL
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_WEBGL(macro)
#endif

#if ENABLE(WEB_AUDIO)
#define DOM_EVENT_INTERFACES_FOR_EACH_WEB_AUDIO(macro) \
    macro(AudioProcessingEvent) \
    macro(OfflineAudioCompletionEvent) \
// End of DOM_EVENT_INTERFACES_FOR_EACH_WEB_AUDIO
#else
#define DOM_EVENT_INTERFACES_FOR_EACH_WEB_AUDIO(macro)
#endif

#define DOM_EVENT_INTERFACES_FOR_EACH(macro) \
    \
    macro(BeforeLoadEvent) \
    macro(BeforeUnloadEvent) \
    macro(CompositionEvent) \
    macro(CustomEvent) \
    macro(ErrorEvent) \
    macro(Event) \
    macro(FocusEvent) \
    macro(HashChangeEvent) \
    macro(KeyboardEvent) \
    macro(MessageEvent) \
    macro(MouseEvent) \
    macro(MutationEvent) \
    macro(OverflowEvent) \
    macro(PageTransitionEvent) \
    macro(PopStateEvent) \
    macro(ProgressEvent) \
    macro(TextEvent) \
    macro(TransitionEvent) \
    macro(UIEvent) \
    macro(WebKitAnimationEvent) \
    macro(WebKitTransitionEvent) \
    macro(WheelEvent) \
    \
    DOM_EVENT_INTERFACES_FOR_EACH_CSP_NEXT(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_DEVICE_ORIENTATION(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_ENCRYPTED_MEDIA_V2(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_FONT_LOAD_EVENTS(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_INDEXED_DATABASE(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_INDIE_UI(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_INPUT_SPEECH(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_IOS_AIRPLAY(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_IOS_GESTURE_EVENTS(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_MEDIA_STREAM(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_ORIENTATION_EVENTS(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_PROXIMITY_EVENTS(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_SCRIPTED_SPEECH(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_SPEECH_SYNTHESIS(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_SVG(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_TOUCH_EVENTS(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_VIDEO_TRACK(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_WEBGL(macro) \
    DOM_EVENT_INTERFACES_FOR_EACH_WEB_AUDIO(macro) \

#endif // EventInterfaces_h
