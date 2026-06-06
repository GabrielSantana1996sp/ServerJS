# SERVERJS — Cadastro de Vírus

## !!Aviso: projeto temático e humorístico!!

Projeto temático criado para estudos de Node.js, Express e MySQL.  
A ideia é divertida: um servidor que “instala vírus” — mas na verdade cadastra nomes de vírus fictícios em um banco de dados MySQL.  
Ideal para aprender rotas, integração com banco e organização de projeto.

---

# Estrutura do SERVERJS
SERVERJS/
├── DB/
│   ├── database.sql          # script SQL para criar tabelas e dados iniciais
│   └── db.js                 # conexão com MySQL
├── routes/
│   └── virusRoutes.js        # rotas separadas do servidor
├── public/
│   └── style.css             # estilos do front
├── views/
│   └── index.ts              # página principal (pode virar .html ou .ejs)
├── .env                      # variáveis de ambiente
├── server.js                 # configuração do servidor Express
├── package.json              # metadados e scripts npm
├── package-lock.json         # controle de versões
└── README.md                 # documentação do projeto

---

## Depedencias 

    ```bash
npm init -y
npm install express escape-html
npm install mysql2 dotenv

---

Crie um arquivo `.env` com suas credenciais do banco:

DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=virusdb
PORT=3000

---

  ```bash
git clone https://github.com/seu-usuario/SERVERJS.git
cd SERVERJS
Instale as dependências:

``` bash
npm install
Configure o banco MySQL:

```sql
mysql -u root -p < DB/database.sql
Inicie o servidor:

```bash

npm start
Acesse no navegador:

Código
http://localhost:3000

##

Módulos relevantes para o projeto (NodeJS_Site)
HTTP → é a base de qualquer servidor web. O Express usa esse módulo por baixo dos panos.

Modules: CommonJS → quando você escreve const express = require('express'), está usando CommonJS.

Modules: ECMAScript → se quiser usar import express from 'express' em vez de require, entra aqui.

Path → útil para manipular caminhos de arquivos (ex: ../DB/db).

Process → acessar variáveis de ambiente (process.env.DB_USER, etc.).

Events → Express e MySQL usam eventos internamente; você pode ouvir eventos se precisar.

File system (fs) → caso queira salvar logs ou arquivos.

TypeScript → se decidir escrever teu projeto em TS em vez de JS.