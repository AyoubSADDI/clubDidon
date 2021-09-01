const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const sortieCtrl = require('../controllers/sortie');

router.get('/', sortieCtrl.getAllSortie);
router.post('/', auth, sortieCtrl.createSortie);
router.get('/:id', sortieCtrl.getOneSortie);
router.put('/:id', auth, sortieCtrl.modifySortie);
router.delete('/:id', auth, sortieCtrl.deleteSortie);

module.exports = router;