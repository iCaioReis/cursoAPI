'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PessoaSeguidores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pessoaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'pessoa',
          key: 'id'
        }
      },
      seguePessoaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'pessoa',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PessoaSeguidores');
  }
};