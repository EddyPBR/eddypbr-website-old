const express = require("express");

const PostController = require('./controllers/PostController');
const ProjectController = require('./controllers/ProjectController');
const PortfolioController = require('./controllers/PortfolioController');

const routes = express.Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.create);
routes.delete('/posts/:id', PostController.delete);
routes.put('/posts/:id', PostController.update);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.create);
routes.delete('/projects/:id', ProjectController.delete);
routes.put('/projects/:id', ProjectController.update);

routes.get('/portfolio', PortfolioController.index);
routes.post('/portfolio', PortfolioController.create);
routes.delete('/portfolio/:id', PortfolioController.delete);
routes.put('/portfolio/:id', PortfolioController.update);

module.exports = routes;
