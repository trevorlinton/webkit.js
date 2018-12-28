#!/bin/sh

if [ "`which git`" == "" ]; then
	echo "git command line tool is not found.  Either re-install and make sure its added to your path environment variable.";
	exit 1;
fi

if [ "`which ninja`" == "" ]; then
	echo "ninja build system is not found.  Attemping to install.";

	if [ ! -d "install-tools" ]; then
		mkdir install-tools
	fi
	
	cd install-tools

	git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git

	export PATH=`pwd`/depot_tools:"$PATH"
	if [ "`grep depot_tools ~/.profile`" == "" ]; then
		echo "export PATH=\"`pwd`/depot_tools:\$PATH\"" >> ~/.profile
	fi
	if [ "`grep depot_tools ~/.bashrc`" == "" ]; then
		echo "export PATH=\"`pwd`/depot_tools:\$PATH\"" >> ~/.bashrc
	fi
	cd ..

	if [ "`which ninja`" == "" ]; then
		echo "Even after install we cannot find ninja build tool. Check the log above for errors."
		exit 1
	fi
fi

if [ "`which gcc`" == "" ]; then
	echo "Command tools such as clang are not available, attempting to install universally."
	if [ "$(uname)" == "Darwin" ]; then
		xcode-select --install
		echo "Complete the GUI installation then restart this program."
		exit 1;
	fi

	if [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
		#Update the package lists
		sudo apt-get update

		# Install *gcc* (and related dependencies)
		sudo apt-get install build-essential

		# Install cmake
		sudo apt-get install cmake

		# Install Python
		sudo apt-get install python2.7

		# Install node.js
		sudo apt-get install nodejs

		# Install Java
		sudo apt-get install default-jre
	fi

	if [ "`which gcc`" == "" ]; then
		echo "Even after installing command line tools were still unable to find the build essentials, see output log above."
		exit 1
	fi
fi

if [ "`which python2`" == "" ]; then
	echo "Python 2 isn't correctly linked, attempting to link it if found, or install globally."
	if [ "$(uname)" == "Darwin" ]; then
		if [ ! -f "/usr/bin/python" ]; then
			sudo ln /usr/bin/python2.7 /usr/bin/python
		fi
		if [ ! -f "/usr/bin/python2" ]; then
			sudo ln /usr/bin/python2.7 /usr/bin/python2
		fi
		if [ ! -f "/usr/bin/python22.7" ]; then
			sudo ln /System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7 /usr/bin/python22.7
		fi
	fi
	if [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
		# Install Python
		sudo apt-get install python2.7
	fi

	if [ "`which python2`" == "" ]; then
		echo "Even after installing python we cannot find python2 command line. See log from above."
		exit 1
	fi
fi

if [ "$EMSCRIPTEN" == "" ]; then
	echo "Cannot find esmcripten path. Attemping to install it into install-tools"

	if [ ! -d "install-tools" ]; then
		mkdir install-tools
	fi
	cd install-tools

	curl -OL https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz
	tar -xzf emsdk-portable.tar.gz
	cd emsdk-portable
	./emsdk update
	./emsdk install latest
	./emsdk activate latest
	source ./emsdk_env.sh
	cd ..

	if [ "`grep emsdk_env ~/.profile`" == "" ]; then
		echo "source `pwd`/emsdk-portable/emsdk_env.sh" >> ~/.profile
	fi
	if [ "`grep emsdk_env ~/.bashrc`" == "" ]; then
		echo "source `pwd`/emsdk-portable/emsdk_env.sh" >> ~/.bashrc
	fi

	cd ..
fi

if [ "`which autoconf`" == "" ]; then
	echo "Attemping to install autoconf."
	
	if [ ! -d "install-tools" ]; then
		mkdir install-tools
	fi
	cd install-tools

	curl -OL http://ftpmirror.gnu.org/autoconf/autoconf-2.69.tar.gz
	tar -xzf autoconf-2.69.tar.gz 
	cd autoconf-2.69
	./configure && make && sudo make install
	cd ..
	 
	curl -OL http://ftpmirror.gnu.org/automake/automake-1.14.tar.gz
	tar -xzf automake-1.14.tar.gz
	cd automake-1.14
	./configure && make && sudo make install
	cd ..
	 
	curl -OL http://ftpmirror.gnu.org/libtool/libtool-2.4.2.tar.gz
	tar -xzf libtool-2.4.2.tar.gz
	cd libtool-2.4.2
	./configure && make && sudo make install
	cd ..

	cd ..

	if [ "`which autoconf`" == "" ]; then
		echo "Even after attempting to install auto conf we cannot find its utility. Check log output."
		exit 1
	fi
fi

if [ ! -f "$EMSCRIPTEN/system/lib/pkgconfig/glesv2.pc" ]; then
cat <<EOF > $EMSCRIPTEN/system/lib/pkgconfig/glesv2.pc
prefix=
exec_prefix=\${prefix}
libdir=\${exec_prefix}/lib
sharedlibdir=\${libdir}
includedir=\${prefix}/include

Name: glesv2
Description: OpenGL ES 2.0 library
Version: 2.1.45

Requires:
Libs: -L\${libdir} -L\${sharedlibdir}
Cflags: -I\${includedir}
EOF
fi

if [ ! -f "$EMSCRIPTEN/system/lib/pkgconfig/libpng.pc" ]; then
cat <<EOF > $EMSCRIPTEN/system/lib/pkgconfig/libpng.pc
prefix=
exec_prefix=\${prefix}
libdir=\${exec_prefix}/lib
sharedlibdir=\${libdir}
includedir=\${prefix}/include

Name: libpng
Description: png library
Version: 1.2.45

Requires:
Libs: -L\${libdir} -L\${sharedlibdir}
Cflags: -I\${includedir}
EOF
fi


if [ ! -f "$EMSCRIPTEN/system/lib/pkgconfig/freetype2.pc" ]; then
cat <<EOF > $EMSCRIPTEN/system/lib/pkgconfig/freetype2.pc
prefix=
exec_prefix=\${prefix}
libdir=\${exec_prefix}/lib
sharedlibdir=\${libdir}
includedir=\${prefix}/include

Name: freetype2
Description: Freetype library
Version: 1.0.0

Requires:
Libs: -L\${libdir} -L$\{sharedlibdir}
Cflags: -I\${includedir}
EOF
fi

if [ ! -f "$EMSCRIPTEN/system/lib/pkgconfig/egl.pc" ]; then
cat <<EOF > $EMSCRIPTEN/system/lib/pkgconfig/egl.pc
prefix=
exec_prefix=\${prefix}
libdir=\${exec_prefix}/lib
sharedlibdir=\${libdir}
includedir=\${prefix}/include

Name: egl
Description: EGL library
Version: 1.0.0

Requires:
Libs: -L\${libdir} -L$\{sharedlibdir}
Cflags: -I\${includedir}
EOF
fi

if [ ! -f "$EMSCRIPTEN/system/lib/pkgconfig/zlib.pc" ]; then
cat <<EOF > $EMSCRIPTEN/system/lib/pkgconfig/zlib.pc
prefix=
exec_prefix=${prefix}
libdir=${exec_prefix}/lib
sharedlibdir=${libdir}
includedir=${prefix}/include

Name: zlib
Description: zlib compression library
Version: 1.2.5

Requires:
Libs: -L${libdir} -L${sharedlibdir}
Cflags: -I${includedir}
EOF
fi

if [ ! -f "$EMSCRIPTEN/system/lib/pkgconfig/sdl.pc" ]; then
cat <<EOF > $EMSCRIPTEN/system/lib/pkgconfig/sdl.pc
prefix=
exec_prefix=${prefix}
libdir=${exec_prefix}/lib
sharedlibdir=${libdir}
includedir=${prefix}/include

Name: sdl
Description: Simple DirectMedia Layer
Version: 1.2.12

Requires:
Libs: -L${libdir} -L${sharedlibdir}
Cflags: -I${includedir}
EOF
fi

echo "Install complete"
