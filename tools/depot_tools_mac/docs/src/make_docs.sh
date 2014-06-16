#!/bin/bash -e
shopt -s nullglob

cd $(dirname "$0")

# Script which takes all the asciidoc git-*.txt files in this directory, renders
# them to html + manpage format using git 1.9's doc toolchain, then puts
# them in depot_tools to be committed.

ensure_in_path() {
  local CMD=$1
  local PTH=$(which "$CMD")
  if [[ ! $PTH ]]
  then
    echo Must have "$CMD" on your PATH!
    exit 1
  else
    echo Using \'$PTH\' for ${CMD}.
  fi
}

ensure_in_path xmlto

DFLT_CATALOG_PATH="/usr/local/etc/xml/catalog"
if [[ ! $XML_CATALOG_FILES && -f "$DFLT_CATALOG_PATH" ]]
then
  # Default if you install doctools with homebrew on mac
  export XML_CATALOG_FILES="$DFLT_CATALOG_PATH"
  echo Using \'$DFLT_CATALOG_PATH\' for \$XML_CATALOG_FILES.
fi

# We pull asciidoc to get the right version
BRANCH=8.6.9
ASCIIDOC_HASH=7fed0aff1b30
if [[ ! -d asciidoc || $(cd asciidoc && hg id -i) != $ASCIIDOC_HASH ]]
then
  echo Cloning asciidoc
  rm -rf asciidoc
  hg clone -r $BRANCH https://asciidoc.googlecode.com/hg/ asciidoc
  (cd asciidoc && ln -s asciidoc.py asciidoc)
fi
echo Asciidoc up to date at $ASCIIDOC_HASH \($BRANCH\)

export PATH=`pwd`/asciidoc:$PATH

# We pull git to get its documentation toolchain
BRANCH=v1.9.0
GITHASH=5f95c9f850b19b368c43ae399cc831b17a26a5ac
if [[ ! -d git || $(git -C git rev-parse HEAD) != $GITHASH ]]
then
  echo Cloning git
  rm -rf git
  git clone --single-branch --branch $BRANCH --depth 1 \
    https://kernel.googlesource.com/pub/scm/git/git.git  2> /dev/null

  # Replace the 'source' and 'package' strings.
  ed git/Documentation/asciidoc.conf <<EOF
H
81
s/Git/depot_tools
+2
s/Git Manual/Chromium depot_tools Manual
wq
EOF

  # fix Makefile to include non-_-prefixed files as MAN7 entries
  {
    shopt -s extglob
    echo H
    echo 35
    for x in "$(echo !(git-*|_*).txt)"
    do
      echo i
      echo MAN7_TXT += $x
      echo .
    done
    echo wq
  } | ed git/Documentation/Makefile

  # fix build-docdep.perl to ignore attributes on include::[] macros
  ed git/Documentation/build-docdep.perl <<EOF
H
12
c
	    s/\[[^]]*\]//;
.
wq
EOF

  # Add additional CSS override file
  ed git/Documentation/Makefile <<EOF
H
/ASCIIDOC_EXTRA
a
 -a stylesheet=$(pwd)/git/Documentation/asciidoc-override.css
.
-1
j
/^\$(MAN_HTML):
a
 asciidoc-override.css
.
-1
j
wq
EOF

fi
echo Git up to date at $GITHASH \($BRANCH\)

# build directory files for 'essential' and 'helper' sections of the depot_tools
# manpage.
for category in helper essential
do
  {
    PRINTED_BANNER=0
    for x in *.${category}.txt
    do
      # If we actually have tools in the category, print the banner first.
      if [[ $PRINTED_BANNER != 1 ]]
      then
        PRINTED_BANNER=1
        # ex.
        # CATEGORY TOOLS
        # --------------
        BANNER=$(echo $category tools | awk '{print toupper($0)}')
        echo $BANNER
        for i in $(seq 1 ${#BANNER})
        do
          echo -n -
        done
        echo
        echo
      fi

      # ex.
      # linkgit:git-tool[1]::
      # \tinclude::_git-tool_desc.category.txt[]
      PLAIN_PATH=${x%%_desc.*.txt}
      PLAIN_PATH=${PLAIN_PATH:1}
      echo "linkgit:$PLAIN_PATH[1]::"
      echo -e "include::${x}[]"
      echo
    done
  } > __${category}.txt
done

JOBS=0
HTML_TARGETS=()
MAN_TARGETS=()
for x in *.txt *.css
do
  TO="git/Documentation/$x"
  if [[ ! -f "$TO" ]] || ! cmp --silent "$x" "$TO"
  then
    echo \'$x\' differs
    cp $x "$TO"
  fi
  # Exclude files beginning with _ from the target list. This is useful to have
  # includable snippet files.
  if [[ ${x:0:1} != _ && ${x:(-4)} == .txt ]]
  then
    HTML_TARGETS+=("${x%%.txt}.html")
    if [[ ${x:0:3} == git ]]
    then
      MAN1_TARGETS+=("${x%%.txt}.1")
    else
      MAN7_TARGETS+=("${x%%.txt}.7")
    fi
    JOBS=$[$JOBS + 2]
  fi
done

VER="v$(git rev-parse --short HEAD)"
if [[ ! -f git/version ]] || ! cmp --silent git/version <(echo "$VER")
then
  echo Version changed, cleaning.
  echo "$VER" > git/version
  (cd git/Documentation && make clean)
fi

# This export is so that asciidoc sys snippets which invoke git run relative to
# depot_tools instead of the git clone.
(
  export GIT_DIR="$(git rev-parse --git-dir)" &&
  cd git/Documentation &&
  make -j"$JOBS" "${MAN1_TARGETS[@]}" "${MAN7_TARGETS[@]}" "${HTML_TARGETS[@]}"
)

for x in "${HTML_TARGETS[@]}"
do
  echo Copying ../html/$x
  tr -d '\015' <"git/Documentation/$x"  >"../html/$x"
done

for x in "${MAN1_TARGETS[@]}"
do
  echo Copying ../man1/$x
  cp "git/Documentation/$x" ../man1
done

for x in "${MAN7_TARGETS[@]}"
do
  echo Copying ../man7/$x
  cp "git/Documentation/$x" ../man7
done