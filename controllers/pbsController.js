var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");

// Import the models to use database functions
// ===========================================================
var db = require("../models");

// Initialize Express
// ===========================================================
var express = require("express");
var app = express();

// Routes
// ===========================================================

module.exports = function (app) {
// A GET route for scraping the PBS NewsHour's latest headlines
    app.get("/scrape", function (req, res) {
        // First, we grab the body of the html with axios
        axios.get("https://www.pbs.org/newshour/latest").then(function (response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);

            $("a .card-timeline_title").each(function (i, element) {
                // Save an empty result object
                var result = {};

                // Add the text and href of every link, and save them as properties of the result object

                // FIX TITLE
                result.title = $(this).attr("href");

                result.link = $(this).attr("href");

                console.log(result);

                // Create a new Article using the `result` object built from scraping
                db.Article.create(result)
                    .then(function (dbArticle) {
                        // View the added result in the console
                        console.log(dbArticle);
                    })
                    .catch(function (err) {
                        // If an error occurred, send it to the client
                        console.log("you have a scrape error occuring in the fetch.js file: " + err);
                        return res.json(err);
                    });
            });

            // If we were able to successfully scrape and save an Article, send a message to the client
            res.send("Scrape Complete");
        });
    });
};
