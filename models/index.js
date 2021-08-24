const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const constants = require("../utils/constants");

const sequelize = new Sequelize("skipped", "root", "root", {
  host: constants.DB_HOST,
  dialect: "mysql",
  operatorsAliases: false,
  logging: false,
  benchmark: true,
  pool: {
    max: 50,
  },
});
let db = {};

fs.readdirSync(__dirname)
  .filter(function (file) {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(function (file) {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
