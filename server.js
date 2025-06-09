const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); // ✅ IMPORTA o layout
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(expressLayouts); // ✅ ATIVA layouts

// EJS Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout'); // ✅ Define layout padrão: views/layout.ejs

// Rotas
app.use('/', taskRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});