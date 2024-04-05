import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const schemaAttributes = {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false,
    set(password) {
      this.setDataValue('password', bcrypt.hashSync(password, bcrypt.genSaltSync(6)));
    } },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  }
  const User = sequelize.define('User', schemaAttributes, { tableName: 'users' });

  User.prototype.validatePassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  return User;
}
