const Conference = require('../models/Conference');
const cloudinary = require('cloudinary');

// CREATE Conference
exports.createConference = async (req, res, next) => {
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
 const conference = new Conference({
       userName: req.body.userName,
       titre: req.body.titre,
       Date: req.body.Date,
       imageUrl,
       description: req.body.description,
       descriptionDetail: req.body.descriptionDetail,
       lieux: req.body.lieux,
 });

 conference.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdConf: conference
 });
};

// GET ALL Conference
exports.getAllConference = (req, res, next) => {
  Conference.find()
      .then((conf) => res.status(200).json(conf))
      .catch(err => res.status(400).json({ error: err }))
}

//GET Single Conference
exports.getOneConference = (req, res, next) => {
  Conference.findById(req.params.id) // or Conference.findOne({_id : req.params.id})
      .then((conf) => res.status(200).json(conf))
      .catch(err => res.status(400).json({ error: err }))
}

//Delete Conference
exports.deleteConference = (req, res, next) => {
  Conference.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Conference with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//Update Conference
exports.modifyConference = async (req, res, next) => {
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

  Conference.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl })
      .then(() => res.status(200).json({ msg: 'Conference modified' }))
      .catch(err => res.status(400).json({ error: err }))
}