var express = require("express");
var md5 = require("md5");

var Sequelize = require("sequelize");

// var connection = require("./connection.js");

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

  db.Occasion.create(
    {
      name: req.body.name,
      street: req.body.street,
      number: req.body.number,
      zipcode: req.body.zipcode,
      city: req.body.city,
      date: req.body.date,
      starttime: req.body.starttime,
      endtime: req.body.endtime,
      UserId: req.body.UserId,
      
    }).then(function(result) {

      res.json(result);

    });

});


router.get("/event/:eventid/user/:userid", function(req, res) {

  if(req.params.eventid == "" && req.params.userid == "") {

    res.render("usernav");

  } else {

  function findUser(eventid) {

    db.User.findOne({
      where: {id: req.params.userid}
    }).then(function(host) {

      var results = {};

      var logged;

      if(host) {

        
        logged = true;
        
      } else {

        logged= false;

      }

      results["farley"] = logged;

      findUsers(results, eventid);

    });

  }

  function findUsers(obj, eventid) {

    var queryString = "";
    queryString = "SELECT oc.name, oc.street, oc.number, oc.street, oc.city, oc.zipcode, oc.date, oc.starttime, oc.endtime, ";
    queryString += "us.firstname, us.lastname, us.allergies, us.email, ";
    queryString += "fo.name ";
    queryString += "from occasions oc ";
    queryString += "INNER JOIN useroccasions uo ON uo.OccasionId = oc.id ";
    queryString += "INNER JOIN users us ON uo.UserId = us.id ";
    queryString += "INNER JOIN food fo ON uo.OccasionId = fo.OccasionId and uo.UserId = fo.UserId ";
    queryString += "WHERE oc.id = "+eventid;

    console.log("160", queryString);

    db.Occasion.sequelize.query(queryString).then(function(joins) {

      obj["infousers"] = joins[0];

      console.log("166", joins[0]);

      findOccasion(obj, eventid);
      // results.infousers = joins[0];
    });

  }
  
  function findOccasion(obj, eventid) {
    db.Occasion.findOne({
      where: {id: eventid}
    }).then(function(result) {

      obj["infoevent"] = result.dataValues;
      console.log("176", obj);

      res.render("event", {results: obj});
    });
  }

    // console.log("147", results);

    /*
    SELECT oc.name, oc.street, oc.number, oc.street, oc.city, oc.zipcode, oc.date, oc.starttime, oc.endtime,
    us.firstname, us.lastname, us.allergies, us.email,
    fo.name
      from occasions oc
      INNER JOIN useroccasions uo ON uo.OccasionId = oc.id
      INNER JOIN users us ON uo.UserId = us.id
      INNER JOIN food fo ON uo.OccasionId = fo.OccasionId and uo.UserId = fo.UserId

    */
    // console.log(results);
    findUser(req.params.eventid);

  }
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
