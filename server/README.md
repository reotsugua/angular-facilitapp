# Tutorial: Utilizando JSON Server com data.json

## 1. Instalando o JSON Server

Certifique-se de ter o JSON Server instalado em sua máquina. Caso não tenha, instale usando npm (Node Package Manager):

```bash
npm install -g json-server
```

## 2. Inicializando o JSON Server com o arquivo data.json

Para começar, navegue até o diretório onde o arquivo `data.json` está localizado e execute o seguinte comando para iniciar o JSON Server e carregar os dados do arquivo:

```bash
json-server --watch data.json --port 3000
```

Isso criará uma API acessível através de http://localhost:3000

## 3. Acessando os Recursos da API

Aqui estão os principais recursos disponíveis e suas respectivas URLs:

Summary Resource:
http://localhost:3000/summary

Pagination Resource:
http://localhost:3000/pagination

Items Resource:
http://localhost:3000/items

## 4. Exemplo de Requisição

Como fazer requisições utilizando cURL, um utilitário de linha de comando para fazer requisições HTTP:

**Obter todos os itens:**
```bash
curl http://localhost:3000/items
```

Agora você está pronto para começar a usar o **JSON Server** com o seu arquivo data.json e interagir com os recursos da API!

