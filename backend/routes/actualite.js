const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const actualiteCtrl = require('../controllers/actualite');

router.get('/', auth, actualiteCtrl.getAllActualite);
router.post('/', auth, actualiteCtrl.createActualite);
router.get('/:id', auth, actualiteCtrl.getOneActualite);
router.put('/:id', auth, actualiteCtrl.modifyActualite);
router.delete('/:id', auth, actualiteCtrl.deleteActualite);

module.exports = router;