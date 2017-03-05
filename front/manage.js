const ind = document.getElementById("ind");
const login = document.getElementById("login");
const rating = document.getElementById("rating");
const about = document.getElementById("about");

//rating.hidden = true;
//ind.hidden = true;
//about.hidden = true;

function showRating(){
    ind.hidden = true;
    rating.hidden = false;
}

function showLogin(){
    ind.hidden = true;
    login.hidden = false;
}

function showAbout(){
    ind.hidden = true;
    about.hidden = false;
}

function showInd(){
    ind.hidden = false;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
}