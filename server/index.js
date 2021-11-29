const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors");

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(cors());

//mongoose connection uri
const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.2vcxh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);

//Start server 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});