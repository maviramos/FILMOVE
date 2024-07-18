const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const filmeRoutes = require('./routes/filmeRoutes');
const serieRoutes = require('./routes/serieRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/filmes', filmeRoutes);
app.use('/api/series', serieRoutes);
app.use('/api/usuarios', usuarioRoutes);


app.use(express.static('public'));


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`));