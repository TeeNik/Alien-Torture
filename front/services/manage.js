import SiteService from './siteService'
import Menu from './../static/components/menu'
import Rating from './../static/components/rating'
import About from './../static/components/about'
import Login from './../static/components/login'
import Gamemode from './../static/components/gameMode'
import renderMenu from './../static/renderedTemplates/menuTemplate'
import renderRating from './../static/renderedTemplates/ratingTemplate'
import renderAbout from './../static/renderedTemplates/aboutTemplate'
import renderLogin from './../static/renderedTemplates/loginTemplate'
import renderGameMode from './../static/renderedTemplates/gameModeTemplate'
import {Router} from './router'

export default class Manage {
    constructor() {
        this.indPage = document.getElementById("ind");
        this.loginPage = document.getElementById("log");
        this.ratPage = document.getElementById("rat");
        this.aboutPage = document.getElementById("about");
        this.modePage = document.getElementById("mode");
        this.backButton = document.getElementById("backButton");
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
        this.myAudio.play();
        this.logicAuth = false;

        this.indPage.appendChild(this.menu.content);
        this.ratPage.appendChild(this.rating.content);
        this.loginPage.appendChild(this.login.content);
        this.aboutPage.appendChild(this.about.content);
        this.modePage.appendChild(this.gameMode.content);

        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.backButton.hidden = true;
    }


    sound() {
        let s = document.getElementById("sBut");
        if (!this.myAudio.paused) {
            s.src = "./../resources/soundOff.png";
            this.myAudio.pause();
        }
        else {
            s.src = "./../resources/soundOn.png";
            this.myAudio.play();
        }
    }

    showRating() {
        this.indPage.hidden = true;
        this.ratPage.hidden = false;
        this.modePage.hidden = true;
        this.backButton.hidden = false;
        this.siteService.makeRating().then(response => {
            response.json().then(function (data) {
                let playerNames = [];
                for (let i = 0; i < data.length; i++) {
                    playerNames.push(data[i].login);
                }
                this.rating.render(renderRating({'players': playerNames}));
                this.backButtonEventsListener(this.logicAuth);
            }.bind(this));
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.backButtonEventsListener(this.logicAuth);
    }

    showLogin() {
        this.indPage.hidden = true;
        this.loginPage.hidden = false;
        this.modePage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.hidden = false;
        this.login.render(renderLogin());
        this.login.on("submit", (event) => {
            if (document.getElementById("usernamesignup").value !== "") {
                event.preventDefault();

                this.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                    document.getElementById("passwordsignup").value, null, null);

            } else if (document.getElementById("username").value !== "") {
                event.preventDefault();

                this.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);

            }
            this.showInd();
        });

        this.backButtonEventsListener(this.logicAuth);
    }

    showAbout() {
        this.indPage.hidden = true;
        this.aboutPage.hidden = false;
        this.modePage.hidden = true;
        this.backButton.hidden = false;
        this.about.render(renderAbout());
        this.backButtonEventsListener(this.logicAuth);
    }

    showInd() {
        this.indPage.hidden = false;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.modePage.hidden = true;
        this.siteService.checkAuth().then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                this.menu.render(renderMenu({'logicAuth': this.logicAuth}));
            } else {
                this.menu.render(renderMenu({'logicAuth': this.logicAuth}));
            }
            this.menuEventsListener(this.logicAuth);
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.backButton.hidden = true;
    }

    showGameMode() {
        this.modePage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.hidden = false;
        //this.showLogin();
        this.gameMode.render(renderGameMode());
        this.backButtonEventsListener(this.logicAuth);
    }

    userLogin(login, password, callback1 = null, callback2 = null) {
        this.siteService.login(login, password, callback1 = null, callback2 = null).then(response => {
            if (response.status === 200) {
                this.logicAuth = true;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.showInd();
    }

    userRegister(login, email, password, callback1 = null, callback2 = null) {
        this.siteService.register(login, email, password, callback1 = null, callback2 = null).then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.showInd();
    }

    userLogout() {
        this.siteService.logout().then(response => {
            console.log("start logout");
            if (response.status === 200) {
                this.logicAuth = false;
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.showInd();
    }

    makeRating() {
        this.siteService.makeRating();
    }

    menuEventsListener(logicAuth) {
        if (logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                //this.showGameMode();
                location.href = 'game/index.html';
            }.bind(this));
            document.getElementById('menuLogout').addEventListener("click", function () {
                this.userLogout();
                //Router.nav('/login');
            }.bind(this));
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                this.showLogin();
                //Router.nav('/login');
            }.bind(this));

        }
        document.getElementById('menuRating').addEventListener("click", function () {
            this.showRating();
            //Router.nav('/rating');
            this.makeRating();
            //rating.render(renderRating({'players': playerNames}));
        }.bind(this));
        document.getElementById('menuAbout').addEventListener("click", function () {
            this.showAbout();
            //Router.nav('/about');
        }.bind(this));
    }

    backButtonEventsListener(logicAuth){
        document.getElementById('backButton').addEventListener("click", function () {
            //Router.nav('/');
            this.showInd();
            this.menuEventsListener(logicAuth);
        }.bind(this));
    }
}
