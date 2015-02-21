if(window.location.href.indexOf("weibo.com") != -1){
	var timeoutId = null;
	document.addEventListener("DOMNodeInserted", function(event) {
		if(timeoutId != null){
			window.clearTimeout(timeoutId);
			timeoutId = null;
		}
		timeoutId = setTimeout(function(){
			procAHref();
		},2000);
		
	}, false);
}

//处理weibo中的链接，直接到目的地址，不经过短网址跳转
function procAHref(){
	$("a[action-type=feed_list_url]").each(function(){
		var $a = $(this);
		if($a.attr("href").indexOf("t.cn") != -1){
			if($a.attr("title").indexOf("http") == 0){
				$a.attr("action-type","feed_list_url_bak");
				$a.attr("href-bak",$a.attr("href"));
				$a.attr("href",$a.attr("title"));
			}
		}
	});
//	console.log("procAHref:" + .size())
}

