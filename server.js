// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// bring in the models
var db = require("./models");

// Sets up the Express App
var app = express();

var port = process.env.PORT || 3000;
// var port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.use("/update", routes);
app.use("/create", routes);

// Starts the server to begin listening
db.sequelize.sync().then(function() {
app.listen(port);
});