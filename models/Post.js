const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  create_date: {
    type: Date, default: Date.now()
  },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model("Post", postSchema, "posts");

module.exports = { Post }