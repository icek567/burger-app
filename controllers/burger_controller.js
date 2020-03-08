var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function(req, res) {
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });
});


router.post("/api/burgers", function(req, res){
    burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.send("Post made!")
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id= " + req.params.id
    burgers.update({
        devoured: 1
    },
    condition, function(result){
        res.send("Update received!")
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id= " + req.params.id
    burgers.delete(condition, function(result){
        res.send("Delete Created!")
    });
});

module.exports = router