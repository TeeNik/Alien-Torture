describe('Тесты на регистрацию', function () {

    const http = new HTTP();


    it('Метод post /api/signup возвращает статус 400(пользователь уже существует)', function (done) {

        http.post('https://rws-backend.herokuapp.com/api/signup', {
            "login": "test",
            "email": "test",
            "password": "test"
        }, function (xhr) {
            const status = xhr.status;

            expect(status).toBe(400);

            done(true);
        });

    }, 5000);

    it('Метод post /api/signup возвращает JSON объект(ошибка)', function (done) {

        http.post('https://rws-backend.herokuapp.com/api/signup', {
            "login": "test",
            "email": "test",
            "password": "test"
        }, function (xhr) {
            const responseText = xhr.responseText;

            const parsed = JSON.parse(responseText);

            expect(parsed instanceof Object).toBe(true);

            done(true);
        });

    }, 5000);
});
