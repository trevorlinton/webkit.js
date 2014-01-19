all: \
    $(SHARED_INTERMEDIATE_DIR)/third_party/yasm/x86cpu.c \
    $(SHARED_INTERMEDIATE_DIR)/third_party/yasm/x86regtmod.c

$(SHARED_INTERMEDIATE_DIR)/third_party/yasm/x86cpu.c \
    : \
    source/patched-yasm/modules/arch/x86/x86cpu.gperf \
    $(BUILT_PRODUCTS_DIR)/genperf
	@mkdir -p "$(SHARED_INTERMEDIATE_DIR)/third_party/yasm"
	@echo note: "yasm genperf for source/patched-yasm/modules/arch/x86/x86cpu.gperf."
	"$(BUILT_PRODUCTS_DIR)/genperf" "source/patched-yasm/modules/arch/x86/x86cpu.gperf" "$(SHARED_INTERMEDIATE_DIR)/third_party/yasm/x86cpu.c"

$(SHARED_INTERMEDIATE_DIR)/third_party/yasm/x86regtmod.c \
    : \
    source/patched-yasm/modules/arch/x86/x86regtmod.gperf \
    $(BUILT_PRODUCTS_DIR)/genperf
	@mkdir -p "$(SHARED_INTERMEDIATE_DIR)/third_party/yasm"
	@echo note: "yasm genperf for source/patched-yasm/modules/arch/x86/x86regtmod.gperf."
	"$(BUILT_PRODUCTS_DIR)/genperf" "source/patched-yasm/modules/arch/x86/x86regtmod.gperf" "$(SHARED_INTERMEDIATE_DIR)/third_party/yasm/x86regtmod.c"
