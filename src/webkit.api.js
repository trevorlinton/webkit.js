

function proxy(obj) {
	if(obj.type == 'putImageData' || obj.type == 'drawImage')
		postMessage(obj,[obj.imgdata]);
	else
		postMessage(obj);
}

function ImageData() {
	this._width = 0;
	this._height = 0;
	this._resolution = 1;
	Object.defineProperty(this, 'width', {
		get:function() {
			return this._width;
		},
		set:function(e) {
			this._width = e;
			proxy({call:'imagedata',type:'width',id:Math.random()});
		}
	});
	Object.defineProperty(this, 'height', {
		get:function() {
			return this._height;
		},
		set:function(e) {
			this._height = e;
			proxy({call:'imagedata',type:'height',id:Math.random()});
		}
	});
}

function CanvasRenderingContext2D() {
	this.createImageData = function(w,h) {
		proxy({call:'canvas',type:'createImageData',id:Math.random(),width:w,height:h});
		this.im = new ImageData();
		this.im.width = w;
		this.im.height = h;
		this.im.data = new Uint8Array(w*h*4);
		return this.im;
	}
	this.drawImage = function(image,sx,sy,sw,sh,dx,dy,dw,dh) {
		var outgoingBuffer = image.getContext('2d').getImageData().data.buffer;
		outgoingBuffer = outgoingBuffer.slice(0,outgoingBuffer.byteLength);
		proxy({call:'canvas',type:'drawImage',id:Math.random(),imgdata:outgoingBuffer,sx:sx,sy:sy,sw:sw,sh:sh,dx:dx,dy:dy,dw:dw,dh:dh,width:image.width,height:image.height});
	}
	this.getImageData = function(x,y,width,height) {
		proxy({call:'canvas',type:'getImageData',id:Math.random()});
		if(!this.im) {
			this.im = new ImageData();
			this.im.width = width;
			this.im.height = height;
			this.im.data = new Uint8Array(width*height*4);
		}
		return this.im;

	}
	this.putImageData = function(image,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight) {
		var outgoingBuffer = image.data.buffer.slice(0,image.data.buffer.byteLength);
		proxy({call:'canvas',type:'putImageData',imgdata:outgoingBuffer,dx:dx,dy:dy,dirtyX:dirtyX,dirtyY:dirtyY,dirtyWidth:dirtyWidth,dirtyHeight:dirtyHeight,width:image.width,height:image.height});
	}
}

function Canvas() {
	this.addEventListener = function(type,func,second) {
		proxy({call:'canvas',type:'addEventListener',id:Math.random(),eventype:type});
	}
	this._width = 0;
	this._height = 0;
	this.locked = true;
	this.Context2D = new CanvasRenderingContext2D();
	Object.defineProperty(this, 'width', {
		get:function() {
			return this._width;
		},
		set:function(e) {
			this._width = e;
			proxy({call:'canvas',type:'width',id:Math.random(),value:e});
		}
	});
	Object.defineProperty(this, 'height', {
		get:function() {
			return this._height;
		},
		set:function(e) {
			this._height = e;
			proxy({call:'canvas',type:'height',id:Math.random(),value:e});
		}
	});
	this.getContext = function(type) {
		proxy({call:'canvas',type:'getContext',id:Math.random(),contexttype:type});
		return this.Context2D;
	}
}

Module['print'] = function(e) { postMessage({call:'print',value:e}) }
Module['printErr'] = function(e) { postMessage({call:'printErr',value:e}); }
Module['canvas'] = new Canvas();

document = {
	createElement:function(e) {
		proxy({call:'document',type:'createElement',id:Math.random(),element:e});
		if(e == 'canvas') { 
			return new Canvas();
		}		
	},
	addEventListener:function(type,func,second) {
		proxy({call:'document',type:'addEventListener',id:Math.random(),type:type});
	},
	removeEventListener:function(type) {
		proxy({call:'document',type:'removeEventListener',id:Math.random(),type:type});
	}
}

window = {
	addEventListener:function() {
		proxy({call:'window',type:'addEventListener',id:Math.random()});
	},
	requestAnimationFrame:function(func) {
		//proxy({call:'window',type:'requestAnimationFrame',id:Math.random()});
		setTimeout(func, 1000/60);
	}
}

var WebKit = { };
WebKit.create = Module.cwrap('createWebKit','number',['number','number']);
WebKit.html = Module.cwrap('setHtml','number',['string']);
WebKit.transparent = Module.cwrap('setTransparent','number',['boolean']);
WebKit.resize = Module.cwrap('resize','number',['number','number']);

var priormessage = onmessage;
onmessage = function(msg) {
  if(msg.data['call']) {
  	if(msg.data['call']=='create') {
  		WebKit.create(msg.data['width'],msg.data['height']);
  	} else if(msg.data['call']=='html') {
  		WebKit.html(msg.data['value']);
  	} else if(msg.data['call']=='transparent') {
  		WebKit.transparent(msg.data['value'])
  	} else if(msg.data['call']=='resize') {
  		WebKit.resize(msg.data['width'],msg.data['height']);
  	}
  } else { 
  	priormessage(msg);
  }
}
postMessage({call:'ready'});