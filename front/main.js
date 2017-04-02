(function () {

    let indPage = document.querySelector("#ind");   
    let logPage = document.querySelector("#log");
    let aboutPage = document.querySelector("#about");
	let profPage = document.querySelector("#prof");
	let loadPage = document.querySelector("#load");
	let modePage = document.querySelector("#mode");

    const SiteService = window.SiteService;
    const siteService = new SiteService();

    const HTTP = window.HTTP;
    const http = new HTTP();

    let menu = new Menu({
        el: document.createElement('div'),
        data: {
            title: "Break Away",
            fields: [
                {
                    name: "Start",
                    fun: "startGame()",
                },
                {
                    name: "Profile",
                    fun: "showProfile()",
                },
                {
                    name: "Rating",
                    fun: "addRating(); Router.nav('/rating')",
                },
                {
                    name: "About",
                    fun: "Router.nav('/about')",
                },
                {
                    name: "Logout",
                    fun: "userLogout()",
                },
            ]
        }
    });

    let login = new Login({
        el: document.createElement('div'),
        data: {
            title: "Break Away",
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
                    name: "username_reg",
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
        if ( document.getElementById("usernamesignup").value !== "") {
            event.preventDefault();

            siteService.register(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                document.getElementById("passwordsignup").value, showInd(), showLogin());

        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            siteService.login(document.getElementById("username").value, document.getElementById("password").value,  showInd(), showLogin());

        }
    });

    let about = new About({
        el: document.createElement('div'),
        data: {
            title: "Our Team",
            fields: [
                {
                    prof: "Backend",
                    name: "Kuchaeva Karina"
                },
                {
                    prof: "Frontend",
                    name: "Zlobina Svetlana"
                },
                {
                    prof: "Bug Designer",
                    name: "Bayramukov Yan"
                },
				{
                    prof: "Designer",
                    name: "Ovchinnikov Maksim"
                },
                {
                    prof: "Producer",
                    name: "Maschkin Egor"
                }
                
            ]
        }
    });
	
	let prof = new Profile({
		el: document.createElement('div'),
        data: {
            title: "Profile",
            fields: [
                {
                    class: "",
					id: "email",
					type: "email",
					required: "required",
					placeholder: "Email",
					value: ""
                },
                {
                    class: "",
					id: "password",
					type: "password",
					required: "required",
					placeholder: "Password",
					value: ""
                },
                {
                    class: "",
					id: "password",
					type: "password",
					required: "required",
					placeholder: "Confirm Password",
					value: ""
                },
                {
                    class: "login button",
					id: "",
					type: "submit",
					required: "",
					placeholder: "",
					value: "Save"
                }
            ]
        }
	});
	
	let mode = new Mode({
		el: document.createElement('div'),
        data: {
            title: "Select Mode",
            fields: [
                {
                    mode: "Deathmatch",
					img: "deathMatch.png",
					desc: "Select a hero and fight agains other players. Kill more than anybody to win.",
                },
                {
                   mode: "Сatch Flag",
					img: "lagCapture.png",
					desc: "Catch the flag and bring it to your base to earn a point. Team with 5 points wins.",
                },
                {
                    mode: "Tutorial",
					img: "tutorial.png",
					desc: "Learn the controls and test weapon and skills before joining muliplayer.",
                }
            ]
        }
	});
	
	let load = new Load({
		el: document.createElement('div'),
        data: {
            text: "We pick your opponents. Please wait."
        }
	})
	
    indPage.appendChild(menu.el);   
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.el);
    profPage.appendChild(prof.el);
	loadPage.appendChild(load.el);
	modePage.appendChild(mode.el);
	

    showInd();
})();


var addRating = function(){
	makeRating();
	let ratPage = document.querySelector("#rat");
	ratPage.innerHTML = "";
	let rating = new Rating({
        el: document.createElement('div'),
        data: {
            title: "Rating",
        }
    });
	ratPage.appendChild(rating.el);
}