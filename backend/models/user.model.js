const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// properties of user
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamp: true,
})


const User = mongoose.model('User', userSchema)


//export our user
module.exports = User;