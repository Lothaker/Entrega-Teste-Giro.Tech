# Financial Data API

Esta é uma API RESTful para manipulação de dados financeiros, incluindo moedas, taxas de câmbio, investidores e investimentos.

## Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **MySQL**
- **dotenv** (para variáveis de ambiente)
- **Insomnia** (QA test da API)

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Renomeie o arquivo `.env.example` para `.env`
   - Preencha os campos conforme seu ambiente:
     ```env
     MYSQL_HOST=localhost
     MYSQL_USER=root
     MYSQL_PASSWORD=root
     MYSQL_DATABASE=financial_data
     PORT=3333
     ```

4. **Configure o banco de dados MySQL:**
   - Crie o banco de dados `financial_data`
   - Execute as migrações e população inicial, se necessário

## Execução da API

Para iniciar o servidor, utilize o comando:
```sh
npm start
```
O servidor será iniciado na porta `3333` (ou conforme definido no `.env`).

## Rotas Disponíveis

### 1. **Moedas**
- `GET /currencies` - Retorna todas as moedas cadastradas.
- `POST /currencies` - Cria uma nova moeda.
  - **Body:** `{ "name": "Real", "type": "Fiat" }`

### 2. **Taxas de Câmbio**
- `GET /exchange-rates/recent` - Retorna as taxas de câmbio dos últimos 7 dias.
- `POST /exchange-rates` - Cria uma nova taxa de câmbio.
  - **Body:** `{ "date": "2024-02-24", "daily_variation": 0.02, "daily_rate": 5.1, "currency_id": 1 }`
- `PUT /exchange-rates/:id` - Atualiza uma taxa de câmbio existente.
- `DELETE /exchange-rates/old` - Exclui taxas de câmbio com mais de 30 dias.

### 3. **Investidores**
- `POST /investors` - Cria um novo investidor.
  - **Body:** `{ "name": "João Silva", "email": "joao@email.com" }`
- `DELETE /investors/:id` - Remove um investidor e seus investimentos.

### 4. **Investimentos**
- `POST /investments` - Cria um novo investimento.
  - **Body:** `{ "initial_amount": 1000, "months": 12, "interest_rate": 0.05, "final_amount": 1600, "currency_id": 1, "investor_id": 2 }`
- `GET /investments` - Retorna todos os investimentos cadastrados.

## Testando a API

Para testar as rotas, você pode utilizar o **Insomnia** ou **Postman**.

Exemplo de teste via `cURL`:
```sh
curl -X GET http://localhost:3333/currencies
```

## Middleware de Erros
Todos os erros inesperados são tratados pelo middleware `errorMiddleware`, garantindo respostas padronizadas com `500 Internal Server Error` quando necessário.

## Contribuição
Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests** para melhorias.

## Licença
Este projeto está sob a licença MIT.

