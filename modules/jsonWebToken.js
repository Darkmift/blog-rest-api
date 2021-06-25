const jwt = require('jsonwebtoken');

// create a new token for the user by his _id 
function getToken(_userId) {
  const token = jwt.sign({ _id: _userId }, process.env.JWT_SECRET, { expiresIn: "60mins" });
  return token;
};

function validateToken(token) {
  if (!token) {
    return [null, "You must have token"];
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    return [decodeToken, null]
  }
  catch (err) {
    console.log(err);
    return [null, err]
  }
};

module.exports = { getToken, validateToken };