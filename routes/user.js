const express = require('express');
const router = express.Router();
const {addClient} = require('../controllers/clientmethod')


router.route("/connect").post(addClient);









module.exports = router ;