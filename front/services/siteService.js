(function () {
    'use strict';

    const HTTP = window.HTTP;


    class SiteService {
        constructor() {
            this.http = new HTTP();
        }

        login(login, password, callback1 = null, callback2 = null) {
            const body = {
                login, password
            }
            this.http.post('http://Rws-backend.herokuapp.com/api/session', body, function (xhr) {

                const responseText = xhr.responseText;
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
                if (xhr.status === 200) {
                    showGame();
                }
            });
        }

        register(login, email, password, callback1 = null, callback2 = null) {
            const body = {
                login, email, password
            }
            this.http.post('http://Rws-backend.herokuapp.com/api/signup', body, function (xhr) {
                const responseText = xhr.responseText;
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
                if (xhr.status === 200) {
                    showGame();
                }

            });
        }

        checkAuth() {
            this.http.get('http://Rws-backend.herokuapp.com/api/session', function (xhr) {
                console.log("start checkAuth");
                const responseText = xhr.responseText;
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
                if (xhr.status === 200) {
                    showGame();
                } else {
                    showLogin();
                }

            });
        }

        logout() {
            this.http.delete('http://Rws-backend.herokuapp.com/api/session', function (xhr) {
                console.log("start logout");
                const responseText = xhr.responseText;


                if (xhr.status === 200) {
                    showLogin();
                } else {
                    showLogin();
                    const responseParsed = JSON.parse(responseText);
                    console.log(responseParsed);
                }

            });
        }

        makeRating() {
            this.http.get('http://Rws-backend.herokuapp.com/api/rating', function (xhr) {
                console.log("start making rating");
                const responseText = xhr.responseText;
                const responseParsed = JSON.parse(responseText);
                for(let i = 0; i < responseParsed.length; i++) playerNames.push(responseParsed[i].login);

            });
        }
    }
    window.SiteService = SiteService;
})();
