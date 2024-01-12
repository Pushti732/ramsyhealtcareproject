const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Login", LoginSchema);