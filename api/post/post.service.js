const { Post } = require('../../models/Post');

async function insertPost(post) {
  try {
    const newPost = new Post(post);
    await newPost.save()
    return [newPost, null]
  } catch (error) {
    console.log("🚀 ~ file: post.service.js ~ line 20 ~ insertPost ~ error", error)
    return [null, error]
  }
}

async function fetchPosts(author_id) {
  try {
    const query = {};
    if (author_id) query.author_id = author_id
    const posts = await Post.find(query).populate('author_id','-password -__v').exec();
    return [posts, null]
  } catch (error) {
    console.log("🚀 ~ file: post.service.js ~ line 17 ~ fetchPosts ~ error", error)
    return [null, error]
  }
}

module.exports = { insertPost, fetchPosts }