"use strict";

const User = require("../models/user_schema"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

const loginAuth = (req, res) => {
  User.findOne(
    {
      name: req.body.name,
    },
    function (err, user) {
      if (err) throw err;
      if (!user || !user.comparePassword(req.body.password)) {
        return res
          .status(401)
          .json({ message: "Authentication failed. Invalid user or password" });
      }

      console.log(user);

      return res.json({
        token: jwt.sign({ user }, "RESTFULAPIs"),
      });
    }
  );
};

module.exports = {
  loginAuth,
};
