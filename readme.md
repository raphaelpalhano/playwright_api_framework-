# Playwright cucumber API

# Estrutura

## Core

**Arquivos relacionados a configuracao do framework**

- hook.config: `arquivo voltado para inicializar toda a estrutura global da api, controlando a urlBase, header, e a limpeza do response no AfterAll`
- config: arquivo que contem algumas informacoes relacionadas a configuracao de url e threshould

**Arquivos relacionados aos request**

- base: contém as functions genéricas rest: requestBody, requestWithoutBody, etc
- services: functions voltadas para o contexto das rotas

**sArquivos de comportamento do cucumber**

- steps: cada arquivo representa um endpoint
