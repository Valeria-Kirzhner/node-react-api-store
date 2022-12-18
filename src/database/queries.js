const { DB_NAME } = require("../utils/secrets");

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableUSers = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NULL,
    last_name VARCHAR(50) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    premium TININT(1) NULL
)
`;

const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, ?)
`;

const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;

module.exports = {
  createDB,
  dropDB,
  createTableUSers,
  createNewUser,
  findUserByEmail,
};
