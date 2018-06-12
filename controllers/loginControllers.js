var express = require("express");
var md5 = require('md5');

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var db = require("../models");  

router.post("/", function(req, res) {
    
    db.User.findOne({ where: {email: req.body.email, password: md5(req.body.password)} }).then(function(result) {
        
        if (!result) {
            res.json(false);
        } else {
            res.json(result);
        }
     });
      
    // pet.create([
    //   "name", "species","sleepy", "userID"
    // ], [
    //   req.body.name, req.body.species, req.body.sleepy, req.body.userID
    // ], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });
  });

module.exports = router;