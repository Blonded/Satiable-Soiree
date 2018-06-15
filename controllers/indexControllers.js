var express = require("express");
var md5 = require("md5");

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

router.get("/usernav/:userid", function(req, res) {

  var userid = req.params.userid;

  listEventsHosting(userid);

  // res.render("usernav");

  function listEventsHosting(userid) {
    
    db.Occasion.findAll({
      where: {UserId: userid}
    }).then(function(events) {

      var results = {};

      results["listEventsHosting"] = events;

      listEventsAttending(results, userid);

    });

  }

  function listEventsAttending(obj, userid) {

    var queryString = "";

    queryString += "SELECT oc.id, oc.name, oc.street, oc.image ";
    queryString += "from Occasions oc ";
    queryString += "INNER JOIN UserOccasions uo ON oc.id = uo.OccasionId ";
    queryString += "INNER JOIN Users us ON us.id = uo.UserId ";
    queryString += "WHERE us.id = "+userid;

    db.Occasion.sequelize.query(queryString).then(function(joins) {

      obj["listEventsAttending"] = joins[0];

      listsOtherEvents(obj, userid);
      // console.log("61", obj);
      // res.render("usernav", obj);

    });

  }

  function listsOtherEvents(obj, userid) {

    var queryString = "";

    queryString += "SELECT *, @attending := 1 as attending ";
    queryString += "from Occasions oc ";
    queryString += "WHERE oc.id NOT IN (SELECT uo.OccasionId ";
    queryString += "from Occasions oc ";
    queryString += "INNER JOIN UserOccasions uo on oc.id = uo.OccasionId WHERE uo.UserId = "+userid+")";

    db.Occasion.sequelize.query(queryString).then(function(joins) {

      obj["listOtherEvents"] = joins[0];

      console.log("87", obj);

      res.render("usernav", obj);

    });

  }

});

router.get("/createevent", function(req, res) {
  res.render("createevent");
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

      createConnection(result.id, result.UserId);

      res.json(result);

    });

});

function createConnection(occasionId, userId) {

  db.UserOccasion.create({UserId: userId, OccasionId : occasionId}).then(function(response) {

  })

}

router.get("/event/:eventid/user/:userid", function(req, res) {

  if(req.params.eventid == "" && req.params.userid == "") {

    res.render("usernav");

  } else {

  function findUser(eventid, userid) {

    db.Occasion.findOne({
      where: {id: eventid, UserId: userid}
    }).then(function(host) {

      var results = {};

      var logged;

      if(host) {

        
        logged = true;
        
      } else {

        logged= false;

      }

      results["host"] = logged;
      results["loggedId"] = userid;

      findUsersAndTheirFood(results, eventid);

    });

  }

  function findUsersAndTheirFood(obj, eventid) {
    // USING RAW QUERIES WITH SEQUELIZE IN THIS FUNCTION BECAUSE OF THE COMPLEXITY OF THE RELATIONSHIPS BETWEEN USERS
    // FOODS AND Occasions
    /* TODO: make the querie with sequelize */
    var queryString = "";
    queryString = "SELECT oc.name, GROUP_CONCAT(fo.name SEPARATOR ', ') as groupfood, oc.street, oc.number, oc.street, oc.city, oc.zipcode, oc.date, oc.starttime, oc.endtime, ";
    queryString += "us.firstname, us.lastname, us.allergies, us.email, ";
    queryString += "fo.name ";
    queryString += "from Occasions oc ";
    queryString += "INNER JOIN UserOccasions uo ON uo.OccasionId = oc.id ";
    queryString += "INNER JOIN Users us ON uo.UserId = us.id ";
    queryString += "LEFT OUTER JOIN Food fo ON uo.OccasionId = fo.OccasionId and uo.UserId = fo.UserId ";
    queryString += "WHERE oc.id = "+eventid;
    queryString += " GROUP BY us.id";

    db.Occasion.sequelize.query(queryString).then(function(joins) {

      obj["infousersfood"] = joins[0];

      findFood(obj, eventid);
      // results.infousers = joins[0];
    });

  }

  function findFood(obj, eventid) {
    // USING RAW QUERIES WITH SEQUELIZE IN THIS FUNCTION BECAUSE OF THE COMPLEXITY OF THE RELATIONSHIPS BETWEEN Users
    // FOODS AND Occasions
    /* TODO: make the querie with sequelize */
    var queryString = "";
    queryString = "SELECT oc.name, oc.street, oc.number, oc.street, oc.city, oc.zipcode, oc.date, oc.starttime, oc.endtime, ";
    queryString += "us.firstname, us.lastname, us.allergies, us.email, ";
    queryString += "fo.name ";
    queryString += "from Occasions oc ";
    queryString += "INNER JOIN UserOccasions uo ON uo.OccasionId = oc.id ";
    queryString += "INNER JOIN Users us ON uo.UserId = us.id ";
    queryString += "LEFT OUTER JOIN Food fo ON uo.OccasionId = fo.OccasionId and uo.UserId = fo.UserId ";
    queryString += "WHERE oc.id = "+eventid;

    console.log(queryString);

    db.Food.sequelize.query(queryString).then(function(joins) {

      obj["infofood"] = joins[0];

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

    findUser(req.params.eventid, req.params.userId);

  }
});

// Export routes for server.js to use.
module.exports = router;
