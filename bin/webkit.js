/* settings = {width:, height:, canvas:, log:, scale:, hidpi:, error:, status:, path:'path/to/webkit.release.bin.js', accelerated:true} */
function WebKit(settings) {
	if(typeof(settings)=='undefined') settings = {};

	if(typeof(settings.accelerated)=='undefined') settings.accelerated = true;
	if(typeof(settings.path)=='undefined') settings.path = 'webkit.bin.js';
	if(typeof(settings.canvas)=='undefined') throw new Error('A rendering target (Canvas Object) must be provided.');
	if(typeof(settings.width)=='undefined') settings.width = 500;
	if(typeof(settings.height)=='undefined') settings.height = 500;
	if(typeof(settings.scale)=='undefined') settings.scale = 1;
	if(typeof(settings.hidpi)=='undefined') settings.hidpi = false;

	var events = [];

	this.addEventListener = function(event, func) {
		if(!events[event]) events[event] = [];
		events[event].push(func);
	}

	var worker = (!settings.accelerated) ? new Worker(settings.path) : null;
	var workerResponded = false;
	var queue = [];
	var lastcommand = null;
	var $resize, $scaleFactor, $setTransparent, $setHtml;
	var _width = settings.width;
	var _height = settings.height;
	var _scale = settings.scale;
	var _transparent = false;
	var _html = "<html><body></body></html>";
	var _hidpi = settings.hidpi;
	var renderFrameData = null;
	var Module = {
		preRun:[], postRun:[], noInitialRun:false, noExitRuntime:false, doNotCaptureKeyboard:true, 
		canvas:settings.canvas,
		print: function(text) { console.log(Array.prototype.slice.call(arguments).join(' ')); },
		printErr: function(text) { console.error(Array.prototype.slice.call(arguments).join(' ')); },
		setStatus: function(text) { console.log(Array.prototype.slice.call(arguments).join(' ')); },
		totalDependencies: 0,
		monitorRunDependencies: function(left) { }
	};

	if(typeof(settings.log)!='undefined') Module.print = settings.log;
	if(typeof(settings.error)!='undefined') Module.printErr = settings.error;
	if(typeof(settings.status)!='undefined') Module.setStatus = settings.status;

	if(!settings.accelerated) Module.ctx = Module.canvas.getContext('2d');

	function fireEvent(event, args) {
		if(events[event]) {
			for(var i=0; i < events[event].length; i++) {
				var func = events[event][i];
				func(args);
			}
		}
	}

	function wrap(func,returntype,argtypes) {
		if(!settings.accelerated) {
			queue.push({wrap:func,returntype:returntype,argtypes:argtypes});
			return function() {
				queue.push({call:func,arguments:JSON.stringify(arguments)});
			}
		} else {
			var cfunc = Module.cwrap(func,returntype,argtypes);
			var fire = fireEvent.bind(this);
			return function() {
				fireEvent('call',func);
				var rval = cfunc(arguments[0],arguments[1]);
				fireEvent('done', func);
				return rval;
			}
		}
	}

	function initializeInPage() {
		 $resize = wrap('resize', 'number', ['number', 'number']);
		 $scaleFactor  = wrap('scalefactor', 'number', ['number']);
		 $setTransparent = wrap('setTransparent', 'number', ['boolean']);
		 $setHtml = wrap('setHtml', 'number', ['string']);
	}
	function executeInPage() {
		// TODO: This code is repeated from below for efficiency in loading,
		// and setting defaults, we should most likely figure out how to combine it.
		if(settings.width != 500 || settings.height != 500)
			$resize(_width, _height);
		if(settings.scale != 1 && !settings.hidpi)
			$scaleFactor(_scale);
		if(settings.hidpi && !settings.accelerated) {
			Module['canvas'].width = _width * 2;
			Module['canvas'].height = _height * 2;
			Module['canvas'].style.webkitTransform = 'scale(0.5,0.5)';
			Module['canvas'].style.webkitTransformOrigin = '0 0';
			$scaleFactor(2);
		} else if (settings.hidpi && settings.accelerated) {
			Module['canvas'].width = _width;
			Module['canvas'].height = _height;
			$scaleFactor(2);
		}
		fireEvent('ready',null);
	}

	if(settings.accelerated) {
		window.Module = Module;
		window.Module.preRun = [initializeInPage];
		window.Module.postRun = [executeInPage];
		var script = document.createElement("script");
		script.src = settings.path;
		document.head.appendChild(script);
	} else {
		initializeInPage();
		executeInPage();
	}


	function queueRunner() {
		if(!settings.accelerated) {
			if(!workerResponded) return;
			if(lastcommand && lastcommand.call) {
				fireEvent('done',lastcommand.call);
				lastcommand = null;
			}
			if(queue.length > 0) {
				var cmd = queue.shift();
				lastcommand = cmd;
				if(cmd.call) {
					fireEvent('call',cmd.call);
				}
				workerResponded = false;
				if(!settings.accelerated) {
					worker.postMessage(cmd);
				} 
			}
		}
	}

	// render a frame of data coming from the webkit, this only applies for 2d canvases.
	function renderFrame() {
		var dst = Module.canvasData.data;
		if (dst.set) {
			dst.set(renderFrameData);
		} else {
			for (var i = 0; i < renderFrameData.length; i++) {
				dst[i] = renderFrameData[i];
			}
		}
		Module.ctx.putImageData(Module.canvasData, 0, 0);
		renderFrameData = null;
	}
	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || renderFrame;
	


	if(!settings.accelerated) {
		worker.onmessage = function worker_onmessage(event) {
			if (!workerResponded)
				workerResponded = true;

			var data = event.data;
			switch (data.target) {
				case 'status': {
					if(data.context=='next') {
						queueRunner();
					} else if (data.context=='error') {
						fireEvent('error',data);
					} else if (data.context=='ready') {
						queueRunner();
						fireEvent('ready',null);
					}
					break;
				}
				case 'stdout': {
					fireEvent('log',data);
					Module.print(data.content);
					break;
				}
				case 'stderr': {
					fireEvent('error',data.content);
					Module.printErr(data.content);
					break;
				}
				case 'window': {
					window[data.method]();
					break;
				}
				case 'canvas': {
					switch (data.op) {
						case 'resize': {
							Module.canvas.width = data.width;
							Module.canvas.height = data.height;
							Module.canvasData = Module.ctx.getImageData(0, 0, data.width, data.height);
							worker.postMessage({ target: 'canvas', boundingClientRect: cloneObject(Module.canvas.getBoundingClientRect()) });
							break;
						}
						case 'render': {
							if (renderFrameData) {
	            				// previous image was not rendered yet, just update image
	            				renderFrameData = data.image.data;
	        				} else {
	            				// previous image was rendered so update image and request another frame
	            				renderFrameData = data.image.data;
	            				window.requestAnimationFrame(renderFrame);
	        				}
	        				break;
	    				}
	    				default: throw 'Unknown command from canvas sub-worker.';
					}
					break;
				}
				default: throw 'Unknown command from sub-worker.';
			}
		}.bind(this);
	}
	function cloneObject(event) {
		var ret = {};
		for (var x in event) {
			if (x == x.toUpperCase()) continue;
			var prop = event[x];
			if (typeof prop === 'number' || typeof prop === 'string') ret[x] = prop;
		}
		return ret;
	};

	['keydown', 'keyup', 'keypress', 'blur', 'visibilitychange'].forEach(function(event) {
		document.addEventListener(event, function(event) {
			//worker.postMessage({ target: 'document', event: cloneObject(event) });
			//event.preventDefault();
		});
	});

	['unload'].forEach(function(event) {
		window.addEventListener(event, function(event) {
			//worker.postMessage({ target: 'window', event: cloneObject(event) });
		});
	});

	['mousedown', 'mouseup', 'mousemove', 'DOMMouseScroll', 'mousewheel', 'mouseout'].forEach(function(event) {
		Module.canvas.addEventListener(event, function(event) {
			//worker.postMessage({ target: 'canvas', event: cloneObject(event) });
			//event.preventDefault();
		}, true);
	});

	Object.defineProperty(this,'scale',{
		get:function() { return _scale; },
		set:function(e) {
			if(_hidpi) {
				$scaleFactor(e*2);
			} else {
				$scaleFactor(e);
			}
			$setHtml(this.html);
			_scale = e;
			queueRunner();
		}
	});

	this.pushMessage = function() {
		queueRunner();
	}.bind(this);

	Object.defineProperty(this,'hidpi', {
		get:function() { return _hidpi; },
		set:function(e) {
			_hidpi = e;
			if(settings.hidpi && !settings.accelerated) {
				Module['canvas'].width = _width * 2;
				Module['canvas'].height = _height * 2;
				Module['canvas'].style.webkitTransform = 'scale(0.5,0.5)';
				Module['canvas'].style.webkitTransformOrigin = '0 0';
			} else if (settings.hidpi && settings.accelerated) {
				Module['canvas'].width = _width;
				Module['canvas'].height = _height;
			}
			this.scale = this.scale; // force a scale size.

			queueRunner();
		}
	});

	Object.defineProperty(this,'html',{
		get:function() { return _html; },
		set:function(e) {
			$setHtml(e);
			_html = e;
			queueRunner();
		}
	});

	Object.defineProperty(this,'transparent',{
		get:function() { return this._transparent; },
		set:function(e) {
			$setTransparent(e);
			_transparent = e;
			queueRunner();
		}
	});

	Object.defineProperty(this,'width',{
		get:function() { return  _width; },
		set:function(e) {
			_width = e;
			$resize(_width,_height);
			queueRunner();
		}
	});

	Object.defineProperty(this,'height',{
		get:function() { return _height; },
		set:function(e) {
			_height = e;
			$resize(_width,_height);
			queueRunner();
		}
	});

	this.resize = function(width, height) {
		_width = width;
		_height = height;
		$resize(_width, _height);
		queueRunner();
	}

}
