// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    is_admin: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default:''
        // required: true,
    },
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
