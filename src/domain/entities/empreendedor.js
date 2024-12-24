class Empreendedor {
    constructor(id, nome, email, telefone, equipe = []) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.equipe = equipe; // Array de IDs de outros empreendedores na equipe
    }
}

module.exports = Empreendedor;
