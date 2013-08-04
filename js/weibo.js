$(document).ready(function(){
	if(window.location.href.indexOf("weibo.com") != -1){
		$(".WB_feed_type[feedtype=ad]").hide();
		$("div[node-type='feed_spread']").hide();
		chrome.browserAction.setTitle("我的chrome插件：" + ($(".WB_feed_type[feedtype=ad]").size() + $("div[node-type='feed_spread']")));
	}
})