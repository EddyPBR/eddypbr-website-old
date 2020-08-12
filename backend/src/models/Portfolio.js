const mongoose = require('../database/connection');

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  subtitle: {
    type: String,
    require: true
  },
  link: {
    type: String,
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

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
