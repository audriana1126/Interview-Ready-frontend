const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./users');

const ChatSchema = new mongoose.Schema ({
    username: {type: String},
    post: {type: String, required: true, minLength: 1, maxLength: 280},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
}, 
{timestamps:true});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;






