'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  preorder.init({
    orderDate: DataTypes.DATEONLY,
    status: DataTypes.ENUM,
    phoneQty: DataTypes.REAL,
    phoneNumber: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'preorder',
    underscored: true,
  });
  return preorder;
};