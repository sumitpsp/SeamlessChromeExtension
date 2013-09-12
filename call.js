var greeting = "hola, ";
var port = chrome.runtime.connect({name: "sendurl"});
port.postMessage({msg: "Send URL to localhost"});

port.onMessage.addListener(function(recvport) {
	if(recvport.msg == "sent") {
		recvport.postMessage({msg: "Send URL to localhost"});
	}
});



