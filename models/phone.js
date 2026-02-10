'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 15],
            msg: 'Brand should have min 3 and max 15 char',
          },
          is: /^[A-Z].+$/,
        },
      },
      model: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        len: {
          args: [1, 30],
          msg: 'Model should have min 1 and max 30 char',
        },
      },
      manufacturedYear: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        validate: { isBefore: new Date().toISOString() },
      },
      ram: {
        type: DataTypes.INTEGER,
        min: 0,
      },
      cpu: {
        type: DataTypes.INTEGER,
        min: 0,
      },
      screenSize: {
        type: DataTypes.FLOAT,
        isFloat: true,
        defaultValue: 6.5,
      },
      isNfc: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
