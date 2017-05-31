//import Manage  from './services/manage'

//manage = new Manage();
(function () {
    class Pause {
        constructor(game, point) {
            this.pause = false;

            this.pauseBack = game.newImageObject({
                file: "game/assets/t0.png",
                scale: 0.35,
                positionC: point(game.getWH2().w, game.getWH2().h)
            });

            this.soundButton = game.newImageObject({
                file: "../resources/soundOn.png",
                scale: 0.35,
                positionC: point(game.getWH2().w, game.getWH2().h)
            });


            this.exitText = game.newTextObject({
                positionC: point(game.getWH2().w, game.getWH2().h),
                size: 50,
                font: "pixel",
                text: "Exit",
                color: "black",
            });

            this.point = point;
        }


        checkPauseButtons(mouse, game) {
            if (mouse.isInObject(this.exitText)) {
                this.exitText.size = 60;
            }
            else {
                this.exitText.size = 50;
            }

            if (mouse.isPeekObject("LEFT", this.exitText)) {
                //location.href = "/../index.html";
                //manage.showInd();
                game.clear();
                game.stop();
                var can = document.getElementById("PointJS-canvas_0");
                can.parentNode.removeChild(can);
            //     document.getElementById("PointJS-canvas_0").classList.add("game-canvas-not");
             }

            if (mouse.isPeekObject("LEFT", this.soundButton)) {
                if (audio.main_theme.playing) {
                    audio.pause();

                    this.soundButton.setImage("../resources/soundOff.png");
                }
                else {
                    audio.play();
                    this.soundButton.setImage("../resources/soundOn.png");
                }
            }
        }

        pauseWork(key, game, mouse) {
            if (key.isPress("ESC")) {
                this.pause = !this.pause;
            }

            if (this.pause) {
                this.pauseBack.setPositionCS(this.point(game.getWH2().w, game.getWH2().h));
                this.exitText.setPositionCS(this.point(game.getWH2().w - 45, game.getWH2().h + 50));
                this.soundButton.setPositionCS(this.point(game.getWH2().w, game.getWH2().h - 50));
                this.pauseBack.draw();
                this.exitText.draw();
                this.soundButton.draw();
                this.checkPauseButtons(mouse, game);
            }
        }
    }

    window.Pause = Pause;

})();

// var pause = new Pause();





