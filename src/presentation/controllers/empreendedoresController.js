const { Empreendedor } = require('../../infrastructure/database/models');

module.exports = {
  // Listar empreendedores (já implementado)
  async listarEmpreendedores(req, res) {
    try {
      const empreendedores = await Empreendedor.findAll();
      res.status(200).json(empreendedores);
    } catch (error) {
      console.error('Erro ao buscar empreendedores:', error);
      res.status(500).json({ error: 'Erro ao buscar empreendedores' });
    }
  },

  // Criar um novo empreendedor
  async criarEmpreendedor(req, res) {
    try {
      const { nome, email, senha } = req.body;
      if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios.' });
      }

      // Verifica se o e-mail já existe
      const emailExistente = await Empreendedor.findOne({ where: { email } });
      if (emailExistente) {
        return res.status(400).json({ error: 'E-mail já está cadastrado.' });
      }

      const novoEmpreendedor = await Empreendedor.create({ nome, email, senha });
      res.status(201).json(novoEmpreendedor);
    } catch (error) {
      console.error('Erro ao criar empreendedor:', error);
      res.status(500).json({ error: 'Erro ao criar empreendedor' });
    }
  },

  // Atualizar um empreendedor existente
  async atualizarEmpreendedor(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;

      const empreendedor = await Empreendedor.findByPk(id);
      if (!empreendedor) {
        return res.status(404).json({ error: 'Empreendedor não encontrado.' });
      }

      // Verifica se o e-mail já existe em outro registro
      if (email && email !== empreendedor.email) {
        const emailExistente = await Empreendedor.findOne({ where: { email } });
        if (emailExistente) {
          return res.status(400).json({ error: 'E-mail já está cadastrado.' });
        }
      }

      await empreendedor.update({ nome, email, senha });
      res.status(200).json(empreendedor);
    } catch (error) {
      console.error('Erro ao atualizar empreendedor:', error);
      res.status(500).json({ error: 'Erro ao atualizar empreendedor' });
    }
  },

  // Deletar um empreendedor
  async deletarEmpreendedor(req, res) {
    try {
      const { id } = req.params;

      const empreendedor = await Empreendedor.findByPk(id);
      if (!empreendedor) {
        return res.status(404).json({ error: 'Empreendedor não encontrado.' });
      }

      await empreendedor.destroy();
      res.status(200).json({ message: 'Empreendedor removido com sucesso.' });
    } catch (error) {
      console.error('Erro ao deletar empreendedor:', error);
      res.status(500).json({ error: 'Erro ao deletar empreendedor' });
    }
  },
};
