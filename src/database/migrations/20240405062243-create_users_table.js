import { Sequelize } from 'sequelize';
import config from '../../config';

const { dbSchema } = config;

export const schemaAttributes = {
  id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
};

export default {
  up: queryInterface => queryInterface.createTable('users', schemaAttributes, { schema: dbSchema }),
  down: queryInterface => queryInterface.dropTable({tableName: 'users', schema: dbSchema }),
};
