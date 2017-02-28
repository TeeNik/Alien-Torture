var numOfWeapon = 5;

var pistol = game.newImageObject({
      file : "assets/pistol.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var assault = game.newImageObject({
      file : "assets/assault.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var sniper = game.newImageObject({
      file : "assets/sniper.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var gun = game.newImageObject({
      file : "assets/gun.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.35,
});

var plasma = game.newImageObject({
      file : "assets/plasma.png",  
      x: obj.getPositionC().x,
      y: obj.getPositionC().y, 
      scale: 0.5,
});

var weapon = [];
weapon.push(pistol);
weapon.push(assault);
weapon.push(sniper);
weapon.push(gun);
weapon.push(plasma);