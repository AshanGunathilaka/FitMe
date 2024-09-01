const express = require("express");
const userCtrl = require("../controller/InvoiceController");


const router = express.Router();


router.post("/create/invoice", userCtrl.createinvoice);


module.exports = router;