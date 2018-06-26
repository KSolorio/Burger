// ** DEPENDENCIES ** //
var express = require("express"); 
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Override with POST having ?_method=UPDATE
app.use(methodOverride("_method"));

// Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes 
var routes = require("./controllers/burger_controllers.js");
app.use("/", routes);

// Requiring models for syncing
//var db = require("./models");


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});