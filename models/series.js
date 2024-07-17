const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
  temporadas: Number,
  episodios: Number,
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  capa: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Serie', SerieSchema);