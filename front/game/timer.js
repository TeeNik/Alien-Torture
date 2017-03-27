var time = 180;
var startTime = Date.now()/1000;


var interval = setInterval( function(){
	time--;
	if(time == 0) clearInterval(interval);
}, 1000)

var drawTimer = function(){
	let min = parseInt(time / 60);
	let sec = time % 60;
	
	if(sec == 0) sec = "00";
	
	brush.drawTextS({
		text: min + ":" + sec,
		x: window.screen.width/2-100,
		y: 20,
		size: 50,
		color: "black",
		font: 'pixel'
	});
}