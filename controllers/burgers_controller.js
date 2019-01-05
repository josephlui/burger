var express = require ('express');

// import model
var burger = require ('../models/burger.js');

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/index", function(req, res) {
    burger.retrieveAll(function(result){
        var burgerList = {
            burgers: result
        };
        console.log (burgerList);
        res.render ("index", burgerList);
    });
});

router.put("/update/:id", function(req, res){

    var condition = "id = '" + req.params.id + "'";
    console.log ("requesting to delete burger ID: " + req.params.id);
    burger.devourBurger({devoured: true}, condition, function(){
       console.log ("burger deleted ID " + req.params.id);
       res.status(200).end();
    });
});

router.post("/add/:burgerName", function(req, res){
    console.log ("requesting to add burger: " + req.params.burgerName);
    burger.addBurger({burger_name: req.params.burgerName}, function(){
       res.status(200).end();
    });
});


  

module.exports = router;
