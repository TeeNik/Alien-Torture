var numOfWeapon = 5;

var pistol = game.newImageObject({
      file : "assets/pistol.png",  
      x: obj.getPositionC().x-30, 
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var assault = game.newImageObject({
      file : "assets/assault.png",  
      x: obj.getPositionC().x-45,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var sniper = game.newImageObject({
      file : "assets/sniper.png",  
      x: obj.getPositionC().x-45,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var gun = game.newImageObject({
      file : "assets/gun.png",  
      x: obj.getPositionC().x-45,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var plasma = game.newImageObject({
      file : "assets/plasma.png",  
      x: obj.getPositionC().x-30,
      y: obj.getPositionC().y, 
      scale: 0.5,
});

var weapons = [];
weapons.push(pistol);
weapons.push(assault);
weapons.push(sniper);
weapons.push(gun);
weapons.push(plasma);

boxs = [];
var genBox = function(){
    var box = game.newImageObject({
        file: "assets/box.png",
        x: 450,
        y: 450,
        userData: {
            id: pjs.math.toInt(pjs.math.random(1,4)),
            life: 1
        }
    });
    boxs.push(box);
} 
genBox();

healkits = [];
var genHealkit = function(){
    var kit = game.newRectObject({
        x: 300,
        y: 300,
        w: 100,
        h: 100,
        fillColor: "red",
        userData: {
            life: 1
        }
    });
    healkits.push(kit);
}
genHealkit();

var drawItems = function(){
    OOP.forArr(boxs, function (el) {
        if (el.life) {
            el.draw();
            if (el.isIntersect(obj)) {
                el.visible = false;
                el.life = 0;
                el = null;               
            }
        }
    });
    OOP.forArr(healkits, function (el) {
        if (el.life) {
            el.draw();
            if (el.isIntersect(obj)) {
                el.visible = false;
                el.life = 0;
                el = null;
                console.log(obj.health);
                obj.health += 3;
                console.log(obj.health);
            }
        }
    });
};