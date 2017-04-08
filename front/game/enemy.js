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
			this.shotPoint = game.newCircleObject({
				fillColor: "black",
				radius: 3
			});
			
			setInterval(function(){
				let self = this;
				console.log(self);
				let bull = game.newImageObject({
					file: "assets/pistolShot.png",
					x: self.shotPoint.x,
					y: self.shotPoint.y,
					scale: 0.35, 
					angle: self.shotPoint.getAngle(),
					userData: {
						life: 1,
					}
				});
				bull.damage = 1;
				bull.speed = 10;
				weapon.enemyBulls.push(bull);
			}.bind(this), 2000);
		}
			
		draw(){
			if(this.health > 0){
				//ывthis.obj.move(point(enemy.speed,0));
				this.obj.draw();  
				GUI.drawHP(this);
			} else {
				this.obj.visible = false;
			} 
			
			this.shotPoint.draw();			this.shotPoint.setPositionC(this.obj.getPositionC());
			this.shotPoint.rotate(oPos);
		}
	
		shoot(){
			let bull = game.newImageObject({
				file: fileName,
				x: this.obj.x,
				y: this.obj.y,
				scale: 0.35, 
				angle: this.shotPoint.getAngle(),
				userData: {
					life: 1
				}
			}.bind(this));
			bull.damage = 10;
			bull.speed = 1;
			weapon.enemyBulls.push(bull);
		}
		
		init() {
			let an = this.anim;
			this.obj = game.newAnimationObject({
				x: 750,
				y: 980,
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

