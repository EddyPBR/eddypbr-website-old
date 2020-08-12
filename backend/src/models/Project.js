const mongoose = require('../database/connection');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  link: {
    type: [String],
    require: true
  },
  img_url: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
