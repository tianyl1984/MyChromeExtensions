if(window.location.href.indexOf("weibo.com") != -1){
	document.addEventListener("DOMNodeInserted", function(ele) {
		ele = ele.target.parentNode;
		$(".WB_feed_type[feedtype=ad]",$(ele)).hide();
		$("div[node-type='feed_spread']",$(ele)).hide();
	}, false);
}