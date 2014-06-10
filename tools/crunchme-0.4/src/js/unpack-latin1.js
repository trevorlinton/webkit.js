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

(function (d, evalFun)
{
  var
    // Local variables
    symbol, b, b2, b3, len, offset, m1, m2, m3, m4, dst, dstlen, s,

    // ...with initializers
    k = 0, data = [],

    // LUT for decoding the copy length parameter
    LZG_LENGTH_DECODE_LUT = [35,48,72,128];


  // Convert data from Latin1 encoded to a binary data array
  while(k < d.length)
  {
    b = d.charCodeAt(k++) & 255;
    if (b >= 240)
      b = ((b & 15) << 4) | (d.charCodeAt(k++) & 15);
    if (b < 32) b += 208;
    else if ((b >= 208) && (b < 240)) b -= 208;
    data.push(b);
  }


  // Get marker symbols
  m1 = data[0];
  m2 = data[1];
  m3 = data[2];
  m4 = data[3];

  // Main decompression loop
  for (k = 4, dst = [], dstlen = 0; k < data.length;)
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
          len = b & 0x1f;
          b2 = data[k++];
          b3 = data[k++];
          offset = (((b & 0xe0) << 11) | (b2 << 8) | b3) + 2056;
        }
        else if (symbol == m2)
        {
          // marker2 - "Medium copy"
          len = b & 0x1f;
          b2 = data[k++];
          offset = (((b & 0xe0) << 3) | b2) + 8;
        }
        else if (symbol == m3)
        {
          // marker3 - "Short copy"
          len = (b >> 6) + 1;
          offset = (b & 63) + 8;
        }
        else
        {
          // marker4 - "Near copy (incl. RLE)"
          len = b & 0x1f;
          offset = (b >> 5) + 1;
        }

        // Decode the length parameter
        if (len < 28) len += 2;
        else len = LZG_LENGTH_DECODE_LUT[len - 28];

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
  for (k = 0, s = ""; k < dst.length; ++k)
    s += String.fromCharCode(dst[k]);

  // Execute the script in global space
  evalFun(s);
}('**COMPRESSED DATA HERE***', eval));

