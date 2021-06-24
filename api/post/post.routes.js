const { Router } = require('express');
const router = Router();

const { schemas: { post: { newPost } } } = require('../../middleware/joiValidate/joiSchemas');
const { joiValidateMiddleware } = require('../../middleware/joiValidate');
const { authTokenMiddleware } = require('../../middleware/jsonWebToken')

const { createPost, getPosts } = require('./post.controller');

router.post('/', authTokenMiddleware, joiValidateMiddleware(newPost, 'body', 'post'), createPost);
router.get('/', authTokenMiddleware, getPosts);

module.exports = router;