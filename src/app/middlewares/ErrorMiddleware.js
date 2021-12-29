class ErrorMiddleware {
  errorHandler(error, request, response, next) {
    console.log(error);
    return response.sendStatus(500);
  }
}

module.exports = new ErrorMiddleware();
