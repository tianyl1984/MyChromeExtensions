if(window.location.href.indexOf("https://www.google.com.hk/") != -1){
	//禁止转向google网站，经常无法访问
	$(".r").live("mouseover",function(e){
		$(this).find("a").removeAttr("onmousedown");
	});
}else{
	//alert("bad");
}