const Actualite = require('../models/Actualite');
const cloudinary = require('../middleware/cloudinary');

//createActualite
exports.createActualite = async (req, res, next) => {
  // handling the image 
  var imageUrl = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  var imageUrl1 ="https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  var imageUrl2 ="https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  var imageUrl3 ="https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  var imageUrl4 ="https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  var imageUrl5 ="https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  var imageUrl6 ="https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

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
  try {
    const fileStr = req.body.imageUrl1
     await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    }).then((res)=>{
        imageUrl1 = res.url
        console.log("imageUrl : ", imageUrl1)
    })
} catch (error) {
    console.log(error)
}
try {
    const fileStr = req.body.imageUrl2
     await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    }).then((res)=>{
        imageUrl2 = res.url
        console.log("imageUrl : ", imageUrl2)
    })
} catch (error) {
    console.log(error)
}
try {
    const fileStr = req.body.imageUrl3
     await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    }).then((res)=>{
        imageUrl3 = res.url
        console.log("imageUrl : ", imageUrl3)
    })
} catch (error) {
    console.log(error)
}
try {
    const fileStr = req.body.imageUrl4
     await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    }).then((res)=>{
        imageUrl4 = res.url
        console.log("imageUrl : ", imageUrl4)
    })
} catch (error) {
    console.log(error)
}
try {
    const fileStr = req.body.imageUrl5
     await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    }).then((res)=>{
        imageUrl5 = res.url
        console.log("imageUrl : ", imageUrl5)
    })
} catch (error) {
    console.log(error)
}
try {
    const fileStr = req.body.imageUrl6
     await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    }).then((res)=>{
        imageUrl6 = res.url
        console.log("imageUrl : ", imageUrl6)
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
       imageUrl1,
       imageUrl2,
       imageUrl3,
       imageUrl4,
       imageUrl5,
       imageUrl6,
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

  if(req.body.imageUrl && req.body.imageUrl.startsWith("http")){
      imageUrl = req.body.imageUrl
  }else{
  var imageUrl = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default
  
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
   // handling the image 
   if(req.body.imageUrl1 && req.body.imageUrl1.startsWith("http")){
    imageUrl1 = req.body.imageUrl1
}else{
var imageUrl1 = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

try {
    const fileStr = req.body.imageUrl1
    const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    })
    imageUrl1 = uploadedResponse.url
} catch (error) {
    console.log(error)
}
}
 // handling the image 
 if(req.body.imageUrl2 && req.body.imageUrl2.startsWith("http")){
    imageUrl2 = req.body.imageUrl2
}else{
var imageUrl2 = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

try {
    const fileStr = req.body.imageUrl2
    const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    })
    imageUrl2 = uploadedResponse.url
} catch (error) {
    console.log(error)
}
}
 // handling the image 
 if(req.body.imageUrl3 && req.body.imageUrl3.startsWith("http")){
    imageUrl3 = req.body.imageUrl3
}else{
var imageUrl3 = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

try {
    const fileStr = req.body.imageUrl3
    const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    })
    imageUrl3 = uploadedResponse.url
} catch (error) {
    console.log(error)
}
}
 // handling the image 
 if(req.body.imageUrl4 && req.body.imageUrl4.startsWith("http")){
    imageUrl4 = req.body.imageUrl4
}else{
var imageUrl4 = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

try {
    const fileStr = req.body.imageUrl4
    const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    })
    imageUrl4 = uploadedResponse.url
} catch (error) {
    console.log(error)
}
}
 // handling the image 
 if(req.body.imageUrl5 && req.body.imageUrl5.startsWith("http")){
    imageUrl5 = req.body.imageUrl5
}else{
var imageUrl5 = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

try {
    const fileStr = req.body.imageUrl5
    const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    })
    imageUrl5 = uploadedResponse.url
} catch (error) {
    console.log(error)
}
}
 // handling the image 
 if(req.body.imageUrl6 && req.body.imageUrl6.startsWith("http")){
    imageUrl6 = req.body.imageUrl6
}else{
var imageUrl6 = "https://res.cloudinary.com/dqwg8dwph/image/upload/v1631061136/aupwuaw0ijqeuifjzkkd.png"//a logo default

try {
    const fileStr = req.body.imageUrl6
    const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
        upload_preset : process.env.UPLOAD_PRESET
    })
    imageUrl6 = uploadedResponse.url
} catch (error) {
    console.log(error)
}
}
 
  ////////////////

  Actualite.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl,imageUrl1:imageUrl1,imageUrl2:imageUrl2,imageUrl3:imageUrl3,imageUrl4:imageUrl4,imageUrl5:imageUrl5,imageUrl6:imageUrl6})
      .then(() => res.status(200).json({ msg: 'Actualite modified' }))
      .catch(err => res.status(400).json({ error: err }))
}