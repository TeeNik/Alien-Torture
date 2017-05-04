"use strict";

const express = require('express');
const pug = require('pug');
const ws = require("express-ws");
const PORT = process.env.PORT || 3000;
const app = express();
ws(app);

module.exports = pug;


app.use('/', express.static('front'));
app.use('/', express.static('front/static'));
app.use('/about', express.static('front'));
app.use('/about', express.static('front/static'));
app.use('/rating', express.static('front'));
app.use('/rating', express.static('front/static'));
app.use('/login', express.static('front'));
app.use('/login', express.static('front/static'));

app.set('views', './front/components');
app.set('view engine', 'pug');

app.ws('/ws', function (ws, req) {
    debug(`Новый ws-коннекшн`);
});

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});
