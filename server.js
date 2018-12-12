var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

let PORT = process.env.PORT || 8888;

// Set Handlebars
// ===========================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Initialize Express
// ===========================================================
var app = express();

// Middleware
// ===========================================================

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost/pbsnewshourscraper", { useNewUrlParser: true });

// Routes
// ===========================================================
var routes = require("./controllers/pbsController.js");
app.use(routes);

// Start server
// ===========================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});