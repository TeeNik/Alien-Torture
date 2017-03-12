describe('Тесты на получение & изменение данных пользователя', function () {

    const http = new HTTP();

    it('Метод get /api/user/test возвращает статус 200', function (done) {

        http.get('https://rws-backend.herokuapp.com/api/user/test', function (xhr) {
            const status = xhr.status;

            expect(status).toBe(200);

            done(true);
        });

    }, 5000);

    it('Метод get /api/user/test возвращает JSON объект', function (done) {

        http.get('https://rws-backend.herokuapp.com/api/user/test', function (xhr) {
            const responseText = xhr.responseText;

            const parsed = JSON.parse(responseText);

            expect(parsed instanceof Object).toBe(true);

            done(true);
        });

    }, 5000);

    it('Метод get /api/user/test возвращает статус 404', function (done) {

        http.get('https://rws-backend.herokuapp.com/api/user/test1', function (xhr) {
            const status = xhr.status;

            expect(status).toBe(404);

            done(true);
        });

    }, 5000);

    it('Метод get /api/user/test возвращает JSON объект(ошибка)', function (done) {

        http.get('https://rws-backend.herokuapp.com/api/user/test1', function (xhr) {
            const responseText = xhr.responseText;

            const parsed = JSON.parse(responseText);

            expect(parsed instanceof Object).toBe(true);

            done(true);
        });

    }, 5000);
});

