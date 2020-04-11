const Post = require('../models/Post');

module.exports = {
  async index (request, response) {
    const post = await Post.find();
    return response.json(post);
  },

  async create (request, response) {
    const post = await Post.create(request.body);
    return response.send({ post });
  },

  async delete (request, response) {
    const { id } = request.params;
    const post = await Post.findByIdAndRemove(id);
    return response.json(post);
  },

  async update (request, response) {
    const { id } = request.params;
    const { title, author, description, img_url, post_url } = request.body;

    const post = await Post.findByIdAndUpdate(id, {
      title, 
      author, 
      description, 
      img_url, 
      post_url
    }, { new: true });

    return response.json(post);
  }
}
