const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const menus = require('./routes/api/menus')

// get express app
let app = express();

// bodyparser middleware
app.use(bodyParser.json());

// connect to mongoDB
mongoose.connect(db)
.then(()=>{
  console.log('Connected!')
})
.catch((err)=>{
  console.log(err);
})

app.use('/api/menus',menus);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log(`Server started on: ${port}`);
});