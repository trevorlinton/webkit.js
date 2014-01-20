all: \
    $(INTERMEDIATE_DIR)/third_party/yasm/gas-token.c \
    $(INTERMEDIATE_DIR)/third_party/yasm/nasm-token.c

$(INTERMEDIATE_DIR)/third_party/yasm/gas-token.c \
    : \
    source/patched-yasm/modules/parsers/gas/gas-token.re \
    $(BUILT_PRODUCTS_DIR)/re2c
	@mkdir -p "$(INTERMEDIATE_DIR)/third_party/yasm"
	@echo note: "yasm re2c for source/patched-yasm/modules/parsers/gas/gas-token.re."
	"$(BUILT_PRODUCTS_DIR)/re2c" -b -o "$(INTERMEDIATE_DIR)/third_party/yasm/gas-token.c" "source/patched-yasm/modules/parsers/gas/gas-token.re"

$(INTERMEDIATE_DIR)/third_party/yasm/nasm-token.c \
    : \
    source/patched-yasm/modules/parsers/nasm/nasm-token.re \
    $(BUILT_PRODUCTS_DIR)/re2c
	@mkdir -p "$(INTERMEDIATE_DIR)/third_party/yasm"
	@echo note: "yasm re2c for source/patched-yasm/modules/parsers/nasm/nasm-token.re."
	"$(BUILT_PRODUCTS_DIR)/re2c" -b -o "$(INTERMEDIATE_DIR)/third_party/yasm/nasm-token.c" "source/patched-yasm/modules/parsers/nasm/nasm-token.re"
