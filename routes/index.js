var { Router } = require('express');
var router = Router();

const userRoutes = require('./api/user/user.routes');
router.use('/user', userRoutes);

module.exports = router;
