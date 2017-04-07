(function(){
    class Specials{
        constructor(){
            this.specs = [];
            this.ableSpec = true;
			this.telep;
        }
        
        generateSpecs(){
            let rage = function () {
                player.speed = 10;
                this.ableSpec = false;
                let an = pjs.tiles.newImage("assets/berserk.png").getAnimation(0,0,350,350,5);
                let flame = game.newAnimationObject({
                    animation: an,
                    x: oPos.x,
                    y: oPos.y,
                    w: 150,
                    h: 150, 
                    delay: 5
                });
                player.addSpec = flame;
                player.addSpec.setPositionC(point(oPos.x,oPos.y)); 
                setTimeout(function () {
                    player.speed = 7;
                    this.ableSpec = true;
                    flame.visible = false;
                    player.addSpec = null;
                }, 5000);
            }

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
                        this.ableSpec = false;
                        setTimeout(function () {
                            this.ableSpec = true;
                        }, 6000);
            }

            let shield = function() {

            }

            let healing = function() {
                let heal = true;
                    if(heal){
                        player.speed = 0;
                        heal = false;
                        setTimeout(function(){
                            player.speed = 7;
                            player.health++;
                            heal = true;
                        },1000);
                }
            }

            
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
                }else{
                    player.obj.x = this.telep.x;
                    player.obj.y = this.telep.y;

                    OOP.forArr(items.weapons, function(el){
                        el.setNear()
                    });

                    player.teleportSet = false;
                    this.telep.visible = false;
					this.telep = null;
                    this.ableSpec = false;
                    setTimeout(function () {
                        this.ableSpec = true;
                    }.bind(this), 6000);
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
            }

            this.specs.push(energyBlast);
            this.specs.push(teleport);
            this.specs.push(rage);
            this.specs.push(blastRing);
            this.specs.push(healing);  
        }
		
		checkSpec() {
			if(key.isPress("I")){
				player.sNum++;
			}

			if (mouse.isPress("RIGHT")) {
				if (this.ableSpec) {
					this.specs[player.sNum % 5](); 
				}
			}
		}
    }
	window.Specials = Specials;
	
	
})();

var specials = new Specials();
specials.generateSpecs();




