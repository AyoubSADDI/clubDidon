const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const adhesionCtrl = require('../controllers/adhesion');

router.get('/', auth, adhesionCtrl.getAllAdhesion);
router.post('/', adhesionCtrl.createAdhesion);
router.get('/:id', auth, adhesionCtrl.getOneAdhesion);
router.put('/:id', auth, adhesionCtrl.modifyAdhesion);
router.delete('/:id', auth, adhesionCtrl.deleteAdhesion);

module.exports = router;