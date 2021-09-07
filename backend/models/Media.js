const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  userName: { type: String},
  titre: { type: String},
  Date: { type: Date},
  contenu: { type: String},
  urlMagazin:{ type: String},
  imageUrl:{ type: String},
 
});

module.exports = mongoose.model('Media', mediaSchema);