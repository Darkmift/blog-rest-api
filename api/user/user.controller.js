const { findAndValidateUser } = require('./user.service');
const { comparePassword,
  generatePassword } = require('../../modules/bcrypt');


async function login(req, res, next) {
  try {
    const { email, password } = req.body.user
    // checks if there is a user with this email
    const [user, error] = await findAndValidateUser(email, password)

    if (error) {
      console.error({ user, error })
      return res.status(401).json(error);
    }

    // finally create a new unique token for the user by his _id
    const token = getToken(user._id)
    res.json({ token });
  } catch (error) {
    next(error);
  }
}