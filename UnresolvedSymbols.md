```C++
WTF::fastFree(void*)
WTF::fastMallocGoodSize(unsigned int)
WTF::fastMalloc(unsigned int)
WTF::fastRealloc(void*, unsigned int)
JSC::SourceProvider::SourceProvider(WTF::String const&, WTF::TextPosition const&)
JSC::SourceProvider::~SourceProvider()
xmlInitParser
xmlRegisterInputCallbacks
xmlRegisterOutputCallbacks
xmlCreatePushParserCtxt
xmlCtxtUseOptions
xmlCreateMemoryParserCtxt
xmlDictLookup
xmlFreeDoc
xmlFreeParserCtxt
xmlParseChunk
xmlStopParser
WTF::tryFastMalloc(unsigned int)
WTF::fastZeroedMalloc(unsigned int)
xmlSAX2EntityDecl
xmlSAX2InternalSubset
xmlSAX2EndDocument
xmlSAX2StartDocument
xmlGetPredefinedEntity
xmlGetDocEntity
xmlStrdup
xmlStrndup
xmlSwitchEncoding
WebCore::ScriptController::shouldBypassMainWorldContentSecurityPolicy()
JSC::JSLockHolder::JSLockHolder(JSC::VM*)
JSC::JSLockHolder::~JSLockHolder()
JSC::weakClearSlowCase(JSC::WeakImpl*&)
u_foldCase
JSC::Heap::reportExtraMemoryCostSlowCase(unsigned int)
WTF::tryFastCalloc(unsigned int, unsigned int)
u_charType
u_charDirection
WTF::double_conversion::DoubleToStringConverter::EcmaScriptConverter()
WTF::double_conversion::DoubleToStringConverter::ToShortest(double, WTF::double_conversion::StringBuilder*) const
WTF::double_conversion::DoubleToStringConverter::ToPrecision(double, int, WTF::double_conversion::StringBuilder*) const
WTF::double_conversion::DoubleToStringConverter::ToFixed(double, int, WTF::double_conversion::StringBuilder*) const
WTF::double_conversion::StringToDoubleConverter::StringToDouble(char const*, unsigned int, unsigned int*)
WTF::scheduleDispatchFunctionsOnMainThread()
u_tolower
u_strToLower
u_toupper
u_strToUpper
u_strFoldCase
u_memcasecmp
pthread_create
WebCore::ImageBuffer::context() const
WebCore::GraphicsContext::concatCTM(WebCore::AffineTransform const&)
WebCore::ImageBuffer::~ImageBuffer()
WebCore::ImageBuffer::copyImage(WebCore::BackingStoreCopy, WebCore::ScaleBehavior) const
WebCore::GraphicsContext::getCTM(WebCore::GraphicsContext::IncludeDeviceScale) const
WebCore::GraphicsContext::translate(float, float)
WebCore::GraphicsContext::scale(WebCore::FloatSize const&)
WebCore::fillWithEmptyClients(WebCore::Page::PageClients&)
WebCore::Image::drawPattern(WebCore::GraphicsContext*, WebCore::FloatRect const&, WebCore::AffineTransform const&, WebCore::FloatPoint const&, WebCore::ColorSpace, WebCore::CompositeOperator, WebCore::FloatRect const&, WebCore::BlendMode)
WebCore::EmptyChromeClient::runOpenPanel(WebCore::Frame*, WTF::PassRefPtr<WebCore::FileChooser>)
WebCore::EmptyChromeClient::createPopupMenu(WebCore::PopupMenuClient*) const
WebCore::EmptyChromeClient::createSearchPopupMenu(WebCore::PopupMenuClient*) const
void WTF::refIfNotNull<_cairo_surface>(_cairo_surface*)
WebCore::ImageBuffer::ImageBuffer(WebCore::IntSize const&, float, WebCore::ColorSpace, WebCore::RenderingMode, bool&)
WebCore::Widget::frameRect() const
WebCore::Path::operator=(WebCore::Path const&)
WebCore::Path::Path()
WebCore::Path::~Path()
WebCore::Path::isEmpty() const
WebCore::SimpleFontData::determinePitch()
u_charMirror
WebCore::Path::Path(WebCore::Path const&)
WebCore::SimpleFontData::platformWidthForGlyph(unsigned short) const
WebCore::Path::transform(WebCore::AffineTransform const&)
WebCore::Path::closeSubpath()
WebCore::Path::moveTo(WebCore::FloatPoint const&)
WebCore::Path::addLineTo(WebCore::FloatPoint const&)
WebCore::Path::addBezierCurveTo(WebCore::FloatPoint const&, WebCore::FloatPoint const&, WebCore::FloatPoint const&)
WebCore::Path::boundingRect() const
WebCore::FrameSelection::clear()
WebCore::VisiblePosition::VisiblePosition(WebCore::Position const&, WebCore::EAffinity)
WebCore::FrameSelection::setSelection(WebCore::VisibleSelection const&, unsigned int, WebCore::FrameSelection::CursorAlignOnScroll, WebCore::TextGranularity)
WebCore::VisibleSelection::VisibleSelection(WebCore::VisiblePosition const&, WebCore::VisiblePosition const&, bool)
WebCore::Path::translate(WebCore::FloatSize const&)
WebCore::SQLiteStatement::SQLiteStatement(WebCore::SQLiteDatabase&, WTF::String const&)
WebCore::SQLiteStatement::prepare()
WebCore::SQLiteStatement::bindText(int, WTF::String const&)
WebCore::SQLiteStatement::step()
WebCore::SQLiteStatement::getColumnInt64(int)
WebCore::SQLiteStatement::~SQLiteStatement()
WebCore::SQLiteStatement::getColumnText(int)
WebCore::SQLiteStatement::bindInt64(int, long long)
WebCore::SQLiteStatement::getColumnInt(int)
WebCore::SQLiteStatement::executeCommand()
WebCore::SQLiteStatement::bindBlob(int, void const*, int)
WebCore::SQLiteStatement::getColumnBlobAsVector(int, WTF::Vector<char, 0u, WTF::CrashOnOverflow>&)
WebCore::createFontCustomPlatformData(WebCore::SharedBuffer&)
WebCore::FontCustomPlatformData::fontPlatformData(int, bool, bool, WebCore::FontOrientation, WebCore::FontWidthVariant, WebCore::FontRenderingMode)
WebCore::FontCustomPlatformData::~FontCustomPlatformData()
WebCore::Image::loadPlatformResource(char const*)
void WTF::derefIfNotNull<_cairo_surface>(_cairo_surface*)
WebCore::FrameLoaderStateMachine::creatingInitialEmptyDocument() const
WebCore::DOMWindow::finishedLoading()
WebCore::FrameLoaderStateMachine::isDisplayingInitialEmptyDocument() const
WebCore::ScriptController::updatePlatformScriptObjects()
WebCore::FrameLoaderStateMachine::FrameLoaderStateMachine()
WebCore::FrameLoaderStateMachine::advanceTo(WebCore::FrameLoaderStateMachine::State)
WebCore::ScriptController::executeIfJavaScriptURL(WebCore::URL const&, WebCore::ShouldReplaceDocumentIfJavaScriptURL)
WebCore::DOMWindow::allowPopUp(WebCore::Frame*)
WebCore::ScriptController::processingUserGesture()
WebCore::DOMWindow::dispatchEvent(WTF::PassRefPtr<WebCore::Event>, WTF::PassRefPtr<WebCore::EventTarget>)
WebCore::Editor::confirmComposition()
WebCore::Editor::client() const
WebCore::Editor::clearUndoRedoOperations()
WebCore::Editor::clearLastEditCommand()
WebCore::DOMWindow::setStatus(WTF::String const&)
WebCore::DOMWindow::setDefaultStatus(WTF::String const&)
WebCore::FrameLoaderStateMachine::committedFirstRealDocumentLoad() const
WebCore::Editor::clear()
WebCore::DOMWindow::resetUnlessSuspendedForPageCache()
WebCore::ScriptController::clearWindowShell(WebCore::DOMWindow*, bool)
WebCore::FrameSelection::prepareForDestruction()
WebCore::ScriptController::clearScriptObjects()
WebCore::ScriptController::enableEval()
WebCore::HistoryItem::children() const
WebCore::HistoryItem::childItemWithTarget(WTF::String const&) const
WebCore::FrameLoaderStateMachine::firstLayoutDone() const
WebCore::SerializedScriptValue::nullValue()
WebCore::BackForwardController::setCurrentItem(WebCore::HistoryItem*)
WebCore::pageCache()
WebCore::PageCache::take(WebCore::HistoryItem*)
WebCore::PageCache::canCache(WebCore::Page*) const
WebCore::PageCache::add(WTF::PassRefPtr<WebCore::HistoryItem>, WebCore::Page&)
WebCore::CachedPage::restore(WebCore::Page&)
WebCore::ScriptController::canExecuteScripts(WebCore::ReasonForCallingCanExecuteScripts)
WebCore::DOMWindow::document() const
WebCore::HistoryItem::isTargetItem() const
WebCore::HistoryItem::url() const
WebCore::HistoryItem::originalURL() const
WebCore::PageCache::get(WebCore::HistoryItem*)
WebCore::HistoryItem::formData()
WebCore::HistoryItem::referrer() const
WebCore::HistoryItem::formContentType() const
WebCore::HistoryItem::shouldDoSameDocumentNavigationTo(WebCore::HistoryItem*) const
WebCore::ScriptController::getAllWorlds(WTF::Vector<WTF::Ref<WebCore::DOMWrapperWorld>, 0u, WTF::CrashOnOverflow>&)
WebCore::DOMWrapperWorld::~DOMWrapperWorld()
WebCore::CachedPage::~CachedPage()
WebCore::SerializedScriptValue::~SerializedScriptValue()
WebCore::HistoryItem::~HistoryItem()
WebCore::BackForwardController::itemAtIndex(int)
WebCore::BackForwardController::backCount() const
WebCore::HistoryItem::HistoryItem()
WebCore::HistoryItem::setScrollPoint(WebCore::IntPoint const&)
WebCore::HistoryItem::setPageScaleFactor(float)
WebCore::HistoryItem::clearScrollPoint()
WebCore::HistoryItem::pageScaleFactor() const
WebCore::HistoryItem::scrollPoint() const
WebCore::HistoryItem::isCurrentDocument(WebCore::Document*) const
WebCore::HistoryItem::setDocumentState(WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&)
WebCore::HistoryItem::documentState() const
WebCore::CachedPage::clear()
WebCore::PageCache::remove(WebCore::HistoryItem*)
WebCore::HistoryItem::setChildItem(WTF::PassRefPtr<WebCore::HistoryItem>)
WebCore::HistoryItem::clearDocumentState()
WebCore::HistoryItem::setURL(WebCore::URL const&)
WebCore::HistoryItem::setTitle(WTF::String const&)
WebCore::HistoryItem::urlString() const
WebCore::HistoryItem::setTarget(WTF::String const&)
WebCore::HistoryItem::setParent(WTF::String const&)
WebCore::HistoryItem::setOriginalURLString(WTF::String const&)
WebCore::HistoryItem::setFormInfoFromRequest(WebCore::ResourceRequest const&)
WebCore::HistoryItem::addChildItem(WTF::PassRefPtr<WebCore::HistoryItem>)
WebCore::HistoryItem::setIsTargetItem(bool)
WebCore::HistoryItem::target() const
WebCore::HistoryItem::hasSameFrames(WebCore::HistoryItem*) const
WebCore::BackForwardController::addItem(WTF::PassRefPtr<WebCore::HistoryItem>)
WebCore::HistoryItem::reset()
WebCore::MIMETypeRegistry::isApplicationPluginMIMEType(WTF::String const&)
WebCore::PluginData::pluginNameForMimeType(WTF::String const&) const
WebCore::PluginData::pluginFileForMimeType(WTF::String const&) const
WebCore::Path::addRect(WebCore::FloatRect const&)
WebCore::Path::clear()
WebCore::GraphicsContext::setLineCap(WebCore::LineCap)
WebCore::GraphicsContext::setLineJoin(WebCore::LineJoin)
WebCore::GraphicsContext::setMiterLimit(float)
WebCore::GraphicsContext::setLineDash(WTF::Vector<double, 0u, WTF::CrashOnOverflow> const&, float)
WebCore::GraphicsContext::setAlpha(float)
WebCore::GraphicsContext::rotate(float)
WebCore::GraphicsContext::fillPath(WebCore::Path const&)
WebCore::GraphicsContext::strokePath(WebCore::Path const&)
WebCore::Path::contains(WebCore::FloatPoint const&, WebCore::WindRule) const
WebCore::Path::strokeContains(WebCore::StrokeStyleApplier*, WebCore::FloatPoint const&) const
WebCore::GraphicsContext::clearRect(WebCore::FloatRect const&)
WebCore::GraphicsContext::fillRect(WebCore::FloatRect const&)
WebCore::GraphicsContext::strokeRect(WebCore::FloatRect const&, float)
WebCore::GraphicsContext::clipOut(WebCore::IntRect const&)
WebCore::ImageBuffer::getUnmultipliedImageData(WebCore::IntRect const&, WebCore::ImageBuffer::CoordinateSystem) const
WebCore::ImageBuffer::putByteArray(WebCore::Multiply, JSC::GenericTypedArrayView<JSC::Uint8ClampedAdaptor>*, WebCore::IntSize const&, WebCore::IntRect const&, WebCore::IntPoint const&, WebCore::ImageBuffer::CoordinateSystem)
WebCore::GraphicsContext::setImageInterpolationQuality(WebCore::InterpolationQuality)
WebCore::GraphicsContext3D::create(WebCore::GraphicsContext3D::Attributes, WebCore::HostWindow*, WebCore::GraphicsContext3D::RenderStyle)
WebCore::GraphicsContext3D::makeContextCurrent()
WebCore::GraphicsContext3D::isGLES2Compliant() const
WebCore::ImageBuffer::fastCopyImageMode()
JSC::ArrayBufferView::ArrayBufferView(WTF::PassRefPtr<JSC::ArrayBuffer>, unsigned int)
JSC::JSArrayBufferView::ConstructionContext::ConstructionContext(JSC::VM&, JSC::Structure*, WTF::PassRefPtr<JSC::ArrayBuffer>, unsigned int, unsigned int)
JSC::JSArrayBufferView::finishCreation(JSC::VM&)
JSC::JSArrayBufferView::JSArrayBufferView(JSC::VM&, JSC::JSArrayBufferView::ConstructionContext&)
JSC::MarkedAllocator::allocateSlowCase(unsigned int)
JSC::ArrayBufferView::~ArrayBufferView()
WebCore::GraphicsContext3D::~GraphicsContext3D()
WebCore::FileList::item(unsigned int) const
WebCore::FileList::paths() const
WebCore::DragData::asFilenames(WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow>&) const
WebCore::Icon::~Icon()
WebCore::File::File(WTF::String const&, WebCore::File::ContentTypeLookupPolicy)
WebCore::File::File(WTF::String const&, WTF::String const&, WebCore::File::ContentTypeLookupPolicy)
WebCore::FileList::FileList()
WebCore::VisibleSelection::rootEditableElement() const
WebCore::HTMLPlugInElement::isPluginElement() const
WebCore::HTMLPlugInElement::willRespondToMouseClickEvents()
WebCore::HTMLPlugInElement::supportsFocus() const
WebCore::HTMLPlugInElement::isKeyboardFocusable(WebCore::KeyboardEvent*) const
WebCore::HTMLPlugInElement::collectStyleForPresentationAttribute(WebCore::QualifiedName const&, WTF::AtomicString const&, WebCore::MutableStyleProperties&)
WebCore::HTMLPlugInElement::isPresentationAttribute(WebCore::QualifiedName const&) const
WebCore::Path::addEllipse(WebCore::FloatRect const&)
WebCore::addImpureProperty(WTF::AtomicString const&)
WebCore::replaceChildrenWithFragment(WebCore::ContainerNode&, WTF::PassRefPtr<WebCore::DocumentFragment>, int&)
WebCore::replaceChildrenWithText(WebCore::ContainerNode&, WTF::String const&, int&)
WebCore::HTMLPlugInElement::guardedDispatchBeforeLoadEvent(WTF::String const&)
WebCore::EventHandler::tabsToAllFormControls(WebCore::KeyboardEvent*) const
WebCore::ScriptController::canAccessFromCurrentOrigin(WebCore::Frame*)
WebCore::JSDOMWindowBase::commonVM()
WebCore::FrameSelection::revealSelection(WebCore::ScrollAlignment const&, WebCore::RevealExtentOption)
WebCore::Editor::textFieldDidEndEditing(WebCore::Element*)
WebCore::signedPublicKeyAndChallengeString(unsigned int, WTF::String const&, WebCore::URL const&)
WebCore::getSupportedKeySizes(WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow>&)
WebCore::HTMLPlugInElement::pluginWidget() const
WebCore::HTMLPlugInElement::HTMLPlugInElement(WebCore::QualifiedName const&, WebCore::Document&)
WebCore::HTMLPlugInElement::~HTMLPlugInElement()
WebCore::HTMLPlugInElement::setDisplayState(WebCore::HTMLPlugInElement::DisplayState)
WebCore::HTMLPlugInElement::createElementRenderer(WTF::PassRef<WebCore::RenderStyle>)
WebCore::HTMLPlugInElement::willDetachRenderers()
WebCore::HTMLPlugInElement::didAddUserAgentShadowRoot(WebCore::ShadowRoot*)
JSC::JSGlobalObject::globalExec()
JSC::JSLockHolder::JSLockHolder(JSC::ExecState*)
JSC::call(JSC::ExecState*, JSC::JSValue, JSC::CallType, JSC::CallData const&, JSC::JSValue, JSC::ArgList const&)
WebCore::HTMLPlugInElement::defaultEventHandler(WebCore::Event*)
WebCore::HTMLPlugInElement::requestObject(WTF::String const&, WTF::String const&, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow> const&)
JSC::Identifier::add(JSC::ExecState*, char const*)
JSC::JSCell::toObject(JSC::ExecState*, JSC::JSGlobalObject*) const
JSC::JSValue::toObjectSlowCase(JSC::ExecState*, JSC::JSGlobalObject*) const
JSC::PropertySlot::functionGetter(JSC::ExecState*) const
JSC::Structure::get(JSC::VM&, JSC::PropertyName, unsigned int&, JSC::JSCell*&)
JSC::JSObject::fillGetterPropertySlot(JSC::PropertySlot&, JSC::JSValue, unsigned int, int)
JSC::JSObject::getOwnPropertySlotSlow(JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&)
WebCore::createWrapper(JSC::ExecState*, WebCore::JSDOMGlobalObject*, WebCore::Node*)
JSC::MarkedArgumentBuffer::slowAppend(JSC::JSValue)
WebCore::ScriptController::initScript(WebCore::DOMWrapperWorld&)
WebCore::DOMWrapperWorld::DOMWrapperWorld(JSC::VM*, bool)
u_isprint
WebCore::RenderTheme::themeForPage(WebCore::Page*)
WebCore::Editor::textDidChangeInTextArea(WebCore::Element*)
WebCore::plainText(WebCore::Range const*, WebCore::TextIteratorBehavior, bool)
WebCore::VisibleSelection::toNormalizedRange() const
WebCore::VisibleSelection::VisibleSelection()
WebCore::indexForVisiblePosition(WebCore::Node*, WebCore::VisiblePosition const&, bool)
WebCore::visiblePositionForIndexUsingCharacterIterator(WebCore::Node*, int)
WebCore::DOMWindow::addEventListener(WTF::AtomicString const&, WTF::PassRefPtr<WebCore::EventListener>, bool)
WebCore::RuntimeEnabledFeatures::sharedFeatures()
Inspector::InspectorObject::create()
Inspector::InspectorValue::toJSONString() const
Inspector::InspectorString::create(WTF::String const&)
WebCore::Editor::doTextFieldCommandFromEvent(WebCore::Element*, WebCore::KeyboardEvent*)
WebCore::Editor::textFieldDidBeginEditing(WebCore::Element*)
WebCore::Editor::textDidChangeInTextField(WebCore::Element*)
WebCore::FrameSelection::textWasReplaced(WebCore::CharacterData*, unsigned int, unsigned int, unsigned int)
WebCore::Pasteboard::setDragImage(void*, WebCore::IntPoint const&)
WebCore::createDragImageFromImage(WebCore::Image*, WebCore::ImageOrientationDescription)
WebCore::JSLazyEventListener::createForNode(WebCore::ContainerNode&, WebCore::QualifiedName const&, WTF::AtomicString const&)
WebCore::willCreatePossiblyOrphanedTreeByRemovalSlowCase(WebCore::Node*)
Deprecated::ScriptValue::~ScriptValue()
WebCore::ScriptController::updateDocument()
WebCore::DOMWindow::willDetachDocumentFromFrame()
WebCore::DOMWindow::removeAllEventListeners()
WebCore::ScriptController::disableEval(WTF::String const&)
WebCore::Editor::didEndEditing()
WebCore::Widget::setFocus(bool)
WebCore::Editor::didBeginEditing()
WebCore::FrameSelection::nodeWillBeRemoved(WebCore::Node*)
WebCore::DragCaretController::nodeWillBeRemoved(WebCore::Node*)
WebCore::DOMWindow::didSecureTransitionTo(WebCore::Document*)
WebCore::JSLazyEventListener::createForDOMWindow(WebCore::Frame&, WebCore::QualifiedName const&, WTF::AtomicString const&)
WebCore::DOMWindow::dispatchLoadEvent()
WebCore::Editor::Command::isEnabled(WebCore::Event*) const
WebCore::Editor::Command::state(WebCore::Event*) const
WebCore::DOMWindow::history() const
WebCore::ScriptController::evaluateInWorld(WebCore::ScriptSourceCode const&, WebCore::DOMWrapperWorld&)
WebCore::ScriptCallStack::~ScriptCallStack()
u_getIntPropertyValue
WebCore::DOMWindow::DOMWindow(WebCore::Document*)
WebCore::Editor::shouldBeginEditing(WebCore::Range*)
WebCore::DOMWindow::printErrorMessage(WTF::String const&)
WebCore::TextIterator::TextIterator(WebCore::Range const*, WebCore::TextIteratorBehavior)
WebCore::TextIterator::advance()
WebCore::TextIterator::~TextIterator()
WebCore::PluginData::supportsMimeType(WTF::String const&, WebCore::PluginData::AllowedPluginTypes) const
WebCore::VisibleSelection::VisibleSelection(WebCore::Position const&, WebCore::EAffinity, bool)
WebCore::FrameSelection::shouldChangeSelection(WebCore::VisibleSelection const&) const
WebCore::lastOffsetForEditing(WebCore::Node const*)
WebCore::isTableElement(WebCore::Node*)
WebCore::caretMaxOffset(WebCore::Node const*)
WebCore::isAtomicNode(WebCore::Node const*)
WebCore::ScriptController::evaluate(WebCore::ScriptSourceCode const&)
WebCore::FontPlatformData::~FontPlatformData()
WebCore::FontCustomPlatformData::supportsFormat(WTF::String const&)
WebCore::FontCache::getTraitsInFamily(WTF::AtomicString const&, WTF::Vector<unsigned int, 0u, WTF::CrashOnOverflow>&)
nextafter
WebCore::screenRect(WebCore::Widget*)
WebCore::screenIsMonochrome(WebCore::Widget*)
WebCore::screenDepthPerComponent(WebCore::Widget*)
WebCore::FrameSelection::isFocusedAndActive() const
WebCore::GraphicsContext::clip(WebCore::FloatRect const&)
WebCore::FrameSelection::contains(WebCore::LayoutPoint const&)
WebCore::Editor::dictationAlternativesForMarker(WebCore::DocumentMarker const*)
WebCore::GraphicsContext::drawLineForText(WebCore::FloatPoint const&, float, bool)
WebCore::GraphicsContext::drawLineForDocumentMarker(WebCore::FloatPoint const&, float, WebCore::GraphicsContext::DocumentMarkerLineStyle)
WebCore::GraphicsContext::computeLineBoundsForText(WebCore::FloatPoint const&, float, bool)
WebCore::acquireLineBreakIterator(unsigned char const*, int, WTF::AtomicString const&, unsigned short const*, unsigned int)
WebCore::FrameSelection::caretRenderer() const
WebCore::DragCaretController::caretRenderer() const
WebCore::FrameSelection::paintCaret(WebCore::GraphicsContext*, WebCore::LayoutPoint const&, WebCore::LayoutRect const&)
WebCore::DragCaretController::paintDragCaret(WebCore::Frame*, WebCore::GraphicsContext*, WebCore::LayoutPoint const&, WebCore::LayoutRect const&) const
WebCore::GraphicsContext::fillRect(WebCore::FloatRect const&, WebCore::Color const&, WebCore::ColorSpace)
WebCore::VisibleSelection::hasEditableStyle() const
WebCore::Editor::behavior() const
WebCore::GraphicsContext::drawRect(WebCore::IntRect const&)
WebCore::GraphicsContext::clipConvexPolygon(unsigned int, WebCore::FloatPoint const*, bool)
WebCore::GraphicsContext::clip(WebCore::Path const&, WebCore::WindRule)
WebCore::GraphicsContext::fillRectWithRoundedHole(WebCore::IntRect const&, WebCore::RoundedRect const&, WebCore::Color const&, WebCore::ColorSpace)
WebCore::Cursor::operator=(WebCore::Cursor const&)
WebCore::handCursor()
WebCore::Icon::paint(WebCore::GraphicsContext*, WebCore::IntRect const&)
WebCore::rowResizeCursor()
WebCore::columnResizeCursor()
WebCore::GraphicsContext::drawFocusRing(WebCore::Path const&, int, int, WebCore::Color const&)
WebCore::GraphicsContext::clipPath(WebCore::Path const&, WebCore::WindRule)
WebCore::GraphicsContext::drawEllipse(WebCore::IntRect const&)
WebCore::AccessibilityMenuList::didUpdateActiveOption(int)
WebCore::GraphicsContext::drawLine(WebCore::IntPoint const&, WebCore::IntPoint const&)
WebCore::GraphicsContext::drawConvexPolygon(unsigned int, WebCore::FloatPoint const*, bool)
WebCore::GraphicsContext::drawFocusRing(WTF::Vector<WebCore::IntRect, 0u, WTF::CrashOnOverflow> const&, int, int, WebCore::Color const&)
WebCore::GraphicsContext::setURLForRect(WebCore::URL const&, WebCore::IntRect const&)
WebCore::Widget::show()
WebCore::Widget::hide()
u_totitle
WebCore::PlatformKeyboardEvent::currentCapsLockState()
WebCore::Widget::setIsSelected(bool)
WebCore::Path::apply(void*, void (*)(void*, WebCore::PathElement const*)) const
WebCore::Path::strokeBoundingRect(WebCore::StrokeStyleApplier*) const
WebCore::ScriptCallStack::at(unsigned int) const
WebCore::ScriptCallStack::size() const
WebCore::createScriptCallStack(unsigned int, bool)
Inspector::InspectorBasicValue::create(double)
WebCore::Editor::command(WTF::String const&)
WebCore::VisibleSelection::VisibleSelection(WebCore::VisiblePosition const&, bool)
WebCore::VisibleSelection::expandUsingGranularity(WebCore::TextGranularity)
WebCore::BackForwardController::canGoBackOrForward(int) const
WebCore::FrameSelection::isInPasswordField() const
WebCore::Editor::isSpellCheckingEnabledFor(WebCore::Node*) const
WebCore::Editor::guessesForMisspelledOrUngrammatical(bool&, bool&)
WebCore::Editor::hasBidiSelection() const
WebCore::Editor::canEdit() const
WebCore::Editor::selectionHasStyle(WebCore::CSSPropertyID, WTF::String const&) const
WebCore::Editor::canDHTMLCopy()
WebCore::Editor::canCopy() const
WebCore::Editor::canDHTMLCut()
WebCore::Editor::canCut() const
WebCore::Editor::canDHTMLPaste()
WebCore::Editor::canPaste() const
WebCore::Editor::canEditRichly() const
WebCore::Editor::isGrammarCheckingEnabled()
WebCore::Editor::spellingPanelIsShowing()
WebCore::Editor::isContinuousSpellCheckingEnabled() const
WebCore::TextIterator::characterAt(unsigned int) const
WebCore::FrameSelection::modify(WebCore::FrameSelection::EAlteration, WebCore::SelectionDirection, WebCore::TextGranularity, WebCore::EUserTriggered)
WebCore::VisibleSelection::VisibleSelection(WebCore::Range const*, WebCore::EAffinity, bool)
WebCore::VisibleSelection::VisibleSelection(WebCore::Position const&, WebCore::Position const&, WebCore::EAffinity, bool)
WebCore::Pasteboard::hasData()
WebCore::Editor::willWriteSelectionToPasteboard(WTF::PassRefPtr<WebCore::Range>)
WebCore::Pasteboard::writePlainText(WTF::String const&, WebCore::Pasteboard::SmartReplaceOption)
WebCore::Editor::selectedTextForClipboard() const
WebCore::Editor::didWriteSelectionToPasteboard()
WebCore::dissolveDragImageToFraction(void*, float)
WebCore::DragController::declareAndWriteDragImage(WebCore::Clipboard&, WebCore::Element&, WebCore::URL const&, WTF::String const&)
WebCore::Editor::copyURL(WebCore::URL const&, WTF::String const&, WebCore::Pasteboard&)
WebCore::enclosingAnchorElement(WebCore::Position const&)
WebCore::VisibleSelection::selectionFromContentsOfNode(WebCore::Node*)
WebCore::dragImageSize(void*)
WebCore::scaleDragImage(void*, WebCore::FloatSize)
WebCore::deleteDragImage(void*)
WebCore::DragController::maxDragImageSize()
WebCore::createDragImageIconForCachedImageFilename(WTF::String const&)
WebCore::DragController::cleanupAfterSystemDrag()
WebCore::FrameSelection::bounds(bool) const
WebCore::VisibleSelection::isContentEditable() const
WebCore::Cursor::~Cursor()
WebCore::FrameSelection::setNonDirectionalSelectionIfNeeded(WebCore::VisibleSelection const&, WebCore::TextGranularity, WebCore::FrameSelection::EndPointsAdjustmentMode)
WebCore::VisibleSelection::setExtent(WebCore::Position const&)
WebCore::VisibleSelection::setBase(WebCore::Position const&)
WebCore::comparePositions(WebCore::VisiblePosition const&, WebCore::VisiblePosition const&)
WebCore::VisibleSelection::setExtent(WebCore::VisiblePosition const&)
WebCore::EventHandler::eventActivatedView(WebCore::PlatformMouseEvent const&) const
WebCore::PlatformKeyboardEvent::getCurrentModifierState(bool&, bool&, bool&, bool&)
WebCore::Widget::setCursor(WebCore::Cursor const&)
WebCore::iBeamCursor()
WebCore::verticalTextCursor()
WebCore::Cursor::Cursor(WebCore::Image*, WebCore::IntPoint const&)
WebCore::pointerCursor()
WebCore::crossCursor()
WebCore::moveCursor()
WebCore::eastResizeCursor()
WebCore::westResizeCursor()
WebCore::northResizeCursor()
WebCore::southResizeCursor()
WebCore::northEastResizeCursor()
WebCore::southWestResizeCursor()
WebCore::northWestResizeCursor()
WebCore::southEastResizeCursor()
WebCore::northSouthResizeCursor()
WebCore::eastWestResizeCursor()
WebCore::northEastSouthWestResizeCursor()
WebCore::northWestSouthEastResizeCursor()
WebCore::waitCursor()
WebCore::helpCursor()
WebCore::cellCursor()
WebCore::contextMenuCursor()
WebCore::progressCursor()
WebCore::noDropCursor()
WebCore::aliasCursor()
WebCore::copyCursor()
WebCore::noneCursor()
WebCore::notAllowedCursor()
WebCore::zoomInCursor()
WebCore::zoomOutCursor()
WebCore::grabCursor()
WebCore::grabbingCursor()
WebCore::EventHandler::passMouseMoveEventToSubframe(WebCore::MouseEventWithHitTestResults&, WebCore::Frame*, WebCore::HitTestResult*)
WebCore::Editor::handleKeyboardEvent(WebCore::KeyboardEvent*)
WebCore::EventHandler::createDraggingClipboard() const
WebCore::Editor::handleTextEvent(WebCore::TextEvent*)
WebCore::Cursor::Cursor(WebCore::Cursor const&)
WebCore::FrameSelection::setFocused(bool)
WebCore::Editor::shouldEndEditing(WebCore::Range*)
WebCore::FrameSelection::FrameSelection(WebCore::Frame*)
WebCore::EditingStyle::~EditingStyle()
WebCore::Editor::~Editor()
WebCore::ScriptController::~ScriptController()
WebCore::ScriptController::ScriptController(WebCore::Frame&)
WebCore::Editor::Editor(WebCore::Frame&)
WebCore::Widget::setFrameRect(WebCore::IntRect const&)
WebCore::FrameSelection::updateAppearance()
WebCore::BackForwardController::close()
WebCore::PluginData::refresh()
WebCore::BackForwardController::~BackForwardController()
WebCore::BackForwardController::BackForwardController(WebCore::Page&, WTF::PassRefPtr<WebCore::BackForwardClient>)
WebCore::DragCaretController::DragCaretController()
_embind_register_class_constructor
_embind_register_class
WebCore::PluginData::PluginData(WebCore::Page const*)
WebCore::ThreadableBlobRegistry::getCachedOrigin(WebCore::URL const&)
ShInitialize
ShDestruct
ShConstructCompiler
ShCompile
ShGetInfoLog
ShGetObjectCode
ShGetVariableInfo
ShGetInfo
WebCore::BitmapImage::invalidatePlatformData()
WebCore::FrameData::clear(bool)
WebCore::BitmapImage::checkForSolidColor()
WebCore::BitmapImage::draw(WebCore::GraphicsContext*, WebCore::FloatRect const&, WebCore::FloatRect const&, WebCore::ColorSpace, WebCore::CompositeOperator, WebCore::BlendMode, WebCore::ImageOrientationDescription)
nextafterf
WebCore::GraphicsContext::isAcceleratedContext() const
WebCore::ImageBuffer::drawPattern(WebCore::GraphicsContext*, WebCore::FloatRect const&, WebCore::AffineTransform const&, WebCore::FloatPoint const&, WebCore::ColorSpace, WebCore::CompositeOperator, WebCore::FloatRect const&)
ShInitBuiltInResources
WebCore::ImageBuffer::getPremultipliedImageData(WebCore::IntRect const&, WebCore::ImageBuffer::CoordinateSystem) const
WebCore::Font::drawComplexText(WebCore::GraphicsContext*, WebCore::TextRun const&, WebCore::FloatPoint const&, int, int) const
WebCore::Font::drawEmphasisMarksForComplexText(WebCore::GraphicsContext*, WebCore::TextRun const&, WTF::AtomicString const&, WebCore::FloatPoint const&, int, int) const
WebCore::Font::canReturnFallbackFontsForComplexText()
WebCore::Font::floatWidthForComplexText(WebCore::TextRun const&, WTF::HashSet<WebCore::SimpleFontData const*, WTF::PtrHash<WebCore::SimpleFontData const*>, WTF::HashTraits<WebCore::SimpleFontData const*> >*, WebCore::GlyphOverflow*) const
WebCore::Font::selectionRectForComplexText(WebCore::TextRun const&, WebCore::FloatPoint const&, int, int, int) const
WebCore::Font::offsetForPositionForComplexText(WebCore::TextRun const&, float, bool) const
WebCore::Font::canExpandAroundIdeographsInComplexText()
WebCore::FontCache::platformInit()
WebCore::FontCache::createFontPlatformData(WebCore::FontDescription const&, WTF::AtomicString const&)
WebCore::FontCache::getLastResortFallbackFont(WebCore::FontDescription const&, WebCore::FontCache::ShouldRetain)
WebCore::FontPlatformData::platformIsEqual(WebCore::FontPlatformData const&) const
WebCore::Font::drawGlyphs(WebCore::GraphicsContext*, WebCore::SimpleFontData const*, WebCore::GlyphBuffer const&, int, int, WebCore::FloatPoint const&) const
WebCore::SimpleFontData::platformBoundsForGlyph(unsigned short) const
WebCore::FontCache::systemFallbackForCharacters(WebCore::FontDescription const&, WebCore::SimpleFontData const*, bool, unsigned short const*, int)
WebCore::FontPlatformData::platformDataInit(WebCore::FontPlatformData const&)
WebCore::FontPlatformData::platformDataAssign(WebCore::FontPlatformData const&)
WebCore::GlyphPage::fill(unsigned int, unsigned int, unsigned short*, unsigned int, WebCore::SimpleFontData const*)
WebCore::Gradient::platformDestroy()
WebCore::Gradient::setPlatformGradientSpaceTransform(WebCore::AffineTransform const&)
WebCore::GraphicsContext::savePlatformState()
WebCore::GraphicsContext::restorePlatformState()
WebCore::GraphicsContext::setPlatformStrokeThickness(float)
WebCore::GraphicsContext::setPlatformStrokeStyle(WebCore::StrokeStyle)
WebCore::GraphicsContext::setPlatformStrokeColor(WebCore::Color const&, WebCore::ColorSpace)
WebCore::GraphicsContext::setPlatformShadow(WebCore::FloatSize const&, float, WebCore::Color const&, WebCore::ColorSpace)
WebCore::GraphicsContext::clearPlatformShadow()
WebCore::GraphicsContext::setPlatformFillColor(WebCore::Color const&, WebCore::ColorSpace)
WebCore::GraphicsContext::setPlatformShouldAntialias(bool)
WebCore::GraphicsContext::beginPlatformTransparencyLayer(float)
WebCore::GraphicsContext::endPlatformTransparencyLayer()
WebCore::GraphicsContext::imageInterpolationQuality() const
WebCore::ImageBuffer::draw(WebCore::GraphicsContext*, WebCore::ColorSpace, WebCore::FloatRect const&, WebCore::FloatRect const&, WebCore::CompositeOperator, WebCore::BlendMode, bool)
WebCore::GraphicsContext::clipOut(WebCore::Path const&)
WebCore::ImageBuffer::clip(WebCore::GraphicsContext*, WebCore::FloatRect const&) const
WebCore::Gradient::fill(WebCore::GraphicsContext*, WebCore::FloatRect const&)
WebCore::GraphicsContext::fillRoundedRect(WebCore::IntRect const&, WebCore::IntSize const&, WebCore::IntSize const&, WebCore::IntSize const&, WebCore::IntSize const&, WebCore::Color const&, WebCore::ColorSpace)
WebCore::GraphicsContext::setPlatformCompositeOperation(WebCore::CompositeOperator, WebCore::BlendMode)
WebCore::ImageBuffer::platformTransformColorSpace(WTF::Vector<int, 0u, WTF::CrashOnOverflow> const&)
WebCore::ImageFrame::asNewNativeImage() const
WebCore::GraphicsContext3D::platformGraphicsContext3D()
WebCore::SimpleFontData::platformInit()
WebCore::SimpleFontData::platformCharWidthInit()
WebCore::SimpleFontData::platformDestroy()
WebCore::SimpleFontData::platformCreateScaledFontData(WebCore::FontDescription const&, float) const
WebCore::SimpleFontData::containsCharacters(unsigned short const*, int) const
u_getCombiningClass
unorm_normalize
ublock_getCode
uncompress
jpeg_read_scanlines
jpeg_destroy_decompress
jpeg_read_header
jpeg_has_multiple_scans
jpeg_calc_output_dimensions
jpeg_start_decompress
jpeg_consume_input
jpeg_start_output
jpeg_finish_output
jpeg_input_complete
jpeg_finish_decompress
jpeg_std_error
jpeg_CreateDecompress
WTF::fastCalloc(unsigned int, unsigned int)
jpeg_resync_to_restart
jpeg_save_markers
png_get_image_width
png_get_image_height
png_get_IHDR
png_set_expand
png_get_valid
png_get_tRNS
png_set_strip_16
png_set_gray_to_rgb
png_get_gAMA
png_set_gAMA
png_set_gamma
png_set_interlace_handling
png_read_update_info
png_get_channels
png_get_interlace_type
png_progressive_combine_row
png_destroy_read_struct
png_get_progressive_ptr
png_process_data
png_create_read_struct
png_create_info_struct
png_set_progressive_read_fn
png_error
png_get_iCCP
WebCore::platformUserPreferredLanguages()
WebCore::localizedString(char const*)
WebCore::MIMETypeRegistry::getMIMETypeForExtension(WTF::String const&)
curl_easy_init
curl_easy_setopt
curl_easy_cleanup
curl_easy_getinfo
curl_slist_free_all
curl_global_init
curl_multi_init
curl_multi_cleanup
curl_global_cleanup
curl_multi_add_handle
curl_multi_remove_handle
WTF::fastStrDup(char const*)
curl_slist_append
curl_easy_pause
curl_share_init
curl_share_setopt
curl_multi_fdset
curl_multi_perform
curl_multi_info_read
curl_easy_strerror
WebCore::setSSLVerifyOptions(WebCore::ResourceHandle*)
curl_version_info
WebCore::ResourceHandle::continueWillSendRequest(WebCore::ResourceRequest const&)
WebCore::ResourceHandle::continueDidReceiveResponse()
WebCore::ResourceHandle::continueShouldUseCredentialStorage(bool)
WebCore::fileSystemRepresentation(WTF::String const&)
WebCore::Widget::Widget(void*)
WebCore::Widget::~Widget()
WebCore::Widget::paint(WebCore::GraphicsContext*, WebCore::IntRect const&)
WebCore::ScrollbarTheme::nativeTheme()
sqlite3_errmsg
sqlite3_close
sqlite3_extended_result_codes
WebCore::SQLiteStatement::returnTextResults(int, WTF::Vector<WTF::String, 0u, WTF::CrashOnOverflow>&)
sqlite3_last_insert_rowid
sqlite3_errcode
WebCore::DatabaseAuthorizer::createIndex(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::createTable(WTF::String const&)
WebCore::DatabaseAuthorizer::createTempIndex(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::createTempTable(WTF::String const&)
WebCore::DatabaseAuthorizer::createTempTrigger(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::createTempView(WTF::String const&)
WebCore::DatabaseAuthorizer::createTrigger(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::createView(WTF::String const&)
WebCore::DatabaseAuthorizer::allowDelete(WTF::String const&)
WebCore::DatabaseAuthorizer::dropIndex(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::dropTable(WTF::String const&)
WebCore::DatabaseAuthorizer::dropTempIndex(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::dropTempTable(WTF::String const&)
WebCore::DatabaseAuthorizer::dropTempTrigger(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::dropTempView(WTF::String const&)
WebCore::DatabaseAuthorizer::dropTrigger(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::dropView(WTF::String const&)
WebCore::DatabaseAuthorizer::allowInsert(WTF::String const&)
WebCore::DatabaseAuthorizer::allowPragma(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::allowRead(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::allowTransaction()
WebCore::DatabaseAuthorizer::allowUpdate(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::allowAttach(WTF::String const&)
WebCore::DatabaseAuthorizer::allowDetach(WTF::String const&)
WebCore::DatabaseAuthorizer::allowAlterTable(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::allowReindex(WTF::String const&)
WebCore::DatabaseAuthorizer::allowAnalyze(WTF::String const&)
WebCore::DatabaseAuthorizer::createVTable(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::dropVTable(WTF::String const&, WTF::String const&)
WebCore::DatabaseAuthorizer::allowFunction(WTF::String const&)
sqlite3_set_authorizer
sqlite3_open
JSC::Yarr::interpret(JSC::Yarr::BytecodePattern*, WTF::String const&, unsigned int, unsigned int*)
JSC::Yarr::YarrPattern::YarrPattern(WTF::String const&, bool, bool, char const**)
JSC::Yarr::byteCompile(JSC::Yarr::YarrPattern&, WTF::BumpPointerAllocator*)
unorm_quickCheck
WebCore::TextCodecICU::registerEncodingNames(void (*)(char const*, char const*))
WebCore::TextCodecICU::registerCodecs(void (*)(char const*, WTF::PassOwnPtr<WebCore::TextCodec> (*)(WebCore::TextEncoding const&, void const*), void const*))
u_isspace
WebCore::ICUConverterWrapper::~ICUConverterWrapper()
WebCore::stopSharedTimer()
WebCore::setSharedTimerFireInterval(double)
WebCore::setSharedTimerFiredFunction(void (*)())
uidna_IDNToASCII
