var express = require("express");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var user = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      users: data,
      user: true
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/pets", function(req, res) {
  // console.log("Inside Get all pets for user")
  var condition = "id = " + req.params.id;

  user.leftjoin(condition, function(result) {
    console.log(result);
    var hbsObject = {
      userdata: result,
      userPetData: true
      
    };
    // console.log(result)
    res.render("index", hbsObject);
  });
});






// Export routes for server.js to use.
module.exports = router;



