const Executif = require('../models/Executif');
const cloudinary = require('../middleware/cloudinary');

// CREATE Executif
exports.createExecutif = async (req, res, next) => {
  // handling the image 
  var imageUrl = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631058027/d0refmfllwgiwqcb5xl4.png"//a logo default
  try {
      const fileStr = req.body.imageUrl
       await cloudinary.uploader.upload(fileStr,{
          upload_preset : process.env.UPLOAD_PRESET
      }).then((res)=>{
          imageUrl = res.url
          console.log("imageUrl : ", imageUrl)
      })
  } catch (error) {
      console.log(error)
  }
  ////////////////
 const executif = new Executif({
       userName: req.body.userName,
       name: req.body.name,
       role: req.body.role,
       imageUrl,
       description: req.body.description,     
 });

 executif.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdExecutif: executif
 });
};

// GET ALL Executifs
exports.getAllExecutif = (req, res, next) => {
    Executif.find()
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//GET Single Executif
exports.getOneExecutif = (req, res, next) => {
    Executif.findById(req.params.id) // or Executif.findOne({_id : req.params.id})
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//Delete Executif
exports.deleteExecutif = (req, res, next) => {
    Executif.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Executif with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//Update Executif
exports.modifyExecutif = async (req, res, next) => {
  // handling the image 
  if(req.body.imageUrl.startsWith("http")){
      imageUrl = req.body.imageUrl
  }else{
  var imageUrl = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631058027/d0refmfllwgiwqcb5xl4.png"//a logo default
  
  try {
      const fileStr = req.body.imageUrl
      const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
          upload_preset : process.env.UPLOAD_PRESET
      })
      imageUrl = uploadedResponse.url
  } catch (error) {
      console.log(error)
  }

  }
  ////////////////

  Executif.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl })
      .then(() => res.status(200).json({ msg: 'Executif modified' }))
      .catch(err => res.status(400).json({ error: err }))
}