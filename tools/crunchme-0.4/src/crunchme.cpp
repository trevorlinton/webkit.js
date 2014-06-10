/* -*- mode: c++; tab-width: 4; indent-tabs-mode: nil; -*-
* Copyright (c) 2011 Marcus Geelnard
*
* This file is part of CrunchMe.
*
* CrunchMe is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* CrunchMe is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with CrunchMe.  If not, see <http://www.gnu.org/licenses/>.
*/

#include <iostream>
#include <fstream>
#include <ostream>
#include <istream>
#include <string>
#include <stdlib.h>
#include <lzg.h>
#include <zlib.h>
#include "pngfoo.h"

using namespace std;

#define CRUNCHME_VERSION "0.4"

typedef enum {
  ENC_LATIN1,
  ENC_UTF16,
  ENC_NONE
} enc_t;

typedef enum {
  COMP_LZG,
  COMP_PNG
} comp_t;


//==============================================================================
// BEGIN Compiled/mangled JavaScript code
// NOTE: This code is considered "compiled". It is not supposed to be in
// a human readable form. For the original source code, see the "js" folder.
//==============================================================================

// Self extracting JavaScript code, Latin 1 version
// Note: This is basically js/unpack-latin1.js, compiled with the Google Closure
// Compiler
static const char jsSfxCodeHead[] = "//\300\012(function(j,o){for(var b,a,h,m,f,k,l,n,e,g,c=0,d=[],p=[35,48,72,128];c<j.length;)a=j.charCodeAt(c++)&255,a>=240&&(a=(a&15)<<4|j.charCodeAt(c++)&15),a<32?a+=208:a>=208&&a<240&&(a-=208),d.push(a);f=d[0];k=d[1];l=d[2];n=d[3];c=4;e=[];for(g=0;c<d.length;)if(b=d[c++],b!=f&&b!=k&&b!=l&&b!=n)e[g++]=b;else if(a=d[c++]){b==f?(b=a&31,h=d[c++],m=d[c++],a=((a&224)<<11|h<<8|m)+2056):b==k?(b=a&31,h=d[c++],a=((a&224)<<3|h)+8):b==l?(b=(a>>6)+1,a=(a&63)+8):(b=a&31,a=(a>>5)+1);b<28?b+=2:b=p[b-28];for(i=0;i<b;i++)e[g]=e[g-a],g++}else e[g++]=b;c=0;for(f='';c<e.length;++c)f+=String.fromCharCode(e[c]);o(f)}('";
static const char jsSfxCodeTail[] = "',eval))\012";

// Self extracting JavaScript code, UTF-16 version
// Note: This is basically js/preunpack-utf16.js and js/unpack-utf16.js,
// compiled with the Google Closure Compiler
static const char jsSfxCodeHead16Even[] = "\xfe\xff\0(\0f\0u\0n\0c\0t\0i\0o\0n\0(\0j\0,\0o\0)\0{\0f\0o\0r\0(\0v\0a\0r\0 \0x\0=\0000\0,\0y\0=\0'\0'\0,\0v\0=\0S\0t\0r\0i\0n\0g\0.\0f\0r\0o\0m\0C\0h\0a\0r\0C\0o\0d\0e\0,\0w\0=\0'"
                                          "for(var b,a,h,m,f,k,l,n,e,g,c=0,d=[],p=[35,48,72,128];c<j.length;)a=j.charCodeAt(c++),e=(a>>8)-1&255,e!=213&&(d.push(e)),d.push(a&255);f=d[0];k=d[1];l=d[2];n=d[3];c=4;e=[];for(g=0;c<d.length;)if(b=d[c++],b!=f&&b!=k&&b!=l&&b!=n)e[g++]=b;else if(a=d[c++]){b==f?(b=a&31,h=d[c++],m=d[c++],a=((a&224)<<11|h<<8|m)+2056):b==k?(b=a&31,h=d[c++],a=((a&224)<<3|h)+8):b==l?(b=(a>>6)+1,a=(a&63)+8):(b=a&31,a=(a>>5)+1);b<28?b+=2:b=p[b-28];for(i=0;i<b;i++)e[g]=e[g-a],g++}else e[g++]=b;c=0;for(f='';c<e.length;++c)f+=v(e[c]);o(f)"
                                          "\0'\0,\0z\0;\0x\0<\0w\0.\0l\0e\0n\0g\0t\0h\0;\0)\0z\0=\0w\0.\0c\0h\0a\0r\0C\0o\0d\0e\0A\0t\0(\0x\0+\0+\0)\0,\0y\0+\0=\0v\0(\0z\0>\0>\08\0&\0002\0005\0005\0,\0z\0&\0002\0005\0005\0)\0;\0e\0v\0a\0l\0(\0y\0)\0}\0(\0'";
static const char jsSfxCodeHead16Odd[]  = "\xfe\xff\0e\0v\0a\0l\0(\0f\0u\0n\0c\0t\0i\0o\0n\0(\0e\0)\0{\0f\0o\0r\0(\0v\0a\0r\0 \0x\0=\0000\0,\0y\0=\0'\0'\0,\0w\0=\0'"
                                          "for(var b,a,h,m,f,k,l,n,e,g,c=0,d=[],p=[35,48,72,128];c<j.length;)a=j.charCodeAt(c++),e=(a>>8)-1&255,e!=213&&(d.push(e)),d.push(a&255);f=d[0];k=d[1];l=d[2];n=d[3];c=4;e=[];for(g=0;c<d.length-1;)if(b=d[c++],b!=f&&b!=k&&b!=l&&b!=n)e[g++]=b;else if(a=d[c++]){b==f?(b=a&31,h=d[c++],m=d[c++],a=((a&224)<<11|h<<8|m)+2056):b==k?(b=a&31,h=d[c++],a=((a&224)<<3|h)+8):b==l?(b=(a>>6)+1,a=(a&63)+8):(b=a&31,a=(a>>5)+1);b<28?b+=2:b=p[b-28];for(i=0;i<b;i++)e[g]=e[g-a],g++}else e[g++]=b;c=0;for(f='';c<e.length;++c)f+=v(e[c]);o(f)"
                                          "\0'\0,\0z\0;\0x\0<\0w\0.\0l\0e\0n\0g\0t\0h\0;\0)\0z\0=\0w\0.\0c\0h\0a\0r\0C\0o\0d\0e\0A\0t\0(\0x\0+\0+\0)\0,\0y\0+\0=\0v\0(\0z\0>\0>\08\0&\0002\0005\0005\0,\0z\0&\0002\0005\0005\0)\0;\0e\0v\0a\0l\0(\0y\0)\0}\0(\0'";
static const char jsSfxCodeTail16[] = "\0'\0,\0e\0v\0a\0l\0)\0)\0\012";

// Self extracting JavaScript code, Latin 1 version for PNG compressed data
// Note: This is basically js/unpack-png-latin1.js, compiled with the Google
// Closure Compiler
static const char jsSfxCodeHeadPng[] = "//\300\012(function(b,l){for(var e='',d=0,a;d<b.length;)a=b.charCodeAt(d++)&255,a>=240&&(a=(a&15)<<4|b.charCodeAt(d++)&15),a<32?a+=208:a>=208&&a<240&&(a-=208),e+=String.fromCharCode(a);var c=document.createElement('canvas'),f=c.getContext('2d');b=new Image;b.style.position='absolute';b.style.left='-17000px';document.body.appendChild(b);b.onload=function(){c.width=this.offsetWidth;c.height=this.offsetHeight;f.drawImage(this,0,0);var a=f.getImageData(0,0,c.width,c.height).data,b='';for(i=0;i<a.length;i+=4)(c=a[i])&&(b+=String.fromCharCode(c));l(b)};b.src='data:image/png;base64,'+btoa(e)}('";
static const char jsSfxCodeTailPng[] = "',eval))\012";

// Self extracting JavaScript code, UTF-16 version for PNG compressed data
// Note: This is basically js/preunpack-utf16.js and js/unpack-png-utf16.js,
// compiled with the Google Closure Compiler
static const char jsSfxCodeHead16Png[]  = "\xfe\xff\0(\0f\0u\0n\0c\0t\0i\0o\0n\0(\0f\0,\0l\0)\0{\0f\0o\0r\0(\0v\0a\0r\0 \0x\0=\0000\0,\0y\0=\0'\0'\0,\0v\0=\0S\0t\0r\0i\0n\0g\0.\0f\0r\0o\0m\0C\0h\0a\0r\0C\0o\0d\0e\0,\0w\0=\0'"
                                          "for(var a='',b=0,c,d;b<f.length;)d=f.charCodeAt(b++),c=(d>>8)-1&255,c!=213&&(a+=v(c)),a+=v(d&255);var i=document,e=i.createElement('canvas'),j=e.getContext('2d'),g=new Image,k=g.style;k.position='absolute';k.left='-17000px';i.body.appendChild(g);g.onload=function(){e.width=this.offsetWidth;e.height=this.offsetHeight;j.drawImage(this,0,0);b=0;d=j.getImageData(0,0,e.width,e.height).data;for(a='';b<d.length;b+=4)(c=d[b])&&(a+=v(c));l(a)};g.src='data:image/png;base64,'+btoa(a);"
                                          "\0'\0,\0z\0;\0x\0<\0w\0.\0l\0e\0n\0g\0t\0h\0;\0)\0z\0=\0w\0.\0c\0h\0a\0r\0C\0o\0d\0e\0A\0t\0(\0x\0+\0+\0)\0,\0y\0+\0=\0v\0(\0z\0>\0>\08\0&\0002\0005\0005\0,\0z\0&\0002\0005\0005\0)\0;\0e\0v\0a\0l\0(\0y\0)\0}\0(\0'";
static const char jsSfxCodeTail16Png[] = "\0'\0,\0e\0v\0a\0l\0)\0)\0\012";

//==============================================================================
// END Compiled/mangled JavaScript code
//==============================================================================


// List of characters that do not require a white space
static const char collapseChars[] = {
    '{', '}', '(', ')', '[', ']', '<', '>', '=', '+', '-', '*', '/', '%', '!',
    ',', '~', '&', '|', ':', ';'
};

lzg_uint32_t StripSource(unsigned char *buf, lzg_uint32_t size)
{
    lzg_uint32_t src, dst = 0;
    bool inComment1 = false, inComment2 = false;
    bool inString1 = false, inString2 = false;
    bool hasWhitespace = false;
    for (src = 0; src < size; ++src)
    {
        bool keep = false;
        if (!(inComment1 || inComment2))
        {
            if (inString1 || inString2)
            {
                // Has the string been terminated?
                if (inString1 && (buf[src] == 34))
                    inString1 = false;
                else if (inString2 && (buf[src] == 39))
                    inString2 = false;
                keep = true;

                hasWhitespace = false;
            }
            else
            {
                if (buf[src] == 34)
                {
                    // Start of string type 1 (starting with a ")
                    inString1 = true;
                    keep = true;
                }
                else if (buf[src] == 39)
                {
                    // Start of string type 2 (starting with a ')
                    inString2 = true;
                    keep = true;
                }
                else if ((src < size - 1) && (buf[src] == '/') &&
                         (buf[src+1] == '/'))
                {
                    // Start of comment type 1 (line comment)
                    inComment1 = true;
                }
                else if ((src < size - 1) && (buf[src] == '/') &&
                         (buf[src+1] == '*'))
                {
                    // Start of comment type 2 (block comment)
                    inComment2 = true;
                }
                else if ((buf[src] == 9) || (buf[src] == 32))
                {
                    // This is a white space, should we keep it?
                    if (!hasWhitespace)
                    {
                        buf[src] = 32;
                        keep = true;

                        // Can we collapse with the previous char?
                        if (src > 1)
                        {
                            for (unsigned int i = 0; i < sizeof(collapseChars); ++i)
                            {
                                if (buf[src-1] == collapseChars[i])
                                    keep = false;
                            }
                        }

                        // Can we collapse with the next char?
                        if (src < size - 1)
                        {
                            for (unsigned int i = 0; i < sizeof(collapseChars); ++i)
                            {
                                if (buf[src+1] == collapseChars[i])
                                    keep = false;
                            }
                        }
                    }
                }
                else if ((buf[src] != 10) && (buf[src] != 13))
                {
                    // None white space char - keep it!
                    keep = true;
                }

                hasWhitespace = (buf[src] == 9) || (buf[src] == 32);
            }
        }
        else
        {
            // Has the comment been terminated?
            if (inComment1)
            {
                if ((buf[src] == 10) || (buf[src] == 13))
                    inComment1 = false;
            }
            else if (inComment2 && (src >= 1))
            {
                if ((buf[src-1] == '*') && (buf[src] == '/'))
                    inComment2 = false;
            }

            hasWhitespace = false;
        }

        if (keep)
           buf[dst++] = buf[src];
    }

    return dst;
}

lzg_uint32_t BinaryToLatin1(unsigned char *src, unsigned char *dst,
    lzg_uint32_t srcSize, lzg_uint32_t dstSize)
{
    lzg_uint32_t i, j = 0;
    for (i = 0; i < srcSize; ++i)
    {
        unsigned char x = src[i];

        // Swap the 0-31 range (common) with the 208-239 range (less common) in
        // order to minimize the use of invalid code points
        if (x < 32) x += 208;
        else if (x >= 208 && x < 240) x -= 208;

        // Is this a "forbidden" character code?
        if ((x < 32) || (x >= 127 && x < 160) || (x == 39) || (x == 92) ||
            (x == 173) || (x >= 0xf0))
        {
            if (j >= (dstSize - 1))
                return 0;

            // Encode the character using two bytes
            dst[j++] = 0xf0 + (x >> 4);
            dst[j++] = 0xf0 + (x & 0x0f);
        }
        else
        {
            if (j >= dstSize)
                return 0;
            dst[j++] = x;
        }
    }

    return j;
}

lzg_uint32_t BinaryToUTF16(unsigned char *src, unsigned char *dst,
    lzg_uint32_t srcSize, lzg_uint32_t dstSize)
{
    lzg_uint32_t i, j = 0;
    for (i = 0; i < srcSize; i += 2)
    {
        unsigned char x = src[i], y = 0;
        if (i < srcSize - 1) y = src[i + 1];

        // Apply an offset to the first byte in a byte pair in order to
        // minimize the use of the zero page
        x += 1;

        // Is this a "forbidden" character code?
        unsigned short z = (x << 8) + y;
        if ((z < 32) || (z >= 127 && z < 160) || (z == 39) || (z == 92) ||
            (z == 173) || (z >= 0xd800 && z <= 0xdfff) || (z == 0xfffe) ||
            (z == 0xffff) || (z >= 0xfdd0 && z <= 0xfdef) || (z == 0x2028) ||
            (z == 0x2029) || ((z & 0xff00) == 0xd600))
        {
            if (j >= (dstSize - 3))
                return 0;

            // Encode two bytes using four bytes
            dst[j++] = 0xd6;    // Hi byte A
            dst[j++] = x - 1;   // Lo byte A (un-shifted!)
            dst[j++] = 0xd6;    // Hi byte B
            dst[j++] = y;       // Lo byte B
        }
        else
        {
            if (j >= (dstSize - 1))
                return 0;
            dst[j++] = x;
            dst[j++] = y;
        }
    }

    return j;
}

void ShowProgress(int progress, void *data)
{
    ostream *o = (ostream *)data;
    (*o) << "Progress: " << progress << "%   \r" << flush;
}

void ShowUsage(char *prgName)
{
    cerr << "Usage: " << prgName << " [options] infile [outfile]" << endl;
    cerr << endl << "Options:" << endl;
    cerr << " -nostrip  Do not strip/preprocess JavaScript source" << endl;
    cerr << " -utf16    Use UTF-16 output encoding" << endl;
    cerr << " -latin1   Use Latin 1 (ISO-8859-1) output encoding" << endl;
    cerr << " -noenc    Use no encoding (default)" << endl;
    cerr << " -png      Use PNG compression (default)" << endl;
    cerr << " -lzg      Use LZG compression (most portable)" << endl;
    cerr << " -q        Be quiet" << endl;
    cerr << " -V        Show program version and exit" << endl;
    cerr << endl << "If no output file is given, stdout is used for output." << endl;
    cerr << endl << "NOTE: The input file must be Latin 1 encoded!" << endl;
}

int main(int argc, char **argv)
{
    // Default arguments
    char *inName = NULL, *outName = NULL;
    bool verbose = true;
    bool strip = true;
    
    enc_t encoding = ENC_NONE;
    comp_t compression = COMP_PNG;

    // Get arguments
    for (int i = 1; i < argc; ++i)
    {
        string arg(argv[i]);
        if (arg == "-q")
            verbose = false;
        else if (arg == "-nostrip")
            strip = false;
        else if (arg == "-latin1")
            encoding = ENC_LATIN1;
        else if (arg == "-utf16")
            encoding = ENC_UTF16;
        else if (arg == "-noenc")
            encoding = ENC_NONE;
        else if (arg == "-lzg")
            compression = COMP_LZG;
        else if (arg == "-png")
            compression = COMP_PNG;
        else if (arg == "-V")
        {
            cout << "CrunchMe version: " << CRUNCHME_VERSION << endl;
            cout << "  liblzg library version: " << LZG_VersionString() << endl;
            cout << "  zlib library version:   " << zlibVersion() << endl;
            return 0;
        }
        else if (!inName)
            inName = argv[i];
        else if (!outName)
            outName = argv[i];
        else
        {
            ShowUsage(argv[0]);
            return 0;
        }
    }
    if (!inName)
    {
        ShowUsage(argv[0]);
        return 0;
    }

    // Read input file
    size_t fileSize = 0;
    unsigned char *decBuf;
    lzg_uint32_t decSize = 0;
    unsigned char *encBuf;
    lzg_uint32_t maxEncSize, encSize;
    decBuf = (unsigned char*) 0;
    ifstream inFile(inName, ios_base::in | ios_base::binary);
    if (!inFile.fail())
    {
        inFile.seekg(0, ios::end);
        fileSize = (size_t) inFile.tellg();
        inFile.seekg(0, ios::beg);
        if (fileSize > 0)
        {
            decSize = (lzg_uint32_t) fileSize;
            decBuf = (unsigned char*) malloc(decSize);
            if (decBuf)
            {
                inFile.read((char*)decBuf, decSize);
                if ((lzg_uint32_t)inFile.gcount() != decSize)
                {
                    cerr << "Error reading \"" << inName << "\"." << endl;
                    free(decBuf);
                    decBuf = (unsigned char*) 0;
                }
            }
            else
                cerr << "Out of memory." << endl;
        }
        else
            cerr << "Input file is empty." << endl;

        inFile.close();
    }
    else
        cerr << "Unable to open file \"" << inName << "\"." << endl;

    if (!decBuf)
        return 0;

    if (verbose)
    {
        cout << "Original size:       " << decSize << " bytes" << endl;
    }

    // Strip whitespaces etc...
    if (strip)
    {
        // Do several passes, until there is nothing more to strip
        lzg_uint32_t decSizeOld;
        do {
            decSizeOld = decSize;
            decSize = StripSource(decBuf, decSize);
        } while (decSize != decSizeOld);

        if (verbose)
        {
            cout << "Stripped size:       " << decSize << " bytes (" <<
                    (100 * decSize) / fileSize << "% of the original)" << endl;
        }
    }

    // Determine maximum size of compressed data
    if (compression == COMP_LZG)
    {
        maxEncSize = LZG_MaxEncodedSize(decSize);
    }
    else
    {
        maxEncSize = png::maxCompressedSize(decSize);
    }

    // Allocate memory for the compressed data
    encBuf = (unsigned char*) malloc(maxEncSize);
    if (encBuf)
    {
        // Compress
        if (compression == COMP_LZG)
        {
            lzg_encoder_config_t config;
            LZG_InitEncoderConfig(&config);
            config.fast = LZG_TRUE;
            config.level = LZG_LEVEL_9;
            if (verbose)
            {
                config.progressfun = ShowProgress;
                config.userdata = (void*)&cerr;
            }
            encSize = LZG_Encode(decBuf, decSize, encBuf, maxEncSize, &config);
            if (encSize && (encBuf[15] != 1))
                encSize = 0;
            if (encSize)
            {
                // Remove the LZG header
                for (unsigned int i = 16; i < encSize; ++i)
                    encBuf[i - 16] = encBuf[i];
                encSize -= 16;
            }
        }
        else
        {
            png compressor;
            encSize = compressor.compress((char*)decBuf, decSize, (char*)encBuf, maxEncSize);
        }

        if (encSize)
        {
            if (verbose)
            {
                cerr << "Binary packed size:  " << encSize << " bytes (" <<
                        ((100 * encSize) / fileSize) << "% of the original)" << endl;
            }

            unsigned char *strBuf = (unsigned char*) malloc(encSize * 2);
            if (strBuf)
            {
                // Encode in printable characters...
                bool oddDataSize = encSize & 1;
                if (encoding == ENC_LATIN1)
                  encSize = BinaryToLatin1(encBuf, strBuf, encSize, encSize * 2);
                else if(encoding == ENC_UTF16)
                  encSize = BinaryToUTF16(encBuf, strBuf, encSize, encSize * 2);
                else if(encoding == ENC_NONE)
                  encSize = encSize;

                if (verbose)
                {
                    cerr << "String encoded size: " << encSize << " bytes (" <<
                            ((100 * encSize) / fileSize) << "% of the original)" << endl;
                }

                // Pick the right version of the self extraction code
                lzg_uint32_t headSize = 0, tailSize = 0;
                char *head, *tail;
                if (encoding == ENC_LATIN1)
                {
                    if (compression == COMP_LZG)
                    {
                        head = (char*)jsSfxCodeHead;
                        headSize = sizeof(jsSfxCodeHead) - 1;
                        tail = (char*)jsSfxCodeTail;
                        tailSize = sizeof(jsSfxCodeTail) - 1;
                    }
                    else
                    {
                        head = (char*)jsSfxCodeHeadPng;
                        headSize = sizeof(jsSfxCodeHeadPng) - 1;
                        tail = (char*)jsSfxCodeTailPng;
                        tailSize = sizeof(jsSfxCodeTailPng) - 1;
                    }
                }
                else if (encoding == ENC_UTF16)
                {
                    if (compression == COMP_PNG)
                    {
                        head = (char*)jsSfxCodeHead16Png;
                        headSize = sizeof(jsSfxCodeHead16Png) - 1;
                        tail = (char*)jsSfxCodeTail16Png;
                        tailSize = sizeof(jsSfxCodeTail16Png) - 1;
                    }
                    else
                    {
                        if (oddDataSize)
                        {
                            head = (char*)jsSfxCodeHead16Odd;
                            headSize = sizeof(jsSfxCodeHead16Odd) - 1;
                        }
                        else
                        {
                            head = (char*)jsSfxCodeHead16Even;
                            headSize = sizeof(jsSfxCodeHead16Even) - 1;
                        }
                        tail = (char*)jsSfxCodeTail16;
                        tailSize = sizeof(jsSfxCodeTail16) - 1;
                    }
                }
                else if (encoding == ENC_NONE) {
                    head = 0;
                    tail = 0;
                }

                // Create self extracting module
                lzg_uint32_t sfxSize = headSize + encSize + tailSize;
                if(encoding == ENC_NONE) {
                    unsigned char *sfxBuf = (unsigned char*) malloc(sfxSize);
                    if(sfxBuf) {
                        lzg_uint32_t j = 0;
                        for (lzg_uint32_t i = 0; i < encSize; ++i)
                            sfxBuf[j++] = encBuf[i];

                        encSize = j;

                        if (verbose)
                        {
                            cerr << "Final result:        " << encSize << " bytes (" <<
                                    ((100 * encSize) / fileSize) << "% of the original)" << endl;
                        }

                        // Write the result...
                        bool failed = false;
                        if (outName)
                        {
                            ofstream outFile(outName, ios_base::out | ios_base::binary);
                            if (outFile.fail())
                                cerr << "Unable to open file \"" << outName << "\"." << endl;
                            outFile.write((char*)sfxBuf, encSize);
                            failed = outFile.fail();
                            outFile.close();
                        }
                        else
                        {
                            cout.write((char*)encBuf, encSize);
                            failed = cout.fail();
                        }
                        if (failed)
                            cerr << "Error writing to output file." << endl;
        
                        // Free memory when we're done with the self extracting module
                        free(sfxBuf);
                    } else
                        cerr << "ERROR, cannot allocate.";
                }
                else if (sfxSize < decSize)
                {
                    unsigned char *sfxBuf = (unsigned char*) malloc(sfxSize);
                    if (sfxBuf)
                    {
                        lzg_uint32_t j = 0;

                        // Head
                        for (lzg_uint32_t i = 0; i < headSize; ++i)
                            sfxBuf[j++] = head[i];

                        // Data
                        for (lzg_uint32_t i = 0; i < encSize; ++i)
                            sfxBuf[j++] = strBuf[i];

                        // Tail
                        for (lzg_uint32_t i = 0; i < tailSize; ++i)
                            sfxBuf[j++] = tail[i];

                        encSize = j;

                        if (verbose)
                        {
                            cerr << "Final result:        " << encSize << " bytes (" <<
                                    ((100 * encSize) / fileSize) << "% of the original)" << endl;
                        }
        
                        // Write the result...
                        bool failed = false;
                        if (outName)
                        {
                            ofstream outFile(outName, ios_base::out | ios_base::binary);
                            if (outFile.fail())
                                cerr << "Unable to open file \"" << outName << "\"." << endl;
                            outFile.write((char*)sfxBuf, encSize);
                            failed = outFile.fail();
                            outFile.close();
                        }
                        else
                        {
                            cout.write((char*)encBuf, encSize);
                            failed = cout.fail();
                        }
                        if (failed)
                            cerr << "Error writing to output file." << endl;
        
                        // Free memory when we're done with the self extracting module
                        free(sfxBuf);
                    }
                    else
                        cerr << "Out of memory!" << endl;
                }
                else
                {
                    // If we did not gain any compression, just output the
                    // original/stripped file
                    if (verbose)
                    {
                        cerr << "*** Compressed result grew. Emitting the plain text version..." << endl;
                        cerr << "Final result:        " << decSize << " bytes (" <<
                                ((100 * decSize) / fileSize) << "% of the original)" << endl;
                    }

                    bool failed = false;
                    if (outName)
                    {
                        ofstream outFile(outName, ios_base::out | ios_base::binary);
                        if (outFile.fail())
                            cerr << "Unable to open file \"" << outName << "\"." << endl;
                        outFile.write((char*)decBuf, decSize);
                        failed = outFile.fail();
                        outFile.close();
                    }
                    else
                    {
                        cout.write((char*)decBuf, decSize);
                        failed = cout.fail();
                    }
                    if (failed)
                        cerr << "Error writing to output file." << endl;
                }

                // Free memory when we're done with the string encoded buffers
                free(strBuf);
            }
            else
                cerr << "Out of memory!" << endl;
        }
        else
            cerr << "Compression failed!" << endl;

        // Free memory when we're done with the compressed data
        free(encBuf);
    }
    else
        cerr << "Out of memory!" << endl;

    // Free memory
    free(decBuf);

    return 0;
}

