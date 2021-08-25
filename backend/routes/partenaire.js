const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const partenaireCtrl = require('../controllers/partenaire');

router.get('/' ,auth, partenaireCtrl.getAllPartenaire);
router.post('/',auth, partenaireCtrl.createPartenaire);
router.get('/:id', auth, partenaireCtrl.getOnePartenaire);
router.put('/:id', auth, partenaireCtrl.modifyPartenaire);
router.delete('/:id', auth, partenaireCtrl.deletePartenaire);

module.exports = router;