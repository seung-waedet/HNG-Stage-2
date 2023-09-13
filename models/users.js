const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userModel = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return typeof value === 'string';
            },
            message: 'Name must be a string',
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return typeof value === 'string';
            },
            message: 'Email must be a string',
        }
    }
})

module.exports = mongoose.model('Users', userModel)