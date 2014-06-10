# -*- mode: Makefile; tab-width: 4; indent-tabs-mode: t; -*-

################################################################################
# Copyright (c) 2011 Marcus Geelnard
#
# This file is part of CrunchMe.
#
# CrunchMe is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# CrunchMe is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with CrunchMe.  If not, see <http://www.gnu.org/licenses/>.
# This file is part of CrunchMe.
################################################################################

# Compiler and linker settings
CPP = g++
CPPFLAGS = -c -O3 -W -Wall -Iliblzg/include -Izlib -I/Tint/Runtime/src/third_party/libpng/
LFLAGS = -Lliblzg/lib -Lzlib
LIBS = -lpng -llzg -lz
RM = rm -f

# Files
CRUNCHME = crunchme
CRUNCHME_OBJS = crunchme.o png.o

.PHONY: all clean

# Master rule
all: $(CRUNCHME)

# Clean rule
clean:
	$(RM) $(CRUNCHME) $(CRUNCHME_OBJS)

# Program build rules
$(CRUNCHME): $(CRUNCHME_OBJS) $(CRUNCHME_LIB)
	$(CPP) $(LFLAGS) -o $@ $(CRUNCHME_OBJS) $(LIBS)

# Object files build rules
crunchme.o: crunchme.cpp pngfoo.h
	$(CPP) $(CPPFLAGS) $<

png.o: png.cpp pngfoo.h
	$(CPP) $(CPPFLAGS) $<

