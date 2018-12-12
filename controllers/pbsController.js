var express = require("express");
var path = require("path");
var request = require("request");
var router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var Promise = require("bluebird");

// Assign Mongoose promise
// ===========================================================
mongoose.Promise = Promise;

// Import the models to use database functions
// ===========================================================
var Articles = require("../models/articles");
var Comments = require("../models/comments");

// Routes
// ===========================================================


// Export routes for server.js to use
// ===========================================================
module.exports = router;
