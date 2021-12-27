const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // listar registros
    const contacts = await ContactRepository.findAll();
    return response.json(contacts);
  }

  async show(request, response) {
    // obter um registro
    const contact = await ContactRepository.findById(request.params.id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact Not found' });
    }

    return response.json(contact);
  }

  store(request, response) {
    // criar um registro
    response.send('Send from contact controller');
  }

  update(request, response) {
    // atualizar um registro
    response.send('Send from contact controller');
  }

  async delete(request, response) {
    // apagar um registro
    const contact = await ContactRepository.findById(request.params.id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactRepository.findByIdAndDelete(request.params.id);

    return response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
