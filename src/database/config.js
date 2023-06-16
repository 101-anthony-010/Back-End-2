const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Sherlock0*.",
    database: "Academlo-Bank",
    logging: false,
})

module.exports = { db };