const express = require("express");
const userCtrl = require("../controller/feedbackcontroller");


const router = express.Router();


router.post("/create/feedback", userCtrl.createfeedback);


module.exports = router;