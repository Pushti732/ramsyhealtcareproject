const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({

    uername: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phonenumber: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpassword: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Signup", SignupSchema);