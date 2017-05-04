(function(){
	class Weapon{
		constructor(){
			this.bulls = [];
			this.enemyBulls = [];
		}
		
		
		createShot(fileName = "assets/pistolShot.png", sp = 10, dm = 1) {
			let bull = game.newImageObject({
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
			this.bulls.push(bull);
		}
	
		pistolShot() {
				this.createShot();
		};
		
		assaultShot() {
				for(let i = 1; i < 4; i++){
					setTimeout(this.createShot.bind(this), 100*i);
				}
		};
		
		gunShot() {
				let i = 2;
				for(let i = 1; i < 3; i++){
					setTimeout(this.createShot.bind(this,"assets/gunShot.png", 10, 1.5), 100*i);
				}
		};
		sniperShot() {
			this.createShot("assets/soran.png", 20, 1.5);
		};
		
		plasmaShot() {
			this.createShot("assets/plasmaShot.png", 20, 2);
		};
		
		fire() {
			console.log(shootJoystick.deltaX());
			if ((mouse.isDown("LEFT") || (shootJoystick.deltaX() != 0 || shootJoystick.deltaY() != 0)) && player.fireCheck) {
				player.fireCheck = false;
				
				switch (player.wNum % 5) {
				case 0:
					this.pistolShot();
					break;
				case 1:
					this.assaultShot();
					break;
				case 2:
					this.sniperShot();
					break;
				case 3:
					this.gunShot();
					break;
				case 4:
					this.plasmaShot();
					break;
				}
				setTimeout(function () {
					player.fireCheck = true;
				}, 800);
			}
			OOP.forArr(this.bulls, function (el) {
				if (el.life) {
					el.draw();
					el.moveAngle(el.speed);
					if (el.isArrIntersect(map.walls)) {
						el.visible = false;
						el.life = false;
					}
					OOP.forArr(enemies, function(n){
						if (el.isIntersect(n.obj) && el.isVisible() && n.obj.isVisible()) {
							el.visible = false;
							n.health -= el.damage;
							el.life = false;
						}
					});
					
				}
				else {
					el = null;
				}
			});
			OOP.forArr(this.enemyBulls, function (el) {
				if (el.life) {
					el.draw();
					el.moveAngle(el.speed);
					if (el.isArrIntersect(map.walls)) {
						el.visible = false;
						el.life = false;
					}
					if (el.isIntersect(player.obj) && el.isVisible()) {
						el.visible = false;
						player.health -= el.damage;
						el.life = false;
					}
				}
				else {
					el = null;
				}
			});
		}
		
		moveWeapon() {
			OOP.forArr(items.weapons, function (el) {
				el.move(point(player.dx, player.dy));
				el.rotate(mouse.getPosition());

			});
			if (player.addSpec) {
				player.addSpec.move(point(player.dx, player.dy));
			}
		}
	
	}
	window.Weapon = Weapon;
	
})();

var weapon = new Weapon();


