CREATE TABLE Usuario (
  ID SERIAL PRIMARY KEY,
  Email VARCHAR(800) NOT NULL UNIQUE,
  Senha INT NOT NULL
);

-- Tabela de tarefas
CREATE TABLE Tarefas (
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