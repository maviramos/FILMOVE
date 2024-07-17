const Serie = require('../models/Serie');

// Obter todas as séries
exports.getSeries = async (req, res) => {
  try {
    const series = await Serie.find().populate('categoria');
    res.json(series);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter uma série por ID
exports.getSerieById = async (req, res) => {
  try {
    const serie = await Serie.findById(req.params.id).populate('categoria');
    if (serie == null) {
      return res.status(404).json({ message: 'Série não encontrada' });
    }
    res.json(serie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar uma nova série
exports.createSerie = async (req, res) => {
  const serie = new Serie({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    temporadas: req.body.temporadas,
    episodios: req.body.episodios,
    categoria: req.body.categoria,
    capa: req.body.capa
  });

  try {
    const novaSerie = await serie.save();
    res.status(201).json(novaSerie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Atualizar uma série
exports.updateSerie = async (req, res) => {
  try {
    const serie = await Serie.findById(req.params.id);
    if (serie == null) {
      return res.status(404).json({ message: 'Série não encontrada' });
    }

    serie.titulo = req.body.titulo || serie.titulo;
    serie.descricao = req.body.descricao || serie.descricao;
    serie.temporadas = req.body.temporadas || serie.temporadas;
    serie.episodios = req.body.episodios || serie.episodios;
    serie.categoria = req.body.categoria || serie.categoria;
    serie.capa = req.body.capa || serie.capa;

    const serieAtualizada = await serie.save();
    res.json(serieAtualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deletar uma série
exports.deleteSerie = async (req, res) => {
  try {
    const serie = await Serie.findById(req.params.id);
    if (serie == null) {
      return res.status(404).json({ message: 'Série não encontrada' });
    }

    await serie.remove();
    res.json({ message: 'Série deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};