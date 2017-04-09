
export default class HTTP {
    constructor() {
        if (HTTP.__instance) {
            return HTTP.__instance;
        }
        HTTP.__instance = this;
    }

    request(address='', type='', body){
        let req = {
            method: type,
            mode:'cors',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        };
        if(body) {
            console.log(body);
            req.body = JSON.stringify(body);
        }
        return fetch(address, req);
    }

    /*set BaseURL(value) {
        this._baseURL = value;
    }

    get BaseURL() {
        return this._baseURL;
    }

    get(address, callback = null) {
        const xhr = new XMLHttpRequest();

        xhr.withCredentials = true;
        let url = '${this._baseURL}${address}';
        xhr.open('GET', address, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        };
        xhr.send(null);
    }

    delete(address, callback = null) {
        const xhr = new XMLHttpRequest();

        xhr.withCredentials = true;
        let url = '${this._baseURL}${address}';
        xhr.open('DELETE', address, true);
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

    }*/
}


