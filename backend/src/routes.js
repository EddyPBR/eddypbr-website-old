const express = require("express");

const PostController = require('./controllers/PostController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.create);
routes.delete('/posts/:id', PostController.delete);
routes.put('/posts/:id', PostController.update);

routes.get('/project', ProjectController.index);
routes.post('/project', ProjectController.create);
routes.delete('/project/:id', ProjectController.delete);
routes.put('/project/:id', ProjectController.update);

module.exports = routes;
