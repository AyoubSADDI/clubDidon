const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const executifCtrl = require('../controllers/executif');

router.get('/', executifCtrl.getAllExecutif);
router.post('/', auth, executifCtrl.createExecutif);
router.get('/:id', auth, executifCtrl.getOneExecutif);
router.put('/:id', auth, executifCtrl.modifyExecutif);
router.delete('/:id', auth, executifCtrl.deleteExecutif);

module.exports = router;