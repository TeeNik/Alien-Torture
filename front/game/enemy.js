(function(){
	class Enemy{
		constructor(image){
			this.img = pjs.tiles.newImage(image);
			this.anim = this.img.getAnimation(560,0,70,94,1);
			this.obj;
			this.name;
			this.health = 1;
			this.speed = 2;
			this.weapon;
			this.shotPoint = game.newCircleObject({
				fillColor: "black",
				radius: 3
			});
			
			this.int = setInterval(function(){
				let self = this;
				for(let i = 1; i < 4; i++){
					setTimeout(function(){
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
						bull.speed = 20;
						weapon.enemyBulls.push(bull);
					}, 100*i);
				}
			}.bind(this), 2000);
		}
			
		draw(){
			let self = this.obj;
			if(this.health > 0){
				self.draw();  
				GUI.drawHP(this);
				
				
				if(oPos.x - this.obj.getPositionC().x >= 0)
				{
					this.obj.setFlip(0,0);
					this.weapon.setFlip(0,0);
				}
				else
				{
					this.obj.setFlip(1,0);
					this.weapon.setFlip(0,1); 
				}
				this.weapon.rotate(oPos);
				this.weapon.draw();

				this.shotPoint.setPositionC(this.obj.getPositionC());
				this.shotPoint.rotate(oPos);
				
			} else {
				clearInterval(this.int);
				self.w = 150;
				self.h = 150;
				self.setAnimation(deathAnim);
				self.setDelay(5);
				self.draw();
				setTimeout(function(){
					self.visible = false;
				}, 1700);				
			} 
			
			
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
			
			let self = this.obj;
			this.weapon = game.newImageObject({
                  file : "assets/assault.png",  
                  x: self.x-20,
                  y: self.y+45, 
                  scale: 0.35,
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

