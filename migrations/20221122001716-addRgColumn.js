'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.addColumn('pessoa', 'rg', {
        type: Sequelize.STRING,
        allowNull: true
      }, transaction);

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }

  },

  down: async queryInterface => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.removeColumn('pessoa', 'rg', (transaction));
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};