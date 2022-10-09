  require('./connection/db.connection');
  const express = require('express');
  const app = express();
  require('dotenv').config();
  const userModel = require('./models/user')
  const PORT = process.env.PORT || 4000;

  app.get('/', (req, res) => {
    let context = userModel.find({})
    console.log(context);
    res.render('index.ejs', {context: context});
  })

  app.post('/', (req,res) => {
    let contexts = req.body;
    userModel.create(contexts);
    res.redirect('/');
  })

  app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
  })
