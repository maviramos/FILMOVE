const express = require('express');
const router = express.Router();
const serieController = require('../controllers/serieController');

router.get('/', serieController.getSeries);
router.get('/:id', serieController.getSerieById);
router.post('/', serieController.createSerie);
router.patch('/:id', serieController.updateSerie);
router.delete('/:id', serieController.deleteSerie);

module.exports = router;