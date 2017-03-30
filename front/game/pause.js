var pause = false;

var pauseBack = game.newImageObject({
	file: "assets/t0.png",
	scale: 0.35,
	positionC: point(game.getWH2().w, game.getWH2().h)
});

var soundButton = game.newImageObject({
	file: "../resources/soundOn.png",
	scale: 0.35,
	positionC: point(game.getWH2().w, game.getWH2().h)
});


var exitText = game.newTextObject({
	positionC: point(game.getWH2().w, game.getWH2().h),
	size: 50,
	font: "pixel",
	text: "Exit",
	color: "black",	
});



var checkPauseButtons = function(){
	if(mouse.isInObject(exitText)){
		exitText.size = 60;
	}
	else{
		exitText.size = 50;
	}
	
	if(mouse.isPeekObject("LEFT", exitText)){
		location.href = "/../index.html";
	}
	
	if(mouse.isPeekObject("LEFT", soundButton)){
		if(main_theme.playing){
			main_theme.pause();
			
			soundButton.setImage("../resources/soundOff.png");
		}
		else {
			main_theme.play();
			soundButton.setImage("../resources/soundOn.png");
		}
	}
}

var pauseWork = function(){
	if(key.isPress("ESC"))
	{
		pause = !pause;
	}
	
	if(pause)
	{
		pauseBack.setPositionCS(point(game.getWH2().w, game.getWH2().h));
		exitText.setPositionCS(point(game.getWH2().w-45, game.getWH2().h+50));
		soundButton.setPositionCS(point(game.getWH2().w, game.getWH2().h-50));
		pauseBack.draw();
		exitText.draw();
		soundButton.draw();
		checkPauseButtons();	
	}
	
}