const Filme = require('../models/Filme');

exports.getFilmes = async (req, res) => {
  try {
    const filmes = await Filme.find().populate('categoria');
    res.json(filmes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFilmeById = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id).populate('categoria');
    if (filme == null) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    res.json(filme);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFilme = async (req, res) => {
  const filme = new Filme({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    ano: req.body.ano,
    categoria: req.body.categoria,
    capa: req.body.capa
  });

  try {
    const novoFilme = await filme.save();
    res.status(201).json(novoFilme);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateFilme = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (filme == null) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }

    filme.titulo = req.body.titulo || filme.titulo;
    filme.descricao = req.body.descricao || filme.descricao;
    filme.ano = req.body.ano || filme.ano;
    filme.categoria = req.body.categoria || filme.categoria;
    filme.capa = req.body.capa || filme.capa;

    const filmeAtualizado = await filme.save();
    res.json(filmeAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFilme = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (filme == null) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }

    await filme.remove();
    res.json({ message: 'Filme deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};