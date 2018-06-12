var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// app.use(express.static("/vendor/"));


// Requiring our models for syncing
var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var occasionRoutes = require("./controllers/indexControllers.js");

app.use("/", occasionRoutes);

var userRoutes = require("./controllers/usersController.js");

app.use("/users", userRoutes);

var loginRoutes = require("./controllers/loginControllers.js");

app.use("/login", loginRoutes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});