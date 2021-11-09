"use strict";

const User = require("../models/user_schema");
const bcrypt = require("bcrypt");

async function hashingPassword(plainPassword) {
  return await bcrypt.hash(plainPassword, 10);
}

const createData = async (req, res) => {
  const data = {
    name: req.body.name,
    password: await hashingPassword(req.body.password),
  };

  User.create(data)
    .then((data) => {
      console.log("New User Created!", data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const readData = (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

async function userActive(name) {
  return await User.findOne({
    name,
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

const updateData = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log("User updated!");
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteData = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error("User not available");
      }
      return data.remove();
    })
    .then((data) => {
      console.log("User removed!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createData,
  readData,
  userActive,
  updateData,
  deleteData,
};
