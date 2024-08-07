const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Categoria', CategoriaSchema);