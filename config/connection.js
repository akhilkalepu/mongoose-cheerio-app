var mongoose = require("mongoose");

 //Local Database Configuration with Mongoose
 // ===========================================================
 mongoose.connect("mongodb://localhost/pbsnewshourscraper", function (error) {
    if(error) throw error;
 	console.log("Database connected");
});