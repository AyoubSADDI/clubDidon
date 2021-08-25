const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const conferenceCtrl = require('../controllers/conference');

router.get('/' ,auth, conferenceCtrl.getAllConference);
router.post('/',auth, conferenceCtrl.createConference);
router.get('/:id', auth, conferenceCtrl.getOneConference);
router.put('/:id', auth, conferenceCtrl.modifyConference);
router.delete('/:id', auth, conferenceCtrl.deleteConference);

module.exports = router;