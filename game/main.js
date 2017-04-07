var shotPoint = game.newCircleObject({
	radius: 3
});

game.newLoop("l1", function()
{
    game.clear();
    oPos = player.obj.getPositionC();
	
	map.draw();
	
    enemy.draw();

	if(!pause.pause){
		player.do();
	
		camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
		shotPoint.setPositionC(oPos);
		shotPoint.rotate(mouse.getPosition());
	
		weapon.fire();
	}
	
	weapon.moveWeapon();
	
	
	items.draw();
	
	timer.drawTimer();
	
	specials.checkSpec();
    
    gui.draw();
	
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
		
	map.draw();

	drawEnemy();
	if(!pause){	
		
		
		obj.do();

		camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
		shotPoint.setPositionC(obj.getPositionC());
		shotPoint.rotate(mouse.getPosition());
	
		fire();
	}
		
	items.draw();
	
	timer.drawTimer();
	
	if(pause) drawTutorial();
});

game.startLoop("l1");
//game.startLoop("tutorial");