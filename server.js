var app = require('./express');

var express = app.express;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');
// require("./utilities/filelist");

app.use(express.static(__dirname + '/public'));;

require("./test/app");
require("./project/app");

//require("./assignment/app")

//require("./project_server/football.service.server.js");

//require('./experiments/oxford/oxford.service.server');

require("./public/project/server.js");
require("./public/project/poc2/server.js")


app.listen(process.env.PORT || 3000);

