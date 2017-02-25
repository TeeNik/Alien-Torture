var bulls = [];

obj.fireCheck = true;

var createShot = function(fileName = "assets/smviolet.png", sp = 10){
    var bull = game.newImageObject( { 
      file : "assets/smviolet.png", 
      x: oPos.x,
      y: oPos.y, 
      w : 30, 
      h : 30, 
      angle: shotPoint.getAngle(),
      userData: {
         life: 1
      }
    });
    bull.speed = sp;
    bulls.push(bull);
}

obj.weapon = game.newImageObject({
      file : "assets/pistol.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.35,
});


var pistolShot = function(){
    if(obj.fireCheck){
        obj.fireCheck = false;
        createShot();
        setTimeout(function(){
           obj.fireCheck = true; 
        }, 500);
    }
};

var assaultShot = function(){
    if(obj.fireCheck){
        obj.fireCheck = false;
        let  i = 3;
        setTimeout(function rifle(){
            if(i > 0){         
                createShot();
                i--;
                setTimeout(rifle, 100);
            }
        }, 100); 
        setTimeout(function(){
           obj.fireCheck = true; 
        }, 500);
    }
};

var sniperShot = function(){
    if(obj.fireCheck){
        obj.fireCheck = false;
        createShot();
        setTimeout(function(){
           obj.fireCheck = true; 
        }, 500);
    }
};


obj.moveWeapon = function(){
    obj.weapon.x = oPos.x - 50;
    obj.weapon.y = oPos.y;
}

var fire = function () {
    if (mouse.isPress("LEFT")) {
        assaultShot();
    }
    OOP.forArr(bulls, function (el) {
        if (el.life) {
            el.draw();
            el.moveAngle(el.speed);
            if (el.isIntersect(wall)) {
                el.visible = false;
            }
            if(el.isIntersect(enemy) && el.isVisible() && enemy.isVisible()) {
                el.visible = false;
                enemy.health--;
            }
        }
    });
}
