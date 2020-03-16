# Logging Tweet API REST

Objetivo deste case é mostrar a aplicabiliade do monitoramento em tempo real nas aplicações do dia. Dentro do lab vamos subir um app API que vai fazer consulta aos tweets por uma determinada #, salva e gera relatorios com os tweets salvados. Junto com o app, o lab tambem sobe uma stack de logging para o monitoramento em tempo real, para analisarmos o comportamento da aplicação.

## Arquitetura

**Microserviço Tweet-API**

Aplicação desenvolvida em nodeJS com integração as APIs do Twitter, consultando e salvando os tweets selecionados.

**Logging GrayLog**

GrayLog vem para centralizar os logs, analisar e gerar novos dados para gerar uma visualização do comportamento da aplicação monitorada. Esses logs são capturados pelo agent FIleBeat do Elastic, que pos sua vez é reponsavel por coletar os logs expostos pelos microserviços e enviar para o node do elastic.

**MongoDB** 

MongoDB é tuilizado como repositorio de dados para a aplicação Tweet-API e pelo backend do GrayLog.

**Diagrama**

![Diagrama](https://user-images.githubusercontent.com/41700932/76788705-34ff6a00-679a-11ea-8cbc-02f537fe0b4e.jpg)

