var Router = {
    routes: {
        "/": "indexPage",
        "/rating": "ratingPage",
        "/about": "aboutPage",
        "/login": "loginPage"
    },
    init: function (){
        this._routes = [];
        for( var route in this.routes ){
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^'+route.replace(/:\w+/, '(\\w+)')+'$'),
                callback: this[methodName]
            });
        }
    },
    nav: function (path){
        var i = this._routes.length;
        while( i-- ){
            var args = path.match(this._routes[i].pattern);
            if( args ){
                this._routes[i].callback.apply(this, args.slice(1));
            }
        }
    },

    indexPage: function () {
        history.pushState(null, null, "/");
        showInd();
    },

    ratingPage: function () {
        alert(123);
        history.pushState(null, null, "/rating");
        showRating();
    },

    aboutPage: function () {
        history.pushState(null, null, "/about");
        showAbout();
    },

    logoutPage: function () {
        history.pushState(null, null, "/login");
        showLogin();
    }
};

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

window.onpopstate = function(e){
    e.preventDefault();
    var l = getLocation(document.location.href);
    alert(getLocation(document.location.href));
    Router.nav(""+l.pathname);
}

Router.init();
let str = getLocation(document.location.href).pathname;
Router.nav(str.substring(0, str.length - 1));


