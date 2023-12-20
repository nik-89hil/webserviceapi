const express = require('express');
const server = new express();
const PORT = 8080;
const cors = require('cors');
require('dotenv').config();


const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const nikweb = require('./utility/content');


const dbconnection = require('./utility/database')

// middleware
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
}
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use("/api/client",userRouter);
server.use("/api/admin", adminRouter);


// route

server.get("/",(req,res)=>{
    res.json({
        data:[nikweb],
        success:true
    });
    res.end();
})











server.get("*",(req,res)=>{
    res.send("Page not found")
})

server.use((err,req,res,next)=>{
    if(err){
        res.status(500).json({
            message:err?.message,
            success:false,
        })

    }else{
        next();
    }
    
})


dbconnection();


server.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})
