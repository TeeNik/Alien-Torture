var shotPoint = game.newCircleObject({
	radius: 3
});

game.newLoop("l1", function()
{
    game.clear();
    oPos = obj.getPositionC();
	
	camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
	
	shotPoint.setPositionC(obj.getPositionC());
	shotPoint.rotate(mouse.getPosition());
	
	OOP.drawArr(blocks);
	
	fire();
	
    drawEnemy();

	obj.do();
    
    drawHP(obj);
    
    drawItems();
});

game.startLoop("l1");