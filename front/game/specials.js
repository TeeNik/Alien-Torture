(function(){
    class Specials{
        constructor(){
            this.specs = [];
            this.ableSpec = true;
        }
        
        generateSpecs(){
            let rage = function () {
                obj.speed = 10;
                ableSpec = false;
                let an = pjs.tiles.newImage("assets/berserk.png").getAnimation(0,0,350,350,5);
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
                    ableSpec = true;
                    flame.visible = false;
                    obj.addSpec = null;
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
                            bulls.push(bull);
                        }
                        ableSpec = false;
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

            let telep;
            obj.teleportSet = false;
            let teleport = function(){  
                if(!obj.teleportSet){
                    let an = pjs.tiles.newImage("assets/teleportRune.png").getAnimation(0,0,64,64,4);
                    telep = game.newAnimationObject({
                        animation: an,
                        x: oPos.x,
                        y: oPos.y,
                        w:64,
                        h:64,
                        fillColor: "violet"
                    });
                    obj.teleportSet = true;
                }else{
                    obj.x = telep.x;
                    obj.y = telep.y;

                    OOP.forArr(weapons, function(el){
                        el.setNear()
                    });

                    obj.teleportSet = false;
                    telep.visible = false;
                    ableSpec = false;
                    setTimeout(function () {
                        ableSpec = true;
                    }, 6000);
                }
            }

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
                bulls.push(bull);
            }

            this.specs.push(energyBlast);
            this.specs.push(teleport);
            this.specs.push(rage);
            this.specs.push(blastRing);
            this.specs.push(healing);  
        }
    }
})();

var ableSpec = true;


obj.sNum = 0;
var specs = [];



obj.checkSpec = function () {
    if(key.isPress("I")){
        obj.sNum++;
    }
    
    if (mouse.isPress("RIGHT")) {
        if (ableSpec) {
            specs[obj.sNum % 5](); 
        }
    }
}