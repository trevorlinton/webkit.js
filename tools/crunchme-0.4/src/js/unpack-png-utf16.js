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

// Note: the following must be pre-defined by the parent unpacker
// v = String.fromCharCode;

(function(data, evalFunction)
{
  // Convert data from UTF-16 encoded to a data string
  for (var dataStr = "", k = 0, b, w; k < data.length;)
  {
    w = data.charCodeAt(k++);
    b = ((w >> 8) - 1) & 255;
    if (b != 0xd5)
    {
      dataStr += v(b);
    }
    dataStr += v(w & 255);
  }

  // Create a 2D canvas
  var doc = document, canv = doc.createElement("canvas"), ctx = canv.getContext("2d");

  // Create an image from the data
  var img = new Image(), style = img.style;
  style.position="absolute";
  style.left="-17000px";
  doc.body.appendChild(img);
  img.onload = function()
  {
    // Draw the loaded image to the canvas
    canv.width = this.offsetWidth;
    canv.height = this.offsetHeight;
    ctx.drawImage(this, 0, 0);

    // Convert the drawn image to a string
    for (k = 0, w = ctx.getImageData(0, 0, canv.width, canv.height).data, dataStr = ""; k < w.length; k += 4)
    {
      b = w[k];
      if (b) dataStr += v(b);
    }

    // Run the script
    evalFunction(dataStr);
  }
  img.src = "data:image/png;base64," + btoa(dataStr);
}('',eval))

