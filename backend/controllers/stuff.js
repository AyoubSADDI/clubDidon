const Thing = require('../models/thing');
const {cloudinary} = require('../middleware/cloudinary')





exports.createThing = async (req, res, next) => {
   // handling the image 
   var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
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
  console.log(req.body);
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });

  thing.save().then(result =>{
    console.log(result);
  }).catch(err => console.log(err));
  res.status(201).json({
    message : "post image work",
    createdStuff: thing
  });
};
  // thing.save().then(
  //   () => {
  //     res.status(201).json({
  //       message: 'Post saved successfully!'
  //     });
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error
  //     });
  //   }
  // );


// exports.createThing = (req, res, next) => {
//   const thingObject = JSON.parse(req.body.thing);
//   delete thingObject._id;
//   const thing = new Thing({
//     ...thingObject,
//     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//   });
//   thing.save()
//     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
// };

exports.getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// exports.modifyThing = (req, res, next) => {
//   const thingObject = req.file ?
//     {
//       ...JSON.parse(req.body.thing),
//       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//     } : { ...req.body };
//   Thing.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// };

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};