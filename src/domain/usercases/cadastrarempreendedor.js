class CadastrarEmpreendedor {
    constructor(empreendedorRepository) {
        this.empreendedorRepository = empreendedorRepository;
    }

    async execute(dados) {
        const { nome, email, telefone } = dados;

        // Validação básica
        if (!nome || !email || !telefone) {
            throw new Error('Nome, email e telefone são obrigatórios.');
        }

        // Criação da entidade
        const novoEmpreendedor = {
            nome,
            email,
            telefone,
            equipe: []
        };

        // Salvando no repositório
        return await this.empreendedorRepository.salvar(novoEmpreendedor);
    }
}

module.exports = CadastrarEmpreendedor;
