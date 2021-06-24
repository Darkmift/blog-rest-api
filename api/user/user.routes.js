const { Router } = require('express');
const router = Router();

const { login } = require('./user.controller');
const { schemas: { userValidateSchema } } = require('../../middleware/joiValidate/joiSchemas')
const { joiValidateMiddleware } = require('../../middleware/joiValidate')
router.post('/login', joiValidateMiddleware(userValidateSchema, 'user'), login);

module.exports = router;