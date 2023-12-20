const mongoose = require('mongoose');

const toolschema = new mongoose.Schema({
    toolname:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    toollink:{
        type:String,
        required:true
    },
    abouttool:{
        type:String,
        required:true
    }
})

const Tool = new mongoose.model("Tool",toolschema);



module.exports = Tool ;
