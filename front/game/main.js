

var arr = {};

fire();

var shotPoint = game.newCircleObject({
	radius: 3
});

var wall = game.newRectObject({
		x: 200,
		y: 250,
		w:100,
		h:200,
		fillColor: "red"
});


game.newLoop("l1", function()
{
    game.clear();
    oPos = obj.getPositionC();
	
	camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
	
	shotPoint.setPositionC(obj.getPositionC());
	shotPoint.rotate(mouse.getPosition());
	
	
	OOP.forXY(100,100,function(x,y){
		brush.drawRect({
			x: x*50, y: y*50,
			w: 48, h: 48,
			fillColor: "gray"
		});		
	});
	
	
	fire();
	
    drawEnemy();

	obj.do();
	
	wall.draw();
    
    drawHP(obj);
    
    drawItems();
	
	/*brush.drawLineAngle({
		x: shotPoint.x,
		y: shotPoint.y,
		length: 100,
		angle: shotPoint.getAngle(),
		strokeColor: "green"
	});*/
	
});

game.startLoop("l1");