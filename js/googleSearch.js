if(window.location.href.indexOf("https://www.google.com.hk/") != -1){
	//禁止转向google网站，经常无法访问
//	$(".g").live("mouseover",function(e){
//		var $a = $(this).find("a:eq(0)");
//		if($a.attr("data-href")){
//			$a.attr("href",$a.attr("data-href"));
//			$a.removeAttr("data-href");
//		}
//		//$a.hide();
//		$a.removeAttr("onmousedown");
//		$a.unbind("mousedown");
//		
//		$a.bind("mousedown",function(evt){
//			evt.stopPropagation();
//			evt.preventDefault();
//		});
//	});
	
}else{
	//alert("bad");
}

//chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
//	alert(changeInfo.url);
//});
