var express = require("express");
var router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

// Import the models to use database functions
// ===========================================================
var db = require("./models");

// Export routes for server.js to use
// ===========================================================
module.exports = router;