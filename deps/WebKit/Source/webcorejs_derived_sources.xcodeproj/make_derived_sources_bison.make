all: \
    $(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.cpp \
    $(SHARED_INTERMEDIATE_DIR)/blink/XPathGrammar.cpp

$(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.cpp \
    $(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.h \
    : \
    $(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.y
	@mkdir -p "$(SHARED_INTERMEDIATE_DIR)/blink"
	python scripts/rule_bison.py "$(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.y" "$(SHARED_INTERMEDIATE_DIR)/blink" /usr/bin/bison

$(SHARED_INTERMEDIATE_DIR)/blink/XPathGrammar.cpp \
    $(SHARED_INTERMEDIATE_DIR)/blink/XPathGrammar.h \
    : \
    xml/XPathGrammar.y
	@mkdir -p "$(SHARED_INTERMEDIATE_DIR)/blink"
	python scripts/rule_bison.py "xml/XPathGrammar.y" "$(SHARED_INTERMEDIATE_DIR)/blink" /usr/bin/bison
