const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const ErrorMiddleware = require('./app/middlewares/ErrorMiddleware');

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware.errorHandler);

app.listen(3333, () => console.log('🔥 Server Started it http://127.0.0.1:3333'));
