var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res){
    burger.create([
    "burger_name"
    ], [
        req.body.burger_name
    ],function(){
        res.redirect("/")
    });
});

router.post("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: 1
    }, condition, function(){
        res.redirect("/");
    });
});

router.post("/burgers/remake/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: 0
    }, condition, function(){
        res.redirect("/");
    });
});

router.put("burgers/:id", function(req, res){
    console.log("updating...");
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: 1
    }, condition, function(){
        res.redirect("/");
    });
});

module.exports = router;