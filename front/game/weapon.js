var bulls = [];
obj.fireCheck = true;
var createShot = function (fileName = "assets/pistolShot.png", sp = 10, dm = 1) {
    var bull = game.newImageObject({
        file: fileName,
        x: oPos.x,
        y: oPos.y,
        scale: 0.35, 
        angle: shotPoint.getAngle(),
        userData: {
            life: 1
        }
    });
    bull.damage = dm;
    bull.speed = sp;
    bulls.push(bull);
}
obj.weapon = weapons[0];
var pistolShot = function () {
    if (obj.fireCheck) {
        obj.fireCheck = false;
        createShot();
        setTimeout(function () {
            obj.fireCheck = true;
        }, 500);
    }
};
var assaultShot = function () {
    if (obj.fireCheck) {
        obj.fireCheck = false;
        let i = 3;
        setTimeout(function rifle() {
            if (i > 0) {
                createShot();
                i--;
                setTimeout(rifle, 100);
            }
        }, 100);
        setTimeout(function () {
            obj.fireCheck = true;
        }, 500);
    }
};
var gunShot = function () {
    if (obj.fireCheck) {
        obj.fireCheck = false;
        let i = 2;
        setTimeout(function rifle() {
            if (i > 0) {
                createShot("assets/gunShot.png", 10, 1.5);
                i--;
                setTimeout(rifle, 100);
            }
        }, 100);
        setTimeout(function () {
            obj.fireCheck = true;
        }, 500);
    }
};
var sniperShot = function () {
    if (obj.fireCheck) {
        obj.fireCheck = false;
        createShot("assets/soran.png", 20, 1.5);
        setTimeout(function () {
            obj.fireCheck = true;
        }, 500);
    }
};
var plasmaShot = function () {
    if (obj.fireCheck) {
        obj.fireCheck = false;
        createShot("assets/plasmaShot.png", 20, 2);
        setTimeout(function () {
            obj.fireCheck = true;
        }, 500);
    }
};
obj.moveWeapon = function () {
    OOP.forArr(weapons, function (el) {
        el.move(point(obj.dx, obj.dy));
        el.rotate(mouse.getPosition());

    });
    if (obj.addSpec) {
        obj.addSpec.move(point(obj.dx, obj.dy));
    }
    /*obj.weapon.move(point(obj.dx, obj.dy));
    obj.weapon.rotate(mouse.getPosition());
    if (obj.addSpec) {
        obj.addSpec.move(point(obj.dx, obj.dy));
    }*/
}
var fire = function () {
    if (mouse.isPress("LEFT")) {
        switch (obj.wNum % 5) {
        case 0:
            pistolShot();
            break;
        case 1:
            assaultShot();
            break;
        case 2:
            sniperShot();
            break;
        case 3:
            gunShot();
            break;
        case 4:
            plasmaShot();
            break;
        }
        assaultShot();
    }
    OOP.forArr(bulls, function (el) {
        if (el.life) {
            el.draw();
            el.moveAngle(el.speed);
            if (el.isIntersect(wall)) {
                el.visible = false;
            }
            if (el.isIntersect(enemy) && el.isVisible() && enemy.isVisible()) {
                el.visible = false;
                enemy.health -= el.damage;
            }
        }
    });
}