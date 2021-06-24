var { Router } = require('express');
var router = Router();

const userRoutes = require('../api/user/user.routes');
router.use('/user', userRoutes);
const postsRoutes = require('../api/post/post.routes');
router.use('/post', postsRoutes);

module.exports = router;
