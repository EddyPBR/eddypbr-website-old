const express = require("express");

const routes = express.Router();

routes.get('/test', (request, response) => {
    return response.json({
        message: 'hello server!',
        autor: 'EddyPBR'
    });
});

module.exports = routes;
