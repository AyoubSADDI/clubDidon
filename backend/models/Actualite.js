const mongoose = require('mongoose');

const actualiteSchema = mongoose.Schema({
  userName: { type: String},
  titre: { type: String},
  Date: { type: String},
  contenu: { type: String},
  categorie: { type: String},
});

module.exports = mongoose.model('Actualite', actualiteSchema);