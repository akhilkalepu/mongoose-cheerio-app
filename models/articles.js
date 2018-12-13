var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;
