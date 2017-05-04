var shotPoint = game.newCircleObject({
	radius: 3
});


var deathAnim =  pjs.tiles.newImage("assets/death.png").getAnimation(0,0,177,177,18);

game.newLoop("l1", function()
{
    game.clear();
    oPos = player.obj.getPositionC();

    map.draw();

    for(let i = 0; i < 5; i++){
        enemies[i].draw();
    }

    if(!pause.pause){
        player.do();

        camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
        shotPoint.setPositionC(oPos);
        //shotPoint.rotate(mouse.getPosition());
    if(shootJoystick.deltaX() == 0 && shootJoystick.deltaY() == 0)
            shotPoint.rotate(mouse.getPosition());
        else
            shotPoint.rotate(point(oPos.x+shootJoystick.deltaX(), oPos.y+shootJoystick.deltaY()));
        weapon.fire();
    }

    if(key.isPress("C")) console.log(player.obj.x + " " + player.obj.y);

    weapon.moveWeapon();


    items.draw();

    timer.drawTimer();

    specials.checkSpec();

    gui.draw();

	pause.pauseWork();

});



game.newLoop("tutorial", function()
{
    game.clear();
    oPos = player.obj.getPositionC();
	
	map.draw();
	
    for(let i = 0; i < 5; i++){
		enemies[i].draw();	
	}

	if(!pause.pause){
		player.do();

		camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
		shotPoint.setPositionC(oPos);
		shotPoint.rotate(mouse.getPosition());

		weapon.fire();
	}
	
	if(key.isPress("C")) console.log(player.obj.x + " " + player.obj.y);
	
	weapon.moveWeapon();
	
	
	items.draw();
	
	timer.drawTimer();
	
	specials.checkSpec();
    
    gui.draw();
	
	if(!tutorialEnd){
		drawTutorial();
	}else{
        pause.pauseWork();
    }    
});

game.startLoop("l1");
//game.startLoop("tutorial");