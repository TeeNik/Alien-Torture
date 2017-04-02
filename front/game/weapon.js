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
			if (player.fireCheck) {
				player.fireCheck = false;
				this.createShot();
				setTimeout(function () {
					player.fireCheck = true;
				}, 500);
			}
		};
		
		assaultShot() {
			if (player.fireCheck) {
				player.fireCheck = false;
				for(let i = 1; i < 4; i++){
					setTimeout(this.createShot.bind(this), 100*i);
				}
				setTimeout(function () {
					player.fireCheck = true;
				}, 500);
			}
		};
		
		gunShot() {
			if (player.fireCheck) {
				player.fireCheck = false;
				let i = 2;
				for(let i = 1; i < 3; i++){
					setTimeout(this.createShot.bind(this,"/game/assets/gunShot.png", 10, 1.5), 100*i);
				}
				setTimeout(function () {
					player.fireCheck = true;
				}, 500);
			}
		};
		sniperShot() {
			if (player.fireCheck) {
				player.fireCheck = false;
				this.createShot("/game/assets/soran.png", 20, 1.5);
				setTimeout(function () {
					player.fireCheck = true;
				}, 500);
			}
		};
		
		plasmaShot() {
			if (player.fireCheck) {
				player.fireCheck = false;
				this.createShot("/game/assets/plasmaShot.png", 20, 2);
				setTimeout(function () {
					player.fireCheck = true;
				}, 500);
			}
		};
		
		fire() {
			if (mouse.isPress("LEFT")) {
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


