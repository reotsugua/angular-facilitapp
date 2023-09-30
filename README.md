# angular-dashboard-vendas-resume
## Documentação: Instalação, Execução e Teste do Componente

Este documento descreve como instalar, executar e testar o componente. Certifique-se de seguir os passos detalhadamente para garantir um funcionamento adequado do projeto.

## Requisitos

- Node.js (versão >= 14.17.0)
- npm (Node Package Manager)
- Angular CLI (Angular Command Line Interface)

## Passos para Execução

1. **Instalação de Dependências:**

   Abra um terminal e navegue até a raiz do projeto. Execute o seguinte comando para instalar todas as dependências do projeto:

   ```bash
   npm install
    ```
2. **Iniciar o JSON Server:**

    Antes de executar o Angular, é necessário rodar o JSON Server. Certifique-se de que o JSON Server está instalado globalmente (caso contrário, instale-o com npm install -g json-server). Navegue até a pasta /server e siga as instruções do reame.md

    Certifique-se de que o servidor esteja rodando antes de prosseguir.

3. **Executar o Angular:**

    Volte para a raiz do projeto e execute o seguinte comando para iniciar o aplicativo Angular:

    ```bash
   ng serve

    ```

    O aplicativo será iniciado e estará disponível em http://localhost:4200.


4. **Teste do Projeto**


    ```bash
        ng test
    ```
