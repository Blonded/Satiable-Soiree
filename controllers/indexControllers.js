var express = require("express");
var md5 = require("md5");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/createprofile", function(req, res) {
  res.render("createprofile");
});

router.get("/login/", function(req, res) {
  res.render("login");
});

router.get("/usernav", function(req, res) {
  res.render("usernav");
});

router.get("/createevent", function(req, res) {
  res.render("createevent");
});

router.get("/event", function (req, res) {
  res.render("event");
});

router.get("/api/usernav", function(req, res) {

  console.log('trying to get posts');
    var query = {};
    query['id'] = req.query.id;

    // 1. Add a join here to include all of the Authors to these posts
    db.Occasion.findAll({
      include: [{
        where: query,
        model: db.User,
      }]
    }).then(function(occasions) {
      res.json(occasions);
      
    });

});

router.post("/api/checkExistingEmail", function(req, res) {

  //verify if there is a user already registered with this e-mail
  db.User.findOne({ where: {email: req.body.email}}).then(function(result) {

    if(result) {

      res.json(true);
      
    } else {

      res.json(false);
    }

  });

});

router.post("/api/createprofile", function(req, res) {

  db.User.create(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      allergies: req.body.allergies,
      email: req.body.email,
      password: md5(req.body.password)
    }).then(function(result) {

      res.json(result);

    });

});

router.post("/api/createevent", function(req, res) {

  db.User.create(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      allergies: req.body.allergies,
      email: req.body.email,
      password: md5(req.body.password)
    }).then(function(result) {

      res.json(result);

    });

});


router.post("/api/logout", function(req, res) {
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
