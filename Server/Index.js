const mongoose = require('mongoose')
const express = require('express')
const cors =  require('cors')
const router =  require('./Routes/routes')
require('dotenv').config()
const morgan =require('morgan')

const app = express();

app.use(cors());
app.use(express.json())

app.use(morgan('dev'))

const url = process.env.MONGO_URL
mongoose.connect(url).then(()=>{
    console.log("DataBase Connected Successfully");
}).catch((err)=>{
    console.log("Mongo DB Connection Error : ",err.message);
});

app.use('/api',router);

const Port = 3000

app.listen(Port,()=>{
    console.log("Server is running on the port ",Port);
});
