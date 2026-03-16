'use strict';
const { Model } = require('sequelize');
const { STATUS } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    static associate (models) {
      Preorder.belongsTo(models.Phone, {
        foreignKey: {
          name: 'phoneId',
        },
      });
    }
  }
  Preorder.init(
    {
      orderDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isAfter: new Date(
            new Date().setDate(new Date().getDate() - 1)
          ).toISOString(),
        },
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: STATUS.pending,
        validate: {
          isIn: [Object.values(STATUS)],
        },
      },
      phoneQty: {
        type: DataTypes.REAL,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      phoneNumber: {
        type: DataTypes.REAL,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Preorder',
      underscored: true,
    }
  );
  return Preorder;
};
