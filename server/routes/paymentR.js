const express = require("express");
const userCtrl = require("../controller/paymentController");
// const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/pay/create", userCtrl.createonline);
// router.post("/api/users/login", userCtrl.login);
// router.get("/api/users/profile", isAuthenticated, userCtrl.profile);

module.exports = router;