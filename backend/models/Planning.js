const mongoose = require('mongoose');

const planningSchema = mongoose.Schema({
  userName: { type: String},
  titre: { type: String},
  Date: { type: String},
  description: { type: String},
});

module.exports = mongoose.model('Planning', planningSchema);