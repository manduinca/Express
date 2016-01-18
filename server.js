var express = require('express');
var app = express();
var faker = require('faker');
var array = require('lodash');

var generarUsuario = function() {
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    var randomImage = faker.image.avatar();
    var randomCompany = faker.company.companyName();
    var randomCountry = faker.address.country();
    return {
        nombre: randomName,
        email: randomEmail,
        imagen: randomImage,
        compañía: randomCompany,
        país: randomCountry,
    }
}

app.get('/', function(req, res) {
    res.send('Mi servidor está corriendo');
});

app.get('/perfil', function(req, res) {
    res.send('Mi perfil!');
});

app.get('/amigos', function(req, res) {
    res.send('Mis amigos');
});

app.get('/friends', function(req, res) {
    var cantidad = array.random(5, 10);
    var usuarios = array.times(cantidad, generarUsuario);
    res.json(usuarios);
});

app.get('/datos', function(req, res) {
    var randomPast = faker.date.past();
    var randomFuture = faker.date.future();
    var randomBetween = faker.date.between();
    var datos = {
        pasado: randomPast,
        futuro: randomFuture,
        entre: randomBetween,
    }
    res.json(datos);
});

app.listen(3000);
