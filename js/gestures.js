var x = 0;
var y = 0;
var isStart = false;
var hasDraw = false;
var showContextmenu = true;
var context = null;
var data = [];
var result = [];//上下左右 u,d,l,r
var t = 10;

function Point(x,y){
	this.x = x;
	this.y = y;
}

//鼠标移动
document.onmousemove = function(event){
	var tt = new Date().getTime();
	if(!isStart || (downTime > 0 && (tt - downTime < 30))){
		return true;
	}else{
		if(context == null){
			$("body").append("<canvas id=\"myCanvas\" width=\"" + window.screen.width + "\" height=\"" + window.screen.height + "\" style=\"position: fixed;top: 0px;left: 0px;z-index: 10001;border:solid 0px #CCC;\"></canvas>");
			var c = document.getElementById("myCanvas");
			context = c.getContext("2d");
			context.fillStyle   = 'rgba(255,0,0,0)';//透明
			context.strokeStyle = '#f00';
			context.lineWidth   = 4;
			context.beginPath();
		}
	}
	
	x = event.pageX - document.body.scrollLeft;
	y = event.pageY - document.body.scrollTop;
	
	if(x !=0 && y != 0){
		data.push(new Point(x,y));
		context.lineTo(x - 5, y - 5);
		context.fill();
		context.stroke();
		hasDraw = true;
		showContextmenu = false;
		if(data.length % t == 0){
			var startPoint = data[data.length - t];
			var temp = "";
			if(y - startPoint.y > 0){//不可能向上
				if(x - startPoint.x > 0){//下或右
					if(x - startPoint.x > y - startPoint.y){//右
						temp = "r";
					}else{//下
						temp = "d";
					}
				}else{//下或左
					if(startPoint.x - x > y - startPoint.y){//左
						temp = "l";
					}else{//下
						temp = "d";
					}
				}
			}else{//不可能向下
				if(x - startPoint.x > 0){//上或右
					if(x - startPoint.x > startPoint.y - y){//右
						temp = "r";
					}else{//上
						temp = "u";
					}
				}else{//上或左
					if(startPoint.x - x < startPoint.y - y){//上
						temp = "u";
					}else{//左
						temp = "l";
					}
				}
			}
			if(result.length > 0){
				if(result[result.length - 1] != temp){
					result.push(temp);
				}
			}else{
				result.push(temp);
			}
		}
	}
	return true;
}
//右键
document.oncontextmenu = function(event){
	var rtnValue = showContextmenu;
	console.log(hasDraw + ":" + result);
	if(hasDraw){
		showContextmenu = true;
		x = 0;
		y = 0;
		isStart = false;
		hasDraw = false;
		if(result.length == 2){
			if(result[0] == "d" && result[1] == "r"){//关闭
				chrome.extension.sendRequest({operate:"close"});
			}
		}
		if(result.length == 1){//切换标签
			if(result[0] == "l"){
				chrome.extension.sendRequest({operate:"switchTab",switchFlag:"previou"});
			}
			if(result[0] == "r"){
				chrome.extension.sendRequest({operate:"switchTab",switchFlag:"next"});
			}
		}
	}
	$("#myCanvas").remove();
	context = null;
	data = [];
	result = [];
	isStart = false;
	return rtnValue;
}
//鼠标抬起
document.onmouseup = function(event){
	if(event.button == 2){
		downTime = -1;
		isStart = false;
	}
	return true;
}
//按下时间
var downTime = -1;
//鼠标按下
document.onmousedown = function(event){
	if(event.button == 2){
		downTime = new Date().getTime();
		isStart = true;
	}
	return true;
}
