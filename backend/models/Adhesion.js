const mongoose = require('mongoose');

const adhesionSchema = mongoose.Schema({
  nom: { type: String},
  prenom: { type: String},
  dateNais: { type: String},
  cin: { type: Number},
  societe: { type: String},
  profession: { type: String},
  telephone: { type: Number},
  email: { type: String},
  adresse: { type: String},
  createdAt: {type: Date , default: Date.now}
});

module.exports = mongoose.model('Adhesion', adhesionSchema);