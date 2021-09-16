const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clients');
mongoose.Promise = global.Promise;

module.exports = mongoose;