(function(){
    class Specials{
        constructor(){
            this.specs = [];
            this.ableSpec = true;
			this.telep;
        }
        
        generateSpecs(){
            let rage = function () {
                obj.speed = 10;
                ableSpec = false;
                let an = pjs.tiles.newImage("/game/assets/berserk.png").getAnimation(0,0,350,350,5);
                let flame = game.newAnimationObject({
                    animation: an,
                    x: oPos.x,
                    y: oPos.y,
                    w: 150,
                    h: 150, 
                    delay: 5
                });
                obj.addSpec = flame;
                obj.addSpec.setPositionC(point(oPos.x,oPos.y)); 
                setTimeout(function () {
                    obj.speed = 7;
                    this.ableSpec = true;
                    flame.visible = false;
                    obj.addSpec = null;
                }, 5000);
            }

            let blastRing = function () {
                for (let i = 0; i < 12; i++) {
                            var bull = game.newImageObject({
                                file: "/game/assets/smviolet.png",
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
                            bulls.push(bull);
                        }
                        this.ableSpec = false;
                        setTimeout(function () {
                            ableSpec = true;
                        }, 6000);
            }

            let shield = function() {

            }

            let healing = function() {
                let heal = true;
                    if(heal){
                        obj.speed = 0;
                        heal = false;
                        setTimeout(function(){
                            obj.speed = 7;
                            obj.health++;
                            heal = true;
                        },1000);
                }
            }

            
            obj.teleportSet = false;
            let teleport = function(){
				
                if(!obj.teleportSet){
                    let an = pjs.tiles.newImage("/game/assets/teleportRune.png").getAnimation(0,0,64,64,4);
                    this.telep = game.newAnimationObject({
                        animation: an,
                        x: oPos.x,
                        y: oPos.y,
                        w:64,
                        h:64,
                        fillColor: "violet"
                    });
                    obj.teleportSet = true;
                }else{
                    obj.x = this.telep.x;
                    obj.y = this.telep.y;

                    OOP.forArr(items.weapons, function(el){
                        el.setNear()
                    });

                    obj.teleportSet = false;
                    this.telep.visible = false;
					this.telep = null;
                    this.ableSpec = false;
                    setTimeout(function () {
                        this.ableSpec = true;
                    }.bind(this), 6000);
                }
            }.bind(this);

            let energyBlast = function(){
                let an = pjs.tiles.newImage("/game/assets/energyBlast.png").getAnimation(0,0,30,34,6);
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
				obj.sNum++;
			}

			if (mouse.isPress("RIGHT")) {
				if (this.ableSpec) {
					this.specs[obj.sNum % 5](); 
				}
			}
		}
    }
	window.Specials = Specials;
	
	
})();

var specials = new Specials();
specials.generateSpecs();




