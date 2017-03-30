var pause = false;

var pauseBack = game.newImageObject({
	file: "assets/t0.png",
	scale: 0.35,
	positionC: point(game.getWH2().w, game.getWH2().h)
})

var exitButton = game.newRectObject({
	w: 100,
	h: 30,
	positionCS: point(game.getWH2().w, game.getWH2().h),
	fillColor: "red"
});

var exitText = game.newTextObject({
	positionC: point(game.getWH2().w, game.getWH2().h),
	size: 50,
	font: "pixel",
	text: "Exit",
	color: "black",
	
});



var checkExitButton = function(){
	if(mouse.isInObject(exitText)){
		exitText.size = 60;
	}
	else{
		exitText.size = 50;
	}
	
	if(mouse.isPeekObject("LEFT", exitText)){
		location.href = "/../index.html";
	}
}

var pauseWork = function(){
	//rush.drawRectS(exitButton);
	if(key.isPress("ESC"))
	{
		pause = !pause;
	}
	
	if(pause)
	{
		pauseBack.setPositionCS(point(game.getWH2().w, game.getWH2().h));
		exitText.setPositionCS(point(game.getWH2().w-45, game.getWH2().h-50));
		pauseBack.draw();
		exitText.draw();
		exitButton.draw();
		checkExitButton();	
	}
	
}