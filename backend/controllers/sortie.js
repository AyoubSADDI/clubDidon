const Sortie = require('../models/Sortie');
const cloudinary = require('cloudinary');

// CREATE Sortie
exports.createSortie = async (req, res, next) => {
  // handling the image 
  var imageUrl = "http://res.cloudinary.com/dqwg8dwph/image/upload/v1626548988/samples/cloudinary-logo-vector.svg"//a logo default
  try {
      const fileStr = req.body.imageUrl
       await cloudinary.uploader.upload(fileStr,{
          upload_preset : 'photos'
      }).then((res)=>{
          imageUrl = res.url
          console.log("imageUrl : ", imageUrl)
      })
  } catch (error) {
      console.log(error)
  }
  ////////////////
 const sortie = new Sortie({
       userName: req.body.userName,
       titre: req.body.titre,
       Date: req.body.Date,
       imageUrl,
       description: req.body.description,
       descriptionDetail: req.body.descriptionDetail,
       lieux: req.body.lieux      
 });

 sortie.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdSortie: sortie
 });
};

// GET ALL Sortie
exports.getAllSortie = (req, res, next) => {
  Sortie.find()
      .then((sort) => res.status(200).json(sort))
      .catch(err => res.status(400).json({ error: err }))
}

//GET Single Sortie
exports.getOneSortie = (req, res, next) => {
  Sortie.findById(req.params.id) // or Sortie.findOne({_id : req.params.id})
      .then((sort) => res.status(200).json(sort))
      .catch(err => res.status(400).json({ error: err }))
}

//Delete Sortie
exports.deleteSortie = (req, res, next) => {
  Sortie.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Sortie with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//Update Sortie
exports.modifySortie = async (req, res, next) => {
  // handling the image 
  if(req.body.imageUrl.startsWith("http")){
      imageUrl = req.body.imageUrl
  }else{
  var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
  
  try {
      const fileStr = req.body.imageUrl
      const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
          upload_preset : 'photos'
      })
      imageUrl = uploadedResponse.url
  } catch (error) {
      console.log(error)
  }

  }
  ////////////////

  Sortie.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl })
      .then(() => res.status(200).json({ msg: 'Sortie modified' }))
      .catch(err => res.status(400).json({ error: err }))
}