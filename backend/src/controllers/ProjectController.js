const Project = require('../models/Project');

module.exports = {
  async index (request, response) {
    const project = await Project.find();
    return response.json(project);
  },

  async create (request, response) {
    const project = await Post.create(request.body);
    return response.send({ project });
  },

  async delete (request, response) {
    const { id } = request.params;
    const project = await Post.findByIdAndRemove(id);
    return response.json(project);
  },

  async update (request, response) {
    const { id } = request.params;
    const { title, text, link, img_url } = request.body;

    const project = await Post.findByIdAndUpdate(id, {
      title, 
      text, 
      link, 
      img_url,
    }, { new: true });

    return response.json(project);
  }
}
