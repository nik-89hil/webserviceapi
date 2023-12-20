const mongoose = require('mongoose');

const productshema = new mongoose.Schema({
    prodimg:{
        type:String,
        required:true
    },
    prodname:{
        type:String,
        required:true
    },
    prodabout:{
        type:String,
        required:true
    },
})

const Product = new mongoose.model("Product",productshema);

module.exports = Product ;