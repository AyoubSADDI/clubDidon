const mongoose = require('mongoose');

const actualiteSchema = mongoose.Schema({
  userName: { type: String},
  ptitre: { type: String},
  dtitre: { type: String},
  contenu: { type: String},
});

module.exports = mongoose.model('Actualite', actualiteSchema);