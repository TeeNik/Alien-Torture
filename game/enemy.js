(function(){
	class Enemy{
		constructor(image){
			this.img = pjs.tiles.newImage(image);
			this.anim = this.img.getAnimation(560,0,70,94,1);
			this.obj;
			this.name;
			this.health = 10;
			this.speed = 2;
			this.weapon = items.weapons[1];
		}
			
		draw(){
			if(this.health > 0){
				//ывthis.obj.move(point(enemy.speed,0));
				this.obj.draw();  
				GUI.drawHP(this);
			} else {
				this.obj.visible = false;
			}  
		}
		
		init() {
			let an = this.anim;
			this.obj = game.newAnimationObject({
				x: 300,
				y: 300,
				animation: an,
				w: 72,
				h: 97
			});
			
			this.name = "Enemy";
			//this.obj.setDelay(5);
			this.obj.drawToFrame(8);
		}
	}
	window.Enemy = Enemy;
})();

var enemy = new Enemy("assets/p6.png");
enemy.init();

