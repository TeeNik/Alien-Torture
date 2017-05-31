(function () {
    class Enemy {
        constructor(image, a, b, pjs, game, weapon) {
            this.x = a;
            this.y = b;
            this.img = pjs.tiles.newImage(image);
            this.anim = this.img.getAnimation(560, 0, 70, 94, 1);
            this.obj;
            this.name;
            this.health = 10;
            this.speed = 2;
            this.weapon;
            this.shotPoint = game.newCircleObject({
                fillColor: "black",
                radius: 3
            });

            this.int = setInterval(function () {
                let self = this;
                for (let i = 1; i < 4; i++) {
                    setTimeout(function () {
                        let bull = game.newImageObject({
                            file: "game/assets/enemyShot.png",
                            x: self.shotPoint.x,
                            y: self.shotPoint.y,
                            scale: 0.35,
                            angle: self.shotPoint.getAngle(),
                            userData: {
                                life: 1,
                            }
                        });
                        bull.damage = 1;
                        bull.speed = 20;
                        weapon.enemyBulls.push(bull);
                    }, 100 * i);
                }
            }.bind(this), 2000);
        }

        draw(brush, deathAnim, oPos) {
            let self = this.obj;
            if (this.health > 0) {
                self.draw(brush, oPos);
                GUI.drawHP(this, brush, oPos);


                if (oPos.x - this.obj.getPositionC().x >= 0) {
                    this.obj.setFlip(0, 0);
                    this.weapon.setFlip(0, 0);
                }
                else {
                    this.obj.setFlip(1, 0);
                    this.weapon.setFlip(0, 1);
                }
                this.weapon.rotate(oPos);
                this.weapon.draw(brush);

                this.shotPoint.setPositionC(this.obj.getPositionC());
                this.shotPoint.rotate(oPos);

            } else {
                clearInterval(this.int);
                self.w = 150;
                self.h = 150;
                self.setAnimation(deathAnim);
                self.setDelay(5);
                self.draw(brush, oPos);
                setTimeout(function () {
                    self.visible = false;
                }, 1700);
            }


        }

        shoot(game) {
            let bull = game.newImageObject({
                file: fileName,
                x: this.obj.x,
                y: this.obj.y,
                scale: 0.35,
                angle: this.shotPoint.getAngle(),
                userData: {
                    life: 1
                }
            }.bind(this));
            bull.damage = 10;
            bull.speed = 1;
            weapon.enemyBulls.push(bull);
        }

        init(game) {
            let self = this;
            let an = this.anim;
            this.obj = game.newAnimationObject({
                x: self.x,
                y: self.y,
                animation: an,
                w: 72,
                h: 97
            });


            this.weapon = game.newImageObject({
                file: "game/assets/assault.png",
                x: self.x - 20,
                y: self.y + 45,
                scale: 0.35,
            });

            this.name = "Enemy";
            //this.obj.setDelay(5);
            this.obj.drawToFrame(8);
        }
    }
    window.Enemy = Enemy;
})();
// var enemies = []
//
// var enemy1 = new Enemy("game/assets/p6.png", 2730, 1820);
// enemy1.init();
// var enemy2 = new Enemy("game/assets/p6.png", 1620, 2200);
// enemy2.init();
// var enemy3 = new Enemy("game/assets/p6.png", 750, 980);
// enemy3.init();
// var enemy4 = new Enemy("game/assets/p6.png", 560, 2340);
// enemy4.init();
// var enemy5 = new Enemy("game/assets/p6.png", 2020, 2890);
// enemy5.init();


// enemies.push(enemy1);
// enemies.push(enemy2);
// enemies.push(enemy3);
// enemies.push(enemy4);
// enemies.push(enemy5);
