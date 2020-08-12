const Portfolio = require('../models/Portfolio');

module.exports = {
  async index (request, response) {
    const portfolio = await Portfolio.find();
    return response.json(portfolio);
  },

  async create (request, response) {
    const portfolio = await Portfolio.create(request.body);
    return response.send({ portfolio });
  },

  async delete (request, response) {
    const { id } = request.params;
    const portfolio = await Portfolio.findByIdAndRemove(id);
    return response.json(portfolio);
  },

  async update (request, response) {
    const { id } = request.params;
    const { title, text, link, img_url } = request.body;

    const portfolio = await Portfolio.findByIdAndUpdate(id, {
      title, 
      text, 
      link, 
      img_url,
    }, { new: true });

    return response.json(portfolio);
  }
}
