const Media = require('../models/Media');
const cloudinary = require('../middleware/cloudinary');

// CREATE Media
exports.createMedia = async (req, res, next) => {
  // handling the image 
  var imageUrl = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631058027/d0refmfllwgiwqcb5xl4.png"//a logo default

  try {
      const fileStr = req.body.imageUrl
       await cloudinary.uploader.upload(fileStr,{
          upload_preset : 'photos'
      }).then((res)=>{
          imageUrl = res.url
      })
  } catch (error) {
      console.log(error)
  }
 
  ////////////////
 const media = new Media({
       userName: req.body.userName,
       titre: req.body.titre,
       Date: req.body.Date,
       imageUrl,
       contenu: req.body.contenu,
       urlMagazin: req.body.urlMagazin,
 });

 media.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdMedia: media
 });
};

// GET ALL Medias
exports.getAllMedia = (req, res, next) => {
    Media.find()
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//GET Single Media
exports.getOneMedia = (req, res, next) => {
    Media.findById(req.params.id) // or Media.findOne({_id : req.params.id})
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//Delete Media
exports.deleteMedia = (req, res, next) => {
    Media.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Media with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//Update Media
exports.modifyMedia = async (req, res, next) => {
  // handling the image 
  if(req.body.imageUrl.startsWith("http")){
      imageUrl = req.body.imageUrl
  }else{
  var imageUrl = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631058027/d0refmfllwgiwqcb5xl4.png"//a logo default
  
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

  Media.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl })
      .then(() => res.status(200).json({ msg: 'Media modified' }))
      .catch(err => res.status(400).json({ error: err }))
}