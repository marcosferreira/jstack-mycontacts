class ContactController {
  index(request, response) {
    // listar registros
    response.send('Send from contact controller');
  }

  show(request, response) {
    // obter um registro
    response.send('Send from contact controller');
  }

  store(request, response) {
    // criar um registro
    response.send('Send from contact controller');
  }

  update(request, response) {
    // atualizar um registro
    response.send('Send from contact controller');
  }

  delete(request, response) {
    // apagar um registro
    response.send('Send from contact controller');
  }
}

// Singleton
module.exports = new ContactController();
