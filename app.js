var express = require("express");
var bodyParser = require("body-parser");       
var User = require("./models/user").User;
var app = express();


app.use(express.static('public'));
app.use(bodyParser.json()); //req apliccation/json :V
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "jade");

app.get("/",function(req,res){
    res.render("index");
});


app.get("/login",function(req,res){
    res.render("login")
});


app.post("/users",function(req,res){
    var user = new User({email: req.body.email, password: req.body.password});
    
    user.save(function(){
      res.send("Completado");
    });
    
});

app.listen(8080);