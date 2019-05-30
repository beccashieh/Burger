const express = require("express");
const router = express.Router();
const path = require('path');

//Imports the burger database
const burger = require("../models/burgers.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = { burgers: data };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(data) {
    res.redirect("/");
  });
});

router.post("/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(data) {
      res.redirect("/");
    }
  );
});

module.exports = router;
