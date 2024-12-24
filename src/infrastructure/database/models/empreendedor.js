'use strict';

module.exports = (sequelize, DataTypes) => {
  const Empreendedor = sequelize.define(
    'Empreendedor',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      tableName: 'Empreendedores', // Nome da tabela explícito
    }
  );

  Empreendedor.associate = function (models) {
    // Associações aqui, se necessário
  };

  return Empreendedor;
};
