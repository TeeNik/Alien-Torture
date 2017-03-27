var ableSpec = true;


obj.sNum = 0;
var specs = [];

var rage = function () {
    obj.speed = 10;
    ableSpec = false;
    let an = pjs.tiles.newImage("assets/berserk.png").getAnimation(0,0,350,350,5);
    let flame = game.newAnimationObject({
        animation: an,
        x: oPos.x,
        y: oPos.y,
        w: 100,
        h: 100, 
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

var blastRing = function () {
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

var shield = function() {
    
}

var healing = function() {
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

var telep;
obj.teleportSet = false;
var teleport = function(){  
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
			el.x = telep.x;
        	el.y = telep.y;
		});
		
        obj.teleportSet = false;
        telep.visible = false;
        ableSpec = false;
        setTimeout(function () {
            ableSpec = true;
        }, 6000);
    }
}

var energyBlast = function(){
    let an = pjs.tiles.newImage("assets/energyBlast.png").getAnimation(0,0,30,34,6);
    var bull = game.newAnimationObject({
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

specs.push(energyBlast);
specs.push(teleport);
specs.push(rage);
specs.push(blastRing);
specs.push(healing);

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