const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const routes = Router();

routes.get('/contacts', ContactController.index);

module.exports = routes;
