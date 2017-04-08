(function(){
    class Items {
        constructor(){
            this.weapons  = [];
            this.numOfWeapon = 5;
            this.boxs = [];
            this.medkits = [];
            this.racks = [];
        }
        
        generateWeapon(){
            let pistol = game.newImageObject({
                  file : "assets/pistol.png",  
                  x: oPos.x-30, 
                  y: oPos.y, 
                  scale: 0.38,
				  self: this,
                  userData: {
                      setNear: function(){
                          self.x = oPos.x-30;
                          self.y = oPos.y; 
                      }
                  }
            });

            let assault = game.newImageObject({
                  file : "assets/assault.png",  
                  x: oPos.x-45,
                  y: oPos.y, 
                  scale: 0.35,
                  userData: {
                      setNear: function(){
                          x = oPos.x-45;
                          y = oPos.y; 
                      }
                  }
            });

            let sniper = game.newImageObject({
                  file : "assets/sniper.png",  
                  x: oPos.x-45,
                  y: oPos.y, 
                  scale: 0.35,
                  userData: {
                      setNear: function(){
                          x = oPos.x-45;
                          y = oPos.y; 
                      }
                  }
            });

            let gun = game.newImageObject({
                  file : "assets/gun.png",  
                  x: oPos.x-45,
                  y: oPos.y+10, 
                  scale: 0.3,
                  userData: {
                      setNear: function(){
                          x = oPos.x-45;
                          y = oPos.y; 
                      }
                  }
            });

            let plasma = game.newImageObject({
                  file : "assets/plasma.png",  
                  x: oPos.x-30,
                  y: oPos.y, 
                  scale: 0.5,
                  userData: {
                      setNear: function(){
                          x = oPos.x-30;
                          y = oPos.y; 
                      }
                  }
            });
            
            this.weapons.push(pistol);
            this.weapons.push(assault);
            this.weapons.push(sniper);
            this.weapons.push(gun);
            this.weapons.push(plasma);
			player.weapon = items.weapons[0];
        }
        
        generateBox(){
            let box = game.newImageObject({
                file: "assets/box.png",
                x: 450,
                y: 450,
                userData: {
                    id: pjs.math.toInt(pjs.math.random(1,4)),
                    life: 1
                }
            });
            this.boxs.push(box);
        }
        
        generateMedkit(){
            let kit = game.newImageObject({
                file: "assets/medkit.png",
                scale: 0.5,
                x: 300,
                y: 300,
                userData: {
                    life: 1
                }
            });
            this.medkits.push(kit);
        }
		
		generateRack(){
			let plasmaRack = game.newImageObject({
                  file : "assets/plasmaRack.png",  
                  x: 2036,
                  y: 2600, 
                  scale: 0.3,
				  userData: {
				  	  life: 1,
					  weapon: 4
				  }
			});
			this.racks.push(plasmaRack);
			let assaultRack = game.newImageObject({
                  file : "assets/assaultRack.png",  
                  x: 1650,
                  y: 1580, 
                  scale: 0.3,
				  userData: {
				  	  life: 1,
					  weapon: 1
				  }
			});
			this.racks.push(assaultRack);
			let sniperRack = game.newImageObject({
                  file : "assets/sniperRack.png",  
                  x: 1960,
                  y: 1600, 
                  scale: 0.3,
				  userData: {
				  	  life: 1,
					  weapon: 2
				  }
			});
			this.racks.push(sniperRack);
			let gunRack = game.newImageObject({
                  file : "assets/gunRack.png",  
                  x: 940,
                  y: 910, 
                  scale: 0.3,
				  userData: {
				  	  life: 1,
					  weapon: 3
				  }
			});
			this.racks.push(gunRack);
		}
        
        draw(){
            OOP.forArr(this.boxs, function (el) {
                if (el.life) {
                    el.draw();
                    if (el.isIntersect(player.obj)) {
                        el.visible = false;
                        el.life = 0;
                        el = null;               
                    }
                }
            });
            OOP.forArr(this.medkits, function (el) {
                if (el.life) {
                    el.draw();
                    if (el.isIntersect(player.obj)) {
                        el.visible = false;
                        el.life = 0;
                        el = null;
                        player.health += 3;
                    }
                }
            });
			OOP.forArr(this.racks, function (el) {
                if (el.life) {
                    el.draw();
                    if (el.isIntersect(player.obj)) {
						player.wNum = el.weapon;
						player.weapon = this.weapons[el.weapon];
                        el.visible = false;
                        el.life = 0;
                        el = null;                      
                    }
                }
            }.bind(this));
        };       
    }
    window.Items = Items;
})();


var items = new Items();
items.generateWeapon();
//items.generateBox();
items.generateMedkit();
items.generateRack();
