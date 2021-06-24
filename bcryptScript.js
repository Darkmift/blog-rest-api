const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '123456';


bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
  // Store hash in your password DB.
  console.log({ hash })
});
