chrome.windows.getCurrent(function(win){
	chrome.tabs.getSelected(function(tab){
		$("#imgQr").attr("src","http://www.wandoujia.com/qr?c=" + tab.url);
	});
});