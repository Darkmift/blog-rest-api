const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    birth_date: Date,
    email: String,
    password: String,
    business: Boolean,
});

const User = mongoose.model("User", userSchema, 'users');

module.exports = { User }