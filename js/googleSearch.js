if(window.location.href.indexOf("https://www.google.com.hk/") != -1){
	//禁止转向google网站，经常无法访问
	$(".r").live("mouseover",function(e){
		$(".l").removeAttr("onmousedown");
	});
}else{
	//alert("bad");
}