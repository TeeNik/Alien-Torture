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
                    showInd();
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
                    showInd();
                }
                /*if (typeof callback === 'function') {
                    callback(xhr);
                }*/
            });
        }
    }
    window.SiteService = SiteService;
})();
