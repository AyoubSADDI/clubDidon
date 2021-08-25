const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth , stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;
// router.post('/api/stuff' , (req, res , next) =>{
   
//       var thing = new Thing({
//         _id: new mongoose.Types.ObjectId(),
//         thing: req.body.thing ,
//         description: req.body.description ,
//         imageUrl: req.body.imageUrl ,
//         userId : req.body.userId,
//         price : req.body.price,
//       });
//       thing.save().then(result =>{
//         console.log(result);
//       }).catch(err => console.log(err));
  
//       res.status(201).json({
//         message : "post image work",
//         createdJeux: thing
//       });
//   });
