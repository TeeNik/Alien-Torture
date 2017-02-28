var ableSpec = true;
var rage = function () {
    obj.speed = 10;
    ableSpec = false;
    setTimeout(function () {
        obj.speed = 7;
        ableSpec = true;
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

var telep;
obj.teleportSet = false;
var teleport = function(){  
    if(!obj.teleportSet){
        telep = game.newRectObject({
            x: oPos.x,
            y: oPos.y,
            w:10,
            h:10,
            fillColor: "violet"
        });
        obj.teleportSet = true;
    }else{
        obj.x = telep.x;
        obj.y = telep.y;
        obj.teleportSet = false;
        telep.visible = false;
        ableSpec = false;
        setTimeout(function () {
            ableSpec = true;
        }, 6000);
    }
}

var energyBlast = function(){
    var bull = game.newImageObject({
                    file: "assets/smviolet.png",
                    x: oPos.x,
                    y: oPos.y,
                    w: 30,
                    h: 30,
                    angle: 0,
                    userData: {
                        life: 1,
                    }
                });
    bulls.push(bull);
}

obj.checkSpec = function () {
    if (mouse.isPress("RIGHT")) {
        if (ableSpec) {
            blastRing(); 
        }
    }
}