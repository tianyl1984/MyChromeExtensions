function init(){
	alert('')
}

function m1(){
	chrome.tabs.query({windowId:104}, function(tabArr){
		for(var i = 0;i < tabArr.length;i++){
			//alert(tabArr[i].id);
	//chrome.tabs.highlight({windowId:104,tabs:tabArr[i].id},function(){});
		}
	});
	chrome.windows.getCurrent(function(win){
		chrome.tabs.getSelected(win.id,function(tab){
			chrome.tabs.query({windowId:win.id}, function(tabArr){
				for(var i = 0;i < tabArr.length;i++){
					if(tabArr[i].id == tab.id){
						chrome.tabs.update(tabArr[i - 1].id,{selected:true},function(t){});
					}
				}
			});
		});
	});
}

chrome.extension.onRequest.addListener(function(data){
	if(data.operate == "close"){
		closeTab();
	}
	if(data.operate == "switchTab"){
		switchTab(data.switchFlag);
	}
});

//关闭当前tab
function closeTab(){
	chrome.tabs.query({}, function(tabArr){
		if(tabArr.length == 1){
			chrome.tabs.create({},function(){});
		}
	});

	chrome.tabs.getSelected(null,function(tab){
		chrome.tabs.remove(tab.id,function(){});
	});
}

//切换tab
function switchTab(flag){
	chrome.windows.getCurrent(function(win){
		chrome.tabs.getSelected(win.id,function(tab){
			chrome.tabs.query({windowId:win.id}, function(tabArr){
				for(var i = 0;i < tabArr.length;i++){
					if(i == 0 && flag == "previou"){
						continue;
					}
					if(i == tabArr.length - 1 && flag == "next"){
						continue;
					}
					if(tabArr[i].id == tab.id){
						if(flag == "previou"){
							chrome.tabs.update(tabArr[i - 1].id,{selected:true},function(t){});
						}
						if(flag == "next"){
							chrome.tabs.update(tabArr[i + 1].id,{selected:true},function(t){});
						}
					}
				}
			});
		});
	});
}


//清除下载记录
setInterval(function(){
	chrome.browsingData.remove({"since": 0}, {"downloads": true});
}, 5000);