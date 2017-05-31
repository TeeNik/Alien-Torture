var tutState = 1;
var tutorialEnd = false;

var t1 = game.newImageObject({
    file: "game/assets/t1.png",
    x: 10,
    y: 10,
    scale: 0.3,
});


var drawTutorial = function () {

    pause.pause = true;

    brush.drawImageS({
        file: "game/assets/t" + tutState + ".png",
        x: screen.width / 2.5,
        y: screen.height / 3.5,
        scale: 0.35,
    });

    brush.drawTextS({
        text: "Press Space to continue...",
        x: window.screen.width / 2 - 300,
        y: window.screen.height - 200,
        size: 30,
        color: "black",
        font: 'pixel'
    });

    if (key.isPress("SPACE")) {
        tutState++;
        if (tutState == 7) {
            tutorialEnd = true;
            pause.pause = false;
        }

    }
};


//t1.setPositionS(new point(screen.width/2, screen.height/2));

