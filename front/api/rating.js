describe('Тесты на получение рейтинга', function () {

    const http = new HTTP();


    it('Метод get /api/rating возвращает статус 200', function (done) {

        http.get('https://rws-backend.herokuapp.com/api/rating', function (xhr) {
            const status = xhr.status;

            expect(status).toBe(200);

            done(true);
        });

    }, 5000);

    it('Метод get /api/rating возвращает JSON объект', function (done) {

        http.get('https://rws-backend.herokuapp.com/api/rating', function (xhr) {
            const responseText = xhr.responseText;

            const parsed = JSON.parse(responseText);

            expect(parsed instanceof Object).toBe(true);

            done(true);
        });

    }, 5000);


});

