const ind = document.getElementById("ind");
const login = document.getElementById("log");
const rating = document.getElementById("rat");
const about = document.getElementById("about");
const profile = document.getElementById("prof");
const load = document.getElementById("load");
const mode = document.getElementById("mode");

const SiteService = window.SiteService;
const siteService = new SiteService();

var playerNames =[];// ["DronVachevsky", "TeeNik", "Random3355", "Madonna", "AMarev", "ShinyLust", "Makin", "VladislavPG", "Gigson", "Fahrenheit"];

var isAuthed = false;

Router.init();
console.log(window.location.href);
Router.nav("/");


/*myAudio = new Audio("game/assets/main_theme.mp3");
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();*/


function showRating() {
    ind.hidden = true;
    rating.hidden = false;
    profile.hidden = true;
    login.hidden = true;
    about.hidden = true;
	load.hidden = true;
	mode.hidden = true;
}

function showMode() {
	mode.hidden = false;
    ind.hidden = true;
    rating.hidden = true;
    profile.hidden = true;
    login.hidden = true;
    about.hidden = true;
	load.hidden = true;
}

function showProfile() {
    ind.hidden = true;
    rating.hidden = true;
    profile.hidden = false;
    login.hidden = true;
    about.hidden = true;
	load.hidden = true;
	mode.hidden = true;
}

function showLoad() {
    ind.hidden = true;
    rating.hidden = true;
    profile.hidden = true;
    login.hidden = true;
    about.hidden = true;
	load.hidden = false;
	mode.hidden = true;
}

function showLogin() {
    ind.hidden = true;
    login.hidden = false;
    rating.hidden = true;
    about.hidden = true;
    profile.hidden = true;
	load.hidden = true;
	mode.hidden = true;
}

function showAbout() {
    ind.hidden = true;
    login.hidden = true;
    rating.hidden = true;
    about.hidden = false;
    profile.hidden = true;
	load.hidden = true;
	mode.hidden = true;
}

function showInd() {
    if(!isAuthed){
        document.getElementById("Profile").hidden = true;
        document.getElementById("Logout").hidden = true;
    }
    else
    {
        document.getElementById("Profile").hidden = false;
        document.getElementById("Logout").hidden = false;
    }
    ind.hidden = false;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
    profile.hidden = true;
	load.hidden = true;
	mode.hidden = true;
}

function startGame() {
    if(isAuthed)   showMode();
    //showInd();//location.href = "game/index.html";
    else showLogin();
}

function showGame() {	
    ind.hidden = true;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
	load.hidden = true;
	profile.hidden = true;
	mode.hidden = true;
	//game.startLoop("l1");
}

function auth() {
    "use strict";
    siteService.checkAuth();
}

function userLogout() {
    "use strict";
    siteService.logout();
}

function makeRating() {
    "use strict";
    siteService.makeRating();
}

function exitGame(){
	game.stop();
    ind.hidden = true;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
	load.hidden = true;
	profile.hidden = true;
	game.startLoop("l1");
}

makeRating();