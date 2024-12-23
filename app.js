const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas básicas
const routes = require('./src/presentation/routes');
app.use('/api', routes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Bem-vindo ao NunesPaz Conecta!');
  });
  