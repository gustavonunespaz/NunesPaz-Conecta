'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Empreendedores', [
      {
        nome: 'Gustavo Nunes',
        email: 'gustavo@nunespaz.com',
        senha: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Maria Silva',
        email: 'maria.silva@example.com',
        senha: 'senha456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empreendedores', null, {});
  },
};
