var Router = {
    routes: {
        "/": "indexPage",
        "/rating": "ratingPage",
        "/about": "aboutPage",
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
        showInd();
    },

    ratingPage: function () {
        showRating();
    },

    aboutPage: function () {
        showAbout();
    }
};