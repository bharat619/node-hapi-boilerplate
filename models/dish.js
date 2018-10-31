'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
    expression: DataTypes.STRING
  }, {});
  Dish.associate = function(models) {
    // associations can be defined here
  };
  return Dish;
};