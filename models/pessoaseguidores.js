'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PessoaSeguidores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  PessoaSeguidores.init({
    pessoaId: DataTypes.INTEGER,
    seguePessoaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PessoaSeguidores',
  });
  return PessoaSeguidores;
};