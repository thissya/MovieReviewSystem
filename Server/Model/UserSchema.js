const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true, 
        unique:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String
    },
},{timestamps:true});

module.exports = mongoose.model('User',userSchema);