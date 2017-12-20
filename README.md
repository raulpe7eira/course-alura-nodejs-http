# course-alura-nodejs-http
Projeto desenvolvido no curso da Alura: [Node.js e HTTP: desenvolvendo uma API seguindo o estilo REST](https://cursos.alura.com.br/course/nodejs-avancado)

## Aulas
O progresso das aulas foi separado por branches.
- [Aula 01: Instalação do Node e configuração do Express](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-01)
- [Aula 02: Funcionalidades básicas da API de Pagamentos](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-02)
- [Aula 03: Integrações entre serviços](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-03(simulador))
- [Aula 04: Streaming de dados](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-04)
- [Aula 05: Trabalhando com Cache](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-05)
- [Aula 06: Utilizando logs na aplicação](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-06)
- [Aula 07: Escalabilidade](https://github.com/raulpe7eira/course-alura-nodejs-http/tree/Aula-07)

## Deploy Local
Necessário ter um banco MySQL configurado e rodando para o código ser executado [(alterar configurações de acesso neste arquivo)](../master/persistencia/connectionFactory.js). Na base de desenvolvimento (course_alura_nodejs_http_dsv) é necessário ter a tabela a seguir criada:

```sql
CREATE TABLE pagamentos (
  id int(11) NOT NULL AUTO_INCREMENT,
  forma_de_pagamento varchar(255) NOT NULL,
  valor decimal(10,2) NOT NULL,
  moeda varchar(3) NOT NULL,
  status varchar(255) NOT NULL,
  data DATE,
  descricao text,
  PRIMARY KEY (id)
);
```

Para instalar e executar o código, é necessário ter o NodeJs instalado e executar o código a seguir, após iniciar com sucesso basta entrar em um navegador e acessar o endereço http://localhost:3000:

```bash
$ npm install
$ node index.js
```

Caso queira subir o cluster, é necessário executar o código a seguir:

```bash
$ npm install
$ node cluster.js
```
