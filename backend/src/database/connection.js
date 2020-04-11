const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'eddyPBR-website';

mongoose.connect(`mongodb://${server}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
