require('dotenv').config()
const Express  = require('express');
const app = Express();
const mongoose = require('mongoose');
const cors = require('cors')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000','http://10.12.17.6:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

mongoose.connect(process.env.DB_URI,{useNewUrlParser: true});


const db = mongoose.connection
db.on('error',(err)=> console.log(err))
db.once('open',()=> console.log("db connected sucsessfully!"))

app.use(Express.json());

const countryRouter = require('./routes/country')

app.use('/country',countryRouter);

app.listen(5000,()=>{
    console.log("server listening on port 5000");
})
