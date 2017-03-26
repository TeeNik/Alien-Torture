(function () {

    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#log");
    let aboutPage = document.querySelector("#about");
    let gamePage = document.querySelector("#game");
	let profPage = document.querySelector("#prof")

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
                    fun: "auth()",
                },
                {
                    name: "Profile",
                    fun: "showProfile()",
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
                    name: "Logout",
                    fun: "userLogout()",
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

    let game = new Game({
        el: document.createElement('div'),
        data: {
            title: "Game",
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
        //if ($("#register-form").valid() && !lg) {
        /*if ($("input[name=usernamesignup]").val() !== "") {
            event.preventDefault();
            siteService.register($("input[name=usernamesignup]").val(), $("input[name=emailsignup]").val(), $("input[name=passwordsignup]").val(), showInd(), showLogin());
             //$("#register-form").each(function () {
             //this.reset();
             //});
        } else if ($("input[name=username]").val() !== "") {
            event.preventDefault();

            console.log("here login");
            siteService.login($("input[name=username]").val(), $("input[name=password]").val(),  showInd(), showLogin());

        }*/
        if ( document.getElementById("usernamesignup").value !== "") {
            event.preventDefault();

            siteService.register(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                document.getElementById("passwordsignup").value, showInd(), showLogin());

        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            console.log("here login");
            siteService.login(document.getElementById("username").value, document.getElementById("password").value,  showInd(), showLogin());

        }

        /*} else if ($("#login-form").valid()) {

            event.preventDefault();

            siteService.login($("input[name=username]").val(), $("input[name=password]").val(),  showInd(), showLogin());
            $("#login-form").each(function () {
                this.reset();
            });


        }*/
    });

    let about = new About({
        el: document.createElement('div'),
        data: {
            title: "Break Away",
            fields: [
                {
                    prof: "Fullstack",
                    name: "Kuchaeva Karina"
                },
                {
                    prof: "Fullstack",
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

    indPage.appendChild(menu.el);
    ratPage.appendChild(rating.el);
    makeRating();
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.el);
    gamePage.appendChild(game.el);
    profPage.appendChild(prof.el)

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;
    profPage.hidden = true;
})();