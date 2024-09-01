const express = require("express");
const userCtrl = require("../controller/paymentController");


const router = express.Router();

router.post("/pay/create", userCtrl.createonline);


module.exports = router;