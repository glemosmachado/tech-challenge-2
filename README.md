# TechChallenge - Projeto 2  
**Autor:** Gabriel Machado - RM362607  

Este projeto é uma API RESTful construída com Node.js, Express e MongoDB, containerizada com Docker. 
Ele simula um sistema básico de gerenciamento de postagens com operações CRUD e controle de acesso para professores e estudantes.

## Tecnologias Utilizadas

- Node.js (Back-End)
- Express.js (Middleware)
- MongoDB (Banco de Dados)
- MongoDB Atlas (Hospedagem do Banco de Dados)
- MongoDB Compass (Banco de Dados GUI)
- Docker (Containers)
- Mongoose (ODM)
- Jest & Supertest (Testes Unitários)
- GitHub Actions (CI/CD)
- Render (Hospedagem em Nuvem)
- Postman (Testes de API).


## Funcionalidades

- Operações de Create, Read, Update e Delete (CRUD) para postagens
- Controle de acesso baseado no cabeçalho `x-user-type` (`student` e `teacher`)
- Alternância de banco de dados por ambiente (produção vs. teste)
- Testes unitários cobrindo pelo menos 20% da base de código
- Integração e Deploy contínuos com GitHub Actions e Render

## Executando os Testes

Para rodar os testes unitários com Jest e Supertest:

```bash
npm test
```

Os testes estão configurados para utilizar um banco de dados separado (`MONGODB_URI_TEST`).

## Endpoints da API

| Método | Rota           | Descrição             | Acesso     |
|--------|----------------|-----------------------|------------|
| GET    | /posts         | Listar todas postagens| Todos      |
| POST   | /posts         | Criar nova postagem   | Professor  |
| PUT    | /posts/:id     | Atualizar postagem    | Professor  |
| DELETE | /posts/:id     | Remover postagem      | Professor  |
| GET    | /              | Healthcheck da API    | Público    |

## CI/CD

Este projeto utiliza GitHub Actions para integração contínua (CI) e Render para deploy contínuo (CD).

Todo push na branch `main` executa:
- Testes automatizados
- Deploy automático para o Render

## URL em Produção

Aplicação disponível em:  
**[https://tech-challenge-2-d1kb.onrender.com](https://tech-challenge-2-d1kb.onrender.com)**
