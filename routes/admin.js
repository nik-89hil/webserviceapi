const express = require('express');
const router = new express.Router();
const {addproduct,getProduct,adminLogin,addtools,getTools,getClient} = require('../controllers/adminmethod')


router.route("/product").post(addproduct);
router.route("/product").get(getProduct);                                                                                    
router.route("/login").post(adminLogin);
router.route("/tools").post(addtools);
router.route("/tools").get(getTools);
router.route("/getclient").post(getClient);




module.exports = router ;