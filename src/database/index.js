const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, value) => {
  const { rows } = await client.query(query, value);
  return rows;
};
