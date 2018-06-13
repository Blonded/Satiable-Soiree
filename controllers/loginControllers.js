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

  });

module.exports = router;