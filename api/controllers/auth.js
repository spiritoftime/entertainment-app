const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async (req, res) => {
  // expects email and password - password would be hashed due to User.pre
  const userDoc = await User.create({ ...req.body });
  const token = userDoc.createJWT();
  res.status(201).json({ email: userDoc.email, token });
};
const login = async (req, res) => {
  const { password, email } = req.body;
  const userDoc = await User.findOne({ email: email });
  if (!userDoc) {
    res.status(404).json({ error: "Please type in a valid email" });
    return;
  }

  const checkPassword = userDoc.comparePassword(password);
  if (!checkPassword) {
    res.status(401).json({ error: "Please type in a valid password" });
    return;
  }
  const token = userDoc.createJWT();
  res.status(201).json({ email: userDoc.email, token });
};
module.exports = { login, register };
