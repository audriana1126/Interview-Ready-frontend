// DEPENDENCIES
// ... the rest of our other dependencies
const cors = require("cors")
const morgan = require("morgan")
const methodOverride = require('method-override');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;
// const session = require("express-session");
// const MongoStore = require("connect-mongo");


server.use(middlewares);
server.use(router);
// server.listen(port);
// import user router

// initialize .env variables
require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;
const express = require("express");

// create application object
const app = express();

const userController = require('./controllers/user-controller')
const authController = require('./controllers/auth-controller')
const chatController = require('./controllers/chat-controller')
	
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development
app.use(methodOverride('_method'));
app.use('/user', userController);
app.use('/chat', chatController);
app.use('/auth', authController);





// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));