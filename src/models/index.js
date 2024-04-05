import fs from 'fs';
import { Sequelize } from 'sequelize';
import config from '../config';
import path, { basename } from 'path';

const { dbName, dbUser, dbPassword, dbHost, dbDialect, dbPort, dbSchema } = config;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect,
  define: {
    schema: dbSchema
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database Connection Successfull`);
  })
  .catch((err) => {
    console.error(err);
  });

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const modelDefinitionFunction = require(path.join(__dirname, file)).default;
    if(typeof modelDefinitionFunction === 'function') {
      const model = modelDefinitionFunction(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }else {
      console.error(`Model Function in ${file} is not a function`);
    }
  });

  Object.keys(db).forEach(modelName => {
    if(db[modelName]?.associate) {
      db[modelName].associate(db);
    }
    if(db[modelName]?.scope) {
      db[modelName].scope(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
  