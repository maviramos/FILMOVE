const Usuario = require('../models/Usuario');

// Obter todos os usuários
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter um usuário por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar um novo usuário
exports.createUsuario = async (req, res) => {
  const usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  });

  try {
    const novoUsuario = await usuario.save();
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Atualizar um usuário
exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    usuario.nome = req.body.nome || usuario.nome;
    usuario.email = req.body.email || usuario.email;
    usuario.senha = req.body.senha || usuario.senha;

    const usuarioAtualizado = await usuario.save();
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deletar um usuário
exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    await usuario.remove();
    res.json({ message: 'Usuário deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};