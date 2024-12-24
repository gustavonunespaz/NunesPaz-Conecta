
# NunesPaz Conecta

## Visão Geral

NunesPaz Conecta é uma intranet desenvolvida para apoiar o modelo de vendas diretas da Nunes|Paz Casa e Decoração. O sistema é projetado com base na  **Arquitetura Limpa** , garantindo uma estrutura modular, sustentável e escalável. O objetivo principal é fornecer uma plataforma robusta para gestão de vendas, suporte a empreendedores e controle de inadimplência.

---

## Estrutura do Projeto

O projeto segue a divisão em camadas da  **Arquitetura Limpa** , conforme descrito abaixo:

### 1. **Domain** (Domínio)

* **Descrição:**
  Contém as entidades centrais e os casos de uso do sistema. Essa camada é independente de qualquer framework ou tecnologia.
* **Pastas:**
  * `entities/`: Classes e modelos principais do domínio.
  * `usecases/`: Lógica de negócio e casos de uso que orquestram operações do sistema.

### 2. **Application** (Aplicação)

* **Descrição:**
  Responsável por adaptar e transformar os dados entre a interface do usuário e o domínio.
* **Pastas:**
  * `controllers/`: Controladores para lidar com requisições HTTP e direcionar para os casos de uso.
  * `dtos/`: Objetos de Transferência de Dados (Data Transfer Objects) para formatar entradas e saídas.
  * `services/`: Serviços intermediários que implementam lógica específica de aplicação.

### 3. **Infrastructure** (Infraestrutura)

* **Descrição:**
  Gerencia as implementações específicas de infraestrutura e frameworks.
* **Pastas:**
  * `database/`: Configurações, modelos e migrações do banco de dados (usando Sequelize).
    * `config/`: Configurações do banco de dados.
    * `models/`: Modelos ORM para o banco de dados.
    * `migrations/`: Arquivos de migração para criar e modificar tabelas.
    * `seeders/`: Dados iniciais para o banco.

### 4. **Presentation** (Apresentação)

* **Descrição:**
  Interface pública do sistema para interações via API.
* **Arquivos:**
  * `routes.js`: Define as rotas disponíveis na aplicação.

---

## Configuração do Ambiente

### Requisitos

* **Node.js** (versão 14 ou superior)
* **npm** ou **yarn**
* **Banco de dados** : PostgreSQL (configurado no Sequelize)

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/gustavonunespaz/nunespaz-conecta.git
   cd nunespaz-conecta
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` com as variáveis necessárias:
   ```env
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=nunespaz_conecta
   ```
4. Configure o banco de dados:
   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```
6. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## Funcionalidades Planejadas

1. **Dashboard**
   * Exibição de vendas, metas e comissões.
2. **Cadastro de Empreendedores**
   * Registro de novos vendedores e suas equipes.
3. **Suporte e Treinamento**
   * Material de apoio para os vendedores.
4. **Controle de Inadimplência**
   * Acompanhamento de pagamentos e controle financeiro.

---

## Boas Práticas no Desenvolvimento

* **Arquitetura Limpa:** Seguir o padrão de separação entre camadas.
* **Controle de Versionamento:** Utilizar Git para gerenciar o histórico do código.
* **Testes Automatizados:** Adicionar testes unitários e de integração nas próximas etapas do projeto.
* **Manutenção do `.env`:** Certifique-se de que o `.env` não está rastreado pelo Git (configurado no `.gitignore`).

---

## Contribuições

Contribuições são bem-vindas! Caso tenha sugestões ou encontre problemas, abra uma issue no repositório GitHub ou envie um pull request.

---

## Contato

Para mais informações, entre em contato com:

* Gustavo Paz
* Email: [gust.nunes.paz@gmail.com](gust.nunes.paz@gmail.com)
