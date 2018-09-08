jest.setTimeout(300000);
require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/blog_everyone', {useMongoClient: true});
