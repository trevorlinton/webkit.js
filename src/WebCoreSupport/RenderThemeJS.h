#ifndef RenderThemeJS_h
#define RenderThemeJS_h

#include "RenderTheme.h"

namespace WebCore {

  class RenderStyle;

  class RenderThemeJS : public RenderTheme {
  public:
    static PassRefPtr<RenderTheme> create();

    virtual int baselinePosition(const RenderObject*) const;

    virtual bool controlSupportsTints(const RenderObject*) const;

    virtual bool supportsControlTints() const { return true; }

    virtual void adjustRepaintRect(const RenderObject*, IntRect&);

    virtual bool isControlStyled(const RenderStyle*, const BorderData&,
                                 const FillLayer&, const Color& backgroundColor) const;

    virtual Color platformActiveSelectionBackgroundColor() const;
    virtual Color platformInactiveSelectionBackgroundColor() const;
    virtual Color activeListBoxSelectionBackgroundColor() const;

    virtual Color platformFocusRingColor() const;

    virtual void systemFont(CSSValueID, FontDescription&) const;

    virtual int minimumMenuListSize(RenderStyle*) const;

    virtual void adjustSliderThumbSize(RenderStyle*, Element*) const;
    virtual void adjustSliderThumbStyle(StyleResolver*, RenderStyle*, Element*) const;

    virtual int popupInternalPaddingLeft(RenderStyle*) const;
    virtual int popupInternalPaddingRight(RenderStyle*) const;
    virtual int popupInternalPaddingTop(RenderStyle*) const;
    virtual int popupInternalPaddingBottom(RenderStyle*) const;

  protected:
    virtual bool paintCheckbox(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void setCheckboxSize(RenderStyle*) const;

    virtual bool paintRadio(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void setRadioSize(RenderStyle*) const;

    virtual void adjustButtonStyle(StyleResolver*, RenderStyle*, WebCore::Element*) const;
    virtual bool paintButton(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void setButtonSize(RenderStyle*) const;

    virtual bool paintTextField(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void adjustTextFieldStyle(StyleResolver*, RenderStyle*, Element*) const;

    virtual bool paintTextArea(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void adjustTextAreaStyle(StyleResolver*, RenderStyle*, Element*) const;

    virtual bool paintMenuList(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void adjustMenuListStyle(StyleResolver*, RenderStyle*, Element*) const;

    virtual bool paintMenuListButtonDecorations(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void adjustMenuListButtonStyle(StyleResolver*, RenderStyle*, Element*) const;

    virtual bool paintSliderTrack(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintSliderThumb(RenderObject*, const PaintInfo&, const IntRect&);

    virtual bool paintSearchField(RenderObject*, const PaintInfo&, const IntRect&);
    virtual void adjustSearchFieldStyle(StyleResolver*, RenderStyle*, Element*) const;

    virtual void adjustSearchFieldCancelButtonStyle(StyleResolver*, RenderStyle*, Element*) const;
    virtual bool paintSearchFieldCancelButton(RenderObject*, const PaintInfo&, const IntRect&);

    virtual void adjustSearchFieldDecorationPartStyle(StyleResolver*, RenderStyle*, Element*) const;
    virtual bool paintSearchFieldDecorationPart(RenderObject*, const PaintInfo&, const IntRect&);

    virtual void adjustSearchFieldResultsDecorationPartStyle(StyleResolver*, RenderStyle*, Element*) const;
    virtual bool paintSearchFieldResultsDecorationPart(RenderObject*, const PaintInfo&, const IntRect&);

    virtual void adjustSearchFieldResultsButtonStyle(StyleResolver*, RenderStyle*, Element*) const;
    virtual bool paintSearchFieldResultsButton(RenderObject*, const PaintInfo&, const IntRect&);

    virtual bool paintCapsLockIndicator(RenderObject*, const PaintInfo&, const IntRect&);

#if ENABLE(VIDEO)
    virtual bool paintMediaFullscreenButton(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintMediaPlayButton(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintMediaMuteButton(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintMediaSeekBackButton(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintMediaSeekForwardButton(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintMediaSliderTrack(RenderObject*, const PaintInfo&, const IntRect&);
    virtual bool paintMediaSliderThumb(RenderObject*, const PaintInfo&, const IntRect&);
#endif

#if ENABLE(METER_ELEMENT)
    virtual IntSize meterSizeForBounds(const RenderMeter*, const IntRect&) const OVERRIDE;
    virtual bool supportsMeter(ControlPart) const OVERRIDE;
    virtual void adjustMeterStyle(StyleResolver*, RenderStyle*, Element*) const OVERRIDE;
    virtual bool paintMeter(RenderObject*, const PaintInfo&, const IntRect&) OVERRIDE;
#endif

    virtual bool shouldShowPlaceholderWhenFocused() const { return true; }

  private:
    RenderThemeJS();
    virtual ~RenderThemeJS();

    IntRect inflateRect(const IntRect&, const IntSize&, const int* margins) const;
    void setSizeFromFont(RenderStyle*, const IntSize* sizes) const;
    IntSize sizeForFont(RenderStyle*, const IntSize* sizes) const;
    IntSize sizeForSystemFont(RenderStyle*, const IntSize* sizes) const;

    const IntSize* checkboxSizes() const;

    const IntSize* radioSizes() const;

    const IntSize* buttonSizes() const;

    const IntSize* popupButtonSizes() const;
    void paintMenuListButtonGradients(RenderObject*, const PaintInfo&, const IntRect&);
    const IntSize* menuListSizes() const;

    const IntSize* searchFieldSizes() const;
    const IntSize* cancelButtonSizes() const;
    const IntSize* resultsButtonSizes() const;
    void setSearchFieldSize(RenderStyle*) const;
    
    //ThemeControlState determineState(RenderObject*) const;
  };
  
} // namespace WebCore

#endif // RenderThemeJS_h
