const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
  ano: Number,
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  capa: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Filme', FilmeSchema);