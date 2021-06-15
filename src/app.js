const express = require('express');
const app = express();
const router= require('./api/router');
var cors = require('cors');
var mongoose = require('mongoose')
const bodyParser = require('body-parser');
const uri = require('./config/db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/',router);

const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    poolsize:10
};
mongoose.connect(uri,options).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.error("Error in connection",err);
});
const connection= mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB database connection established successfully");
})

app.listen(8000);
