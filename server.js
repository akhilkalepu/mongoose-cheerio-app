var express = require("express");
var bodyParser = require('body-parser');
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
// ===========================================================
var app = express();

// Import the models to use database functions
// ===========================================================
var db = require("./models");
var PORT = process.env.PORT || 8888;

// Set public folder as static directory
// ===========================================================
app.use(express.static("public"));

// Use morgan logger for logging requests
// ===========================================================
app.use(logger("dev"));

// BodyParser Settings
// ===========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Local Database Configuration with Mongoose
// ===========================================================
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/pbsnewshourscraper", function (error) {
    if(error) throw error;
 	console.log("Database connected");
});

// Set Handlebars
// ===========================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// ===========================================================
var routes = require("./controllers/pbsController.js");
app.use("/", routes);

// Port
// ===========================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});