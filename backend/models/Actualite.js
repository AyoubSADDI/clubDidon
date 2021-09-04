const mongoose = require('mongoose');

const actualiteSchema = mongoose.Schema({
  userName: { type: String},
  titre: { type: String},
  Date: { type: Date},
  categorie: { type: String},
  lieux: { type: String},
  imageUrl: {type: String},
  fbUrl: {type:String},
  description: { type: String},
  descriptionDetail: { type: String},
  webSite: { type: String},
});

module.exports = mongoose.model('Actualite', actualiteSchema);