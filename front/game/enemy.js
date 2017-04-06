/*(function(){
	class Enemy{
		constructor(){
			this.obj = game.newEllipsObject({
				w: 50,
				h: 100,
				x: 300,
				y: 300,
				fillColor: "yellow"
			});
			this.health = 10;
			this.speed = 2;
		}
		
		drawEnemy(){
			if(enemy.health > 0){
			this.move(point(enemy.speed,0));
			enemy.draw();  
			GUI.drawHP(enemy);
			} else {
				enemy.visible = false;
			}    
		}
	}
	
	window.Enemy = Enemy;
})();*/

var enemy = game.newEllipsObject({
	w: 50,
	h: 100,
	x: 300,
	y: 300,
	fillColor: "yellow"
});

enemy.health = 10;
enemy.speed = 2;

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
    if(enemy.health > 0){
        enemy.move(point(enemy.speed,0));
        enemy.draw();  
        GUI.drawHP(enemy);
    } else {
        enemy.visible = false;
    }    
}

