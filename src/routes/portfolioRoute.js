const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', portfolioController.getPorfolio);
router.get('/:id', portfolioController.getProjetoById);
router.post('/', portfolioController.createPorjeto);
router.put('/:id', portfolioController.updateProjeto);
router.delete('/:id', portfolioController.deleteProjeto);

module.exports = router; 