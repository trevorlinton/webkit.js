/* Licensed under BSD style license.
 * (c) 2014 True Interactions
 */
#include "config.h"
#include "IntSize.h"
#include "FloatRect.h"
#include "DebuggerJS.h"
#include "ChromeClientJS.h"
#include "AcceleratedContext.h"
#include "FrameView.h"
#include "GraphicsLayer.h"
#include "GraphicsLayerFactory.h"

#include <WTF/CurrentTime.h>
#include <platform/cairo/WidgetBackingStore.h>
#include <platform/cairo/WidgetBackingStoreCairo.h>

#include <emscripten.h>

using namespace WebCore;

namespace WebCore {






	/**
	 * characters used for Base64 encoding
	 */
	static const char *BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	/**
	 * encode three bytes using base64 (RFC 3548)
	 *
	 * @param triple three bytes that should be encoded
	 * @param result buffer of four characters where the result is stored
	 */
	static void _base64_encode_triple(unsigned char triple[3], char result[4])
	{
    int tripleValue, i;

    tripleValue = triple[0];
    tripleValue *= 256;
    tripleValue += triple[1];
    tripleValue *= 256;
    tripleValue += triple[2];

    for (i=0; i<4; i++)
    {
			result[3-i] = BASE64_CHARS[tripleValue%64];
			tripleValue /= 64;
    }
	}



	/**
	 * determine the value of a base64 encoding character
	 *
	 * @param base64char the character of which the value is searched
	 * @return the value in case of success (0-63), -1 on failure
	 */
	static int _base64_char_value(char base64char)
	{
    if (base64char >= 'A' && base64char <= 'Z')
			return base64char-'A';
    if (base64char >= 'a' && base64char <= 'z')
			return base64char-'a'+26;
    if (base64char >= '0' && base64char <= '9')
			return base64char-'0'+2*26;
    if (base64char == '+')
			return 2*26+10;
    if (base64char == '/')
			return 2*26+11;
    return -1;
	}

	/**
	 * decode a 4 char base64 encoded byte triple
	 *
	 * @param quadruple the 4 characters that should be decoded
	 * @param result the decoded data
	 * @return lenth of the result (1, 2 or 3), 0 on failure
	 */
	static int _base64_decode_triple(char quadruple[4], char *result)
	{
    int i, triple_value, bytes_to_decode = 3, only_equals_yet = 1;
    int char_value[4];

    for (i=0; i<4; i++)
			char_value[i] = _base64_char_value(quadruple[i]);

    /* check if the characters are valid */
    for (i=3; i>=0; i--)
    {
			if (char_value[i]<0)
			{
				if (only_equals_yet && quadruple[i]=='=')
				{
					/* we will ignore this character anyway, make it something
					 * that does not break our calculations */
					char_value[i]=0;
					bytes_to_decode--;
					continue;
				}
				return 0;
			}
			/* after we got a real character, no other '=' are allowed anymore */
			only_equals_yet = 0;
    }

    /* if we got "====" as input, bytes_to_decode is -1 */
    if (bytes_to_decode < 0)
			bytes_to_decode = 0;

    /* make one big value out of the partial values */
    triple_value = char_value[0];
    triple_value *= 64;
    triple_value += char_value[1];
    triple_value *= 64;
    triple_value += char_value[2];
    triple_value *= 64;
    triple_value += char_value[3];

    /* break the big value into bytes */
    for (i=bytes_to_decode; i<3; i++)
			triple_value /= 256;
    for (i=bytes_to_decode-1; i>=0; i--)
    {
			result[i] = triple_value%256;
			triple_value /= 256;
    }

    return bytes_to_decode;
	}

	/**
	 * decode base64 encoded data
	 *
	 * @param source the encoded data (zero terminated)
	 * @param target pointer to the target buffer
	 * @param targetlen length of the target buffer
	 * @return length of converted data on success, -1 otherwise
	 */
	static size_t base64_decode(char *source, unsigned char *target, size_t targetlen)
	{
    char *src, *tmpptr;
    char quadruple[4], tmpresult[3];
    int i, tmplen = 3;
    size_t converted = 0;

    /* concatinate '===' to the source to handle unpadded base64 data */
    src = (char *)malloc(strlen(source)+5);
    if (src == NULL)
			return -1;
    strcpy(src, source);
    strcat(src, "====");
    tmpptr = src;

    /* convert as long as we get a full result */
    while (tmplen == 3)
    {
			/* get 4 characters to convert */
			for (i=0; i<4; i++)
			{
				/* skip invalid characters - we won't reach the end */
				while (*tmpptr != '=' && _base64_char_value(*tmpptr)<0)
					tmpptr++;

				quadruple[i] = *(tmpptr++);
			}

			/* convert the characters */
			tmplen = _base64_decode_triple(quadruple, tmpresult);

			/* check if the fit in the result buffer */
			if (targetlen < tmplen)
			{
				free(src);
				return -1;
			}

			/* put the partial result in the result buffer */
			memcpy(target, tmpresult, tmplen);
			target += tmplen;
			targetlen -= tmplen;
			converted += tmplen;
    }
		
    free(src);
    return converted;
	}


	/**
	 * encode an array of bytes using Base64 (RFC 3548)
	 *
	 * @param source the source buffer
	 * @param sourcelen the length of the source buffer
	 * @param target the target buffer
	 * @param targetlen the length of the target buffer
	 * @return 1 on success, 0 otherwise
	 */
	static int base64_encode(unsigned char *source, size_t sourcelen, char *target, size_t targetlen)
	{
    /* check if the result will fit in the target buffer */
    if ((sourcelen+2)/3*4 > targetlen-1)
			return 0;

    /* encode all full triples */
    while (sourcelen >= 3)
    {
			_base64_encode_triple(source, target);
			sourcelen -= 3;
			source += 3;
			target += 4;
    }

    /* encode the last one or two characters */
    if (sourcelen > 0)
    {
			unsigned char temp[3];
			memset(temp, 0, sizeof(temp));
			memcpy(temp, source, sourcelen);
			_base64_encode_triple(temp, target);
			target[3] = '=';
			if (sourcelen == 1)
				target[2] = '=';

			target += 4;
    }

    /* terminate the string */
    target[0] = 0;

    return 1;
	}























	static void paintWebView(WebKit::WebView* webView, Frame* frame, const Region& dirtyRegion);

  ChromeClientJS* ChromeClientJS::createClient(WebKit::WebView *view) {
    ChromeClientJS* client = new ChromeClientJS(view);
		IntSize size = roundedIntSize(view->positionAndSize().size());
		client->setWindowRect(FloatRect(0,0,size.width(),size.height()));
		return client;
  }


	static void clearEverywhereInBackingStore(WebKit::WebView* webView, cairo_t* cr)
	{
		webkitTrace();

    // The strategy here is to quickly draw white into this new canvas, so that
    // when a user quickly resizes the WebView in an environment that has opaque
    // resizing (like Gnome Shell), there are no drawing artifacts.
    //if (!webView->p()->transparent) {
		//	cairo_set_source_rgb(cr, 1, 1, 1);
		//	cairo_set_operator(cr, CAIRO_OPERATOR_SOURCE);
    //} else
		//	cairo_set_operator(cr, CAIRO_OPERATOR_CLEAR);
    //cairo_paint(cr);
	}

  ChromeClientJS::ChromeClientJS(WebKit::WebView *view)
		: m_view(view)
		, m_displayTimer(this, &ChromeClientJS::paint)
		, m_forcePaint(false)
		, m_lastDisplayTime(0)
  {
		ASSERT(view);
  }

	ChromeClient* ChromeClientJS::toChromeClient() {
		return static_cast<WebCore::ChromeClient *>(this);
	}

	static void repaintEverythingSoonTimeout(ChromeClientJS* client)
	{
		webkitTrace();
    client->forceRepaint();
	}

	static void clipOutOldWidgetArea(cairo_t* cr, const IntSize& oldSize, const IntSize& newSize)
	{
		webkitTrace();

    cairo_move_to(cr, oldSize.width(), 0);
    cairo_line_to(cr, newSize.width(), 0);
    cairo_line_to(cr, newSize.width(), newSize.height());
    cairo_line_to(cr, 0, newSize.height());
    cairo_line_to(cr, 0, oldSize.height());
    cairo_line_to(cr, oldSize.width(), oldSize.height());
    cairo_close_path(cr);
    cairo_clip(cr);
	}


	static char tmp[] = "END";
	static unsigned char *pngbuffer = NULL;
	static char *b64pngbuffer = NULL;
	static size_t pnglength = 0;
	static size_t pngbufferlength = 0;

	static cairo_status_t cairo_write_png_interm(void *closure,const unsigned char *data, unsigned int length) {
		char *head = (char *)pngbuffer + pnglength;
		//if((pnglength + length) > pngbufferlength) {
		//	pngbufferlength += length;
		//	pngbuffer = realloc(pngbuffer, pngbufferlength);
		//}
		memcpy(head, data, length);

		pnglength += length;

		fprintf(stdout, "Writing png: %u %p\n", length, data);
		return CAIRO_STATUS_SUCCESS;
	}

	static void cairo_write_png_begin(cairo_surface_t *surface) {
		pngbuffer = (unsigned char *)malloc(1024*1024*3);
		pnglength = 0;
		pngbufferlength = 1024*1024*3;

		if(cairo_surface_write_to_png_stream(surface, &cairo_write_png_interm, tmp) != CAIRO_STATUS_SUCCESS) {
			fprintf(stdout, "Failed to write png stream.\n");
		}
	}

	static void cairo_write_png_end() {
		b64pngbuffer = (char *)malloc(1024*1024*3);

		int result = base64_encode(pngbuffer, pnglength, b64pngbuffer, 1024*1024*3);
		if(result) {
			fprintf(stdout, "<div style=\"width:500px;height:500px;url(data:image/png;base64,%s);\"></div>",b64pngbuffer);
		} else {
			fprintf(stdout, "Failed to encode base64.\n");
		}
	}

	void ChromeClientJS::forceRepaint() {
		m_dirtyRegion.unite(IntRect(IntPoint(), m_view->m_private->backingStore->size()));
		m_forcePaint = true;
		paint(0);
	}
	void ChromeClientJS::paint(WebCore::Timer<ChromeClientJS>*)
	{
		webkitTrace();
		if(m_dirtyRegion.width()==0 || m_dirtyRegion.height()==0) {
			fprintf(stdout, "paint:: Dirty rectangle is empty, not painting.\n");
			return;
		} else {
			fprintf(stdout, "paint:: dirty rect of %i %i %i %i\n", m_dirtyRegion.x(),m_dirtyRegion.y(),m_dirtyRegion.width(),m_dirtyRegion.height());

		}
		if(!m_view->m_private->backingStore) {
			fprintf(stdout, "paint:: Backstore doesn't exist, exiting.\n");
			return;
		}
    static const double minimumFrameInterval = 1.0 / 60.0; // No more than 60 frames a second.
    double timeSinceLastDisplay = monotonicallyIncreasingTime() - m_lastDisplayTime;
    double timeUntilNextDisplay = minimumFrameInterval - timeSinceLastDisplay;

    if (timeUntilNextDisplay > 0 && !m_forcePaint) {
			m_displayTimer.startOneShot(timeUntilNextDisplay);
			fprintf(stdout,"paint:: bailing out until next display. %f\n", timeUntilNextDisplay);
			return;
    }

    Frame& frame = (m_view->m_private->mainFrame->coreFrame()->mainFrame());
    if (!frame.contentRenderer() || !frame.view()) {
			fprintf(stdout, "paint:: Frame view or content renderer doesnt exist, exiting.\n");
			return;
		}

    frame.view()->updateLayoutAndStyleIfNeededRecursive();
    performAllPendingScrolls();
    paintWebView(m_view, &frame, m_dirtyRegion);

    const IntRect& rect = m_dirtyRegion;

		fprintf(stdout, "paint:: dirtyrect: %i %i %i %i\n",rect.x(),rect.y(),rect.width(),rect.height());
		// push to SDL surface
				//if (SDL_MUSTLOCK(m_view->m_private->backingStore->widget())) {

		//}
		//if(SDL_FillRect(m_view->m_private->sdl_screen, NULL, 0x00ff0000) != 0) {
		//	fprintf(stderr, "Error on SDL_FillRect: %s\n",SDL_GetError());
		//}


		cairo_write_png_begin(m_view->m_private->backingStore->cairoSurface());
		cairo_write_png_end();




		/** SDL Test Code
		SDL_Color pal[3];
		pal[0].r = 255;
		pal[0].g = 0;
		pal[0].b = 0;
		pal[0].unused = 0;

		pal[1].r = 0;
		pal[1].g = 255;
		pal[1].b = 0;
		pal[1].unused = 0;

		pal[2].r = 0;
		pal[2].g = 0;
		pal[2].b = 255;
		pal[2].unused = 0;

		SDL_SetColors(m_view->m_private->sdl_screen, pal, 0, 3);

		SDL_FillRect(m_view->m_private->sdl_screen, NULL, 0);

		{
			SDL_Rect rect = { 300, 0, 300, 200 };
			SDL_FillRect(m_view->m_private->sdl_screen, &rect, 1);
		}

		{
			SDL_Rect rect = { 0, 200, 600, 200 };
			SDL_FillRect(m_view->m_private->sdl_screen, &rect, 2);
		}

		//changing green color
		//to yellow
		pal[1].r = 255;
		SDL_SetColors(m_view->m_private->sdl_screen, &pal[1], 1, 1);

		{
			SDL_Rect rect = { 300, 200, 300, 200 };
			SDL_FillRect(m_view->m_private->sdl_screen, &rect, 1);
		}**/

















		fprintf(stdout, "paint:: beginning lock on SDL for surface: %p screen: %p\n",m_view->m_private->backingStore->widget(), m_view->m_private->sdl_screen);
		SDL_UnlockSurface(m_view->m_private->backingStore->widget());
		SDL_UnlockSurface(m_view->m_private->sdl_screen);

		if(SDL_BlitSurface(m_view->m_private->backingStore->widget(), NULL, m_view->m_private->sdl_screen, NULL) != 0) {
			fprintf(stderr, "Error on SDL_BlitSurface: %s\n",SDL_GetError());
		}

		SDL_LockSurface(m_view->m_private->backingStore->widget());
		SDL_LockSurface(m_view->m_private->sdl_screen);
		//SDL_UpdateRect(m_view->m_private->sdl_screen, 0, 0, 0, 0);
		//SDL_Flip(m_view->m_private->sdl_screen);
		//if (SDL_MUSTLOCK(m_view->m_private->backingStore->widget()))
		//fprintf(stdout, "paint:: ended unlock on SDL.\n");

		//TODO This seems to be inaccurate, it should only swap GL Buffers when
		// using an accelerated backstore.
		//m_view->m_private->backingStore = createBackingStore(0, roundedIntSize(m_view->positionAndSize().size()));
		//RefPtr<cairo_t> cr = adoptRef(cairo_create(m_view->m_private->backingStore->cairoSurface()));
		//clearEverywhereInBackingStore(m_view, cr.get());
		fprintf(stdout,"** Resetting dirty region!\n");
		m_dirtyRegion = IntRect();
    m_lastDisplayTime = monotonicallyIncreasingTime();
    m_repaintSoonSourceId = 0;
	}

	void ChromeClientJS::widgetSizeChanged(const IntSize& oldWidgetSize, IntSize newSize)
	{
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
    /*if (m_view->m_private->acceleratedContext &&
				m_view->m_private->acceleratedContext->enabled())
		{
			m_view->m_private->acceleratedContext->resizeRootLayer(newSize);
			return;
    }*/
		return;
#endif

    m_view->m_private->size = FloatRect(m_view->m_private->size.x(),m_view->m_private->size.y(), newSize.width(), newSize.height());
		if(m_view->m_private->mainFrame) {
			Frame* coreFrame = m_view->m_private->mainFrame->coreFrame();
			if (!coreFrame->view())
				return;
			coreFrame->view()->resize(roundedIntSize(m_view->m_private->size.size()));
		}

    // Grow the backing store by at least 1.5 times the current size. This prevents
    // lots of unnecessary allocations during an opaque resize.
    //RefPtr<WidgetBackingStore> backingStore = adoptRef(m_view->m_private->backingStore);
    if (m_view->m_private->backingStore && oldWidgetSize == newSize) {
			fprintf(stdout,"No change in old vs. new size, exiting.\n");
			return;
		}

    if (m_view->m_private->backingStore) {
			const IntSize& oldSize = m_view->m_private->backingStore->size();
			if (newSize.width() > oldSize.width())
				newSize.setWidth(std::max(newSize.width(), static_cast<int>(oldSize.width() * 1.5)));
			if (newSize.height() > oldSize.height())
				newSize.setHeight(std::max(newSize.height(), static_cast<int>(oldSize.height() * 1.5)));
    }

    // If we did not have a backing store before or if the backing store is growing, we need
    // to reallocate a new one and set it up so that we don't see artifacts while resizing.
    if (!m_view->m_private->backingStore
        || newSize.width() > m_view->m_private->backingStore->size().width()
        || newSize.height() > m_view->m_private->backingStore->size().height()) {

			SDL_Surface *surface = SDL_CreateRGBSurface(SDL_SWSURFACE, newSize.width(), newSize.height(), 32,		//SDL_HWSURFACE | SDL_HWPALETTE
																									 0x00FF0000,	/* Rmask */
																									 0x0000FF00,	/* Gmask */
																									 0x000000FF,	/* Bmask */
																									 0xFF000000); /* Amask */
			SDL_LockSurface(surface);
			PassOwnPtr<WidgetBackingStore> newBackingStore = WebCore::WidgetBackingStoreCairo::create(surface, newSize);
			RefPtr<cairo_t> cr = adoptRef(cairo_create(newBackingStore->cairoSurface()));

			clearEverywhereInBackingStore(m_view, cr.get());

			// Now we copy the old backing store image over the new cleared surface to prevent
			// annoying flashing as the widget grows. We do the "real" paint in a timeout
			// since we don't want to block resizing too long.
			if (m_view->m_private->backingStore) {
				cairo_set_source_surface(cr.get(), m_view->m_private->backingStore->cairoSurface(), 0, 0);
				cairo_rectangle(cr.get(), 0, 0, m_view->m_private->backingStore->size().width(), m_view->m_private->backingStore->size().height());
				cairo_fill(cr.get());
			}

			m_view->m_private->backingStore = newBackingStore;
			//backingStore = adoptRef(m_view->m_private->backingStore);

    } else if (oldWidgetSize.width() < newSize.width() || oldWidgetSize.height() < newSize.height()) {
			// The widget is growing, but we did not need to create a new backing store.
			// We should clear any old data outside of the old widget region.
			RefPtr<cairo_t> cr = adoptRef(cairo_create(m_view->m_private->backingStore->cairoSurface()));
			clipOutOldWidgetArea(cr.get(), oldWidgetSize, newSize);
			clearEverywhereInBackingStore(m_view, cr.get());
    }

    // We need to force a redraw and ignore the framerate cap.
    m_lastDisplayTime = 0;
    m_dirtyRegion.unite(IntRect(IntPoint(), m_view->m_private->backingStore->size()));
		fprintf(stdout, "United m_dirtyRegion: %i %i %i %i\n", m_dirtyRegion.x(),m_dirtyRegion.y(),m_dirtyRegion.width(),m_dirtyRegion.height());
    // WebCore timers by default have a lower priority which leads to more artifacts when opaque
    // resize is on
		emscripten_async_call((void (*)(void *))(&repaintEverythingSoonTimeout), this, 0);
	}


	static void coalesceRectsIfPossible(const IntRect& clipRect, Vector<IntRect>& rects)
	{
		webkitTrace();

    const unsigned int cRectThreshold = 10;
    const float cWastedSpaceThreshold = 0.75f;
    bool useUnionedRect = (rects.size() <= 1) || (rects.size() > cRectThreshold);
    if (!useUnionedRect) {
			// Attempt to guess whether or not we should use the unioned rect or the individual rects.
			// We do this by computing the percentage of "wasted space" in the union. If that wasted space
			// is too large, then we will do individual rect painting instead.
			float unionPixels = (clipRect.width() * clipRect.height());
			float singlePixels = 0;
			for (size_t i = 0; i < rects.size(); ++i)
				singlePixels += rects[i].width() * rects[i].height();
			float wastedSpace = 1 - (singlePixels / unionPixels);
			if (wastedSpace <= cWastedSpaceThreshold)
				useUnionedRect = true;
    }

    if (!useUnionedRect)
			return;

    rects.clear();
    rects.append(clipRect);
	}

	static void paintWebView(WebKit::WebView* webView, Frame* frame, const Region& dirtyRegion)
	{
		webkitTrace();
    if (!webView->p()->backingStore) {
			fprintf(stdout,"*** Paint requested but backstore is empty!\n");
			return;
		}

    Vector<IntRect> rects = dirtyRegion.rects();
    coalesceRectsIfPossible(dirtyRegion.bounds(), rects);

    RefPtr<cairo_t> backingStoreContext = adoptRef(cairo_create(webView->p()->backingStore->cairoSurface()));
    GraphicsContext gc(backingStoreContext.get());
    gc.applyDeviceScaleFactor(frame->page()->deviceScaleFactor());

    for (size_t i = 0; i < rects.size(); i++) {
			const IntRect& rect = rects[i];

			gc.save();
			gc.clip(rect);
			if (webView->p()->transparent)
				gc.clearRect(rect);
			frame->view()->paint(&gc, rect);
			gc.restore();
    }

    gc.save();
    gc.clip(dirtyRegion.bounds());
    //frame->page()->inspectorController().drawHighlight(gc);
    gc.restore();
	}

	void ChromeClientJS::performAllPendingScrolls()
	{
		webkitTrace();
    if (!m_view->m_private->backingStore)
			return;

    // Scroll all pending scroll rects and invalidate those parts of the widget.
    for (size_t i = 0; i < m_rectsToScroll.size(); i++) {
			IntRect& scrollRect = m_rectsToScroll[i];
			fprintf(stdout,"rectsToScroll: %i %i %i %i\n", scrollRect.x(),scrollRect.y(),scrollRect.width(),scrollRect.height());

			m_view->m_private->backingStore->scroll(scrollRect, m_scrollOffsets[i]);
			//SDL_UpdateRect(m_view->m_private->sdl_screen, scrollRect.x(), scrollRect.y(), scrollRect.width(), scrollRect.height());
			//SDL_GL_SwapWindow(m_view->m_private->sdl_window);

			//TODO: Update this, shouldn't always be used.
			//SDL_GL_SwapBuffers();
    }

    m_rectsToScroll.clear();
    m_scrollOffsets.clear();
	}

  void ChromeClientJS::chromeDestroyed()
  {
    notImplemented();
    delete this;
  }

  FloatRect ChromeClientJS::windowRect() {
		webkitTrace();
		return FloatRect(m_view->p()->size);
	}

  void ChromeClientJS::setWindowRect(const FloatRect& rect) {
		webkitTrace();
		m_view->p()->size = rect;
	}

  FloatRect ChromeClientJS::pageRect()
  {
		webkitTrace();
		return FloatRect(m_view->p()->size);
  }

  void ChromeClientJS::focus()
  {
    notImplemented();
  }

  void ChromeClientJS::unfocus()
  {
    notImplemented();
  }

  Page* ChromeClientJS::createWindow(Frame* frame, const FrameLoadRequest& frameLoadRequest, const WindowFeatures& coreFeatures, const NavigationAction&)
  {
    notImplemented();
    return 0;
  }

  void ChromeClientJS::show()
  {
    notImplemented();
  }

  bool ChromeClientJS::canRunModal()
  {
    notImplemented();
    return false;
  }

  void ChromeClientJS::runModal()
  {
    notImplemented();
  }

  void ChromeClientJS::setToolbarsVisible(bool visible)
  {
    notImplemented();
  }

  bool ChromeClientJS::toolbarsVisible()
  {
    notImplemented();
    return false;
  }

  void ChromeClientJS::setStatusbarVisible(bool visible)
  {
    notImplemented();
  }

  bool ChromeClientJS::statusbarVisible()
  {
    notImplemented();
    return false;
  }

  void ChromeClientJS::setScrollbarsVisible(bool visible)
  {
    notImplemented();
  }

  bool ChromeClientJS::scrollbarsVisible()
  {
    notImplemented();
    return false;
  }

  void ChromeClientJS::setMenubarVisible(bool visible)
  {
    notImplemented();
  }

  bool ChromeClientJS::menubarVisible()
  {
    notImplemented();
    return false;
  }

  void ChromeClientJS::setResizable(bool)
  {
    notImplemented();
  }

  void ChromeClientJS::closeWindowSoon()
  {
    notImplemented();
  }

  bool ChromeClientJS::canTakeFocus(FocusDirection)
  {
    notImplemented();
    return true;
  }

  void ChromeClientJS::takeFocus(FocusDirection)
  {
    notImplemented();
  }

  void ChromeClientJS::focusedElementChanged(Element*)
  {
    notImplemented();
  }

  void ChromeClientJS::focusedFrameChanged(Frame*)
  {
    notImplemented();
  }

  bool ChromeClientJS::canRunBeforeUnloadConfirmPanel()
  {
    notImplemented();
    return true;
  }

  bool ChromeClientJS::runBeforeUnloadConfirmPanel(const WTF::String& message, WebCore::Frame* frame)
  {
    notImplemented();
    return true;
  }

  void ChromeClientJS::addMessageToConsole(WebCore::MessageSource source, WebCore::MessageLevel level, const WTF::String& message, unsigned lineNumber, unsigned columnNumber, const WTF::String& sourceId)
  {
    notImplemented();
  }

  void ChromeClientJS::runJavaScriptAlert(Frame* frame, const String& message)
  {
    notImplemented();
  }

  bool ChromeClientJS::runJavaScriptConfirm(Frame* frame, const String& message)
  {
    notImplemented();
    return true;
  }

  bool ChromeClientJS::runJavaScriptPrompt(Frame* frame, const String& message, const String& defaultValue, String& result)
  {
    notImplemented();
    return true;
  }

  void ChromeClientJS::setStatusbarText(const String& string) { notImplemented(); }
  bool ChromeClientJS::shouldInterruptJavaScript()
  {

    return false;
  }

  KeyboardUIMode ChromeClientJS::keyboardUIMode()
  {

    return KeyboardAccessDefault;
  }

  IntRect ChromeClientJS::windowResizerRect() const
  {

    return IntRect();
  }

  void ChromeClientJS::invalidateRootView(const IntRect& updateRect, bool immediate)
  {
		notImplemented();
		//m_view->invalidate(updateRect, immediate);
  }

  void ChromeClientJS::invalidateContentsAndRootView(const IntRect& updateRect, bool immediate)
  {
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
		/*if (m_view->m_private->acceleratedContext &&
				m_view->m_private->acceleratedContext->enabled()) {
				m_view->m_private->acceleratedContext->setNonCompositedContentsNeedDisplay(updateRect);
				return;
		}*/
		return;
#endif

		if (updateRect.isEmpty()) {
			fprintf(stdout, "Requested invalidation of empty root view.\n");
			return;
		} else
			fprintf(stdout, "Requested invalidation of %i %i %i %i\n", updateRect.x(),updateRect.y(),updateRect.width(),updateRect.height());
    m_dirtyRegion.unite(updateRect);
		paint(0);
    //m_displayTimer.startOneShot(0);
		//m_view->invalidate(updateRect, immediate);
  }

  void ChromeClientJS::invalidateContentsForSlowScroll(const IntRect& updateRect, bool immediate)
  {

#if USE(ACCELERATED_COMPOSITING)
		/*if (m_view->m_private->acceleratedContext
				&& m_view->m_private->acceleratedContext->enabled()) {
			m_view->m_private->acceleratedContext->setNonCompositedContentsNeedDisplay(updateRect);
			return;
		}*/
		return;
#endif

		invalidateContentsAndRootView(updateRect, immediate);
  }

  void ChromeClientJS::scroll(const IntSize& delta, const IntRect& rectToScroll, const IntRect& clipRect)
  {
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
			/*if (m_view->m_private->acceleratedContext &&
					m_view->m_private->acceleratedContext->enabled()) {
					ASSERT(!rectToScroll.isEmpty());
					ASSERT(delta.width() || delta.height());
					m_view->m_private->acceleratedContext->scrollNonCompositedContents(rectToScroll, delta);
					return;
			}*/
		return;
#endif

    m_rectsToScroll.append(rectToScroll);
    m_scrollOffsets.append(delta);

    // The code to calculate the scroll repaint region is originally from WebKit2.
    // Get the part of the dirty region that is in the scroll rect.
    Region dirtyRegionInScrollRect = intersect(rectToScroll, m_dirtyRegion);
    if (!dirtyRegionInScrollRect.isEmpty()) {
			// There are parts of the dirty region that are inside the scroll rect.
			// We need to subtract them from the region, move them and re-add them.
			Region dirtyRegion = Region(m_dirtyRegion);
			dirtyRegion.subtract(rectToScroll);
			m_dirtyRegion = dirtyRegion.bounds();

			// Move the dirty parts.
			Region movedDirtyRegionInScrollRect = intersect(translate(dirtyRegionInScrollRect, delta), rectToScroll);

			// And add them back.
			m_dirtyRegion.unite(movedDirtyRegionInScrollRect.bounds());
    }

    // Compute the scroll repaint region. We ensure that we are not subtracting areas
    // that we've scrolled from outside the viewport from the repaint region.
    IntRect onScreenScrollRect = rectToScroll;
    onScreenScrollRect.intersect(IntRect(IntPoint(), enclosingIntRect(pageRect()).size()));
    Region scrollRepaintRegion = subtract(rectToScroll, translate(onScreenScrollRect, delta));

    m_dirtyRegion.unite(scrollRepaintRegion.bounds());
		m_displayTimer.startOneShot(0);
  }

  IntRect ChromeClientJS::rootViewToScreen(const IntRect& rect) const
  {
    notImplemented();
    return rect;
  }

  IntPoint ChromeClientJS::screenToRootView(const IntPoint& point) const
  {
    notImplemented();
    return point;
  }

  PlatformPageClient ChromeClientJS::platformPageClient() const
  {
    notImplemented();
    return m_view;
  }

  void ChromeClientJS::contentsSizeChanged(Frame* frame, const IntSize& size) const
  {
    notImplemented();
  }

  void ChromeClientJS::scrollbarsModeDidChange() const
  {
    notImplemented();
  }

  void ChromeClientJS::mouseDidMoveOverElement(const HitTestResult& hit, unsigned modifierFlags)
  {
    notImplemented();
  }

  void ChromeClientJS::setToolTip(const String& toolTip, TextDirection)
  {
    notImplemented();
  }

  void ChromeClientJS::print(Frame* frame)
  {
    notImplemented();
  }

  void ChromeClientJS::reachedMaxAppCacheSize(int64_t spaceNeeded)
  {
    notImplemented();
  }

  void ChromeClientJS::reachedApplicationCacheOriginQuota(SecurityOrigin*, int64_t)
  {
    notImplemented();
  }

  void ChromeClientJS::runOpenPanel(Frame*, PassRefPtr<FileChooser> prpFileChooser)
  {
    notImplemented();
  }

  void ChromeClientJS::loadIconForFiles(const Vector<WTF::String>& filenames, WebCore::FileIconLoader* loader)
  {
    notImplemented();
  }

  void ChromeClientJS::setCursor(const Cursor& cursor)
  {
    notImplemented();
  }

  void ChromeClientJS::setCursorHiddenUntilMouseMoves(bool)
  {
    notImplemented();
  }

  bool ChromeClientJS::selectItemWritingDirectionIsNatural()
  {
    notImplemented();
    return false;
  }

  bool ChromeClientJS::selectItemAlignmentFollowsMenuWritingDirection()
  {
    notImplemented();
    return false;
  }

  bool ChromeClientJS::hasOpenedPopup() const
  {
    notImplemented();
    return false;
  }

  PassRefPtr<PopupMenu> ChromeClientJS::createPopupMenu(PopupMenuClient*) const {
    notImplemented();
    return nullptr;
  }

  PassRefPtr<SearchPopupMenu> ChromeClientJS::createSearchPopupMenu(PopupMenuClient*) const {
    notImplemented();
    return nullptr;
  }
  void ChromeClientJS::delegatedScrollRequested(const IntPoint&) {
    notImplemented();
  }
  void ChromeClientJS::formStateDidChange(const WebCore::Node*) {
    notImplemented();
  }
  void ChromeClientJS::numWheelEventHandlersChanged(unsigned) {
    notImplemented();
  }
  void ChromeClientJS::scheduleAnimation() {
    notImplemented();
  }

	// Accelerated Compositing & Drawing Layers
  void ChromeClientJS::scheduleCompositingLayerFlush()
  {
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
    /*if(m_view->m_private->acceleratedContext &&
			 m_view->m_private->acceleratedContext->enabled())
			m_view->m_private->acceleratedContext->flushAndRenderLayers();*/
#endif
  }
  void ChromeClientJS::attachRootGraphicsLayer(Frame* frame, GraphicsLayer* rootLayer)
  {
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
		/*if(m_view->m_private->acceleratedContext) {
			bool turningOffCompositing = !rootLayer && m_view->m_private->acceleratedContext->enabled();
			bool turningOnCompositing = rootLayer && !m_view->m_private->acceleratedContext->enabled();

			m_view->m_private->acceleratedContext->setRootCompositingLayer(rootLayer);

			if (turningOnCompositing) {
				m_displayTimer.stop();
				m_view->m_private->backingStore = createBackingStore(0, IntSize(1, 1));
			}

			if (turningOffCompositing) {
				m_view->m_private->backingStore = createBackingStore(0, roundedIntSize(m_view->positionAndSize().size()));
				RefPtr<cairo_t> cr = adoptRef(cairo_create(m_view->m_private->backingStore->cairoSurface()));
				clearEverywhereInBackingStore(m_view, cr.get());
			}
		}*/
#endif
	}

  void ChromeClientJS::setNeedsOneShotDrawingSynchronization()
  {
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
    /*if(m_view->m_private->acceleratedContext &&
			 m_view->m_private->acceleratedContext->enabled())
			 m_view->m_private->acceleratedContext->flushAndRenderLayers();*/
#endif
  }
#if USE(ACCELERATED_COMPOSITING)

	ChromeClient::CompositingTriggerFlags ChromeClientJS::allowedCompositingTriggers() const
	{
		if (!platformPageClient())
			return false;
    return AllTriggers;
	}
#endif
}