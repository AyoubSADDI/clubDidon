const Actualite = require('../models/Actualite');

exports.createActualite = (req, res, next) => {
  console.log(req.body);
  const actualite = new Actualite({
    userName: req.body.userName,
    titre: req.body.titre,
    Date: req.body.Date,
    contenu: req.body.contenu,
    categorie: req.body.categorie
  });
  actualite.save().then(
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

exports.getOneActualite = (req, res, next) => {
    Actualite.findOne({
    _id: req.params.id
  }).then(
    (actualite) => {
      res.status(200).json(actualite);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyActualite = (req, res, next) => {
    const actualite = new Actualite({
        _id: req.params.id,
        userName: req.body.userName,
        titre: req.body.titre,
        Date: req.body.Date,
        contenu: req.body.contenu,
        categorie: req.body.categorie
      });
      Actualite.updateOne({_id: req.params.id}, actualite).then(
    () => {
      res.status(201).json({
        message: 'Actualite updated successfully!'
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

exports.deleteActualite = (req, res, next) => {
    Actualite.deleteOne({_id: req.params.id}).then(
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

exports.getAllActualite = (req, res, next) => {
    Actualite.find().then(
    (actualite) => {
      res.status(200).json(actualite);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};