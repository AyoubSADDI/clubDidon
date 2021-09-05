const Actualite = require('../models/Actualite');
const cloudinary = require('cloudinary');

//createActualite
exports.createActualite = async (req, res, next) => {
  // handling the image 
  var imageUrl ="http://res.cloudinary.com/dqwg8dwph/image/upload/v1626548988/samples/cloudinary-logo-vector.svg"//a logo default
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
 const actualite = new Actualite({
       userName: req.body.userName,
       titre: req.body.titre,
       Date: req.body.Date,
       categorie: req.body.categorie,
       lieux: req.body.lieux,
       imageUrl,
       fbUrl: req.body.fbUrl,
       description: req.body.description,
       descriptionDetail: req.body.descriptionDetail,
       webSite: req.body.webSite, 
 });

 actualite.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdActualite: actualite
 });
};

// getAllActualite
exports.getAllActualite = (req, res, next) => {
  Actualite.find()
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//getOneActualite
exports.getOneActualite = (req, res, next) => {
  Actualite.findById(req.params.id) // or Actualite.findOne({_id : req.params.id})
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//deleteActualite
exports.deleteActualite = (req, res, next) => {
  Actualite.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Actualite with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//modifyActualite
exports.modifyActualite = async (req, res, next) => {
  // handling the image 
  if(req.body.imageUrl.startsWith("http")){
      imageUrl = req.body.imageUrl
  }else{
  var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
  
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

  Actualite.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl })
      .then(() => res.status(200).json({ msg: 'Actualite modified' }))
      .catch(err => res.status(400).json({ error: err }))
}