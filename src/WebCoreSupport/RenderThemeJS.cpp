#include "config.h"
#include "RenderThemeJS.h"
#include "Settings.h"

#include "CSSFontSelector.h"
#include "CSSValueKeywords.h"
#include "Document.h"
#include "Element.h"
#include "Frame.h"
#include "FrameView.h"
#include "HTMLInputElement.h"
#include "HTMLMediaElement.h"
#include "HTMLMeterElement.h"
#include "HTMLNames.h"
#include "PaintInfo.h"
#include "RenderMediaControls.h"
#include "RenderMeter.h"
#include "RenderSlider.h"
#include "RenderView.h"
#include "StyleResolver.h"
#include "ScrollbarTheme.h"
#include "DebuggerJS.h"

using std::min;

// FIXME: The platform-independent code in this class should be factored out and merged with RenderThemeMac.

namespace WebCore {

  using namespace HTMLNames;

  enum {
    topMargin,
    rightMargin,
    bottomMargin,
    leftMargin
  };

  enum {
    topPadding,
    rightPadding,
    bottomPadding,
    leftPadding
  };


  ScrollbarTheme* ScrollbarTheme::nativeTheme() {
		notImplemented();
		return new ScrollbarTheme();
	}

  PassRefPtr<RenderTheme> RenderThemeJS::create()
  {

    return adoptRef(new RenderThemeJS);
  }

  PassRefPtr<RenderTheme> RenderTheme::themeForPage(Page* page)
  {

    return RenderThemeJS::create().leakRef();
  }

  static const unsigned stFocusRingColorID = 4;

  static const unsigned aquaFocusRingColor = 0xFF7DADD9;

#if ENABLE(METER_ELEMENT)
  void RenderThemeJS::adjustMeterStyle(StyleResolver*, RenderStyle* style, Element*) const
  {

    style->setBoxShadow(nullptr);
  }

  bool RenderThemeJS::supportsMeter(ControlPart part) const
  {

    switch (part) {
      case MeterPart:
        return true;
      default:
        return false;
    }
  }

  IntSize RenderThemeJS::meterSizeForBounds(const RenderMeter*, const IntRect& bounds) const
  {

    return bounds.size();
  }

  bool RenderThemeJS::paintMeter(RenderObject* renderObject, const PaintInfo& paintInfo, const IntRect& rect)
  {

    // NOTE: This routine is for testing only. It should be fleshed out with a real CG-based implementation.
    // Right now it uses a slider, with the thumb positioned at the meter point.
    if (!renderObject->isMeter())
      return true;

    HTMLMeterElement* element = toRenderMeter(renderObject)->meterElement();

    int remaining = static_cast<int>((1.0 - element->valueRatio()) * static_cast<double>(rect.size().width()));

    // Draw the background
    paintSliderTrack(renderObject, paintInfo, rect);

    // Draw the progress portion
    IntRect completedRect(rect);
    completedRect.contract(remaining, 0);

    paintSliderThumb(renderObject, paintInfo, completedRect);

    return true;
  }

#endif

  //ThemeControlState RenderThemeJS::determineState(RenderObject* o) const
  //{
  //  return 0;
  //}

  RenderThemeJS::RenderThemeJS()
  {

  }

  RenderThemeJS::~RenderThemeJS()
  {

  }

  Color RenderThemeJS::platformActiveSelectionBackgroundColor() const
  {

    return Color(181, 213, 255);
  }

  Color RenderThemeJS::platformInactiveSelectionBackgroundColor() const
  {

    return Color(212, 212, 212);
  }

  Color RenderThemeJS::activeListBoxSelectionBackgroundColor() const
  {
    // FIXME: This should probably just be a darker version of the platformActiveSelectionBackgroundColor

    return Color(56, 117, 215);
  }

  Color RenderThemeJS::platformFocusRingColor() const
  {

    return aquaFocusRingColor;
  }


  void RenderThemeJS::systemFont(CSSValueID valueID, FontDescription& fontDescription) const
  {

    static FontDescription systemFont;
    static FontDescription smallSystemFont;
    static FontDescription menuFont;
    static FontDescription labelFont;
    static FontDescription miniControlFont;
    static FontDescription smallControlFont;
    static FontDescription controlFont;
    static float size[] = { 13.0f, 11.0f, 9.0f };

    FontDescription* cachedDesc;
    float fontSize = 0;
    switch (valueID) {
      case CSSValueSmallCaption:
        cachedDesc = &smallSystemFont;
        if (!smallSystemFont.isAbsoluteSize())
          fontSize = size[2];
        break;
      case CSSValueMenu:
        cachedDesc = &menuFont;
        if (!menuFont.isAbsoluteSize())
          fontSize = size[0];
        break;
      case CSSValueStatusBar:
        cachedDesc = &labelFont;
        if (!labelFont.isAbsoluteSize())
          fontSize = 10.0f;
        break;
      case CSSValueWebkitMiniControl:
        cachedDesc = &miniControlFont;
        if (!miniControlFont.isAbsoluteSize())
          fontSize = size[2];
        break;
      case CSSValueWebkitSmallControl:
        cachedDesc = &smallControlFont;
        if (!smallControlFont.isAbsoluteSize())
          fontSize = size[2];
        break;
      case CSSValueWebkitControl:
        cachedDesc = &controlFont;
        if (!controlFont.isAbsoluteSize())
          fontSize = size[1];
        break;
      default:
        cachedDesc = &systemFont;
        if (!systemFont.isAbsoluteSize())
          fontSize = size[0];
    }

    if (fontSize) {
      cachedDesc->setIsAbsoluteSize(true);
      cachedDesc->setGenericFamily(FontDescription::NoFamily);
      cachedDesc->setOneFamily("Lucida Grande");
      cachedDesc->setSpecifiedSize(fontSize);
      cachedDesc->setWeight(FontWeightNormal);
      cachedDesc->setItalic(false);
    }
    fontDescription = *cachedDesc;
  }

  bool RenderThemeJS::isControlStyled(const RenderStyle* style, const BorderData& border,
																			const FillLayer& background, const Color& backgroundColor) const
  {

    return true;
  }

  void RenderThemeJS::adjustRepaintRect(const RenderObject* o, IntRect& r)
  {

  }

  IntRect RenderThemeJS::inflateRect(const IntRect& r, const IntSize& size, const int* margins) const
  {

    return r;
  }

  int RenderThemeJS::baselinePosition(const RenderObject* o) const
  {

    return 0;
  }

  bool RenderThemeJS::controlSupportsTints(const RenderObject* o) const
  {

    return true;
  }

  IntSize RenderThemeJS::sizeForFont(RenderStyle* style, const IntSize* sizes) const
  {

    return sizes[0];
  }

  IntSize RenderThemeJS::sizeForSystemFont(RenderStyle* style, const IntSize* sizes) const
  {

    return sizes[0];
  }

  void RenderThemeJS::setSizeFromFont(RenderStyle* style, const IntSize* sizes) const
  {

    // FIXME: Check is flawed, since it doesn't take min-width/max-width into account.
    IntSize size = sizeForFont(style, sizes);
    if (style->width().isIntrinsicOrAuto() && size.width() > 0)
      style->setWidth(Length(size.width(), Fixed));
    if (style->height().isAuto() && size.height() > 0)
      style->setHeight(Length(size.height(), Fixed));
  }

  bool RenderThemeJS::paintCheckbox(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  const IntSize* RenderThemeJS::checkboxSizes() const
  {

    static const IntSize sizes[3] = { IntSize(14, 14), IntSize(12, 12), IntSize(10, 10) };
    return sizes;
  }



  void RenderThemeJS::setCheckboxSize(RenderStyle* style) const
  {

    // If the width and height are both specified, then we have nothing to do.
    if (!style->width().isIntrinsicOrAuto() && !style->height().isAuto())
      return;

    // Use the font size to determine the intrinsic width of the control.
    setSizeFromFont(style, checkboxSizes());
  }

  bool RenderThemeJS::paintRadio(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  const IntSize* RenderThemeJS::radioSizes() const
  {

    static const IntSize sizes[3] = { IntSize(14, 15), IntSize(12, 13), IntSize(10, 10) };
    return sizes;
  }


  void RenderThemeJS::setRadioSize(RenderStyle* style) const
  {

    // If the width and height are both specified, then we have nothing to do.
    if (!style->width().isIntrinsicOrAuto() && !style->height().isAuto())
      return;

    // Use the font size to determine the intrinsic width of the control.
    setSizeFromFont(style, radioSizes());
  }

  void RenderThemeJS::adjustButtonStyle(StyleResolver* styleResolver, RenderStyle* style, Element* e) const
  {

  }

  const IntSize* RenderThemeJS::buttonSizes() const
  {

    static const IntSize sizes[3] = { IntSize(0, 21), IntSize(0, 18), IntSize(0, 15) };
    return sizes;
  }


  void RenderThemeJS::setButtonSize(RenderStyle* style) const
  {

    // If the width and height are both specified, then we have nothing to do.
    if (!style->width().isIntrinsicOrAuto() && !style->height().isAuto())
      return;

    // Use the font size to determine the intrinsic width of the control.
    setSizeFromFont(style, buttonSizes());
  }

  bool RenderThemeJS::paintButton(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  bool RenderThemeJS::paintTextField(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  void RenderThemeJS::adjustTextFieldStyle(StyleResolver*, RenderStyle*, Element*) const
  {

  }

  bool RenderThemeJS::paintCapsLockIndicator(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return true;
  }

  bool RenderThemeJS::paintTextArea(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  void RenderThemeJS::adjustTextAreaStyle(StyleResolver*, RenderStyle*, Element*) const
  {

  }



  const IntSize* RenderThemeJS::popupButtonSizes() const
  {

    static const IntSize sizes[3] = { IntSize(0, 21), IntSize(0, 18), IntSize(0, 15) };
    return sizes;
  }


  bool RenderThemeJS::paintMenuList(RenderObject* o, const PaintInfo& info, const IntRect& r)
  {

    return false;
  }

  const float baseFontSize = 11.0f;
  const float baseArrowHeight = 5.0f;
  const float baseArrowWidth = 7.0f;
  const int arrowPaddingLeft = 5;
  const int arrowPaddingRight = 5;
  const int paddingBeforeSeparator = 4;
  const int baseBorderRadius = 5;
  const int styledPopupPaddingLeft = 8;
  const int styledPopupPaddingTop = 1;
  const int styledPopupPaddingBottom = 2;


  void RenderThemeJS::paintMenuListButtonGradients(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

  }

  bool RenderThemeJS::paintMenuListButtonDecorations(RenderObject* renderer, const PaintInfo& paintInfo, const IntRect& rect)
  {

    return false;
  }

  void RenderThemeJS::adjustMenuListStyle(StyleResolver* styleResolver, RenderStyle* style, Element* e) const
  {

  }

  int RenderThemeJS::popupInternalPaddingLeft(RenderStyle* style) const
  {

    /*if (style->appearance() == MenulistPart)
		 return popupButtonPadding(controlSizeForFont(style))[leftPadding];
		 if (style->appearance() == MenulistButtonPart)
		 return styledPopupPaddingLeft;*/
    return 0;
  }

  int RenderThemeJS::popupInternalPaddingRight(RenderStyle* style) const
  {

    /*if (style->appearance() == MenulistPart)
		 return popupButtonPadding(controlSizeForFont(style))[rightPadding];
		 if (style->appearance() == MenulistButtonPart) {
		 float fontScale = style->fontSize() / baseFontSize;
		 float arrowWidth = baseArrowWidth * fontScale;
		 return static_cast<int>(ceilf(arrowWidth + arrowPaddingLeft + arrowPaddingRight + paddingBeforeSeparator));
		 }*/
    return 0;
  }

  int RenderThemeJS::popupInternalPaddingTop(RenderStyle* style) const
  {

    /*if (style->appearance() == MenulistPart)
		 return popupButtonPadding(controlSizeForFont(style))[topPadding];
		 if (style->appearance() == MenulistButtonPart)
		 return styledPopupPaddingTop;*/
    return 0;
  }

  int RenderThemeJS::popupInternalPaddingBottom(RenderStyle* style) const
  {

    /*if (style->appearance() == MenulistPart)
		 return popupButtonPadding(controlSizeForFont(style))[bottomPadding];
		 if (style->appearance() == MenulistButtonPart)
		 return styledPopupPaddingBottom;*/
    return 0;
  }

  void RenderThemeJS::adjustMenuListButtonStyle(StyleResolver*, RenderStyle* style, Element*) const
  {

    float fontScale = style->fontSize() / baseFontSize;

    style->resetPadding();
    style->setBorderRadius(IntSize(int(baseBorderRadius + fontScale - 1), int(baseBorderRadius + fontScale - 1))); // FIXME: Round up?

    const int minHeight = 15;
    style->setMinHeight(Length(minHeight, Fixed));

    style->setLineHeight(RenderStyle::initialLineHeight());
  }

  const IntSize* RenderThemeJS::menuListSizes() const
  {

    static const IntSize sizes[3] = { IntSize(9, 0), IntSize(5, 0), IntSize(0, 0) };
    return sizes;
  }

  int RenderThemeJS::minimumMenuListSize(RenderStyle* style) const
  {

    return sizeForSystemFont(style, menuListSizes()).width();
  }

  const int trackWidth = 5;
  const int trackRadius = 2;

  bool RenderThemeJS::paintSliderTrack(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  void RenderThemeJS::adjustSliderThumbStyle(StyleResolver* styleResolver, RenderStyle* style, Element* e) const
  {

    RenderTheme::adjustSliderThumbStyle(styleResolver, style, e);
    style->setBoxShadow(nullptr);
  }

  const float verticalSliderHeightPadding = 0.1f;

  bool RenderThemeJS::paintSliderThumb(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {

    return false;
  }

  const int sliderThumbWidth = 15;
  const int sliderThumbHeight = 15;

  void RenderThemeJS::adjustSliderThumbSize(RenderStyle* style, Element*) const
  {

    if (style->appearance() == SliderThumbHorizontalPart || style->appearance() == SliderThumbVerticalPart) {
      style->setWidth(Length(sliderThumbWidth, Fixed));
      style->setHeight(Length(sliderThumbHeight, Fixed));
    }
#if ENABLE(VIDEO)
    else if (style->appearance() == MediaSliderThumbPart)
      RenderMediaControls::adjustMediaSliderThumbSize(style);
#endif
  }

  bool RenderThemeJS::paintSearchField(RenderObject* o, const PaintInfo& paintInfo, const IntRect& r)
  {
	
		return false;
  }

  const IntSize* RenderThemeJS::searchFieldSizes() const
  {

    static const IntSize sizes[3] = { IntSize(0, 22), IntSize(0, 19), IntSize(0, 15) };
    return sizes;
  }

  void RenderThemeJS::setSearchFieldSize(RenderStyle* style) const
  {

    // If the width and height are both specified, then we have nothing to do.
    if (!style->width().isIntrinsicOrAuto() && !style->height().isAuto())
      return;

    // Use the font size to determine the intrinsic width of the control.
    setSizeFromFont(style, searchFieldSizes());
  }

  void RenderThemeJS::adjustSearchFieldStyle(StyleResolver* styleResolver, RenderStyle* style, Element* e) const
  {

    // Override border.
    style->resetBorder();
    const short borderWidth = 2;
    style->setBorderLeftWidth(borderWidth);
    style->setBorderLeftStyle(INSET);
    style->setBorderRightWidth(borderWidth);
    style->setBorderRightStyle(INSET);
    style->setBorderBottomWidth(borderWidth);
    style->setBorderBottomStyle(INSET);
    style->setBorderTopWidth(borderWidth);
    style->setBorderTopStyle(INSET);

    // Override height.
    style->setHeight(Length(Auto));
    setSearchFieldSize(style);

    // Override padding size to match AppKit text positioning.
    const int padding = 1;
    style->setPaddingLeft(Length(padding, Fixed));
    style->setPaddingRight(Length(padding, Fixed));
    style->setPaddingTop(Length(padding, Fixed));
    style->setPaddingBottom(Length(padding, Fixed));
  }

  bool RenderThemeJS::paintSearchFieldCancelButton(RenderObject* o, const PaintInfo& paintInfo, const IntRect&)
  {

    return false;
  }

  const IntSize* RenderThemeJS::cancelButtonSizes() const
  {

    static const IntSize sizes[3] = { IntSize(16, 13), IntSize(13, 11), IntSize(13, 9) };
    return sizes;
  }

  void RenderThemeJS::adjustSearchFieldCancelButtonStyle(StyleResolver*, RenderStyle* style, Element*) const
  {

    IntSize size = sizeForSystemFont(style, cancelButtonSizes());
    style->setWidth(Length(size.width(), Fixed));
    style->setHeight(Length(size.height(), Fixed));
  }

  const IntSize* RenderThemeJS::resultsButtonSizes() const
  {

    static const IntSize sizes[3] = { IntSize(19, 13), IntSize(17, 11), IntSize(17, 9) };
    return sizes;
  }

  const int emptyResultsOffset = 9;
  void RenderThemeJS::adjustSearchFieldDecorationPartStyle(StyleResolver*, RenderStyle* style, Element*) const
  {

    IntSize size = sizeForSystemFont(style, resultsButtonSizes());
    style->setWidth(Length(size.width() - emptyResultsOffset, Fixed));
    style->setHeight(Length(size.height(), Fixed));
  }

  bool RenderThemeJS::paintSearchFieldDecorationPart(RenderObject*, const PaintInfo&, const IntRect&)
  {

    return false;
  }

  void RenderThemeJS::adjustSearchFieldResultsDecorationPartStyle(StyleResolver*, RenderStyle* style, Element*) const
  {

    IntSize size = sizeForSystemFont(style, resultsButtonSizes());
    style->setWidth(Length(size.width(), Fixed));
    style->setHeight(Length(size.height(), Fixed));
  }

  bool RenderThemeJS::paintSearchFieldResultsDecorationPart(RenderObject* o, const PaintInfo& paintInfo, const IntRect&)
  {

    return false;
  }

  const int resultsArrowWidth = 5;
  void RenderThemeJS::adjustSearchFieldResultsButtonStyle(StyleResolver*, RenderStyle* style, Element*) const
  {

    IntSize size = sizeForSystemFont(style, resultsButtonSizes());
    style->setWidth(Length(size.width() + resultsArrowWidth, Fixed));
    style->setHeight(Length(size.height(), Fixed));
  }

  bool RenderThemeJS::paintSearchFieldResultsButton(RenderObject* o, const PaintInfo& paintInfo, const IntRect&)
  {

    return false;
  }
  
} // namespace WebCore
