const jwt = require('jsonwebtoken');

if (!global._loggedUsers) global._loggedUsers = []

// create a new token for the user by his _id 
function getToken(_userId) {

  if (!global._loggedUsers.includes(_userId)) global._loggedUsers.push(String(_userId))
  const token = jwt.sign({ _id: _userId }, process.env.JWT_SECRET, { expiresIn: "60mins" });
  return token;
};

function removeLoggedUser(_userId) {
  const index = global._loggedUsers.indexOf(_userId);
  if (index > -1) {
    global._loggedUsers.splice(index, 1);
  }
  // just a check - not needed
  return index
}

function validateToken(token) {
  if (!token) {
    return [null, "You must have token"];
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!global._loggedUsers.includes(decodeToken._id)) {
      return [null, 'user is logged out']
    }

    return [decodeToken, null]
  }
  catch (err) {
    console.log(err);
    return [null, err]
  }
};

module.exports = { getToken, validateToken, removeLoggedUser };