## Aplicação desenvolvida Por: 
<a href="https://www.linkedin.com/in/-rafael-cabral/">Rafael Cabral</a> <br>

## <a name="c1"></a>1. Introdução 

A crescente demanda por produtividade no cotidiano tem evidenciado a importância da organização pessoal, especialmente diante de grandes volumes de tarefas. A ausência de um método estruturado pode comprometer significativamente a eficiência e o cumprimento de atividades. Diante desse cenário, desenvolveu-se uma aplicação web voltada à organização de tarefas, com uma proposta gamificada e interface intuitiva, visando estimular o engajamento e facilitar o gerenciamento diário. A aplicação dispõe de um sistema de autenticação de usuários, garantindo a preservação do progresso mesmo após atualizações da página. Para isso, está conectada a um banco de dados responsável pelo armazenamento seguro das informações de login, quadros, tarefas e seus respectivos status.

## Diagrama do banco de dados

![Modelo_Banco](https://github.com/user-attachments/assets/220685af-c886-4429-b702-f1e7eca046a7)

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
