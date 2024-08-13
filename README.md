# PDV 

É uma API RESTful desenvolvida com Node.js e Express 4 que através de operações CRUD, com persistência em banco de dados PostgresSQL.

Características
--------
- Cadastrar e atualizar cadastros de carros.
Preparação
---------------
1. Caso ainda não possua, você vai precisar do [Node.js](http://nodejs.org/) instalado na sua máquina.  
2. Clonar o repositório:

		git clone git@github.com:Cesarrfgomes/api-carros.git

3. Instalar os pacotes e dependências:

		npm install	

5. Executar o servidor:

		npm run dev

Uso
-----
- Você pode executar o servidor localmente com a url: [http://localhost:3000/](http://localhost:3000/). 
- Para isso, escolha um navegador, ou uma ferramenta de teste de API como o [Insomnia](http://www.[insomnia.rest]).
- O esquema para criar o banco de dados e suas tabelas você encontra no arquivo "tabelaCarros.sql" dentro da pasta "src/bancoDeDados".
- Todo valor (dinheiro) deverá ser representado em centavos (Ex.: R$ 10,00 reais = 1000).
  
## Endpoints

### Cadastrar Carro

- **Endpoint:** ```[POST] /carros```
- **Descrição:** O endpoint realiza o cadastro de um novo usuário.
- **Corpo da Solicitação:**
	```json
	{
	  "marca": "Volkswagen",
	  "modelo": "Fusca",
	  "ano": 1970,
      "cor": "Branco",
      "valor": 2500000
	}
	```
- **Resposta com sucesso:**
  - Status code: 201 Created 
  - Conteúdo:
    ```json
    {
	  "id": 10,
	  "marca": "Volkswagen",
	  "modelo": "Fusca",
	  "ano": 1970,
      "cor": "Branco",
      "valor": 2500000
	}
	  
    ```

### Listagem de carros

- **Endpoint:** ```[GET] /carros```
- **Descrição:** O endpoint faz a listagem dos carros cadastrados.
- **Resposta com sucesso:**
  - Status code: 200 Ok
  - Conteúdo:
	```json
	{
      {
  	  "marca": "Volkswagen",
  	  "modelo": "Fusca",
  	  "ano": 1970,
        "cor": "Branco",
        "valor": 2500000,
       },
  
       {
      "marca": "Toyota",
  	  "modelo": "Corolla Cross",
  	  "ano": 2023,
        "cor": "Branco",
        "valor": 15500000
      }
	}
 	```

### Detalhar Carro

- **Endpoint:** ```[GET] /carros/:id```
- **Descrição:** O endpoint detalha o cadastro do carro. 
- **Resposta com sucesso:**
  - Status code: 200 OK
  - Conteúdo:
    ```json
    {
  	  "id": 11,
  	  "marca": "Toyota",
  	  "modelo": "Corolla Cross",
  	  "ano": 2023,
      "cor": "Branco",
      "valor": 15000000
	  }
    ```
### Atualizar Carro

- **Endpoint:** ```[PUT] /carros/:id```
- **Descrição:** O endpoint realiza a edição das informações de um carro.
- **Corpo da Solicitação:**
	```json
	{
	  "marca": "Volkswagen",
	  "modelo": "Fusca",
	  "ano": "1970",
    "cor": "Preto",
    "valor": 2500000
	}
	```
- **Resposta com sucesso:**
  - Status code: 204 No content 
    


