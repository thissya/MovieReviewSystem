const mongoose = require('mongoose')
const express = require('express')
const cors =  require('cors')
const Router = express.Router;

require('dotenv').config()

const app = express();

app.use(cors());

const url = process.env.MONGO_URL
mongoose.connect(url).then(()=>{
    console.log("DataBase Connected Successfully");
}).catch((err)=>{
    console.log("Mongo DB Connection Error : ",err.message);
});

const Port = 3000

app.listen(Port,()=>{
    console.log("Server is running on the port ",Port);
});
