# Case Tweet API REST and Monitoring

Stack utilizada para construção da API 

* NodeJS - Code
* Mongodb - Database
* Infraestrutura
  * Docker
* Monitoramento
  * New Relic
  * GrayLog

## Evolução do desafio

**Hora de iniciar e definir o que será utilizado no desafio**

  * JavaScript

  Será utilizado a linguagem JavaScript como base para desenvolvimento e o nodeJS como gerenciador. A adoção desta linguagem se dá pelo fácil uso e acesso a documentação, no fator técnico durante pesquisas, tentei abordar duas linhas, implementação ágil e afinidade para projetos web, e que também conta com uma vasta biblioteca de módulos voltado para integração. 

  * MongoDB

  Definido a linguagem, pensei em como iria armazenar esses posts. Já com todo cenário em mente, vi que iria lidar com dados não estruturados. Durante a minha experiência com banco, armazenar tabelas com campos grandes em bancos relacionais sempre deram dor de cabeça na hora da manutenção e performance. Levando em consideração estes pontos, eu resolvi utilizar o MongoDB devido a sua fácil adoção e documentação.

  * Nascendo o primeiro commit

  Utilizando o frame express do nodeJS e o MongoDB para registrar os comentários do desafio. Iniciamos o projeto de forma rápida e simples, ganhando forma de após dia.

## Definindo estrategia de implementação

  * Docker-compose

  A escolha pelo GitLab foi dada pelo fato de possuir um CI bem robusto disponível, ganhando tempo na construção do desafio e utilizando imagens docker para facilitar na construção e agilizar os processos. Como CD irei utilizar o GitLab também, por um simples motivo. Não complicar o desafio e acabar tomando mais tempo e na hora da avaliação será mais fácil, mas utilizaria outras ferramentas com mais tempo. 

**Segue uma breve descritivo do processo:**

    * Docker Compose

## Repositório, Class e Functions

Para ajudar na construção da API foi desenvolvida uma classe para auxiliar nas rotas.

**Diretório da classe**

```./srv/repository/tweet.js```

## Diretório da Aplicação:

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./src) -->
```
src/
├─┬ constants/
│ └── auth.js
├─┬ controllers/
│ └── person-controller.js
├─┬ data/
│ └── db.js
├─┬ middlewares/
│ └── authToken.js
├─┬ repository/
│ └── tweets.js
├─┬ routes/
│ ├─┬ default/
│ │ └── index.js
│ ├─┬ tweets/
│ │ └── index.js
│ └── index.js
├── app.js
└── doc-directory-tree.js
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Considerações finais

Para o desenvolvimento deste desafio tentei reunir o máximo de informações sobre melhores práticas para API REST. Algumas ideias não foram possíveis de ser entregue devido ao tempo.

Dentre elas são:

* Integrar os Routes da API com o Controller
* Criar testes unitários

Gostaria de agradecer a oportunidade de atuar neste desafio, mais um aprendizado em pensar sobre como desenvolver, contribuindo com estudo e aprendizado da minha carreira.