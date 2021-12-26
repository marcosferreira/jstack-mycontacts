const { v4: uuidv4 } = require('uuid');

let contacts = [
  {
    id: uuidv4(),
    name: 'Marcos',
    email: 'marcosferreira@github.com',
    phone: '84987684392',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Jose',
    email: 'jose@github.com',
    phone: '84987684983 ',
    category_id: uuidv4(),
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

  findByIdAndDelete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
