const Post = require('../models/Post');

module.exports = {
  async index (request, response) {
    const post = await Post.find();
    return response.json(post);
  },

  async create (request, response) {
    const post = await Post.create(request.body);
    return response.send({ post });
  }
}
