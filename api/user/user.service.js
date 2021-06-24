const { User } = require('../../models/User');
const { comparePassword,
  generatePassword } = require('../../modules/bcrypt');

async function findAndValidateUser(email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return [null, 'User or password not found 1']
    }

    const [result, compareError] = await comparePassword(password, user.password)
    if (compareError || !result) {
      console.error({ result, error })
      return [null, 'User or password not found 2']
    }

    delete user.password

    return [user, null]
  } catch (error) {
    console.log("🚀 ~ file: user.service.js ~ line 21 ~ findAndValidateUser ~ error", error)
    return [null, error]
  }
}

module.exports = { findAndValidateUser }