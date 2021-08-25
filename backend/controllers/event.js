const Event = require('../models/Event');
const cloudinary = require('cloudinary');

// CREATE Event
exports.createEvent = async (req, res, next) => {
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
 const event = new Event({
       userName: req.body.userName,
       titre: req.body.titre,
       Date: req.body.Date,
       imageUrl,
       description: req.body.description,
       descriptionDetail: req.body.descriptionDetail,
       lieux: req.body.lieux,
       
 });

 event.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdEvent: event
 });
};

// GET ALL Events
exports.getAllEvent = (req, res, next) => {
  Event.find()
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//GET Single Event
exports.getOneEvent = (req, res, next) => {
  Event.findById(req.params.id) // or Event.findOne({_id : req.params.id})
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//Delete Event
exports.deleteEvent = (req, res, next) => {
  Event.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Event with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//Update Event
exports.modifyEvent = async (req, res, next) => {
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

  Event.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl })
      .then(() => res.status(200).json({ msg: 'Event modified' }))
      .catch(err => res.status(400).json({ error: err }))
}