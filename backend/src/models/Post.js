const mongoose = require('../database/connection');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  img_url: {
    type: String,
    require: true
  },
  post_url: {
    type: String,
    require: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
