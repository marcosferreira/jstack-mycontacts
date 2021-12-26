const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const routes = Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.delete('/contacts/:id', ContactController.delete);

module.exports = routes;
