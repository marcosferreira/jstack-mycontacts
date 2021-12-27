const { v4: uuidv4 } = require('uuid');

let contacts = [
  {
    id: uuidv4(),
    name: 'Marcos',
    email: 'marcosferreira@github.com',
    phone: '84987684392',
    categoryId: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Jose',
    email: 'jose@github.com',
    phone: '84987684983 ',
    categoryId: uuidv4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  create(contact) {
    const {
      name, email, phone, categoryId,
    } = contact;

    return new Promise((resolve) => {
      const newContact = {
        id: uuidv4(), name, email, phone, categoryId,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
