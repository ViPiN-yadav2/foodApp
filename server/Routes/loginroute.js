const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = "11112222333344445555666677778888";

const loginrouter = express.Router();
loginrouter.post("", async (req, res) => {
  console.log("login route");
  try {
    console.log("fetching data");
    let response = await User.findOne({ email: req.body.email });
    if (!response) {
      res.status(400).json({ mess: " res wrong credentials" });
    }
    const compare = bcrypt.compareSync(req.body.password, response.password);
    if (!compare) {
      res.status(400).json({ mess: " pass wrong credentials" });
    }

    const data = {
      user: {
        id: response.id,
      },
    };

    const authToken = jwt.sign(data, jwtSecret);

    return res.json({ success: true, token: authToken });
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = loginrouter;
