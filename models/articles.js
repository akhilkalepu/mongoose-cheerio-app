var mongoose = require("mongoose");

var articlesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;
