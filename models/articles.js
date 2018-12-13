var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        required: true,
        default: false
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;
