(function () {
    class GUI {
        constructor() {
            this.back = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: 200,
                h: 40,
                radius: 5,
                fillColor: "gray",
                strokeColor: "darkred",
                strokeWidth: 3
            });

            this.hpBar = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: player.health * 19.4,
                h: 35,
                radius: 5,
                fillColor: "red"
            });

            this.backS = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: 200,
                h: 40,
                radius: 5,
                fillColor: "gray",
                strokeColor: "blue",
                strokeWidth: 3
            });

            this.sBar = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: player.mana * 19.4,
                h: 35,
                radius: 5,
                fillColor: "#8ecdf6",
            });

            this.mark = game.newRectObject({
                x: 10 + specials.costs[player.sNum % specials.numOfSpecs],
                y: 10,
                w: 5,
                h: 35,
                radius: 5,
                fillColor: "blue",
            });
        }

        static drawHP(obj) {
            brush.drawRoundRect({
                w: 62,
                h: 9,
                x: obj.obj.x + 5,
                y: obj.obj.y - 8,
                radius: 5,
                fillColor: "gray",
                strokeColor: "darkred",
                strokeWidth: 2
            });
            brush.drawRoundRect({
                w: obj.health * 6,
                h: 7,
                x: obj.obj.x + 7,
                y: obj.obj.y - 6,
                radius: 5,
                fillColor: "red"
            });
        }

        draw() {
            this.back.setPositionS(point(30, 30));
            this.back.draw();

            this.hpBar.w = player.health * 19.4;
            this.hpBar.setPositionS(point(34, 34));
            this.hpBar.draw();

            this.backS.setPositionS(point(30, 80));
            this.backS.draw();

            this.sBar.w = player.mana * 19.4;
            this.sBar.setPositionS(point(34, 84));
            this.sBar.draw();

            this.mark.setPositionS(point(30 + specials.costs[player.sNum % specials.numOfSpecs] * 19.4, 84));
            this.mark.draw();
        }
    }

    window.GUI = GUI;
})();

//var gui = new GUI();

