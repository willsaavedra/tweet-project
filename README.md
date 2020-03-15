# Preparando ambiente

**Para rodar o ambiente é necessario alguns pré-requisitos:**

* NodeJS - LTS
  * https://nodejs.org/en/
* npm 6.14.2
  * https://www.npmjs.com/get-npm

* Para instalação local, certifique-se que as portas abaixo estajem liberadas:

* 27017 - MongoDB
* 9200, 92300 - ElasticSearch
* 9000, 1514, 12201 - GrayLog

# Iniciando o ambiente 

**Clonando repositorio**

```bash
git clone https://gitlab.cloud4erp.digital/SelecaoGlobocom/Willian-Costa.git
```

**Iniciando serviços via docker-compose**

```bash
# Diretorio Git
cd ./Willian-Costa

# docker compose up mongoDB, Elastic and GrayLog
docker-compose up -d mongo elasticsearch graylog
```

Antes de iniciarmos a aplicação, devemos iniciar a stack de logs e para isso devemos seguir alguns pequenos passos. Depois que o o mongo e o GrayLog são iniciados, devemos pegar duas informações para que o FileBeat consiga capturar os logs e enviar ao node do Elastic, token de acesso e id do node.

* Para pegar o token acesse: ```http://localhost:9000/system/authentication/users``` e acesse ```More Actions -> Edit Tokens```
* Para pegar o ID do node acesse ```http://localhost:9000/system/nodes```, ele é compõe o nome do node.

Com essas informações na mão, agora podemos configurar o FileBeat para capturar os logs da applicação automaticamente.


# Como utilizar API

Para acessar a API basta acessar a URL local para as rotas abaixo:

## Get list all page

Listar tweets por #Tags 

Local:

```bash
curl -X GET \
  http://localhost:8080/api/tweets/:<HashTag> 
```

##Post new page##

Para adicinar uma nova página:

Local:

```bash
curl -X POST \
  http://localhost:8080/api/pages \
  -d '{
	"PageId": Number,
	"Title": String
}'
```

Cloud:
```bash
curl -X POST \
  http://apiglobocom-env.us-east-1.elasticbeanstalk.com/api/pages \
  -d '{
	"PageId": Number,
	"Title": String
}'
```

##Get list comment by page id##

Para listar os comentários, basta clicar na URL de cada página, automaticamente será direcionado para API de comentários da página/matéria, ou se preferir, pode chamar diretamente passando o id da página.

Local:

```bash
curl -X GET \
  http://localhost:8080/api/pages/:id/comments 
```

Cloud:
```bash
curl -X GET \
  http://apiglobocom-env.us-east-1.elasticbeanstalk.com/api/pages/:id/comments
```

##Post new comment by page id##

Para efetuar um POST na página/matéria, basta segir os comandos abaixo enviando os siguintes parametros no header.

Local:

```bash
curl -X POST \
  http://localhost:8080/api/pages/:id/comment \
  -d '{
 "PageId": Number, 
 "UserMail": String, 
 "CommentUser": String
}'
```

Cloud:
```bash
curl -X POST \
  http://apiglobocom-env.us-east-1.elasticbeanstalk.com/api/pages/:id/comment \
    -d '{
 "PageId": Number, 
 "UserMail": String, 
 "CommentUser": String
}'
```



