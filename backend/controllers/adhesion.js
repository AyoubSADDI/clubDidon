const Adhesion = require('../models/Adhesion');

exports.createAdhesion = (req, res, next) => {
  console.log(req.body);
  const adhesion = new Adhesion({
    nom: req.body.nom,
    prenom: req.body.prenom,
    dateNais: req.body.dateNais,
    cin: req.body.cin,
    societe: req.body.societe,
    profession: req.body.profession,
    telephone: req.body.telephone,
    email: req.body.email,
    adresse: req.body.adresse,
    createdAt: Date.now(),
    paiement:"Non Payée",

  });
  adhesion.save().then(
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

exports.getOneAdhesion = (req, res, next) => {
    Adhesion.findOne({
    _id: req.params.id
  }).then(
    (adhesion) => {
      res.status(200).json(adhesion);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyAdhesion = (req, res, next) => {
  const adhesion = new Adhesion({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    dateNais: req.body.dateNais,
    cin: req.body.cin,
    societe: req.body.societe,
    profession: req.body.profession,
    telephone: req.body.telephone,
    email: req.body.email,
    adresse: req.body.adresse,
    paiement: req.body.paiement
  });
  Adhesion.updateOne({_id: req.params.id}, adhesion).then(
    () => {
      res.status(201).json({
        message: 'Adhesion updated successfully!'
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

exports.deleteAdhesion = (req, res, next) => {
    Adhesion.deleteOne({_id: req.params.id}).then(
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

exports.getAllAdhesion = (req, res, next) => {
    Adhesion.find().then(
    (adhesions) => {
      res.status(200).json(adhesions);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};