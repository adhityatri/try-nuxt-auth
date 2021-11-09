const express = require("express");

const {
  createData,
  readData,
  userActive,
  updateData,
  deleteData,
} = require("../controllers/user_controller");

const router = express.Router();

router
  .post("/", createData)
  .get("/", readData)
  .get("/me", userActive)
  .put("/:id", updateData)
  .delete("/:id", deleteData);

module.exports = router;
