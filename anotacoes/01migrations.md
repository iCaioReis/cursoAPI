trabalhar nas Migrations => Pasta onde ficam os arquivos que criam estruturas no banco de dados (Tabelas, colunas...)

//Criando a primeira Migration da tabela Pessoa
npx sequelize-cli model:generate --name pessoa --attributes nome:string,sobrenome:string,cpf:string,email:string

//Rodar Migrations
npx sequelize-cli db:migrate

//Criar uma nova migration para adcionar uma coluna à tabela pessoas
npx sequelize-cli migration:generate --name addRgColumn

//Voltar última Migration
npx sequelize-cli db:migrate:undo