import About from './static/components/about';
import Menu from './static/components/menu';
import Rating from './static/components/rating';
import renderAbout from './static/renderedTemplates/aboutTemplate'
import renderMenu from './static/renderedTemplates/menuTemplate'
import renderRating from './static/renderedTemplates/ratingTemplate'
//import {playerNames, logicAuth} from './services/siteService'
import Manage  from './services/manage'
import {Router} from './services/router'

(function () {



    let manage = new Manage();
    //let router = new router();

    //let menu = new Menu();
    manage.sound();
    manage.showInd();
    //menu.render(renderMenu({'logicAuth': logicAuth}));

    //let rating = new Rating();
   // manage.makeRating();

    //let about = new About();
    //about.render(renderAbout());

    //let loginPage = document.getElementById("log");
    //this.ratPage = document.getElementById("rat");
    //this.aboutPage = document.getElementById("about");
    //let gamePage = document.getElementById("game");

    /*let game = new Game({
        el: document.createElement('div'),
        data: {
            title: "Game",
        }
    });*/

    /*let login = new Login({
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
    });*/

   /* login.on("submit", (event) => {
        if (document.getElementById("usernamesignup").value !== "") {
            event.preventDefault();

            manage.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                document.getElementById("passwordsignup").value, null, null);

        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            manage.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);

        }
        manage.showInd();
    });*/

    //loginPage.appendChild(login.el);
    //gamePage.appendChild(game.el);

})();