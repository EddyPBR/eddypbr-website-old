const express = require("express");

const PostController = require('./controllers/PostController');

const routes = express.Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.create);
routes.delete('/posts/:id', PostController.delete);
routes.put('/posts/:id', PostController.update);

module.exports = routes;
