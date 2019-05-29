const express = require('express');
const router = express.Router();
const burger = require('../models/burgers.js');

router.get('/', function (req, res){
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res){
    burger.all(function(data){
        const hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function (req, res){
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(){
        res.redirect('/burgers');
    });
});

module.exports = router;