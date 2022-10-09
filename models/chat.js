const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users');

const chatSchema = new Schema ({
    username: {type: String},
    post: {type: String, required: true, maxLength: 280},
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',

    },
}, 
{timestamps:true});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;