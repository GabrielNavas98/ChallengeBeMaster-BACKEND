require('dotenv').config();

const {Sequelize} = require('sequelize');

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

const db = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
    define: {
    timestamps: false
  }
});

module.exports = db
