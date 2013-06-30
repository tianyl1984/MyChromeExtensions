$(document).ready(function(){
	if(window.location.href.indexOf("weibo.com") != -1){
		$(".WB_feed_type[feedtype=ad]").hide();
		if($(".WB_feed_type[feedtype=ad]").size() > 0 ){
			chrome.browserAction.setTitle("我的chrome插件：" + $(".WB_feed_type[feedtype=ad]").size());
		}
	}
})