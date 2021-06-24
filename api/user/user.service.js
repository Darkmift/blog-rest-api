const { User } = require('../../models/User');
const { comparePassword,
  generatePassword } = require('../../modules/bcrypt');

async function findAndValidateUser(email, password) {
  try {
    const [user, error] = await User.findOne({ email });
    if (!user || error) {
      return [null, 'User or password not found 1']
    }

    const [result, compareError] = await comparePassword(password, user.password)
    if (compareError || !result) {
      console.error({ result, error })
      return [null, 'User or password not found 2']
    }

    return [user, null]
  } catch (error) {
    return [null, error]
  }
}

module.exports = { findAndValidateUser }