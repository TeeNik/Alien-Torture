/*(function(){
 	class Router{
		constructor(){
			this.routes = {
				"/": "indexPage",
				"/rating": "ratingPage",
				"/about": "aboutPage",
				"/login": "loginPage"
			}
		}
		
		init(){
			this._routes = [];
			for( var route in this.routes ){
				var methodName = this.routes[route];
				this._routes.push({
					pattern: new RegExp('^'+route.replace(/:\w+/, '(\\w+)')+'$'),
					callback: this[methodName]
				});
			}
		}
		
		nav(path){
			var i = this._routes.length;
			console.log(this);
			while( i-- ){
				var args = path.match(this._routes[i].pattern);
				if( args ){
					console.log(args);
					this._routes[i].callback.apply(this, args.slice(1));
				}
			}
		}

		indexPage(){
			history.pushState(null, null, "/");
			showInd();
		}

		ratingPage() {
			history.pushState(null, null, "/rating");
			showRating();
		}

		aboutPage() {
			history.pushState(null, null, "/about");
			showAbout();
		}

		loginPage() {
			history.pushState(null, null, "/login");
			showLogin();
		}
	};
	
	window.Router = Router;
	
 
	
 })();


	var router = new Router();
	router.init();
	
	var getLocation = function(href) {
		var l = document.createElement("a");
		l.href = href;
		return l;
	};

	window.onpopstate = function(e){
		e.preventDefault();
		var l = getLocation(document.location.href);
		router.nav(l.pathname);
	}

	
	let str = getLocation(document.location.href).pathname;
	alert(str.substring(0, str.length - 1));
	router.nav(str.substring(0, str.length - 1));*/




