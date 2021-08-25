const mongoose = require('mongoose');

const partenaireSchema = mongoose.Schema({
  userName: { type: String},
  imageUrl: { type: String},
  nomP: { type: String},
  proprieteLogo: { type: String},
});

module.exports = mongoose.model('Partenaire', partenaireSchema);