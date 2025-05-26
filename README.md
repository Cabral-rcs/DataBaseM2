# Gerenciador_de_tarefas

## Descrição do sistema 
O projeto consiste em uma aplicação web de organização que possui seprações por temas, na qual cada quadro representa um contexto diferente de tarefas como:<br>
- Dia a dia<br>
- Casa<br>
- Trabalho <br>
- Faculdade <br>
<br> E, portanto, possui um dashboard com colunas de tarefas específicas daquele tema. <br>
As tarefas são exibidas em cards com suas principais informações e em uma das três colunas de estatus.
Os estatus são: <br>
- Fazer <br>
- Fazendo <br>
- Feito <br>

Além disso, o usuário possui a opção de criar novos quadros, novas tarefas, editar tarefas, remover tarefas e definir seus estatus nas colunas. <br>
Por fim, todos esses dados serão armazenados em um banco de dados que contará com um sistema de login para validar o usuário e atribuir seu progresso dentro da aplicação

## Estrutura de pastas 
```
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)
```

## Como executar o programa: 
1. Clone o repositório para alguma IDE
2. Insira o comando "npm init -y" para criar automaticamente um arquivo package.json, no terminal
3. Instale o Express: npm install express
4. Inicie o programa: npm start
5. Abra uma guia no navegador e coloque: http://localhost:3000/
6. Programa rodando!

# Documentação

## Nome do Projeto: Gerenciador de Tarefas

## Descrição
Aplicação web para gerenciamento de tarefas que permite criar, visualizar, editar e excluir tarefas. Ideal para uso pessoal ou em times pequenos. Desenvolvido em Node.js, com persistência de dados em banco PostgreSQL e estrutura baseado no padrão arquitetural MVC (Model-View-Controller).

---

## Arquitetura: MVC (Model-View-Controller)

O projeto é organizado em três camadas principais:

- **Model:** Responsável por interagir com o banco de dados.
- **View:** Interface com o usuário (ainda não implementada).
- **Controller:** Lógica de negócio e roteamento de requisições.

---

## Ferramenta de Diagramação
Gemini Pro

---

## Modelos (Models)

### Entidade: Tarefa

Responsável por representar e manipular tarefas no sistema.

#### Atributos (tabela `tarefas` no PostgreSQL):

| Atributo    | Tipo     | Descrição                        |
|-------------|----------|----------------------------------|
| idtarefa    | SERIAL   | Identificador único da tarefa    |
| nome        | TEXT     | Nome da tarefa                   |
| descricao   | TEXT     | Descrição da tarefa              |
| prazo       | DATE     | Prazo de conclusão               |
| estatus     | TEXT     | Status atual (ex: pendente, feito)

#### Métodos do model `Tarefa`:

- `listarTarefas()`: Retorna todas as tarefas do banco de dados.
- (Outros métodos como `criar`, `editar`, `excluir` podem ser adicionados ao model futuramente.)

#### Relações entre entidades:
Atualmente não há outras entidades além de `Tarefa`, mas o sistema pode ser expandido com `Usuário`, `Etiqueta`, `Projeto`, etc.

---

## Controladores (Controllers)

### Controller: `TarefaController`

Gerencia a lógica de negócio referente à entidade Tarefa e responde às requisições HTTP.

#### Ações (methods):

- `criarTarefa(req, res)`
  - Entrada: `req.body` com `{ nome, descricao, prazo, estatus }`
  - Saída: JSON com a tarefa criada
  - Responsabilidade: Inserir nova tarefa no banco

- `listarTarefas(req, res)`
  - Entrada: nenhuma
  - Saída: JSON com todas as tarefas
  - Responsabilidade: Recuperar e retornar todas as tarefas

- `editarTarefa(req, res)`
  - Entrada: `req.params.nomeAntigo`, `req.body` com `{ nomeNovo, descricao, prazo, estatus }`
  - Saída: JSON com a tarefa atualizada
  - Responsabilidade: Atualizar os dados da tarefa

- `excluirTarefa(req, res)`
  - Entrada: `req.params.id`
  - Saída: Mensagem de sucesso ou erro
  - Responsabilidade: Remover tarefa do banco

#### Integração com Models e Views:
- Os controllers chamam diretamente os métodos definidos nos Models (`Tarefa.listarTarefas()`, por exemplo).
- Ainda não há Views conectadas ao sistema; as respostas são em JSON (API RESTful).

## Infraestrutura

### Componentes:

- **Back-End:** Node.js com Express
- **Banco de Dados:** PostgreSQL
- **Driver de conexão:** `pg` (node-postgres)
- **Organização de pastas:** Separação clara por `models`, `controllers`, `routes`, `config`

### Integração com a Arquitetura MVC:

- Models encapsulam o acesso ao banco via `pool.query()`.
- Controllers utilizam os models e tratam as requisições HTTP.
- As views serão adicionadas posteriormente para compor a camada de interface.

### Justificativa de escolhas:

- **Node.js + Express:** leve, modular e rápido para desenvolver APIs REST.
- **PostgreSQL:** robusto, seguro e com ótima performance para operações relacionais.
- **Arquitetura MVC:** facilita organização, testabilidade e manutenção do código.

---

## Implicações da Arquitetura

### Escalabilidade:
- A separação de responsabilidades (MVC) permite escalar cada camada independentemente.
- Fácil integração futura com frontend.

### Manutenção:
- Código organizado por responsabilidade facilita leitura e alterações localizadas.
- Adição de novas funcionalidades pode ser feita com impacto mínimo no restante do sistema.

### Testabilidade:
- Cada camada pode ser testada isoladamente.
- Possível incluir testes unitários para controllers e models com ferramentas como Jest.
