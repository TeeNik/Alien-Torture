(function(){
    class Specials{
        constructor(){
            this.specs = [];
			this.costs = [];
			this.telep;
			this.numOfSpecs = 5;
        }
        
        generateSpecs(){
			
            let rage = function () {
                player.speed = 10;
                let an = pjs.tiles.newImage("assets/berserk.png").getAnimation(0,0,350,350,5);
                let flame = game.newAnimationObject({
                    animation: an,
                    x: oPos.x,
                    y: oPos.y,
                    w: 150,
                    h: 150, 
                    delay: 5
                });
				player.mana -= this.costs[2];
                player.addSpec = flame;
                player.addSpec.setPositionC(point(oPos.x,oPos.y)); 
                setTimeout(function () {
                    player.speed = 7;
                    this.ableSpec = true;
                    flame.visible = false;
                }, 5000);
            }.bind(this);

            let blastRing = function () {
                for (let i = 0; i < 12; i++) {
					var bull = game.newImageObject({
						file: "assets/smviolet.png",
						x: oPos.x,
						y: oPos.y,
						w: 50,
						h: 50,
						angle: i*30,
						userData: {
							life: 1
						}
					});
					bull.speed = 5; 
					weapon.bulls.push(bull);
                }
				player.mana -= this.costs[3];
            }.bind(this);

            let shield = function() {

            }

            let healing = function() {
				player.mana -= this.costs[4];
				player.health += 5;
				let an = pjs.tiles.newImage("assets/heal.png").getAnimation(0,0,283,283,14);
                let heal = game.newAnimationObject({
                    animation: an,
                    x: oPos.x,
                    y: oPos.y,
                    w: 150,
                    h: 150, 
                    delay: 5
                });
                player.addSpec = heal;
                player.addSpec.setPositionC(point(oPos.x,oPos.y)); 
				setTimeout(function(){
					player.addSpec = null;
				}, 1650);
            }.bind(this);

            
            player.teleportSet = false;
            let teleport = function(){
				
                if(!player.teleportSet){
                    let an = pjs.tiles.newImage("assets/teleportRune.png").getAnimation(0,0,64,64,4);
                    this.telep = game.newAnimationObject({
                        animation: an,
                        x: oPos.x,
                        y: oPos.y,
                        w:64,
                        h:64,
                        fillColor: "violet"
                    });
                    player.teleportSet = true;
					player.mana -= this.costs[1];
                }else{
                    player.obj.x = this.telep.x;
                    player.obj.y = this.telep.y;

                    OOP.forArr(items.weapons, function(el){
                        el.setNear();
                    });

                    player.teleportSet = false;
                    this.telep.visible = false;
					this.telep = null;
                }
            }.bind(this);

            let energyBlast = function(){
                let an = pjs.tiles.newImage("assets/energyBlast.png").getAnimation(0,0,30,34,6);
                let bull = game.newAnimationObject({
                                animation: an,
                                x: oPos.x,
                                y: oPos.y,
                                w: 30,
                                h: 34,
                                scale: 2,
                                angle: shotPoint.getAngle(),
                                userData: {
                                    life: 1,
                                }
                            });
                bull.speed = 7;
                bull.damage = 5;
                weapon.bulls.push(bull);
				player.mana -= this.costs[0];
            }.bind(this);

            this.specs.push(energyBlast);
            this.specs.push(teleport);
            this.specs.push(rage);
            this.specs.push(blastRing);
            this.specs.push(healing);  
			
            this.costs.push(3);  
            this.costs.push(4);  
            this.costs.push(5);  
            this.costs.push(3);  
            this.costs.push(10);  
        }
		
		checkSpec() {
			if(key.isPress("I")){
				player.sNum++;
			}

			if (mouse.isPress("RIGHT")) {
				if (this.costs[player.sNum % this.numOfSpecs] <= player.mana) {
					this.specs[player.sNum % this.numOfSpecs](); 
				}
			}
		}
    }
	window.Specials = Specials;
	
	
})();

var specials = new Specials();
specials.generateSpecs();




