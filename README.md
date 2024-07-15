# CorreiosRastreamento
SDK, API, PWA e Telegram bot pra rastreamento de encomendas dos Correios

<div align="center">
  <br>
    <img width="260" src="./logo/logo.png" />
  <br>
</div>

- [CorreiosRastreamento](#correiosrastreamento)
  - [SDK](#sdk)
    - [Instalação](#instalação)
      - [NPM](#npm)
      - [Yarn](#yarn)
    - [Uso](#uso)
      - [Promise](#promise)
      - [Async/Await](#asyncawait)
      - [Resultado](#resultado)
  - [API](#api)
  - [Bot](#bot)
  - [PWA](#pwa)
  - [References](#references)

## SDK

### Instalação

#### NPM

```shell
npm install fazendaaa/correiosrastreamento
```

#### Yarn

```shell
yarn add 'correiosrastreamento@https://github.com/fazendaaa/correiosrastreamento'
```

### Uso

#### Promise

```typescript
import { tracking } from "correiosrastreamento";

tracking("QQ850419295BR").then(console.log);
```

#### Async/Await

```typescript
import { tracking } from "correiosrastreamento";

const main = async (): void => {
  const result = await tracking("QQ850419295BR");

  console.log(result);
};

main();
```

#### Resultado

Tanto em promise como async/await espere o seguinte resultado:

```json
{
  "codObjeto": "QQ850419295BR",
  "tipoPostal": {
    "sigla": "QQ",
    "descricao": "ETIQUETA LOGICA PAC",
    "categoria": "ENCOMENDA PAC"
  },
  "dtPrevista": "2024-03-19T23:59:59",
  "contrato": "9912488907",
  "largura": 20,
  "comprimento": 41,
  "altura": 20,
  "diametro": 0,
  "peso": 5.32,
  "formato": "PACOTE",
  "modalidade": "F",
  "valorDeclarado": 0,
  "eventos": [
    {
      "codigo": "BDE",
      "tipo": "01",
      "dtHrCriado": "2024-03-15T14:19:48",
      "descricao": "Objeto entregue ao destinatário",
      "unidade": {
        "codSro": "24020972",
        "tipo": "Unidade de Distribuição",
        "endereco": { "cidade": "NITEROI", "uf": "RJ" }
      }
    },
    {
      "codigo": "OEC",
      "tipo": "01",
      "dtHrCriado": "2024-03-15T09:19:54",
      "descricao": "Objeto saiu para entrega ao destinatário",
      "unidade": {
        "tipo": "Unidade de Distribuição",
        "endereco": {
          "cep": "24240972",
          "logradouro": "RUA NORONHA TORREZAO",
          "numero": "157",
          "bairro": "SANTA ROSA",
          "cidade": "NITEROI",
          "uf": "RJ"
        }
      }
    },
    {
      "codigo": "DO",
      "tipo": "01",
      "dtHrCriado": "2024-03-14T07:58:42",
      "descricao": "Objeto em transferência - por favor aguarde",
      "unidade": {
        "codSro": "21041973",
        "tipo": "Unidade de Tratamento",
        "endereco": { "cidade": "RIO DE JANEIRO", "uf": "RJ" }
      },
      "unidadeDestino": {
        "tipo": "Unidade de Distribuição",
        "endereco": { "cidade": "NITEROI", "uf": "RJ" }
      }
    },
    {
      "codigo": "DO",
      "tipo": "01",
      "dtHrCriado": "2024-03-12T14:26:40",
      "descricao": "Objeto em transferência - por favor aguarde",
      "unidade": {
        "codSro": "91040972",
        "tipo": "Unidade de Tratamento",
        "endereco": { "cidade": "PORTO ALEGRE", "uf": "RS" }
      },
      "unidadeDestino": {
        "tipo": "Unidade de Tratamento",
        "endereco": { "cidade": "RIO DE JANEIRO", "uf": "RJ" }
      }
    },
    {
      "codigo": "DO",
      "tipo": "01",
      "dtHrCriado": "2024-03-11T14:40:36",
      "descricao": "Objeto em transferência - por favor aguarde",
      "unidade": {
        "codSro": "91040988",
        "tipo": "Agência dos Correios",
        "endereco": { "cidade": "PORTO ALEGRE", "uf": "RS" }
      },
      "unidadeDestino": {
        "tipo": "Unidade de Tratamento",
        "endereco": { "cidade": "PORTO ALEGRE", "uf": "RS" }
      }
    },
    {
      "codigo": "PO",
      "tipo": "01",
      "dtHrCriado": "2024-03-11T14:39:20",
      "descricao": "Objeto postado",
      "unidade": {
        "codSro": "91040988",
        "tipo": "Agência dos Correios",
        "endereco": { "cidade": "PORTO ALEGRE", "uf": "RS" }
      }
    }
  ]
}
```

## API


## Bot

Abra o chat com o bot no telegram: [@CUrreios](https://t.me/CUrreiosbot)

## PWA

## References

- [How To Set Up a Node Project With Typescript](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)
- [tiny-shortener](https://github.com/Fazendaaa/tiny-shortener)
- [Passo a passo Simples para saber em que agencia dos Correios está seu objeto](https://rastreamentocorreios.tv/passo-a-passo-simples-para-saber-em-que-agencia-dos-correios-esta-seu-objeto/)
- [Creating a CRUD API with Vanilla Node.Js (No Frameworks Needed)](https://medium.com/@muhebollah.diu/creating-a-crud-api-with-plain-vanilla-node-js-no-frameworks-needed-52e2dab7ac67)
