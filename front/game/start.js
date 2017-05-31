// (function () {
//     class StartGame {
//         constructor() {
//             this.pjs = new PointJS('2d', 600, 600, {backgroundColor: "#DDDDDD"});
//             this.pjs.system.initFullPage();
//             this.game = this.pjs.game;
//             this.mouse = this.pjs.mouseControl;
//             this.key = this.pjs.keyControl;
//             this.point = this.pjs.vector.point;
//             this.cam = this.pjs.camera;
//             this.brush = this.pjs.brush;
//             this.OOP = this.pjs.OOP;
//             this.camera = this.pjs.camera;
//             this.audio = this.pjs.audio;
//             this.oPos;
//
//             this.key.initKeyControl();
//             this.mouse.initMouseControl();
//             this.game.startLoop("l1");
//         }
//     }
//     window.StartGame = StartGame;
// })();


var pjs = new PointJS('2d',600,600,{backgroundColor: "#01FF70"});
pjs.system.initFullPage();
var game = pjs.game;
var mouse = pjs.mouseControl;
var key = pjs.keyControl;
var point = pjs.vector.point;
var cam = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var camera = pjs.camera;
var audio = pjs.audio;
var oPos;
key.initKeyControl();
mouse.initMouseControl();


