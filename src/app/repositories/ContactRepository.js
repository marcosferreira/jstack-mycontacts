const { v4: uuidv4 } = require('uuid');

const db = require('../../database');

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

  async create(contact) {
    const {
      name, email, phone, categoryId,
    } = contact;

    const [row] = await db.query(`
        INSERT INTO contacts(name, email, phone, category_id)
        VALUES($1, $2, $3, $4)
        RETURNING *
      `, [name, email, phone, categoryId]);

    return row;
  }

  update(id, contact) {
    const {
      name, email, phone, categoryId,
    } = contact;

    return new Promise((resolve) => {
      const updatedContact = {
        id, name, email, phone, categoryId,
      };

      contacts = contacts.map((contactItem) => (
        contactItem.id === id ? updatedContact : contactItem
      ));

      resolve(updatedContact);
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
