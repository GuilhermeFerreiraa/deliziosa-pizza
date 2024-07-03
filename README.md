# HISNEK - Deliziosa Pizzaria

## Visão Geral
Describe your project briefly here.

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

- Instalar o Aws-amplify CLI
```bash
npm install -g @aws-amplify/cli
# ou
yarn global add @aws-amplify/cli
```

- Navegue até o diretório do projeto clonado e execute:
```bash
amplify init
```
* siga as instruções para configurar o projeto. O amplify pode detecar a config existente se você já tiver configurado um projeto com `amplify pull`

- realizar o pull do diretório já configurado
(importante ressaltar que é necessário o arquivo aws-exports.js na raiz da pasta `/src`)
```bash
amplify pull --appId d2sy8fk6xvuoun --envName test
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
