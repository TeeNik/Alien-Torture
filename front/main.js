(function(){
	
	let indPage = document.querySelector("#ind");
	let ratPage = document.querySelector("#rat");
	let logPage = document.querySelector("#login");
	let aboutPage = document.querySelector("#about");
	
    let menu = new Menu({
        el: document.createElement('div'),
		data: {
			title: "Game title",
			fields: [
				{
					name: "Start",
					fun: "startGame()",
				},
				{
					name: "Rating",
					fun: "showRating()",
				},
				{
					name: "About",
					fun: "showAbout()",
				},
				{
					name: "Exit",
					fun: "showLogin()",
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
	
	login.on("submit", (event) => {
		if($("#login-form").valid()){
        	showInd();
        }
	});
	
	let about = new About({
        el: document.createElement('div'),
		data: {
			title: "Game title",
			fields: [
				{
					prof: "Frontend",
					name: "Kuchaeva Karina"
				},
				{
					prof: "Backend",
					name: "Zlobina Svetlana"
				},
				{
					prof: "Teambuilding",
					name: "Bayramukov Yan"
				},
				{
					prof: "Producer",
					name: "Maschkin Egor"
				},
				{
					prof: "Designer",
					name: "Ovchinnikov Maksim"
				}
			]
		}
    });
	
	indPage.appendChild(menu.el);
	ratPage.appendChild(rating.el); 
	logPage.appendChild(login.el); 
	aboutPage.appendChild(about.el);
	
	ratPage.hidden = true;
	logPage.hidden = true;
	aboutPage.hidden = true;
})();