var bulls = [];

var createShot = function(){
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
    bulls.push(bull);
}

obj.weapon = game.newImageObject({
      file : "assets/pistol.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.3,
});


var pistolShot = function(){
    
};


obj.moveWeapon = function(){
    obj.weapon.x = oPos.x - 50;
    obj.weapon.y = oPos.y;
}

var fire = function () {
    var fireCheck = false;
    if (mouse.isPress("LEFT")) {
        let  i = 3;
        setTimeout(function rifle(){
            if(i > 0){
                
                createShot();
                i--;
                setTimeout(rifle, 100);
            }
        }, 100); 
    }
    OOP.forArr(bulls, function (el) {
        if (el.life) {
            el.draw();
            el.moveAngle(10);
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
