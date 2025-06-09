## Aplicação desenvolvida Por: 
<a href="https://www.linkedin.com/in/-rafael-cabral/">Rafael Cabral</a> <br>

## <a name="c1"></a>1. Introdução 

A crescente demanda por produtividade no cotidiano tem evidenciado a importância da organização pessoal, especialmente diante de grandes volumes de tarefas. A ausência de um método estruturado pode comprometer significativamente a eficiência e o cumprimento de atividades. Diante desse cenário, desenvolveu-se uma aplicação web voltada à organização de tarefas, com uma proposta gamificada e interface intuitiva, visando estimular o engajamento e facilitar o gerenciamento diário. A aplicação dispõe de um sistema de autenticação de usuários, garantindo a preservação do progresso mesmo após atualizações da página. Para isso, está conectada a um banco de dados responsável pelo armazenamento seguro das informações de login, quadros, tarefas e seus respectivos status.

## Diagrama do banco de dados
![Diagrama (2)](https://github.com/user-attachments/assets/9d8e8a8c-32fb-4b57-b3f6-a51d8f093599)


### Modelo físico e lógico:
``` sql

-- Tabela de tarefas
CREATE TABLE Tarefa (
  ID SERIAL PRIMARY KEY,
  Nome VARCHAR(800) NOT NULL,
  Descricao VARCHAR(800),
  Estatus VARCHAR(20)
);

```

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

### Entidade: Tarefa

Responsável por representar e manipular tarefas no sistema.

#### Atributos (tabela `tarefas` no PostgreSQL):

| Atributo    | Tipo     | Descrição                        |
|-------------|----------|----------------------------------|
| idtarefa    | SERIAL   | Identificador único da tarefa    |
| titulo        | VARCHAR(255)     | Nome da tarefa                   |
| descricao   | TEXT     | Descrição da tarefa              |               |
| estatus     | VARCHAR(255)    | Status atual (ex: To do, Doing e Done)

.

# 📜 Documentação do Projeto 

## - Controller: `taskController`

## Função

Gerencia a lógica de negócio referente à entidade **Tarefa** e responde às requisições HTTP, tanto para **páginas HTML** (EJS) quanto para **API REST** (fetch via `/api`).

---

## Ações do Controller (Métodos)

### `list(req, res)`

* **Entrada**: nenhuma
* **Saída**: renderiza a view `index.ejs` com a lista de tarefas
* **Responsabilidade**: Buscar todas as tarefas no banco e repassá-las para exibição

---

###  `create(req, res)`

* **Entrada**: `req.body` com `{ title, description, status }`
* **Saída**: Redireciona para `/` após criação
* **Responsabilidade**: Inserir nova tarefa no banco de dados

---

###  `delete(req, res)`

* **Entrada**: `req.params.id`
* **Saída**: Redireciona para `/` após exclusão
* **Responsabilidade**: Remover uma tarefa do banco de dados

---

###  `kanban(req, res)`

* **Entrada**: nenhuma
* **Saída**: renderiza `kanban.ejs` com tarefas agrupadas por status (`To Do`, `Doing`, `Done`)
* **Responsabilidade**: Organizar visualmente as tarefas em colunas estilo Kanban

---

### `apiList(req, res)`

* **Entrada**: nenhuma
* **Saída**: JSON com todas as tarefas
* **Responsabilidade**: Fornece os dados brutos das tarefas para uso por `fetch()`

---

### `apiCreate(req, res)`

* **Entrada**: `req.body` com `{ title, description, status }`
* **Saída**: JSON da tarefa criada
* **Responsabilidade**: Criar nova tarefa e retornar os dados

---

###  `apiUpdate(req, res)`

* **Entrada**: `req.params.id`, `req.body` com `{ title, description, status }`
* **Saída**: JSON com a tarefa atualizada
* **Responsabilidade**: Atualizar os dados da tarefa no banco

---

###  `apiDelete(req, res)`

* **Entrada**: `req.params.id`
* **Saída**: Mensagem JSON de sucesso
* **Responsabilidade**: Remover tarefa do banco via API

---

##  Integração com Models e Views

* Os **controllers** chamam diretamente os métodos definidos nos **models** (`taskModel.getAll()`, `taskModel.create()` etc.).
* As **views** (EJS) são renderizadas com dados passados do controller (`res.render(...)`).
* Uma camada de **API RESTful** foi implementada em rotas separadas: `/api/tasks`.

---

##  Infraestrutura

* **Back-End**: Node.js com Express
* **Banco de Dados**: PostgreSQL
* **Driver**: `pg` (node-postgres)
* **Middleware**: `express-ejs-layouts`
* **Front-End**: EJS + TailwindCSS
* **Formulários**: Com `fetch()` (sem reload da página nas rotas `/api`)

---

##  Organização de Pastas Principais

```
/controllers   => taskController.js
/models        => taskModel.js
/routes        => taskRoutes.js, apiRoutes.js
/views         => index.ejs, kanban.ejs, layout.ejs
/config        => db.js
/public        => (estático, se necessário)
server.js      => ponto de entrada
```

---

## Integração com a Arquitetura MVC

| Camada         | Responsabilidade                                                             |
| -------------- | ---------------------------------------------------------------------------- |
| **Model**      | Encapsula acesso ao banco de dados com `pool.query()` (ex: `taskModel.js`)   |
| **Controller** | Gerencia lógica da aplicação e as requisições HTTP (ex: `taskController.js`) |
| **View**       | Interface com o usuário via EJS (`index.ejs`, `kanban.ejs`)                  |

---

##  Justificativa de Escolhas Técnicas

* **Node.js + Express**: leve, modular, ideal para aplicações web rápidas
* **PostgreSQL**: banco robusto e confiável com excelente suporte relacional
* **MVC**: facilita manutenção, testes e organização de código
* **EJS**: ideal para renderizar HTML dinâmico de forma simples
* **fetch() + API**: moderniza o front-end sem recarregar a página

---

##  Implicações da Arquitetura

### Escalabilidade

* Camadas independentes permitem escalar separadamente back, model e views
* APIs REST facilitam futura integração com frontend SPA (React, Vue etc.)

### Manutenção

* Separacão clara facilita leitura e adição de novas funcionalidades

### Testabilidade

* Models e controllers são facilmente testáveis com Jest ou Supertest
