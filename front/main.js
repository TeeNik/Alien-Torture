(function () {

    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#login");
    let aboutPage = document.querySelector("#about");

    const SiteService = window.SiteService;
    const siteService = new SiteService();

    const HTTP = window.HTTP;
    const http = new HTTP();
    //http.BaseURL = 'http://Rws-backend.herokuapp.com/api';

    let menu = new Menu({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            fields: [
                {
                    name: "Start",
                    fun: "showLogin()",
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
        if ($("#register-form").valid() && !lg) {
            event.preventDefault();
            siteService.register($("input[name=username_reg]").val(), $("input[name=email]").val(), $("input[name=password1]").val(), showInd(), showLogin());
            $("#register-form").each(function () {
                this.reset();
            });


        } else if ($("#login-form").valid()) {

            event.preventDefault();

            siteService.login($("input[name=username]").val(), $("input[name=password]").val(),  showInd(), showLogin());
            $("#login-form").each(function () {
                this.reset();
            });


        }
    });

    let about = new About({
        el: document.createElement('div'),
        data: {
            title: "Game title",
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

    indPage.appendChild(menu.el);
    ratPage.appendChild(rating.el);
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.el);


    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
})();