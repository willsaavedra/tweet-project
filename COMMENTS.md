# Case Tweet API REST and Monitoring

Stack utilizada para construção da API 

* NodeJS - Code
* Mongodb - Database
* Infraestrutura
  * Docker
* Monitoramento
  * New Relic
  * Elastic
  * GrayLog

## Evolução do desafio

**Hora de iniciar e definir o que será utilizado no desafio**

  * JavaScript

  Será utilizado a linguagem JavaScript como base para desenvolvimento e o nodeJS como gerenciador. A adoção desta linguagem se dá pelo fácil uso e acesso a documentação, no fator técnico durante pesquisas, tentei abordar duas linhas, implementação ágil e afinidade para projetos web, e que também conta com uma vasta biblioteca de módulos voltado para integração. 

  * MongoDB

  Definido a linguagem, pensei em como iria armazenar esses posts. Já com todo cenário em mente, vi que iria lidar com dados não estruturados. Durante a minha experiência com banco, armazenar tabelas com campos grandes em bancos relacionais sempre deram dor de cabeça na hora da manutenção e performance. Levando em consideração estes pontos, eu resolvi utilizar o MongoDB devido a sua fácil adoção e documentação.

  * NewRelic 

  Para o monitoramento tentei seguir uma linha simples e fácil de ser implementada, o NewRelic foi uma solução de fácil acesso e um nível de setup fácil e trás boas informações da aplicação em diversas camadas.

  * Elastic e GrayLog

  Seguindo o mesmo raciocínio de implementar soluções se fácil acesso e de simples implementação, o GrayLog com Elastic se encaixou bem neste quesito. Com diversas documentações na internet e um setup fácil com docker, faz com que eu escolhesse para utilizar neste projeto.

## Definindo estrategia de implementação

  * Docker e Docker-compose

  Todos os serviços irão rodar local via docker, para isso escolhi uma implementação utilizando o docker-compose para reunir todas as configurações necessárias garantindo que o launch das aplicações fossem o mais transparente possível e com o máximo de automação.

**Segue um breve descritivo do processo:**

  * Docker-compose
    * Serices
      * tweet-api
      * mongo
      * Elastic
      * graylog
      * sidecar - FileBeat

## Repositório, Class e Functions

Para ajudar na construção da API foi desenvolvida uma classe para auxiliar nas rotas. Contendo as funções de consultas para o banco 

**Diretório da classe**

```./srv/repository/tweets.js```

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
├─┬ var/
│ └── log/
├── app.js
└── doc-directory-tree.js
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Considerações finais

Para o desenvolvimento deste desafio tentei reunir o máximo de informações sobre melhores práticas para API REST. Algumas ideias não foram possíveis de ser entregue devido ao tempo.

Dentre elas são:

* Integrar os Routes da API com o Controller
* Criar testes unitários
* Documentação mais detalhada

Gostaria de agradecer a oportunidade de atuar neste desafio, mais um aprendizado em pensar sobre como desenvolver, contribuindo com estudo e aprendizado da minha carreira.