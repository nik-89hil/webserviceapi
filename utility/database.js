const mongoose = require('mongoose');



const  dbconnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`successfully connect to database `)
    } catch (error) {
        console.log("Database connection failed :",error?.message) ;
        process.exit(1) 
    }
}

module.exports = dbconnection;
