const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.get('/', filmeController.getFilmes);
router.get('/:id', filmeController.getFilmeById);
router.post('/', filmeController.createFilme);
router.patch('/:id', filmeController.updateFilme);
router.delete('/:id', filmeController.deleteFilme);

module.exports = router;