var express = require("express");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var pet = require("../models/pets.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pet.all(function(data) {
    var hbsObject = {
      pets: data,
      pet: true
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pets", function(req, res) {
  console.log("inside the post")
  pet.create([
    "name", "species","sleepy", "userID"
  ], [
    req.body.name, req.body.species, req.body.sleepy, req.body.userID
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/pets/:id", function(req, res) {
  console.log("hello inside put/update pets")
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pet.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/pets/:id", function(req, res) {
  
  var condition = "id = " + req.params.id;

  pet.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
