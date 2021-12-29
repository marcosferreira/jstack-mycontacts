const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar registros
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);

    return response.json(contacts);
  }

  async show(request, response) {
    // obter um registro
    const contact = await ContactsRepository.findById(request.params.id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact Not found' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // criar um registro
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'required \'name\' field' });
    }

    const contactExist = await ContactsRepository.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    // atualizar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExist = await ContactsRepository.findById(id);

    if (!contactExist) {
      return response.status(400).json({ error: 'Contact not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Required \'name\' field' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    return response.status(200).json(contact);
  }

  async delete(request, response) {
    // apagar um registro
    const { id } = request.params;

    await ContactsRepository.delete(id);

    return response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
