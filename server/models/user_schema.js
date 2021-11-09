const { Schema, model } = require("mongoose"),
  bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"],
    },
    password: {
      type: String,
      required: [true, "password field is required"],
    },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("users", userSchema);
