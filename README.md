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
![alt text](<Captura de tela 2025-06-08 231001.png>)
![alt text](<Captura de tela 2025-06-08 231022.png>)

## Como executar o programa: 
1. Clone o repositório para alguma IDE: https://github.com/Cabral-rcs/DataBaseM2.git
2. Insira o comando "npm init -y" para criar automaticamente um arquivo package.json, no terminal
3. Instale as bibliotecas: npm install express ejs express-ejs-layouts pg dotenv
4. Configure seu banco de dados com um arquivo .env
5. Digite no terminal: npm run dev
6. Abra uma guia no navegador e coloque: http://localhost:3000
7. Programa rodando!


