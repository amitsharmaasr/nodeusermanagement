const mongoose = require('mongoose')

const users = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'firstname can\'t be empty'
    },
    lastName: {
        type: String,
        trim: true,
        required: 'lastname can\'t be empty'
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'email can\'t be empty'
    },
    password: {
        type: String,
        trim: true,
        required: 'password can\'t be empty'
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', users)