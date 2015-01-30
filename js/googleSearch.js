
(function() {

    if (!/^https?:\/\/\w*.google.com(?:\.[a-z]+)?/.test(location.href)) {
        return;
    }
    
    function removeMouseDown(){
    	var as = document.getElementsByClassName("r");
    	for (var i = 0, len = as.length; i < len; i++) {
    		var thisA = as[i].getElementsByTagName("a")[0];
    		if (/^return rwt\(.+\)$/.test(thisA.getAttribute("onmousedown"))) {
    			thisA.removeAttribute("onmousedown");
    			if(thisA.getAttribute("data-href")){
    				thisA.setAttribute("href",thisA.getAttribute("data-href"));
    			}
    			$(thisA).after($(thisA).clone());
    			$(thisA).remove();
    		}
    	}
    }
    
    removeMouseDown();
    
    document.addEventListener("DOMNodeInserted", removeMouseDown, false);
})()
