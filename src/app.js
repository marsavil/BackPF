const express = require ('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const path = require('path');




dotenv.config()

const indexRouter = require('./routes/index');
const cors = require('cors');
const app = express();



app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(logger('dev'));
app.use(express.json());


//local
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

//////////////////////

//deploy
// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// })

app.use('/', indexRouter);


module.exports = app;
