Module['print'] = function(e) { postMessage({call:'print',value:e}) }
Module['printErr'] = function(e) { postMessage({call:'printErr',value:e}); }
Module['canvas'] = new Canvas();

var WebKit = { };
WebKit.create = Module.cwrap('createWebKit','number',['number','number']);
WebKit.html = Module.cwrap('setHtml','number',['string']);
WebKit.transparent = Module.cwrap('setTransparent','number',['boolean']);
WebKit.resize = Module.cwrap('resize','number',['number','number']);
WebKit.scalefactor = Module.cwrap('scalefactor','number',['number']);

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
  	} else if(msg.data['call']=='scalefactor') {
			WebKit.scalefactor(msg.data['scalefactor']);
		}
  } else {
  	priormessage(msg);
  }
}

postMessage({call:'ready'});