# API do Projeto Maia 🦉

Backend desenvolvido em **NestJS** para o projeto "Maia", uma plataforma de apoio e educação para a segurança da mulher no Distrito Federal, criada para o hackathon da Campus Party.

## 📝 Sobre o Projeto

O Projeto Maia nasceu durante o hackathon com o tema **"Mulher Mais Segura"**. Nossa missão é criar uma ferramenta digital que atue em duas frentes cruciais:

1.  **Educação Preventiva:** Através de um quiz interativo, ajudamos a usuária a reconhecer sinais de alerta em um relacionamento abusivo. As perguntas foram pedagogicamente adaptadas a partir do **Formulário Nacional de Avaliação de Risco (Formulário FRIDA)**, instituído pela Resolução CNJ/CNMP n. 05/2020, garantindo um embasamento técnico e alinhado às políticas públicas brasileiras.

2.  **Acesso à Ajuda:** Fornecemos um mapa geolocalizado com os principais serviços de apoio e proteção à mulher no Distrito Federal, como a Casa da Mulher Brasileira, Delegacias Especializadas (DEAMs) e Centros de Referência (CREAS).

Esta API é o cérebro por trás da plataforma, servindo todos os dados necessários para que a aplicação frontend possa cumprir sua missão.

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/):** Um framework Node.js progressivo para construir aplicações de backend eficientes e escaláveis.
- **[TypeScript](https://www.typescriptlang.org/):** Usado em todo o projeto para garantir um código mais seguro e robusto.
- **Mock de Dados (JSON):** Para garantir a velocidade e a segurança na entrega durante o hackathon, optamos por uma estratégia de mock inteligente, servindo os dados a partir de arquivos JSON locais. A arquitetura está pronta para ser conectada a um banco de dados como o PostgreSQL em uma fase futura.

## 🏁 Como Começar

Siga os passos abaixo para executar a API em seu ambiente de desenvolvimento local.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Projeto-Maia/Maia-back.git
    cd maia-backend
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run start:dev
    ```

4.  O servidor estará rodando em `http://localhost:3000`. Ele recarregará automaticamente a cada alteração nos arquivos.

## 📡 Endpoints da API

A API atualmente expõe 2 endpoints públicos para consumo pelo frontend.

---

### 1. Obter Perguntas do Quiz

Retorna a lista completa de perguntas, opções e explicações para o quiz educativo.

- **Método:** `GET`
- **URL:** `/quiz`
- **Resposta de Sucesso (200 OK):**
  ```json
  [
    {
      "id": 1,
      "questionText": "Pensando no seu relacionamento, como ele age em relação ao seu celular e redes sociais?",
      "options": [
        {
          "id": "a",
          "text": "Exige minhas senhas, lê minhas conversas e controla quem eu sigo...",
          "redFlag": true
        }
      ],
      "correctOptionId": "a",
      "explanation": "Controle sobre seus dispositivos e contas digitais é um sinal claro de violência psicológica...",
      "source": "Inspirado no eixo de 'Violência Patrimonial' do Formulário Nacional de Risco (CNJ/CNMP n. 05/2020)."
    }
  ]
  ```

---

### 2. Obter Locais de Apoio

Retorna a lista de locais de apoio (delegacias, casas de abrigo, etc.) no Distrito Federal.

- **Método:** `GET`
- **URL:** `/locations`
- **Resposta de Sucesso (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "Casa da Mulher Brasileira",
      "type": "casa_da_mulher",
      "address": "SGAN 601, Lote L1, Asa Norte, Brasília - DF...",
      "phone": "(61) 3224-5213 / Disque 180",
      "description": "Atendimento integral 24 horas com serviços de delegacia, justiça...",
      "latitude": -15.779261,
      "longitude": -47.876798
    }
  ]
  ```

---

## 📁 Estrutura do Projeto

O projeto segue a arquitetura modular padrão do NestJS, separando as responsabilidades por funcionalidade:

```
maia-backend/
└── src/
    ├── main.ts                 # Ponto de entrada da aplicação
    ├── app.module.ts           # Módulo raiz
    ├── common/                 # Interfaces compartilhadas
    ├── database/               # Mocks de dados em JSON
    ├── quiz/                   # Módulo de Quiz (controller, service)
    └── locations/              # Módulo de Locais (controller, service)
```

## 🧑‍💻 Equipe

- **Arthur** - Backend Developer
- **Erick** - Frontend Developer
