# Logging Tweet API REST

Objetivo deste case é mostrar a aplicabilidade do monitoramento em tempo real nas aplicações do dia a dia. Dentro do lab vamos subir uma aplicação que irá realizar consultas aos tweets por uma determinada Hashtag e salvar o resultadoa para consultar relatorios com os tweets salvos. Junto com o app, o lab também sobe uma stack de log e monitoramento em tempo real, para analisarmos o comportamento da aplicação.

Mais informações: 

[Install](https://github.com/willsaavedra/tweet-project/blob/master/INSTALL.md)

[Desenvolvimento técnico](https://github.com/willsaavedra/tweet-project/blob/master/COMMENTS.md)

## Arquitetura

**Microserviço Tweet-API**

Aplicação desenvolvida em nodeJS com integração as APIs do Twitter, consultando e salvando os tweets selecionados.

**Logging GrayLog**

GrayLog vem para centralizar os logs, analisar e gerar novos dados para gerar uma visualização do comportamento da aplicação monitorada. Esses logs são capturados pelo agent FIleBeat do Elastic, que pos sua vez é reponsável por coletar os logs expostos pelos microserviços e enviar para o node do elastic.

**MongoDB** 

MongoDB é utilizado como repositório de dados para a aplicação Tweet-API e pelo backend do GrayLog.

**APM**

A aplicação já tem uma integração basico com o NewRelic APM, basta configurar a sua license Key para enviar as métricas.

**Diagrama**

![Diagrama](https://user-images.githubusercontent.com/41700932/76790208-2b2b3600-679d-11ea-8006-02dfcda1a088.jpg)

## Monitoramento API

O Dashboard para acompanhar algumas métricas de execução: - (item 9 e 8)

* Quantidade de mensagens analisadas
* Timeline de mensagens
* Gráfico de request por StatusCode
* Tabela de request por url
* Count Method
* Avg ResponseTime
* TimeLine Errors
* Tabela de Erros encontrados
* Tabela de Menssagens

<img width="1920" alt="Captura de Tela 2020-03-16 às 15 50 07" src="https://user-images.githubusercontent.com/41700932/76790637-fb306280-679d-11ea-9705-511ab2d2ca0d.png">
<img width="1920" alt="Captura de Tela 2020-03-16 às 16 02 33" src="https://user-images.githubusercontent.com/41700932/76791405-9970f800-679f-11ea-9450-9578f215edf7.png">

## APM 

NewRelic para análise das requests mais aprofundadas: (item 9)

<img width="1424" alt="Captura de Tela 2020-03-16 às 16 08 53" src="https://user-images.githubusercontent.com/41700932/76791845-7b57c780-67a0-11ea-8fa1-aa452dfcc248.png">