'user strict'

var express = require('express');
var userController = require('../controllers/user.controller');
var mdAuth = require('../middlewares/authenticated');

var connectMultiparty = require('connect-multiparty');
var mdUpload = connectMultiparty({ uploadDir: './uploads/users'});

var api = express.Router();

api.get('/prueba', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], userController.prueba); //NA
api.post('/saveUser', userController.saveUser);  //YA
api.post('/saveUserOnlyAdmin/:id', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], userController.saveUserByAdmin); //YA
api.post('/login', userController.login); //YA

//Validaciones de logeo
api.put('/updateUser/:id', mdAuth.ensureAuth, userController.updateUser); //YA
api.put('/removeUser/:id', mdAuth.ensureAuth, userController.removeUser); //YA

//validación de logeo y administrador
api.get('/getUsers', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], userController.getUsers); //YA
api.post('/search', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], userController.search); //NA

api.put('/:id/uploadImage', [mdAuth.ensureAuth, mdUpload], userController.uploadImage);  //YA
api.get('/getImage/:fileName', [ mdUpload], userController.getImage);	//YA

module.exports = api;