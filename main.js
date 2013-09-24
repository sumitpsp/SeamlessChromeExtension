console.log("Crocky");

chrome.tabs.onActivated.addListener( function(info) {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      //alert(tabs[0].url);
      var url = "http://localhost:11111/activeurl";
      var req = new XMLHttpRequest();
      req.open('POST', url, true);
      req.setRequestHeader('Content-type', 'application/txt');
      req.onload = function() {
            console.log("Response Received");
        }
      var senddata = "{\"url\": \"" + escape(tabs[0].url) + "\", \"title\": \"" + tabs[0].title + "\" }";
      req.send(senddata);
    
    }
    );
});

chrome.runtime.onConnect.addListener(function(port) {
	console.assert(port.name == "sendurl"); 
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      //alert(tabs[0].url);
	  var url = "http://localhost:11111/activeurl";
	  var req = new XMLHttpRequest();
	  req.open('POST', url, true);
	  req.setRequestHeader('Content-type', 'application/txt');
	  req.onload = function() {
			console.log("Response Received");
		}
	  var senddata = "{\"url\": \"" + escape(tabs[0].url) + "\", \"title\": \"" + tabs[0].title + "\" }";
	  req.send(senddata);
    
	}
	);
});







