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

  async store(request, response) {
    // criar um registro
    const {
      name, email, phone, categoryId,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'required \'name\' field' });
    }

    const contactExist = await ContactRepository.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, categoryId,
    });

    return response.json(contact);
  }

  update(request, response) {
    // atualizar um registro
    response.send('Send from contact controller');
  }

  async delete(request, response) {
    // apagar um registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactRepository.delete(id);

    return response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
