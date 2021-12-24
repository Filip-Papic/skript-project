'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Products, {through: { model: models.OrderProducts, unique: false}, 
                                                    foreignKey: 'orderID', as: 'orderedProducts'})
      this.belongsTo(models.Users, {foreignKey: 'userID', as: 'user'})
    }
  };
  Orders.init({ 
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantityTotal:{
      type: DataTypes.INTEGER
    },
   /* priceTotal: {
      type: DataTypes.FLOAT
    },
    details:{
      type: DataTypes.STRING
    },
    date:{
      type: DataTypes.DATE
    }*/
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};