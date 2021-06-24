const { Router } = require('express');
const router = Router();

const { login } = require('./user.controller');
const { schemas: { user: { userLogin } } } = require('../../middleware/joiValidate/joiSchemas');
const { joiValidateMiddleware } = require('../../middleware/joiValidate');

router.post('/login', joiValidateMiddleware(userLogin, 'body', 'user'), login);

module.exports = router;