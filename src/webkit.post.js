
var priormessage = onmessage;
var functionhandles = [];
onmessage = function(msg) {
  if(msg.data && msg.data['wrap']) {
  	functionhandles[msg.data['wrap']] = Module.cwrap(msg.data['wrap'],msg.data['returntype'],msg.data['argtypes']);
  	postMessage({target:'status', context:'next'});
  } else if (msg.data && msg.data['call']) {
  	var args = JSON.parse(msg.data['arguments']);
    //.apply(null,JSON.parse(msg.data['arguments']));
    (functionhandles[msg.data['call']])(args[0],args[1]); 
  	postMessage({target:'status', context:'next'});
  } else {
  	priormessage(msg);
  }
}
