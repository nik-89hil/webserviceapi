const Admin = require('../models/admin');
const Product = require('../models/product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Tool = require('../models/tools');
const Client = require('../models/client');



const addproduct = async (req, res) => {
    try {
        const datareceive = req.body;
        const result = await Product.create({
            ...datareceive
        })
        res.json({
            success: true,
            data: result
        })
        res.end();
        return

    } catch (error) {
        res.json({
            success: false,
            err: error?.message
        })
    }

}

const getProduct = async (req, res) => {
    try {
        const result = await Product.find();
        res.json({
            data: result,
            success: true
        })
        res.end();
        return
    } catch (error) {
        res.json({
            success: false,
            err: error?.message
        })

    }
}

const adminLogin = async (req,res) =>{
    try {
        const {name,email, password} = req.body;
        const result = await Admin.find({name,email});
        if(result.length < 1){
            res.json({
                success:false,
                err:"Unauthenticated Attempt"
            });
            res.end();
            return
        }
        const access = await bcrypt.compare(password,result[0].password)
        if(access){
            const token = jwt.sign({
                name:result[0].name,
                email:result[0].email,
                isadmin:result[0].isadmin,
            },
                process.env.MYJWTSECRET, { expiresIn: '1h' }
            );
            res.json({
                success:true,
                data:[{
                    name,
                    email,
                    token,
                }]
            });
            res.end();
            return

        }else{
            res.json({
                success:false,
                err:"Invalid Credential"
            });
            res.end();
        }
        
    } catch (error) {
        res.json({
            success:false,
            err:error?.message
        })
        res.end();
    }

}

const addtools = async (req, res) => {
    try {
        const datareceive = req.body;
        const result = await Tool.create({
            ...datareceive
        })
        res.json({
            success: true,
            data: result
        })
        res.end();
        return

    } catch (error) {
        res.json({
            success: false,
            err: error?.message
        })
    }

}

const getTools = async (req, res) => {
    try {
        const result = await Tool.find();
        res.json({
            data: result,
            success: true
        })
        res.end();
        return
    } catch (error) {
        res.json({
            success: false,
            err: error?.message
        })

    }
}

const getClient = async (req,res) =>{
    try {
        const token = req.headers.authorization.split(' ')[1];
       if(token == null){
        res.json({
            success:false,
            err:"Unauthorized Access"
        })
        return
        }else{
        const checkToken =  jwt.verify(token,process.env.MYJWTSECRET);
        const checkAdmin = await Admin.find({email:checkToken.email});

        if(checkAdmin.length < 1){
            res.json({
                success:false,
                err:"Unauthorized Access"
            })
            res.end();
            return
        }
        const verification = checkToken.email == checkAdmin[0].email;

        if(verification){
            const result = await Client.find();
            res.json({
                success:true,
                data:result
            })
            res.end();
            return
        }else{
            res.json({
                success:false,
                err:"Unauthorized Access"
            });
            res.end();
            return

        }

    }

    } catch (error) {
        res.json({
            success:false,
            err:error?.message
        });
        res.end();
        return
    }

}



















module.exports = {
    addproduct,
    getProduct,
    adminLogin,
    addtools,
    getTools,
    getClient,
}









