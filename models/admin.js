const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }
})

const Admin = new mongoose.model("Admin",adminschema);

module.exports = Admin ;