var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    articleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

var Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
