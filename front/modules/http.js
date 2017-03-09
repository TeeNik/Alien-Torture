(function () {
    'use strict';
    const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

    class HTTP {
        constructor() {
            if (HTTP.__instance) {
                return HTTP.__instance;
            }
            this._baseURL = '';
            HTTP.__instance = this;
        }

        set BaseURL(value) {
            this._baseURL = value;
        }

        get BaseURL() {
            return this._baseURL;
        }

        get(address, callback = null) {
            const xhr = new XMLHttpRequest();

            xhr.withCredentials = true;
            let url = '${this._baseURL}${address}';
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (typeof callback === 'function') {
                    callback(xhr);
                }
            }
            xhr.send(null);
        }

        post(address, body, callback = null) {
            const xhr = new XMLHttpRequest();
            let url = '${this._baseURL}${address}';
            xhr.open('POST', address, true);
            xhr.withCredentials = true;

            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (typeof callback === 'function') {
                    callback(xhr);
                }
            }
            console.log(JSON.stringify(body));
            xhr.send(JSON.stringify(body));

        }
    }
    window.HTTP = HTTP;
})();
