var tutState = 1;

var t1 = game.newImageObject({
	file: "assets/t1.png",
	x: 10,
	y: 10,
	scale: 0.3,
});


var drawTutorial = function(){
	
	brush.drawImageS({
		file: "assets/t" + tutState + ".png",
		x: screen.width/2.5,
		y: screen.height/3.5,
		scale: 0.35,
    });

	brush.drawTextS({
		text: "Press Space to continue...",
		x: window.screen.width/2-300,
		y: window.screen.height-200,
		size: 30,
		color: "black",
		font: 'pixel'
	});
};

var startTutorial = function(){
	pause = true;
	drawTutorial();
	//draw
}


//t1.setPositionS(new point(screen.width/2, screen.height/2));

