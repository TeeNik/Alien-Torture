var ableSpec = true;
var rage = function () {
    obj.speed = 10;
    ableSpec = false;
    setTimeout(function () {
        obj.speed = 5;
        ableSpec = true;
    }, 5000);
}
var blastRing = function () {}

obj.checkSpec = function () {
    if (mouse.isPress("RIGHT")) {
        if (ableSpec) {
            for (let i = 0; i < 12; i++) {
                console.log(i);
                var bull = game.newImageObject({
                    file: "assets/smviolet.png",
                    x: oPos.x,
                    y: oPos.y,
                    w: 30,
                    h: 30,
                    angle: i*30,
                    userData: {
                        life: 1 
                    }
                });
                bulls.push(bull);
            }
            ableSpec = false;
            setTimeout(function () {
                ableSpec = true;
            }, 6000);
        }
    }
}