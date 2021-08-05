'use strict'

var express = require('express');
var contactController = require('../controllers/contact.controller');

var api = express.Router();
var mdAuth = require('../middlewares/authenticated');

api.put('/:id/setContact', mdAuth.ensureAuth, contactController.setContact); //YA
api.put('/:idU/updateContact/:idC', mdAuth.ensureAuth, contactController.updateContact); //YA
api.put('/:idU/removeContact/:idC', mdAuth.ensureAuth, contactController.removeContact); //YA
//api.delete('/delete', contactController.exampleDelete);

module.exports = api;