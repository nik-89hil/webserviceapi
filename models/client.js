const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientemail:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Client = new mongoose.model("Client",clientSchema);

module.exports = Client ;