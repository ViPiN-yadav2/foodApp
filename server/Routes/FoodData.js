const express = require("express");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    res.send([global.foodCategory, global.food_items_data]);
  } catch (error) {
    console.error(error);
    res.send("server error");
  }
});

module.exports = router;
