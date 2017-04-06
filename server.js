"use strict"

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use('/', express.static('front'));
app.use('/about', express.static('front'));
app.get('/about', function(req, res) {
    res.send("/about");
    express.static('front');

});

// Запускаем сервер
app.listen(PORT, function () {
	console.log(`Server listen ${PORT} port`);
});
