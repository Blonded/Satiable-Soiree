var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var occasionRoutes = require("./controllers/occasionsController.js");

app.use("/", occasionRoutes);

var userRoutes = require("./controllers/usersController.js");

app.use("/users", userRoutes);

app.listen(port, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port);
});
