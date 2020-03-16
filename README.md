# Preparando ambiente

**Para rodar o ambiente é necessario alguns pré-requisitos:**

* NodeJS - LTS
  * https://nodejs.org/en/
* npm 6.14.2
  * https://www.npmjs.com/get-npm
* Docker
* Docker-compose

* Para instalação local, certifique-se que as portas abaixo estajem liberadas:

* 8081 - tweet-api
* 27017 - MongoDB
* 9200, 92300 - ElasticSearch
* 9000, 1514, 12201 - GrayLog

# Iniciando o ambiente 

**Clonando repositorio**

```bash
git clone https://github.com/willsaavedra/tweet-project.git
```

**Iniciando serviços via docker-compose**

```bash
# Diretorio Git
cd ./tweet-project

# docker compose up mongoDB, Elastic and GrayLog
docker-compose up -d mongo elasticsearch graylog
```

Antes de iniciarmos a aplicação, devemos iniciar a stack de logs e para isso devemos seguir alguns pequenos passos. Depois que o o mongo e o GrayLog são iniciados, devemos pegar duas informações para que o FileBeat consiga capturar os logs e enviar ao node do Elastic, token de acesso e id do node.

* Para pegar o token acesse: ```http://localhost:9000/system/authentication/users``` e acesse ```More Actions -> Edit Tokens```, crie um novo token para ser utilizado e exporta a env ```GS_SERVER_API_TOKEN``` para que o docker-compose possa encontrar, conforme abaixo:

```
export GS_SERVER_API_TOKEN=<TOKEN>
```
* Para pegar o ID do node acesse ```http://localhost:9000/system/nodes```, ele compõe o nome do node. exporta o id na env ```GS_NODE_ID```, conforme abaixo:


```
export GS_NODE_ID=<ID_NODE>
```

Com essas informações na mão e configuradas, agora podemos iniciar o FileBeat para capturar os logs da aplicação automaticamente.

```bash
# iniciando FileBeat
docker-compose up -d gssidecar
```


# Como utilizar API

Para acessar a API basta acessar a URL local para as rotas abaixo:

**Listar tweets por #:**

Local:

```bash
curl -X GET \
  http://localhost:8081/api/tweets/:<HashTag> 
```

**Salvar um array de #**

Local:

```bash
curl -X POST \
  http://localhost:8081/api/tweets \
  -d '[
	"openbanking",
	"apifirst", 
	"devops",
	"cloudfirst", 
	"microservices",
	"apigateway",
	"oauth", 
	"swagger", 
	"raml", 
	"openapis"
]'
```

**Consultando reports #**

Quantidade de tweets por dia e hora:

```bash
curl -X GET \
  http://localhost:8081/api/tweets/report/day
```

Top 5 users com mais seguidores:
```bash
curl -X GET \
  http://localhost:8081/api/tweets/report/topusers
```
Tweets agrupados por #, lingua e região:
```bash
curl -X GET \
  http://localhost:8081/api/tweets/report/region
```