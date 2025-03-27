const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:12345@localhost:3306/bibliotecasena');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Rol = require('./rol')(sequelize, DataTypes);
db.Usuario = require('./usuario')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
