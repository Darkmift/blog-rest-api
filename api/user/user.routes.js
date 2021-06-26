const { Router } = require('express');
const router = Router();

const { login,logout } = require('./user.controller');
const { schemas: { user: { userLogin } } } = require('../../middleware/joiValidate/joiSchemas');
const { joiValidateMiddleware } = require('../../middleware/joiValidate');
const { authTokenMiddleware } = require('../../middleware/jsonWebToken')

router.post('/login', joiValidateMiddleware(userLogin, 'body', 'user'), login);
router.post('/logout', authTokenMiddleware, logout);

module.exports = router;