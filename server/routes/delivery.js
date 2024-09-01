const express = require("express");
const userCtrl = require("../controller/deliverycontroller");


const router = express.Router();


router.post("/create/delivery", userCtrl.createdelivery);


module.exports = router;