## Aplicação desenvolvida Por: 
<a href="https://www.linkedin.com/in/-rafael-cabral/">Rafael Cabral</a> <br>

## <a name="c1"></a>1. Introdução 

A crescente demanda por produtividade no cotidiano tem evidenciado a importância da organização pessoal, especialmente diante de grandes volumes de tarefas. A ausência de um método estruturado pode comprometer significativamente a eficiência e o cumprimento de atividades. Diante desse cenário, desenvolveu-se uma aplicação web voltada à organização de tarefas, com uma proposta gamificada e interface intuitiva, visando estimular o engajamento e facilitar o gerenciamento diário. A aplicação dispõe de um sistema de autenticação de usuários, garantindo a preservação do progresso mesmo após atualizações da página. Para isso, está conectada a um banco de dados responsável pelo armazenamento seguro das informações de login, quadros, tarefas e seus respectivos status.

## Diagrama do banco de dados
![Diagrama (2)](https://github.com/user-attachments/assets/9d8e8a8c-32fb-4b57-b3f6-a51d8f093599)


### Modelo físico e lógico:
``` sql
-- Tabela de usuários
CREATE TABLE Usuario (
  ID SERIAL PRIMARY KEY,
  Email VARCHAR(800) NOT NULL UNIQUE,
  Senha INT NOT NULL
);

-- Tabela de tarefas
CREATE TABLE Tarefa (
  IDTarefa SERIAL PRIMARY KEY,
  Nome VARCHAR(800) NOT NULL,
  Descricao VARCHAR(800),
  Prazo DATE,
  Estatus INT
);

-- Tabela de quadros (ligação entre usuários e tarefas)
CREATE TABLE Quadro (
  IDQuadro SERIAL PRIMARY KEY,
  IDUsuario INT NOT NULL,
  IDTarefa INT NOT NULL,
  FOREIGN KEY (IDUsuario) REFERENCES Usuario(ID) ON DELETE CASCADE,
  FOREIGN KEY (IDTarefa) REFERENCES Tarefa(IDTarefa) ON DELETE CASCADE
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
