var numOfWeapon = 5;

var pistol = game.newImageObject({
      file : "assets/pistol.png",  
      x: obj.getPositionC().x-30, 
      y: obj.getPositionC().y, 
      scale: 0.38,
      userData: {
          setNear: function(){
              x = obj.getPositionC().x-30;
              y = obj.getPositionC().y; 
          }
      }
});

var assault = game.newImageObject({
      file : "assets/assault.png",  
      x: obj.getPositionC().x-45,
      y: obj.getPositionC().y, 
      scale: 0.35,
      userData: {
          setNear: function(){
              x = obj.getPositionC().x-45;
              y = obj.getPositionC().y; 
          }
      }
});

var sniper = game.newImageObject({
      file : "assets/sniper.png",  
      x: obj.getPositionC().x-45,
      y: obj.getPositionC().y, 
      scale: 0.35,
      userData: {
          setNear: function(){
              x = obj.getPositionC().x-45;
              y = obj.getPositionC().y; 
          }
      }
});

var gun = game.newImageObject({
      file : "assets/gun.png",  
      x: obj.getPositionC().x-45,
      y: obj.getPositionC().y+10, 
      scale: 0.3,
      userData: {
          setNear: function(){
              x = obj.getPositionC().x-45;
              y = obj.getPositionC().y; 
          }
      }
});

var plasma = game.newImageObject({
      file : "assets/plasma.png",  
      x: obj.getPositionC().x-30,
      y: obj.getPositionC().y, 
      scale: 0.5,
      userData: {
          setNear: function(){
              x = obj.getPositionC().x-30;
              y = obj.getPositionC().y; 
          }
      }
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
    var kit = game.newImageObject({
        file: "assets/medkit.png",
        scale: 0.5,
        x: 300,
        y: 300,
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
            }
        }
    });
};