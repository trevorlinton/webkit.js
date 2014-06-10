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

(function(d, evalFunction)
{
  // Convert data from Latin 1 encoded to a data string
  var dataStr = "", k = 0, b;
  while(k < d.length)
  {
    b = d.charCodeAt(k++) & 255;
    if (b >= 240)
      b = ((b & 15) << 4) | (d.charCodeAt(k++) & 15);
    if (b < 32) b += 208;
    else if ((b >= 208) && (b < 240)) b -= 208;
    dataStr += String.fromCharCode(b);
  }

  // Create a 2D canvas
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");

  // Create an image from the data
  var img = new Image();
  img.style.position="absolute";
  img.style.left="-17000px";
  document.body.appendChild(img);
  img.onload = function()
  {
    // Draw the loaded image to the canvas
    c.width = this.offsetWidth;
    c.height = this.offsetHeight;
    ctx.drawImage(this, 0, 0);

    // Convert the drawn image to a string
    var data = ctx.getImageData(0, 0, c.width, c.height).data;
    var s = "";
    for (i = 0; i < data.length; i+=4)
    {
      c = data[i];
      if (c) s += String.fromCharCode(c);
    }

    // Run the script
    evalFunction(s);
  }
  img.src = "data:image/png;base64," + btoa(dataStr);
})('',eval);

