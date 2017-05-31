import HTTP from '../../modules/http'

export default class SiteService {
    constructor() {
        this.http = new HTTP();
    }

    login(login, password, callback1 = null, callback2 = null) {
        const body = {
            login, password
        };
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'POST', body);
    }

    register(login, email, password, callback1 = null, callback2 = null) {
        const body = {
            login, email, password
        };
        return this.http.request('https://rws-backend.herokuapp.com/api/signup', 'POST', body);
    }

    checkAuth() {
        console.log("start checkAuth");
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'GET');
    }

    logout() {
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'DELETE');
    }

    makeRating() {
        return this.http.request('https://rws-backend.herokuapp.com/api/rating', 'GET');
    }
}

