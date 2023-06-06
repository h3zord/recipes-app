<h1 align="center">Boas-vindas ao repositório do Recipes App!</h1>

<h2 align="center">
  <a href="https://h3zord.github.io/recipes-app" target="_blank">
    Aplicação
  </a>
</h2>
<br/>

## Objetivo

O aplicativo <strong>Recipes App</strong> foi desenvolvido para dispositivos móveis e tem como foco oferecer uma ampla variedade de receitas e drinks. Com ele, é possível visualizar, buscar, filtrar, marcar como favoritas e acompanhar o progresso de sua preparação.

<h2 align="center">Demonstração</h2>
<br/>

<div align="center">

https://user-images.githubusercontent.com/102384026/226144581-5e9987c0-a507-44c3-828c-82d947020380.mp4

</div>

<br/>
<br/>

## O que foi desenvolvido?

<strong>Recipes App</strong> é um projeto em grupo de quatro integrantes que desenvolveram um aplicativo de receitas para dispositivos móveis. Durante o desenvolvimento, o grupo trabalhou tanto individualmente quanto em pair programming. As receitas apresentadas são obtidas de uma API externa.

Para garantir uma boa organização do projeto, o grupo realizou reuniões diárias por meio de zoom, usou o trello para planejamento e o slack para comunicação assíncrona. O controle de versões foi feito utilizando o git.

O aplicativo foi construído com react e as ferramentas react hooks, context API e redux foram utilizadas para controlar o estado global da aplicação. A estilização foi feita com CSS e bootstrap.
Para realizar os testes, o grupo utilizou as bibliotecas jest, mocha e react testing library, alguns momentos foram desenvolvidos com TDD e a cobertura de testes chegou a aproximadamente 90% da aplicação.

A página principal do aplicativo contém dois ícones na parte inferior que permitem alternar entre comidas e drinks. Na parte superior, há um botão de busca que permite pesquisar uma receita pelo nome, ingrediente ou pela primeira letra. Também há botões de filtro que retornam receitas específicas para o usuário. Além disso, há um botão de perfil que contém preferências do usuário, como receitas favoritas e finalizadas.
Ao clicar em um card da receita, o usuário é direcionado para a página de detalhes, onde é possível favoritar e copiar o link da receita, visualizar os ingredientes necessários e o modo de preparo. O final da página contém um botão para iniciar a receita, permitindo ao usuário acompanhar o progresso e marcar os ingredientes usados, e, por fim, finalizar a receita. Estas informações são armazenadas no local storage.

## Linguagens e ferramentas
- HTML
- CSS
- Javascript
- React
- Context API
- Redux
- Bootstrap
- Jest
- Mocha
- React Testing Library

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/recipes-app.git
```

### 2 - Entre no repositório:
```
cd recipes-app
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm start
```
Caso utilize o yarn
```
yarn start
```
<strong>O react irá executar a aplicação na porta padrão 3000.</strong>
<br/>
➜ http://localhost:3000/

<br/>

## Execução dos testes

### 1 - Rode o script:
Caso utilize o npm
```
npm run test:coverage
```
Caso utilize o yarn
```
yarn test:coverage
```

<h2 align="center">Cobertura de testes</h2>
<br />

<div align="center">
  <img
    src="./src/images/recipes-app-tests.png"
    width="90%"
  />
</div>
<br />
