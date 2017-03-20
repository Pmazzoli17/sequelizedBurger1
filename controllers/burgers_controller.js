var express = require('express');
var router = express.Router();
// Import the model (burger.js) to use its database functions.
// var burger = require('../models/burger.js');
var models = require('../models');

router.get('/', function(req,res){
	// burger.selectAll(function(burger_data){
	// 	console.log(burger_data);
	// 	res.render('index',{burger_data});
	res.redirect('/burger');
	});
// })

router.get('/burger', function (req, res) {
  models.burger.findAll({}).then(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req,res){
	// burger.insertOne(req.body.burger_name, function(result){
	// 	res.redirect('/');
  models.burger.create({burger_name: req.body.burger_name, devoured: req.body.devoured}).then(function() {
    res.redirect('/burger');
	});
});

router.post('/burger/eat/:id', function (req, res) {
  models.burger.update({ devoured: true}, {where: {id:req.params.id}}).then(function () {
    res.redirect('/burger');
  });
});

router.delete('/burger/delete/:id', function (req, res) {
  models.burger.destroy({where: {id:req.params.id}}).then(function() {
    res.redirect('/burger');
  });
});

// router.put('/burgers/update', function(req,res){
// 	burger.updateOne(req.body.burger_id, function(result){
// 		console.log(result);
// 		res.redirect('/');
// 	});
// });

// Export routes for server.js to use.
module.exports = router;