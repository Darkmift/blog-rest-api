const { insertPost, fetchPosts } = require('./post.service');

async function createPost(req, res, next) {
  try {
    const { post: reqPost } = req.body
    reqPost.author_id = req.tokenData._id
    if (!reqPost.author_id) {
      return res.status(500).json({ message: 'internal error - code T' });
    }
    const [post, error] = await insertPost(reqPost)

    if (error) {
      console.error({ post, error })
      return res.status(401).json(error);
    }

    res.json({ post });
  } catch (error) {
    next(error);
  }
}

async function getPosts(req, res, next) {
  try {
    const userId = req.tokenData._id
    const [posts, error] = await fetchPosts(userId)

    if (error) {
      console.error({ posts, error })
      return res.status(401).json(error);
    }

    res.json({ posts });
  } catch (error) {
    next(error);
  }
}

module.exports = { createPost, getPosts }