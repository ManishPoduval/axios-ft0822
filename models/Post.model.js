const { Schema, model } = require("mongoose");
require('./User.model')

const postSchema = new Schema({
    msg: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Post = model("Post", postSchema);

module.exports = Post;
