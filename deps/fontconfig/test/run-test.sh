#!/bin/sh
TESTDIR=${srcdir-`pwd`}

FONTDIR=`pwd`/fonts
CACHEDIR=`pwd`/cache.dir

ECHO=true

FCLIST=../fc-list/fc-list$EXEEXT
FCCACHE=../fc-cache/fc-cache$EXEEXT

FONT1=$TESTDIR/4x6.pcf
FONT2=$TESTDIR/8x16.pcf

check () {
  $FCLIST - family pixelsize | sort > out
  echo "=" >> out
  $FCLIST - family pixelsize | sort >> out
  echo "=" >> out
  $FCLIST - family pixelsize | sort >> out
  tr -d '\015' <out >out.tmp; mv out.tmp out
  if cmp out $TESTDIR/out.expected > /dev/null ; then : ; else
    echo "*** Test failed: $TEST"
    echo "*** output is in 'out', expected output in 'out.expected'"
    exit 1
  fi
  rm out
}

prep() {
  rm -rf $CACHEDIR
  rm -rf $FONTDIR
  mkdir $FONTDIR
}

dotest () {
  TEST=$1
  test x$VERBOSE = x || echo Running: $TEST
}

sed "s!@FONTDIR@!$FONTDIR!
s!@CACHEDIR@!$CACHEDIR!" < $TESTDIR/fonts.conf.in > fonts.conf

FONTCONFIG_FILE=`pwd`/fonts.conf
export FONTCONFIG_FILE

dotest "Basic check"
prep
cp $FONT1 $FONT2 $FONTDIR
check

dotest "With a subdir"
prep
cp $FONT1 $FONT2 $FONTDIR
$FCCACHE $FONTDIR
check

dotest "Subdir with a cache file"
prep
mkdir $FONTDIR/a
cp $FONT1 $FONT2 $FONTDIR/a
$FCCACHE $FONTDIR/a
check

dotest "Complicated directory structure"
prep
mkdir $FONTDIR/a
mkdir $FONTDIR/a/a
mkdir $FONTDIR/b
mkdir $FONTDIR/b/a
cp $FONT1 $FONTDIR/a
cp $FONT2 $FONTDIR/b/a
check

dotest "Subdir with an out-of-date cache file"
prep
mkdir $FONTDIR/a
$FCCACHE $FONTDIR/a
sleep 1
cp $FONT1 $FONT2 $FONTDIR/a
check

dotest "Dir with an out-of-date cache file"
prep
cp $FONT1 $FONTDIR
$FCCACHE $FONTDIR
sleep 1
mkdir $FONTDIR/a
cp $FONT2 $FONTDIR/a
check

rm -rf $FONTDIR $CACHEFILE $CACHEDIR $FONTCONFIG_FILE out
