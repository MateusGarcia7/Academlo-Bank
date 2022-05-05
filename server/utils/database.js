const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1006878822",
  database: "Academlo_Bank",
  logging: false,
});

module.exports = { db };
