#!/bin/sh
# Run this to generate all the initial makefiles, etc.

srcdir=`dirname $0`
test -z "$srcdir" && srcdir=. 

THEDIR=`pwd`
cd $srcdir
DIE=0

(autoconf --version) < /dev/null > /dev/null 2>&1 || {
	echo
	echo "You must have autoconf installed to compile libxslt."
	echo "Download the appropriate package for your distribution,"
	echo "or see http://www.gnu.org/software/autoconf"
	DIE=1
}

(libtoolize --version) < /dev/null > /dev/null 2>&1 || {
	echo
	echo "You must have libtool installed to compile libxslt."
	echo "Download the appropriate package for your distribution,"
	echo "or see http://www.gnu.org/software/libtool"
	DIE=1
}

(automake --version) < /dev/null > /dev/null 2>&1 || {
	echo
	DIE=1
	echo "You must have automake installed to compile libxslt."
	echo "Download the appropriate package for your distribution,"
	echo "or see http://www.gnu.org/software/automake"
}

if test "$DIE" -eq 1; then
	exit 1
fi

test -f libxslt/xslt.h  || {
	echo "You must run this script in the top-level libxslt directory"
	exit 1
}

if test -z "$NOCONFIGURE" -a -z "$*"; then
	echo "I am going to run $srcdir/configure with no arguments - if you wish "
	echo "to pass any to it, please specify them on the $0 command line."
fi

echo "Running libtoolize..."
libtoolize --copy --force
echo "Running aclocal..."
aclocal $ACLOCAL_FLAGS
echo "Running automake..."
automake --add-missing --warnings=all
echo "Running autoconf..."
autoconf --warnings=all

cd $THEDIR

if test x$OBJ_DIR != x; then
    mkdir -p "$OBJ_DIR"
    cd "$OBJ_DIR"
fi

EXTRA_ARGS=
if test "x$1" = "x--system"; then
    shift
    prefix=/usr
    libdir=$prefix/lib
    sysconfdir=/etc
    localstatedir=/var
    if [ -d /usr/lib64 ]; then
      libdir=$prefix/lib64
    fi
    EXTRA_ARGS="--prefix=$prefix --sysconfdir=$sysconfdir --localstatedir=$localstatedir --libdir=$libdir"
fi

if test -z "$NOCONFIGURE"; then
    echo "Running configure $EXTRA_ARGS $*" ...
    $srcdir/configure $EXTRA_ARGS "$@"
    echo 
    echo "Now type 'make' to compile libxslt."
fi
