var enemy = game.newEllipsObject({
    w: 50,
    h: 100,
    x: 300,
    y: 300,
    fillColor: "yellow"
});

setInterval(function(){
    var bull = game.newCircleObject({
			x: oPos.x,
			y: oPos.y,
			radius: 8,
			fillColor: "yellow",
			strokeColor: "lightblue",
			strokeWidth: 4,
			angle: shotPoint.getAngle(),
			userData: {
				life: 1
			}
		});
		bull.move(point(3,0));
    bull.draw();
}, 500);

var drawEnemy = function(){
    enemy.move(point(2,0));
    enemy.draw();  
}