import { trackRequest } from "correiosrastreamento/request";
import { tracking } from "correiosrastreamento/lib";

jest.setTimeout(1000);

describe("tests", () => {
  test("request lib", async () => {
    const result = await trackRequest("QQ850419295BR");
    const output = {
      data: {
        searchParcel: {
          createdAt: "2024-07-13T18:06:33.474Z",
          externalShipmentId: null,
          id: "6692ec5976763d66e4f251f2",
          lastStatus: "DELIVERED",
          lastSyncTracker: "2024-07-13T18:06:33.985Z",
          needResync: false,
          nextSyncTracker: null,
          onQueue: false,
          pudoOriginalEvent: "",
          pudoOriginalRequest: "",
          source: "panel",
          trackingOriginalEvent:
            '[{"codigo":"BDE","tipo":"01","dtHrCriado":"2024-03-15T14:19:48","descricao":"Objeto entregue ao destinatário","unidade":{"codSro":"24020972","tipo":"Unidade de Distribuição","endereco":{"cidade":"NITEROI","uf":"RJ"}}},{"codigo":"OEC","tipo":"01","dtHrCriado":"2024-03-15T09:19:54","descricao":"Objeto saiu para entrega ao destinatário","unidade":{"tipo":"Unidade de Distribuição","endereco":{"cep":"24240972","logradouro":"RUA NORONHA TORREZAO","numero":"157","bairro":"SANTA ROSA","cidade":"NITEROI","uf":"RJ"}}},{"codigo":"DO","tipo":"01","dtHrCriado":"2024-03-14T07:58:42","descricao":"Objeto em transferência - por favor aguarde","unidade":{"codSro":"21041973","tipo":"Unidade de Tratamento","endereco":{"cidade":"RIO DE JANEIRO","uf":"RJ"}},"unidadeDestino":{"tipo":"Unidade de Distribuição","endereco":{"cidade":"NITEROI","uf":"RJ"}}},{"codigo":"DO","tipo":"01","dtHrCriado":"2024-03-12T14:26:40","descricao":"Objeto em transferência - por favor aguarde","unidade":{"codSro":"91040972","tipo":"Unidade de Tratamento","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}},"unidadeDestino":{"tipo":"Unidade de Tratamento","endereco":{"cidade":"RIO DE JANEIRO","uf":"RJ"}}},{"codigo":"DO","tipo":"01","dtHrCriado":"2024-03-11T14:40:36","descricao":"Objeto em transferência - por favor aguarde","unidade":{"codSro":"91040988","tipo":"Agência dos Correios","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}},"unidadeDestino":{"tipo":"Unidade de Tratamento","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}}},{"codigo":"PO","tipo":"01","dtHrCriado":"2024-03-11T14:39:20","descricao":"Objeto postado","unidade":{"codSro":"91040988","tipo":"Agência dos Correios","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}}}]',
          trackingOriginalRequest:
            '{"codObjeto":"QQ850419295BR","tipoPostal":{"sigla":"QQ","descricao":"ETIQUETA LOGICA PAC","categoria":"ENCOMENDA PAC"},"dtPrevista":"2024-03-19T23:59:59","contrato":"9912488907","largura":20,"comprimento":41,"altura":20,"diametro":0,"peso":5.32,"formato":"PACOTE","modalidade":"F","valorDeclarado":0,"eventos":[{"codigo":"BDE","tipo":"01","dtHrCriado":"2024-03-15T14:19:48","descricao":"Objeto entregue ao destinatário","unidade":{"codSro":"24020972","tipo":"Unidade de Distribuição","endereco":{"cidade":"NITEROI","uf":"RJ"}}},{"codigo":"OEC","tipo":"01","dtHrCriado":"2024-03-15T09:19:54","descricao":"Objeto saiu para entrega ao destinatário","unidade":{"tipo":"Unidade de Distribuição","endereco":{"cep":"24240972","logradouro":"RUA NORONHA TORREZAO","numero":"157","bairro":"SANTA ROSA","cidade":"NITEROI","uf":"RJ"}}},{"codigo":"DO","tipo":"01","dtHrCriado":"2024-03-14T07:58:42","descricao":"Objeto em transferência - por favor aguarde","unidade":{"codSro":"21041973","tipo":"Unidade de Tratamento","endereco":{"cidade":"RIO DE JANEIRO","uf":"RJ"}},"unidadeDestino":{"tipo":"Unidade de Distribuição","endereco":{"cidade":"NITEROI","uf":"RJ"}}},{"codigo":"DO","tipo":"01","dtHrCriado":"2024-03-12T14:26:40","descricao":"Objeto em transferência - por favor aguarde","unidade":{"codSro":"91040972","tipo":"Unidade de Tratamento","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}},"unidadeDestino":{"tipo":"Unidade de Tratamento","endereco":{"cidade":"RIO DE JANEIRO","uf":"RJ"}}},{"codigo":"DO","tipo":"01","dtHrCriado":"2024-03-11T14:40:36","descricao":"Objeto em transferência - por favor aguarde","unidade":{"codSro":"91040988","tipo":"Agência dos Correios","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}},"unidadeDestino":{"tipo":"Unidade de Tratamento","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}}},{"codigo":"PO","tipo":"01","dtHrCriado":"2024-03-11T14:39:20","descricao":"Objeto postado","unidade":{"codSro":"91040988","tipo":"Agência dos Correios","endereco":{"cidade":"PORTO ALEGRE","uf":"RS"}}}]}',
          updatedAt: "2024-07-13T18:06:33.985Z",
        },
      },
    };

    expect(result).toStrictEqual(output);
  });

  test("test lib", async () => {
    const result = await tracking("QQ850419295BR");
    const output = {
      codObjeto: "QQ850419295BR",
      tipoPostal: {
        sigla: "QQ",
        descricao: "ETIQUETA LOGICA PAC",
        categoria: "ENCOMENDA PAC",
      },
      dtPrevista: "2024-03-19T23:59:59",
      contrato: "9912488907",
      largura: 20,
      comprimento: 41,
      altura: 20,
      diametro: 0,
      peso: 5.32,
      formato: "PACOTE",
      modalidade: "F",
      valorDeclarado: 0,
      eventos: [
        {
          codigo: "BDE",
          tipo: "01",
          dtHrCriado: "2024-03-15T14:19:48",
          descricao: "Objeto entregue ao destinatário",
          unidade: {
            codSro: "24020972",
            tipo: "Unidade de Distribuição",
            endereco: { cidade: "NITEROI", uf: "RJ" },
          },
        },
        {
          codigo: "OEC",
          tipo: "01",
          dtHrCriado: "2024-03-15T09:19:54",
          descricao: "Objeto saiu para entrega ao destinatário",
          unidade: {
            tipo: "Unidade de Distribuição",
            endereco: {
              cep: "24240972",
              logradouro: "RUA NORONHA TORREZAO",
              numero: "157",
              bairro: "SANTA ROSA",
              cidade: "NITEROI",
              uf: "RJ",
            },
          },
        },
        {
          codigo: "DO",
          tipo: "01",
          dtHrCriado: "2024-03-14T07:58:42",
          descricao: "Objeto em transferência - por favor aguarde",
          unidade: {
            codSro: "21041973",
            tipo: "Unidade de Tratamento",
            endereco: { cidade: "RIO DE JANEIRO", uf: "RJ" },
          },
          unidadeDestino: {
            tipo: "Unidade de Distribuição",
            endereco: { cidade: "NITEROI", uf: "RJ" },
          },
        },
        {
          codigo: "DO",
          tipo: "01",
          dtHrCriado: "2024-03-12T14:26:40",
          descricao: "Objeto em transferência - por favor aguarde",
          unidade: {
            codSro: "91040972",
            tipo: "Unidade de Tratamento",
            endereco: { cidade: "PORTO ALEGRE", uf: "RS" },
          },
          unidadeDestino: {
            tipo: "Unidade de Tratamento",
            endereco: { cidade: "RIO DE JANEIRO", uf: "RJ" },
          },
        },
        {
          codigo: "DO",
          tipo: "01",
          dtHrCriado: "2024-03-11T14:40:36",
          descricao: "Objeto em transferência - por favor aguarde",
          unidade: {
            codSro: "91040988",
            tipo: "Agência dos Correios",
            endereco: { cidade: "PORTO ALEGRE", uf: "RS" },
          },
          unidadeDestino: {
            tipo: "Unidade de Tratamento",
            endereco: { cidade: "PORTO ALEGRE", uf: "RS" },
          },
        },
        {
          codigo: "PO",
          tipo: "01",
          dtHrCriado: "2024-03-11T14:39:20",
          descricao: "Objeto postado",
          unidade: {
            codSro: "91040988",
            tipo: "Agência dos Correios",
            endereco: { cidade: "PORTO ALEGRE", uf: "RS" },
          },
        },
      ],
    };

    expect(result).toStrictEqual(output);
  });
});
