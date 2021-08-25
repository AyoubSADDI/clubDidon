const Planning = require('../models/Planning');

exports.createPlanning = (req, res, next) => {
  console.log(req.body);
  const planning = new Planning({
    userName: req.body.userName,
    titre: req.body.titre,
    Date: req.body.Date,
    description: req.body.description    
  });
  planning.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
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

exports.getOnePlanning = (req, res, next) => {
  Planning.findOne({
    _id: req.params.id
  }).then(
    (planning) => {
      res.status(200).json(planning);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyPlanning = (req, res, next) => {
  const planning = new Planning({
    _id: req.params.id,
    userName: req.body.userName,
    titre: req.body.titre,
    Date: req.body.Date,
    description: req.body.description

  });
  Planning.updateOne({_id: req.params.id}, planning).then(
    () => {
      res.status(201).json({
        message: 'Planning updated successfully!'
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

exports.deletePlanning = (req, res, next) => {
  Planning.deleteOne({_id: req.params.id}).then(
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

exports.getAllPlanning = (req, res, next) => {
  Planning.find().then(
    (plannings) => {
      res.status(200).json(plannings);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};