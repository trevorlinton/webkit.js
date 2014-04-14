
function ImageData(w, h, imgdata) {
	this._width = w;
	this._height = h;
	this._resolution = 1;
	if(typeof(imgdata) != 'undefined')
		this.data = imgdata;
	else
		this.data = new Uint8Array(w*h*4);
	Object.defineProperty(this, 'width', { get:function() { return this._width; } });
	Object.defineProperty(this, 'height', { get:function() { return this._height; } });
}
ImageData.prototype.getSubRectangle = function(x,y,rect_width,rect_height) {
	var rect = Uint8Array(rect_width*rect_height*4);
	var pos = 0;
	for(var col=0; col < this._width; col++)
		for(var row=0; row < this._height; row++)
			if(col >= x && col < x+rect_width &&
				 row >= y && row < y+rect_height) {
				var array_pos = (col + row * rect_width) * 4;
				rect[pos++] = this.data[array_pos];
			}
	return rect;
}


function CanvasRenderingContext2D() {}
CanvasRenderingContext2D.prototype.drawImage = function(objImage,sx,sy,sw,sh,dx,dy,dw,dh) {
	var img = objImage.getContext('2d').image;
	postMessage({call:'canvas',type:'drawImage',
							imagedata:img.data.buffer,
							width:img.width,
							height:img.height,
							sx:sx, sy:sy, sw:sw, sh:sh,
							dx:dx, dy:dy, dw:dw, dh:dh
	},[img.data.buffer]);
}
CanvasRenderingContext2D.prototype.putImageData = function(image,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight) {
	postMessage({call:'canvas',type:'putImageData',
							imagedata:image.data.buffer,
							width:image.width, height:image.height,
							dx:dx, dy:dy, dirtyX:dirtyX, dirtyY:dirtyY,
							dirtyWidth:dirtyWidth, dirtyHeight:dirtyHeight
	},[image.data.buffer]);
}
CanvasRenderingContext2D.prototype.getImageData = function(x,y,w,h) {
	if(!this.image) return this.image = new ImageData(w,h);
	else return new ImageData(w,h,this.image.getSubRectangle(x,y,w,h));
};
CanvasRenderingContext2D.createImageData = function(w,h) {
	return this.image = new ImageData(w,h);
};


function Canvas() {
	this._width = 0;
	this._height = 0;
	this._ctx = new CanvasRenderingContext2D();
	this.locked = true;
	this.getContext = function(type) { return this._ctx; };
	Object.defineProperty(this, 'ctx', {
		get:function() { return this._ctx; }
	});
	Object.defineProperty(this, 'width', {
		get:function() { return this._width; },
		set:function(e) {
			this._width = e;
			postMessage({call:'canvas',type:'width',width:e});
		}
	});
	Object.defineProperty(this, 'height', {
		get:function() { return this._height; },
		set:function(e) {
			this._height = e;
			postMessage({call:'canvas',type:'height',height:e});
		}
	});
}
Canvas.prototype.addEventListener = function() {}


document = {
	createElement:function(e) { return new Canvas(); },
	addEventListener:function(){},
	removeEventListener:function(){},
}
window = {
	addEventListener:function(){},
	requestAnimationFrame:function(func) { setTimeout(func, 1000/60);}
}