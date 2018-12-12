var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var logger = require("morgan");
var mongoose = require("mongoose");

// Initialize Express
// ===========================================================
var app = express();

// Public settings
// ===========================================================
app.use(express.static(__dirname + "/public"));
var PORT = process.env.PORT || 8888;

// Database
// ===========================================================
require("./config/connection");

// Use morgan logger for logging requests
// ===========================================================
app.use(logger("dev"));

// BodyParser Settings
// ===========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars
// ===========================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// ===========================================================
var routes = require("./controllers/pbsController.js");
app.use("/", routes);

//404 Error
app.use(function (req, res) {
    res.render("404");
});

// Port
// ===========================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});