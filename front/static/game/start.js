(function () {


    class StartGame {
        constructor() {
            this.pjs = new PointJS('2d', 600, 600, {backgroundColor: "#DDDDDD"});
            this.pjs.system.initFullPage();

            this.game = this.pjs.game;
            this.mouse = this.pjs.mouseControl;
            this.key = this.pjs.keyControl;
            this.point = this.pjs.vector.point;
            this.cam = this.pjs.camera;
            this.brush = this.pjs.brush;
            this.OOP = this.pjs.OOP;
            this.camera = this.pjs.camera;
            this.audio = this.pjs.audio;
            this.oPos;

            this.key.initKeyControl();
            this.mouse.initMouseControl();
            // this.game.startLoop("l1");
        }

        init() {


            var items = new Items();
            // items.generateWeapon(this.game, this.oPos);
            //items.generateBox();
            items.generateMedkit(this.game);
            items.generateRack(this.game);

            var shotPoint = this.game.newCircleObject({
                radius: 3
            });


            var deathAnim = this.pjs.tiles.newImage("game/assets/death.png").getAnimation(0, 0, 177, 177, 18);

            this.game.newLoop("l1", function () {
                this.game.clear();
                this.oPos = player.obj.getPositionC();

                map.draw(this.OOP);

                for (let i = 0; i < 5; i++) {
                    enemies[i].draw(this.brush, deathAnim, this.oPos);
                }

                if (!pause.pause) {
                    player.do(this.key, specials, this.mouse, this.brush, this.OOP, map, this.point);

                    this.camera.moveTimeC(this.pjs.vector.getPointAngle(this.point(this.oPos.x + 150, this.oPos.y), this.oPos, shotPoint.getAngle()), 20);
                    shotPoint.setPositionC(this.oPos);
                    //shotPoint.rotate(mouse.getPosition());
                    if (shootJoystick.deltaX() == 0 && shootJoystick.deltaY() == 0)
                        shotPoint.rotate(this.mouse.getPosition());
                    else
                        shotPoint.rotate(this.pjs.vector.point(this.oPos.x + shootJoystick.deltaX(), this.oPos.y + shootJoystick.deltaY()));
                    weapon.fire(this.mouse, this.OOP, player, enemies, map);
                }

                if (this.key.isPress("C")) console.log(player.obj.x + " " + player.obj.y);

                weapon.moveWeapon(this.OOP, this.mouse, items, player, this.point);


                items.draw(this.OOP, player);

                timer.drawTimer(this.brush);

                specials.checkSpec(this.key, this.mouse, player);

                var gui = new GUI(this.game, player, specials);

                gui.draw(this.point, player, specials);

                pause.pauseWork(this.key, this.game, this.mouse);

            }.bind(this));


            this.game.newLoop("tutorial", function () {
                this.game.clear();
                this.oPos = player.obj.getPositionC();

                map.draw();

                for (let i = 0; i < 5; i++) {
                    enemies[i].draw(this.brush);
                }

                if (!pause.pause) {
                    player.do();

                    this.camera.moveTimeC(this.pjs.vector.getPointAngle(point(this.oPos.x + 150, this.oPos.y), this.oPos, shotPoint.getAngle()), 20);
                    shotPoint.setPositionC(oPos);
                    shotPoint.rotate(this.mouse.getPosition());

                    weapon.fire();
                }

                if (this.key.isPress("C")) console.log(player.obj.x + " " + player.obj.y);

                weapon.moveWeapon();


                items.draw();

                timer.drawTimer();

                specials.checkSpec();

                var gui = new GUI();

                gui.draw();

                if (!tutorialEnd) {
                    drawTutorial();
                } else {
                    pause.pauseWork();
                }
            });

            var map = new Map(this.pjs);
            map.generateWalls(this.OOP, this.game);
            map.generate2d();

            var player = new Person("game/assets/p2.png", this.pjs);
            player.init(this.game);

            var pause = new Pause(this.game, this.point);

            var weapon = new Weapon(this.game, shotPoint);
            //console.log("before startloop");

            //this.game.startLoop("l1");
            items.generateWeapon(this.game, player.obj.getPositionC(), player, items);

            var specials = new Specials(shotPoint);
            specials.generateSpecs(this.pjs, this.game, this.OOP, player, items, shotPoint, player.obj.getPositionC(), weapon);

            var timer = new Timer();
            timer.startCountsown();

            var enemies = [];

            var enemy1 = new Enemy("game/assets/p6.png", 2730, 1820, this.pjs, this.game, weapon);
            enemy1.init(this.game);
            var enemy2 = new Enemy("game/assets/p6.png", 1620, 2200, this.pjs, this.game, weapon);
            enemy2.init(this.game);
            var enemy3 = new Enemy("game/assets/p6.png", 750, 980, this.pjs, this.game, weapon);
            enemy3.init(this.game);
            var enemy4 = new Enemy("game/assets/p6.png", 560, 2340, this.pjs, this.game, weapon);
            enemy4.init(this.game);
            var enemy5 = new Enemy("game/assets/p6.png", 2020, 2890, this.pjs, this.game, weapon);
            enemy5.init(this.game);

            enemies.push(enemy1);
            enemies.push(enemy2);
            enemies.push(enemy3);
            enemies.push(enemy4);
            enemies.push(enemy5);

            var tutState = 1;
            var tutorialEnd = false;

            var t1 = this.game.newImageObject({
                file: "game/assets/t1.png",
                x: 10,
                y: 10,
                scale: 0.3,
            });


        }
    }


    window.StartGame = StartGame;
})();


// var pjs = new PointJS('2d',600,600,{backgroundColor: "#6df3ff"});
// pjs.system.initFullPage();
// var game = pjs.game;
// var mouse = pjs.mouseControl;
// var key = pjs.keyControl;
// var point = pjs.vector.point;
// var cam = pjs.camera;
// var brush = pjs.brush;
// var OOP = pjs.OOP;
// var camera = pjs.camera;
// var audio = pjs.audio;
// var oPos;
// key.initKeyControl();
// mouse.initMouseControl();


