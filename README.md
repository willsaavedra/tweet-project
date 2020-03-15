# Considerações Gerais
Você deverá usar este repositório como o repo principal do projeto, i.e., todos os seus commits devem estar registrados aqui, pois queremos ver como você trabalha.

Esse problema tem algumas constraints:

a) Eu preciso conseguir rodar seu código em um Mac OS X OU no Ubuntu;

b) Devemos ser capazes de executar o seu código em uma VM ou máquina limpa com os seguintes comandos, ou algo similar (faça um INSTALL.md com as instruções):

git clone seu-repositorio
cd seu-repositorio
./configure (ou algo similar)
make run (ou algo similar)

Esses comandos devem ser o suficiente para configurar uma nova VM e rodar o seu programa. Considere que o meu usuário não é root, porém tem permissão de sudo. Considere que tenho instalado no sistema: Java, Python, Ruby ou Go. Qualquer outra dependência que eu precisar você tem que prover.

Registre tudo: testes que forem executados, ideias que gostaria de implementar se tivesse tempo (explique como você as resolveria, se houvesse tempo), decisões que forem tomadas e seus porquês, arquiteturas que forem testadas e os motivos de terem sido modificadas ou abandonadas. Crie um arquivo COMMENTS.md ou HISTORY.md no repositório para registrar essas reflexões e decisões.

# O Problema

O desafio que você deve resolver é o problema da aplicação de Comentários em versão API (backend) usando a linguagem de programação e ferramentas open source da sua preferência.

A aplicação será uma API REST. Através dela os internautas enviam comentários em texto de uma máteria e acompanham o que outras pessoas estão falando sobre o assunto em destaque.


# Regras de negócio

O usuário submete o seu email e o texto do comentário e o ID da pagina. Seu comentário fica então listado em ordem decrescente pela data da postagem, junto com os 20 últimos que foram feitos nesta página. Deve ser possível via API o usuário paginar pelos demais, sem limitação de quantidade.

Como os comentários ficam nas páginas de matérias, é esperada grande quantidade de acessos às mesmas e um volume alto de submissões de comentários concentrados em um curto espaço de tempo, principalmente em eventos como Eleições, Copa do Mundo, etc. Esperamos ter um teste que cubra esse cenário e, por razões práticas, podemos considerar 1000 comentários/seg e 200 usuários simultâneos acessando a matéria como baseline de performance.

Devemos permitir que os usuários acessem uma rota da API com a listagem das matérias e o número de comentários que cada uma tem. A partir da lista é possível consultar outra rota com a matéria. Esta URL precisa estar documentada em algum lugar do seu projeto.


# O que será avaliado na sua solução?

Seu código será observado por uma equipe de desenvolvedores que avaliarão a implementação do código, simplicidade e clareza da solução, a arquitetura, estilo de código, testes unitários, testes funcionais, nível de automação dos testes e a documentação.

Sua solução será submetida a uma bateria de testes de performance para garantir que atende a demanda de uma chamada em TV ou a picos de audiência provenientes de acontecimentos de amplo alcance. Fique atento à performance e escalabilidade.

A automação da infra-estrutura também é importante. Imagine que você precisará fazer deploy do seu código em múltiplos servidores, então não é interessante ter que ficar entrando máquina por máquina para fazer o deploy da aplicação.

# Dicas

Use ferramentas e bibliotecas open source, mas documente as decisões e porquês;

Automatize o máximo possível;

Em caso de dúvidas, pergunte.
