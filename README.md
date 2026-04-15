# Protochain



## English
[Back to main](../README.md) | [Read in portuguese](#português)

Protochain is a simple blockchain implementation built with TypeScript. It includes core components like blocks, blockchain validation, and a basic HTTP server for interacting with the blockchain.

### Features

- **Block**: Represents a block in the blockchain with properties like index, timestamp, hash, previous hash, and data.
- **Blockchain**: Manages a chain of blocks, including adding new blocks and validating the entire chain.
- **Validation**: Provides a simple validation mechanism for blocks and the blockchain.
- **Server**: An Express.js server that exposes RESTful endpoints to interact with the blockchain.

### Installation

1. Clone the repository.
2. Navigate to the `protochain` directory.
3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

#### Development

To run the project in development mode with nodemon:

```bash
npm run dev
```

#### Production

1. Compile TypeScript to JavaScript:

   ```bash
   npm run compile
   ```

2. Start the server:

   ```bash
   npm start
   ```

#### Running the Blockchain Server

To start the blockchain server with logging:

```bash
npm run blockchain
```

The server will run on port 3000.

### API Endpoints

- `GET /status`: Returns the status of the blockchain, including the number of blocks, validity, and the last block.
- `GET /blocks/:indexOrHash`: Retrieves a block by index (number) or hash.
- `POST /blocks`: Adds a new block to the blockchain. Requires a JSON body with block data.

### Testing

Run tests using Jest:

```bash
npm test
```

Tests cover block validation, blockchain operations, and server endpoints.

### Dependencies

- **Runtime**: `crypto-js`, `express`, `morgan`
- **Development**: `@types/crypto-js`, `@types/express`, `@types/jest`, `@types/morgan`, `@types/supertest`, `jest`, `supertest`, `ts-jest`, `ts-node`, `typescript`

## Português
[Voltar](../README.md) | [Ler em inglês](#english)

Protochain é uma implementação simples de blockchain construída com TypeScript. Inclui componentes principais como blocos, validação de blockchain e um servidor HTTP básico para interagir com a blockchain.

### Funcionalidades

- **Bloco**: Representa um bloco na blockchain com propriedades como índice, timestamp, hash, hash anterior e dados.
- **Blockchain**: Gerencia uma cadeia de blocos, incluindo adicionar novos blocos e validar a cadeia inteira.
- **Validação**: Fornece um mecanismo simples de validação para blocos e a blockchain.
- **Servidor**: Um servidor Express.js que expõe endpoints RESTful para interagir com a blockchain.

### Instalação

1. Clone o repositório.
2. Navegue para o diretório `protochain`.
3. Instale as dependências:

   ```bash
   npm install
   ```

### Uso

#### Desenvolvimento

Para executar o projeto em modo de desenvolvimento com nodemon:

```bash
npm run dev
```

#### Produção

1. Compile TypeScript para JavaScript:

   ```bash
   npm run compile
   ```

2. Inicie o servidor:

   ```bash
   npm start
   ```

#### Executando o Servidor da Blockchain

Para iniciar o servidor da blockchain com logging:

```bash
npm run blockchain
```

O servidor será executado na porta 3000.

### Endpoints da API

- `GET /status`: Retorna o status da blockchain, incluindo o número de blocos, validade e o último bloco.
- `GET /blocks/:indexOrHash`: Recupera um bloco por índice (número) ou hash.
- `POST /blocks`: Adiciona um novo bloco à blockchain. Requer um corpo JSON com os dados do bloco.

### Testes

Execute os testes usando Jest:

```bash
npm test
```

Os testes cobrem validação de blocos, operações da blockchain e endpoints do servidor.

### Dependências

- **Tempo de execução**: `crypto-js`, `express`, `morgan`
- **Desenvolvimento**: `@types/crypto-js`, `@types/express`, `@types/jest`, `@types/morgan`, `@types/supertest`, `jest`, `supertest`, `ts-jest`, `ts-node`, `typescript`