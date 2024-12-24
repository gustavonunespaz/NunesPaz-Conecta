'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empreendedores', [
      {
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        senha: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        senha: 'senha456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empreendedores', null, {});
  },
};
