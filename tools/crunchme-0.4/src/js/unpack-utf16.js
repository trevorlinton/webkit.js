// -*- mode: javascript; tab-width: 2; indent-tabs-mode: nil; -*-

//------------------------------------------------------------------------------
// Copyright (c) 2011 Marcus Geelnard
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
// claim that you wrote the original software. If you use this software
// in a product, an acknowledgment in the product documentation would be
// appreciated but is not required.
//
// 2. Altered source versions must be plainly marked as such, and must not be
// misrepresented as being the original software.
//
// 3. This notice may not be removed or altered from any source
// distribution.
//------------------------------------------------------------------------------

function decode(d)
{
  var w, symbol, b, b2, b3, len, offset, k, data, m1, m2, m3, m4, dst, dstlen, s;

  // Convert data from UTF-16 encoded to a binary data array
  data = [];
  k = 0;
  while(k < d.length)
  {
    w = d.charCodeAt(k++);
    b = ((w >> 8) - 1) & 255;
    if (b != 0xd5)
    {
      data.push(b);
    }
    data.push(w & 255);
  }

  // LUT for decoding the copy length parameter
  var LZG_LENGTH_DECODE_LUT = [35,48,72,128];
  var decodeLen = function(x)
  {
    if (x < 28) return x + 2;
    return LZG_LENGTH_DECODE_LUT[x-28];
  }

  // Get marker symbols
  m1 = data[0];
  m2 = data[1];
  m3 = data[2];
  m4 = data[3];

  // Main decompression loop
  dst = new Array();
  dstlen = 0;
  k = 4;
  while (k < data.length) // NOTE: For odd data sizes, do data.length-1
  {
    symbol = data[k++];
    if ((symbol != m1) && (symbol != m2) && (symbol != m3) && (symbol != m4))
    {
      // Literal copy
      dst[dstlen++] = symbol;
    }
    else
    {
      b = data[k++];
      if (b)
      {
        // Decode offset / length parameters
        if (symbol == m1)
        {
          // marker1 - "Distant copy"
          len = decodeLen(b & 0x1f);
          b2 = data[k++];
          b3 = data[k++];
          offset = (((b & 0xe0) << 11) | (b2 << 8) | b3) + 2056;
        }
        else if (symbol == m2)
        {
          // marker2 - "Medium copy"
          len = decodeLen(b & 0x1f);
          b2 = data[k++];
          offset = (((b & 0xe0) << 3) | b2) + 8;
        }
        else if (symbol == m3)
        {
          // marker3 - "Short copy"
          len = (b >> 6) + 3;
          offset = (b & 63) + 8;
        }
        else
        {
          // marker4 - "Near copy (incl. RLE)"
          len = decodeLen(b & 0x1f);
          offset = (b >> 5) + 1;
        }

        // Copy the corresponding data from the history window
        for (i = 0; i < len; i++)
        {
          dst[dstlen] = dst[dstlen-offset];
          dstlen++;
        }
      }
      else
      {
        // Literal copy (single occurance of a marker symbol)
        dst[dstlen++] = symbol;
      }
    }
  }

  // Convert to a string
  s = "";
  for (k = 0; k < dst.length; ++k)
    s += String.fromCharCode(dst[k]);
  return s;
}
eval(decode(''));

