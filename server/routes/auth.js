const express = require("express");

const { loginAuth } = require("../controllers/auth_controller");

const router = express.Router();

router.post("/login", loginAuth);

module.exports = router;
