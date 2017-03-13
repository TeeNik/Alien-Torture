describe('Тесты на авторизацию', function () {

    const http = new HTTP();


    it('Метод post /api/session возвращает статус 200', function (done) {

        http.post('https://rws-backend.herokuapp.com/api/session', {"login": "test", "password": "test"}, function (xhr) {
            const status = xhr.status;

            expect(status).toBe(200);

            done(true);
        });

    }, 5000);

    it('Метод post /api/session возвращает JSON объект', function (done) {

        http.post('https://rws-backend.herokuapp.com/api/session', {"login": "test", "password": "test"}, function (xhr) {
            const responseText = xhr.responseText;

            const parsed = JSON.parse(responseText);

            expect(parsed instanceof Object).toBe(true);

            done(true);
        });

    }, 5000);

    it('Метод post /api/session возвращает статус 400', function (done) {

        http.post('https://rws-backend.herokuapp.com/api/session', {"login": "test", "password": "test1"}, function (xhr) {
            const status = xhr.status;

            expect(status).toBe(400);

            done(true);
        });

    }, 5000);

    it('Метод post /api/session возвращает JSON объект(ошибка)', function (done) {

        http.post('https://rws-backend.herokuapp.com/api/session', {"login": "test", "password": "test1"}, function (xhr) {
            const responseText = xhr.responseText;

            const parsed = JSON.parse(responseText);

            expect(parsed instanceof Object).toBe(true);

            done(true);
        });

    }, 5000);


});

