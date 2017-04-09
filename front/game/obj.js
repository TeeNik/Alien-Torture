"use strict";

(function(){
	class Person{
		constructor(image){			
			this.img = pjs.tiles.newImage(image);
			this.anim = this.img.getAnimation(0,0,70,94,11);
			this.obj;
			this.name;
			this.health = 1;
			this.mana = 0;
			this.speed = 7;
			this.addSpec = null;
			this.wNum = 0;
			this.sNum = 0;
			this.fireCheck = true;
			this.dx = 0;
			this.dy = 0;
			
			setInterval(function(){
				if(this.mana < 10) {
					this.mana++;
				}
			}.bind(this), 1000);
		} 
		
		control(){  
			this.dx = this.dy = 0;
			if(key.isDown("A"))
			{
				this.dx = -this.speed;
				this.obj.setFlip(1,0);
			}
			else if(key.isDown("D"))
			{
				this.dx = this.speed;
				this.obj.setFlip(0,0);
			}  
			if(key.isDown("W"))
			{
				this.dy = -this.speed;
			}  
			else if(key.isDown("S"))
			{
				this.dy  = this.speed;
			}

			if(key.isPress("P")){
				this.weapon = items.weapons[(++this.wNum)%items.numOfWeapon]; 
			}


			if(!(key.isDown("A") || key.isDown("D") || key.isDown("W") || key.isDown("S")))
			{
				this.obj.drawToFrame(8);		
			}
			else
			{
				this.obj.setAnimation(this.anim);	
			}

			if(mouse.getPosition().x - this.obj.getPositionC().x >= 0)
			{
				this.obj.setFlip(0,0);
				this.weapon.setFlip(0,0);
			}
			else
			{
				this.obj.setFlip(1,0);
				this.weapon.setFlip(0,1); 
			}
		}
		
		drawName(){
			brush.drawText({
				x: this.x + 13,
				y: this.y - 13,
				text: this.name,
				color: "black",
				size: 14
			});
		};
		
		get2dPosX(){
			return parseInt(oPos.x / 128);
		}
		
		get2dPosY(){
			return parseInt(oPos.y / 128);
		}
	
		collision(){
			OOP.forArr(map.blocks, function(el){
				if(this.obj.isIntersect(el) && el.isWall) 
				{
					/*this.obj.drawDynamicBox();
					el.drawDynamicBox();*/
                    if(this.dx > 0 && this.obj.x < el.x && map.isItWall(this.get2dPosX()+1, this.get2dPosY()))
                    {
                        this.dx = 0;
                    }
                    else if(this.dx < 0 && this.obj.x> el.x && map.isItWall(this.get2dPosX()-1, this.get2dPosY()))
                    {
                        this.dx = 0;
                    }
                    if(this.dy > 0 && this.obj.y < el.y && map.isItWall(this.get2dPosX(), this.get2dPosY()+1))
                    {
                        this.dy = 0;
                    }
                    else if(this.dy < 0 && this.obj.y > el.y && map.isItWall(this.get2dPosX(), this.get2dPosY()-1))
                    {
                        this.dy = 0;
                    }
					if(this.dx > 0 && this.dy > 0 && this.obj.x < el.x && this.obj.y < el.y && map.isItWall(this.get2dPosX()+1, this.get2dPosY()+1)){
						this.dx = 0;
						this.dy = 0;
					}
					if(this.dx > 0 && this.dy < 0 && this.obj.x < el.x && this.obj.y > el.y && map.isItWall(this.get2dPosX()+1, this.get2dPosY()-1)){
						this.dx = 0;
						this.dy = 0;
					}
					if(this.dx < 0 && this.dy > 0 && this.obj.x > el.x && this.obj.y < el.y && map.isItWall(this.get2dPosX()-1, this.get2dPosY()+1)){
						this.dx = 0;
						this.dy = 0;
					}
					if(this.dx < 0 && this.dy < 0 && this.obj.x > el.x && this.obj.y > el.y && map.isItWall(this.get2dPosX()-1, this.get2dPosY()-1)){
						this.dx = 0;
						this.dy = 0;
					}
					
				} 
			}.bind(this));
		};
		
		checkHP() {
			if(this.health > 10) this.health = 10;
			if(this.health < 0) this.health = 7;
		};
	
		do() {   
			this.control();
			this.drawName();

			if(this.teleportSet){
				specials.telep.draw();
			}

			this.collision();
			this.obj.move(point(this.dx,this.dy));
			this.checkHP();
			if(this.addSpec){
				this.addSpec.draw();
			}  
			this.obj.draw();  
			this.weapon.draw();
		};
		
		init() {
			let an = this.anim;
			this.obj = game.newAnimationObject({
				x: 300,
				y: 300,
				animation: an,
				w: 72,
				h: 97
			});
			
			this.name = "TeeNik";
			this.obj.setDelay(5);
		}
	}
	
	window.Person = Person;
	
})();

//var img = pjs.tiles.newImage("assets/p2.png");

var player = new Person("assets/p2.png");
player.init();


oPos = player.obj.getPositionC();
