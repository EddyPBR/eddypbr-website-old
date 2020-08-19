const Project = require('../models/Project');

module.exports = {
  async index (request, response) {
    const project = await Project.find();
    return response.json(project);
  },

  async create (request, response) {
    const project = await Project.create(request.body);
    return response.send({ project });
  },

  async delete (request, response) {
    const { id } = request.params;
    const project = await Project.findByIdAndRemove(id);
    return response.json(project);
  },

  async update (request, response) {
    const { id } = request.params;
    const { title, text, link, img_url } = request.body;

    const project = await Project.findByIdAndUpdate(id, {
      title, 
      text, 
      github_url,
      figma_url,
      web_url, 
      img_url,
    }, { new: true });

    return response.json(project);
  }
}
