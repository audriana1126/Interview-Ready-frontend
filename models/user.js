const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const userSchema = new Schema({
  name: {type: String}, 
  username: {type: String, required: true, unique: true, min: 3, max: 20},
  email: {type: String, required: [true, 'Please Enter Password']},
  Password: {type: String, required: true}, 
  image: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
},
{timestamps: true},
);

const User = mongoose.model("User", userSchema);

module.exports = User;