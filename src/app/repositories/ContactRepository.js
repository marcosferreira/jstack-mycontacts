const { v4: uuidv4 } = require('uuid');

const db = require('../../database');

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
  async findAll(orderBy = 'ASC') {
    const order = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${order}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create(contact) {
    const {
      name, email, phone, category_id,
    } = contact;

    const [row] = await db.query(`
        INSERT INTO contacts(name, email, phone, category_id)
        VALUES($1, $2, $3, $4)
        RETURNING *
      `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, contact) {
    const {
      // eslint-disable-next-line no-unused-vars
      name, email, phone, category_id,
    } = contact;

    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactRepository();
