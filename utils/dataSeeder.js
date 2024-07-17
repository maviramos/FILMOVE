const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('../config/db');
const Filme = require('../models/Filme');
const Serie = require('../models/Serie');
const Categoria = require('../models/Categoria');
const Usuario = require('../models/Usuario');

connectDB();

const seedData = async () => {
  try {
    await Filme.deleteMany({});
    await Serie.deleteMany({});
    await Categoria.deleteMany({});
    await Usuario.deleteMany({});

    const categorias = await Categoria.insertMany([
      { nome: 'Ação', descricao: 'Filmes de ação' },
      { nome: 'Comédia', descricao: 'Filmes de comédia' },
      { nome: 'Drama', descricao: 'Filmes de drama' },
    ]);

    const filmes = await Filme.insertMany([
      { titulo: 'Velozes e Furiosos', descricao: 'Corridas de carro', ano: 2001, categoria: categorias[0]._id, capa: 'velozes-e-furiosos.jpg' },
      { titulo: 'Todo Mundo em Pânico', descricao: 'Paródia de filmes de terror', ano: 2000, categoria: categorias[1]._id, capa: 'todo-mundo-em-panico.jpg' },
    ]);

    const series = await Serie.insertMany([
      { titulo: 'Breaking Bad', descricao: 'Químico vira traficante', temporadas: 5, episodios: 62, categoria: categorias[2]._id, capa: 'breaking-bad.jpg' },
    ]);

    const usuarios = await Usuario.insertMany([
      { nome: 'John Doe', email: 'john@example.com', senha: 'password123' },
    ]);

    console.log('Dados populados com sucesso!');
    process.exit();
  } catch (err) {
    console.error('Erro ao popular dados:', err);
    process.exit(1);
  }
};

seedData();