const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const mediaCtrl = require('../controllers/media');

router.get('/', mediaCtrl.getAllMedia);
router.post('/', auth, mediaCtrl.createMedia);
router.get('/:id', auth, mediaCtrl.getOneMedia);
router.put('/:id', auth, mediaCtrl.modifyMedia);
router.delete('/:id', auth, mediaCtrl.deleteMedia);

module.exports = router;