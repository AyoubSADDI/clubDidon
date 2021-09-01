const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const planningCtrl = require('../controllers/planning');

router.get('/', planningCtrl.getAllPlanning);
router.post('/', auth, planningCtrl.createPlanning);
router.get('/:id', auth, planningCtrl.getOnePlanning);
router.put('/:id', auth, planningCtrl.modifyPlanning);
router.delete('/:id', auth, planningCtrl.deletePlanning);

module.exports = router;