/**
 * Created by mrubart on 6/30/2015.
 */
var http = require("http");
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.get("/", function(req,res){
  res.render("home", {title:"hellow from webstor", message: "hi there!"});
});

app.get("/api/toppings", function (req,res){
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(["pepperoni", "sausage", "spinach", "muchrooms","ham","shrimp"]);
});

var server = http.createServer(app);

server.listen(3000);