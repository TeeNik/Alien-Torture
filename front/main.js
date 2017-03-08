(function(){
	
	let indPage = document.querySelector("#ind");
	let ratPage = document.querySelector("#rat");
	let logPage = document.querySelector("#login");
	
    let menu = new Menu({
        el: document.createElement('div'),
		data: {
			title: "Game title",
			fields: [
				{
					name: "Start",
					fun: "game/index.html",
				},
				{
					name: "Rating",
					fun: "showRating();",
				},
				{
					name: "About",
					fun: "showAbout();",
				},
				{
					name: "Exit",
					fun: "showLogin();",
				},
			]
		}
    });
	
	let rating = new Rating({
        el: document.createElement('div'),
		data: {
			title: "Rating",
		}
    });
	
	let login = new Login({
        el: document.createElement('div'),
		data: {
			title: "Game title",
			logfields: [
				{
					input: "text",
					name: "username",
					tabindex: "1",	
					placeholder: "Username"
				},
				{
					input: "password",
					name: "password",
					tabindex: "2",	
					placeholder: "Password"
				},
			],
			regfields: [
				{
					input: "text",
					name: "username",
					tabindex: "1",	
					placeholder: "Username"
				},
				{
					input: "email",
					name: "email",
					tabindex: "1",	
					placeholder: "Email Address"
				},
				{
					input: "password",
					name: "password1",
					tabindex: "2",	
					placeholder: "Password"
				},
				{
					input: "password",
					name: "password2",
					tabindex: "2",	
					placeholder: "Confirm Password"
				},
			],
		}
    });
	
	indPage.appendChild(menu.el);
	ratPage.appendChild(rating.el); 
	logPage.appendChild(login.el); 
	
	ratPage.hidden = true;
	logPage.hidden = true;
})();