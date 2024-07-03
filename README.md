# HISNEK - Deliziosa Pizzaria

## Visão Geral
Desenvolvido com Expo, Typescript, Aws Amplify e um Mockdata que simula o retorno de uma query em GraphQL.

- Proposta:
A proposta do app era trazer uma dinâmica mais visual, com animações durante as transições, e uma autenticação básica, mas que não travasse o usuário na tela princpal. Cumprindo com os requisitos funcionais e técnicos deste desafio!

- Desafio:
O maior desafio nessa projeto foi resolver conflitos de dependências causados pela própria documentação das bibliotecas utilizadas. Tive problemas com a execução do Aplicativo por conta de uma dependência que não estava na versão correta.

- Resolução:
para resolver este problema eu pensei em criar um app do zero e instalar apenas as funcionalidades que eu gostaria, uma a uma, então comecei pelo Amplify, onde funcionou logo de cara, rodando o aplicativo nas últimas versões de todas as libs. Feito isso, comecei a bater dependência por dependência para garantir que estava tudo funcionando da maneira correta.

## Instalação

### Pré-requisitos
- Node.js (v14.x or later)
- npm or yarn
- amplify/cli

### Passo a Passo
1. **Clonar Repositório:**
   ```bash
   git clone https://github.com/GuilhermeFerreiraa/hisnek-test
   cd hisnek-test

1. **Instalar Dependências:**
   ```bash
   npm install
   yarn install
   
## Configurar AWS Amplify:

Esclarecimento: Em um cenário real, com fins corporativos ou pessoais, o arquivo `aws-exports.js` deveria estar dentro do `.gitignore`, por se tratar de um arquivo sensível. Neste caso, estou utilizando exclusivamente para fins de testes sobre o projeto.

- Instalar o Aws-amplify CLI
```bash
npm install -g @aws-amplify/cli
# ou
yarn global add @aws-amplify/cli
```

*caso de dúvidas entre no site: https://docs.amplify.aws/gen1/react-native/prev/build-a-backend/


## Executar a aplicação
```bash
  npm run start
```

- Testes unitários com Jest:
```bash
  npm run test
```
