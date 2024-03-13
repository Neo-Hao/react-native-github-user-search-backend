const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  _id: String,
  login: String,
  name: String,
  avatar_url: String,
});

module.exports = mongoose.model('GitHubProfile', profileSchema);
