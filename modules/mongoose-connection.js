const mongoose = require('mongoose');
// const User = require('../models/User');


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    auto_reconnect: true,
  })
  .then(
    () => {
      console.log('connected to DB');

      // if (global.firstInitialize) {

      //   mongoose.connection.collections['users'].drop(function (err) {
      //     console.log('users dropped--adding demo admin & user');
      //     new User({
      //       email: 'sysadmin@email.com',
      //       password: 'MooCow1',
      //       first_name: 'AdminFname',
      //       last_name: 'AdminLname',
      //       age: 42,
      //       birth_date: new Date(),
      //       business: false,
      //     }).save();
      //   });
      // }
    },
    (err) => {
      console.log('TCL: err CONN ERROR: ', err);
    },
  )
  .catch((err) => {
    console.error('DB connection failed:', err);
  });