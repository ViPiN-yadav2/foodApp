const express = require("express");
const User = require("../models/User");
const bycrpt = require("bcrypt");

const router = express.Router();

router.post("/creatuser", async (req, res) => {
  const salt = bycrpt.genSaltSync(10);
  const hash = bycrpt.hashSync(req.body.password, salt);
  try {
    User.create({
      name: req.body.name,
      password: hash,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ successs: false });
  }
});

module.exports = router;
