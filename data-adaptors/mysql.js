const mysql = require('mysql');
const Knex = require('knex');

const credentials = {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'local-workspace',
    port: process.env.DB_PORT || '8889',
    charset: 'utf8mb4',
};

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
    if (err) {
        console.warn(`Can't Connect to DB at: ${credentials.host}`);
        console.error(err);
        process.exit(1);
        return;
    }
    console.info(`Connected to DB at: ${credentials.host}`);
});

// eslint-disable-next-line new-cap
const knex = Knex({
    client: 'mysql',
    connection: credentials,
    pool: {
        min: 1,
        max: 2,
    },
    acquireConnectionTimeout: 20000,
});

module.exports = knex;
