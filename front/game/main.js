var shotPoint = game.newCircleObject({
	radius: 3
});

game.newLoop("l1", function()
{
    game.clear();
    oPos = obj.getPositionC();
	
	map.draw();
	
    drawEnemy();

	if(!pause.pause){
		obj.do();
	
		camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
		shotPoint.setPositionC(obj.getPositionC());
		shotPoint.rotate(mouse.getPosition());
	
		fire();
	}
	
	
	drawItems();
	
	timer.drawTimer();
	
    drawHP(obj);
	
	pause.pauseWork();
    
});



game.newLoop("tutorial", function()
{
    oPos = obj.getPositionC();
	
	if(key.isPress("SPACE")){
		pause = false;
		tutState++;
		if( tutState <= 6){
			setTimeout(function(){
			pause = true;
			}, 7000);
		}		
	}

	game.clear();
		
		

	OOP.drawArr(blocks);

	drawEnemy();
	if(!pause){	
		
		
		obj.do();
		console.log("here");

		camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
		shotPoint.setPositionC(obj.getPositionC());
		shotPoint.rotate(mouse.getPosition());
	
		fire();
	}
		
	drawItems();
	
	drawTimer();
	
	if(pause) drawTutorial();
});

game.startLoop("l1");
//game.startLoop("tutorial");