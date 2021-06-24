const bcrypt = require("bcrypt");

async function comparePassword(inputPassword, hashedPassword) {
  try {
    const result = await bcrypt.compare(inputPassword, hashedPassword);
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}

function generatePassword(password) {
  try {
    const result = await bcrypt.hash(user.password, 10);
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}

module.exports = {
  comparePassword,
  generatePassword
};