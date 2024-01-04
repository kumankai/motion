require('dotenv').config();
const knex = require('knex');

const authKnex = knex({
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_AUTH_DATABASE // Uses main DB
    }
});

module.exports = authKnex;