const mongoose = require('mongoose');

const executifSchema = mongoose.Schema({
  userName: { type: String},
  name: { type: String},
  role: { type: String},
  description: { type: String},
  imageUrl: { type: String},
});

module.exports = mongoose.model('Executif', executifSchema);