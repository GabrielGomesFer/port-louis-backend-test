# Port Louis – Teste Técnico Back-End

API REST para gerenciamento de contatos, desenvolvida em Node.js com TypeScript, utilizando Express e MySQL.

O sistema permite criar, listar, atualizar e excluir contatos, aplicando validações conforme solicitado no teste técnico.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MySQL
- mysql2
- dotenv
- ts-node-dev

---

## Estrutura do Projeto
```
port-louis-be/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── migrate.ts
│   ├── controllers/
│   │   └── contato.controller.ts
│   ├── routes/
│   │   └── contato.routes.ts
│   ├── services/
│   │   └── contato.service.ts
│   ├── validations/
│   │   └── contato.validation.ts
│   ├── app.ts
│   └── server.ts
├── migrations/
│   └── 001_create_contatos_table.sql
├── .env
├── package.json
├── tsconfig.json
└── README.md
```
---

## Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- MySQL instalado e em execução

---

### Clonar o projeto

```bash
git clone https://github.com/GabrielGomesFer/port-louis-backend-test.git
cd port-louis-be
```

### Instalar dependências
```
npm install
```

### Configuração do MySQL

A aplicação cria automaticamente o banco de dados e as tabelas necessárias na inicialização.

É necessário apenas utilizar um usuário do MySQL que possua permissão para criação de banco e tabelas.

Copie esse arquivo e renomeie para `.env`:

No arquivo `.env`, informe as credenciais do seu MySQL local:

Em seguida, ajuste as variáveis de acordo com o seu ambiente MySQL local:

```env
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=contatos_db
```
Caso prefira, você pode criar um usuário específico para o projeto com as permissões adequadas. Exemplo:
```

CREATE USER 'contatos_user'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON *.* TO 'contatos_user'@'localhost';
FLUSH PRIVILEGES;
```
### Executar a aplicação
```
npm run dev
```
