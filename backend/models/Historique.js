const mongoose = require('mongoose');

const historiqueSchema = mongoose.Schema({
  userId: { type: String},
  date: [],
});

module.exports = mongoose.model('Historique', historiqueSchema);