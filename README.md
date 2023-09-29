# angular-facilitapp
## Documentação: Instalação, Execução e Teste do Componente

Este documento descreve como instalar, executar e testar o componente. Certifique-se de seguir os passos detalhadamente para garantir um funcionamento adequado do projeto.

## Requisitos

- Node.js (versão >= 14.17.0)
- npm (Node Package Manager)
- Angular CLI (Angular Command Line Interface)

## Dependências

As dependências necessárias para o projeto são gerenciadas pelo npm e estão listadas a seguir:

- `@angular/animations: ^16.2.0`
- `@angular/cdk: ^16.2.6`
- `@angular/common: ^16.2.0`
- `@angular/compiler: ^16.2.0`
- `@angular/core: ^16.2.0`
- `@angular/forms: ^16.2.0`
- `@angular/material: ^16.2.6`
- `@angular/platform-browser: ^16.2.0`
- `@angular/platform-browser-dynamic: ^16.2.0`
- `@angular/router: ^16.2.0`
- `@ng-bootstrap/ng-bootstrap: ^15.1.1`
- `@popperjs/core: ^2.11.6`
- `bootstrap: ^5.2.3`
- `chart.js: ^4.4.0`
- `rxjs: ~7.8.0`
- `tslib: ^2.3.0`
- `zone.js: ~0.13.0`

## Passos para Execução

1. **Instalação de Dependências:**

   Abra um terminal e navegue até a raiz do projeto. Execute o seguinte comando para instalar todas as dependências do projeto:

   ```bash
   npm install
    ```
2. **Iniciar o JSON Server:**

    Antes de executar o Angular, é necessário rodar o JSON Server. Certifique-se de que o JSON Server está instalado globalmente (caso contrário, instale-o com npm install -g json-server). Navegue até a pasta /server e execute o seguinte comando para iniciar o JSON Server:

    ```bash
   json-server --watch db.json

    ```
    Certifique-se de que o servidor esteja rodando antes de prosseguir.
3. **Executar o Angular:**

    Volte para a raiz do projeto e execute o seguinte comando para iniciar o aplicativo Angular:

    ```bash
   ng serve

    ```

    O aplicativo será iniciado e estará disponível em http://localhost:4200.


**Teste do Projeto**


    ```bash
   ng test
    ```
