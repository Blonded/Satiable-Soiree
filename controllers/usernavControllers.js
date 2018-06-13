var express = require("express");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    console.log(req.body.id);
    console.log("AHHHHHHHHHHHHHHHHHHHHHHH");
    res.json(true);
});

// Export routes for server.js to use.
module.exports = router;
