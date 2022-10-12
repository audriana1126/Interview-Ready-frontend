///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const { MONGODB_URI } = process.env
const User = require('../models')

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect( MONGODB_URI )

// Connection Events
mongoose.connection
  .on("open", () => console.log("You're are connected to mongoose"))
  .on("close", () => console.log("You're are disconnected from mongoose"))
  .on("error", (error) => console.log(error));