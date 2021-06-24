const jwt = require('jsonwebtoken');
const { validateToken } = require('../modules/jsonWebToken');

function authTokenMiddleware(req, res, next) {
  const authToken = req.headers.authorization.split(' ')[1];
  const [decodeToken, error] = validateToken(authToken)

  if (!decodeToken || error) {
    return res.status(401).json({ msg: "You must have token" });
  }

  req.tokenData = decodeToken;
  next();

};

module.exports = { authTokenMiddleware };