(function(){
	class Weapon{
		constructor(){
			this.bulls = [];
		}
		
		
		createShot(fileName = "/game/assets/pistolShot.png", sp = 10, dm = 1) {
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
			if (obj.fireCheck) {
				obj.fireCheck = false;
				this.createShot();
				setTimeout(function () {
					obj.fireCheck = true;
				}, 500);
			}
		};
		
		assaultShot() {
			if (obj.fireCheck) {
				obj.fireCheck = false;
				for(let i = 1; i < 4; i++){
					setTimeout(this.createShot.bind(this), 100*i);
				}
				setTimeout(function () {
					obj.fireCheck = true;
				}, 500);
			}
		};
		
		gunShot() {
			if (obj.fireCheck) {
				obj.fireCheck = false;
				let i = 2;
				setTimeout(function rifle() {
					if (i > 0) {
						createShot("/game/assets/gunShot.png", 10, 1.5);
						i--;
						setTimeout(rifle, 100);
					}
				}.bind(this), 100);
				setTimeout(function () {
					obj.fireCheck = true;
				}, 500);
			}
		};
		sniperShot() {
			if (obj.fireCheck) {
				obj.fireCheck = false;
				this.createShot("/game/assets/soran.png", 20, 1.5);
				setTimeout(function () {
					obj.fireCheck = true;
				}, 500);
			}
		};
		
		plasmaShot() {
			if (obj.fireCheck) {
				obj.fireCheck = false;
				this.createShot("/game/assets/plasmaShot.png", 20, 2);
				setTimeout(function () {
					obj.fireCheck = true;
				}, 500);
			}
		};
		
		fire() {
			if (mouse.isPress("LEFT")) {
				switch (obj.wNum % 5) {
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
				this.assaultShot();
			}
			OOP.forArr(this.bulls, function (el) {
				if (el.life) {
					el.draw();
					el.moveAngle(el.speed);
					if (el.isArrIntersect(map.walls)) {
						el.visible = false;
						el.life = false;
					}
					if (el.isIntersect(enemy) && el.isVisible() && enemy.isVisible()) {
						el.visible = false;
						enemy.health -= el.damage;
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
				el.move(point(obj.dx, obj.dy));
				el.rotate(mouse.getPosition());

			});
			if (obj.addSpec) {
				obj.addSpec.move(point(obj.dx, obj.dy));
			}
		}
	
	}
	window.Weapon = Weapon;
	
})();

var weapon = new Weapon();


