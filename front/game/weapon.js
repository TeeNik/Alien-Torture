var bulls = [];
var fire = function () {
    var fireCheck = false;
    if (mouse.isPress("LEFT")) {
                var bull = game.newCircleObject({
                    x: oPos.x,
                    y: oPos.y,
                    radius: 8, 
                    fillColor: "yellow",
                    strokeColor: "lightblue",
                    strokeWidth: 4,
                    angle: shotPoint.getAngle(),
                    userData: {
                        life: 1
                    }
                });
                bulls.push(bull);
    }
    OOP.forArr(bulls, function (el) {
        if (el.life) {
            el.draw();
            el.moveAngle(10);
            if (el.isIntersect(wall)) {
                el.visible = false;
            }
        }
    });
}
