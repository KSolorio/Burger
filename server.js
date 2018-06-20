// ** DEPENDENCIES ** //
var express = require("express"); 
var bodyParser = require("body-parser");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));