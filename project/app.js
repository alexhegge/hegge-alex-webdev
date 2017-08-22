
var app = require('../express');
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/test');


require("./models/database.js");

require("./services/user.service.server.js");
require("./services/collection.service.server.js");
