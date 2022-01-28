## Documentação de rotas no swagger: https://flashfoodapi.herokuapp.com/api-documentation

# FLASHFOOD 🍟

FlashFood é um sistema desenvolvido para que pessoas possam encontrar Restaurantes, Pizzarias Hamburguerias... proximo ao seu endereço, e assim realizar um pedido no estabelecimento desejado.

O sistema possui 2 tipos de usuarios, sendo eles:

- Partner
- Customer

PARTNER:
tem permissão para listar suas lojas, cadastrar uma loja e atualizar ou deletar uma loja específica

CUSTOMER:
tem permissão para listar as lojas próximas a seu endereço realizar um pedido e deixar um feedback em uma loja parceira após ter realizado um pedido

## **_Como Instalar?_**

- Para instalar, é necessário clonar o projeto e fazer instalação das dependências, entre em um terminal e siga o passo a passo abaixo:

### 1 - Clona o Projeto:

```
git clone https://gitlab.com/Humberto16/FlashFood

```

### 2 - Depois de clonado, entre na pasta do projeto:

```
cd FlashFood

```

### 3 - Instale as Dependências:

```
yarn

```

### 4 - Crie um banco de dados e configure de acordo com o arquivo .env.example


### 5 - Rode as migrations

```
yarn typeorm migration:run

```

### 6 - Para Iniciar a aplicação rode o comando abaixo:

```
yarn dev

```
### 7 - Se tudo for feito corretamente, vai aparecer normalmente as mensagens:

```
Database connected...
Server running...

```
