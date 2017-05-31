import SiteService from './siteService'
import Menu from '../static/components/menu'
import Rating from '../static/components/rating'
import About from '../static/components/about'
import Login from '../static/components/login'
import Gamemode from '../static/components/gameMode'
//import Router from './router'

export default class Manage {
    constructor() {
        this.router = window.router;
        window.onpopstate = function(e){
            e.preventDefault();
            let l = getLocation(document.location.href);
            this.router.nav(l.pathname);
        };

        let str = getLocation(document.location.href).pathname;
        alert(str.substring(0, str.length - 1));
        this.router.nav(str.substring(0, str.length - 1));

        this.indPage = document.getElementById("ind");
        this.loginPage = document.getElementById("log");
        this.ratPage = document.getElementById("rat");
        this.aboutPage = document.getElementById("about");
        this.modePage = document.getElementById("mode");
        this.backButton = document.getElementById("backButton");
        this.loadPage = document.getElementById("load");
        //this.soundButton = document.getElementById("soundButton");

        this.siteService = new SiteService();

        this.menu = new Menu();
        this.rating = new Rating();
        this.about = new About();
        this.login = new Login();
        this.gameMode = new Gamemode();
        this.myAudio = new Audio("game/assets/main_theme.mp3");
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        //this.myAudio.play();
        this.logicAuth = false;
        this.soundButtonEventsListener();



        this.renderMenu = require("./../static/components/menu/menuTemplate.pug");
        this.renderRating = require("./../static/components/rating/ratingTemplate.pug");
        this.renderAbout = require("./../static/components/about/aboutTemplate.pug");
        this.renderLogin = require("./../static/components/login/loginTemplate.pug");
        this.renderGameMode = require("./../static/components/gameMode/gameModeTemplate.pug");

        this.indPage.appendChild(this.menu.content);
        this.ratPage.appendChild(this.rating.content);
        this.loginPage.appendChild(this.login.content);
        this.aboutPage.appendChild(this.about.content);
        this.modePage.appendChild(this.gameMode.content);

        this.loadPage.hidden = false;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.hidden = true;

        this.backButtonEventsListener();
    }

    showRating() {
        this.loadPage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.style.visibility = "visible";
        this.loginPage.hidden = true;

        this.siteService.makeRating().then(response => {
            response.json().then(function (data) {
                let playerNames = [];
                for (let i = 0; i < data.length; i++) {
                    playerNames.push(data[i].login);
                }
                this.rating.render(this.renderRating({'players': playerNames}));
                this.loadPage.hidden = true;
                this.ratPage.hidden = false;
            }.bind(this));
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    showLogin() {
        document.getElementById("PointJS-canvas_0").hidden = true;
        this.indPage.hidden = true;
        this.loginPage.hidden = false;
        this.modePage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.style.visibility = "visible";
        this.loadPage.hidden = true;

        this.login.render(this.renderLogin());
        this.login.on("submit", (event) => {
            if (document.getElementById("usernamesignup").value !== "") {
                event.preventDefault();

                this.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                    document.getElementById("passwordsignup").value, null, null);

            } else if (document.getElementById("username").value !== "") {
                event.preventDefault();

                this.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);

            }
        });
    }

    showAbout() {
        this.indPage.hidden = true;
        this.aboutPage.hidden = false;
        this.modePage.hidden = true;
        this.backButton.hidden = false;
        this.loadPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.backButton.style.visibility = "visible";

        this.about.render(this.renderAbout());

    }

    showInd() {
        this.loadPage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.style.visibility = "hidden";

        this.siteService.checkAuth().then(response => {
            response.json().then(function (data) {
                //console.log('into ind');
                //console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                this.menu.render(this.renderMenu({'logicAuth': this.logicAuth}));
            } else {
                this.menu.render(this.renderMenu({'logicAuth': this.logicAuth}));
            }
            this.menuEventsListener(this.logicAuth);
            this.loadPage.hidden = true;
            this.indPage.hidden = false;
        }).catch(err => {
            console.log('fetch error: ', err);
        });

    }

    showGameMode() {
        this.modePage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.style.visibility = "visible";
        this.loadPage.hidden = true;


        this.gameMode.render(this.renderGameMode());

    }

    showGame() {
        game.startLoop("l1");
        document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-not");
        document.getElementById("PointJS-canvas_0").classList.add("game-canvas-active");
    }

    userLogin(login, password, callback1 = null, callback2 = null) {

        console.log("into login");
        this.siteService.login(login, password, callback1 = null, callback2 = null).then(response => {
            if (response.status === 200) {
                this.logicAuth = true;
                console.log("into login-200");
            }
            console.log("into login-200");
            //this.showInd();
            game.startLoop("l1");
        }).catch(err => {
            console.log('fetch error: ', err);
        });

    }

    userRegister(login, email, password, callback1 = null, callback2 = null) {
        console.log("into userRegister");
        this.siteService.register(login, email, password, callback1 = null, callback2 = null).then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                //location.href = 'game/index.html';
                this.router.nav('/game');
            }


        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    userLogout() {
        console.log("start logout");
        this.siteService.logout().then(response => {
            this.router.nav('/');

            if (response.status === 200) {
                this.logicAuth = false;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });

    }

    menuEventsListener(logicAuth) {
        if (logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                //this.showGameMode();
                //location.href = 'game/index.html';
                // game.startLoop("l1");
                // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-not");
                // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-active");
                //let startGame = new StartGame();
                this.router.nav('/game');
            }.bind(this));
            document.getElementById('menuLogout').addEventListener("click", function () {
                this.userLogout();
                this.router.nav('/');
            }.bind(this));
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                // game.startLoop("l1");
                // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-not");
                // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-active"); //TODO: fix login
                //this.showLogin();
                this.router.nav('/game');
                //Router.nav('/login');
            }.bind(this));

        }
        document.getElementById('menuRating').addEventListener("click", function () {
            //window.showRating();
            this.router.nav('/rating');
            //this.makeRating();
            //rating.render(renderRating({'players': playerNames}));
        }.bind(this));
        document.getElementById('menuAbout').addEventListener("click", function () {
            //this.showAbout();
            this.router.nav('/about');
        }.bind(this));
    }

    backButtonEventsListener(){
        document.getElementById('backButton').addEventListener("click", function () {
            this.router.nav('/');
            // this.showInd();
            // console.log("backButtonEventListener");
        }.bind(this));
    }

    soundButtonEventsListener(){
        document.getElementById('soundButton').addEventListener("click", function () {
            let s = document.getElementById("soundButton");

            if (!this.myAudio.paused) {
                s.src = "./../resources/soundOff.png";
                this.myAudio.pause();
            }
            else {
                s.src = "./../resources/soundOn.png";
                this.myAudio.play();
            }
        }.bind(this));
    }
}

window.Manage = Manage;

//var manage = new Manage();