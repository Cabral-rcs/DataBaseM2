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
