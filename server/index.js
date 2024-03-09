const express = require("express");
const connect = require("./Database/db.js");
const router = require("./Routes/route.js");
const uservalidator = require("./middleware/uservalidator.js");
const cors = require("cors");
const loginrouter = require("./Routes/loginroute.js");
const loginvalidator = require("./middleware/loginvalidator.js");

const app = express();
app.use(cors());
app.use(express.json());
connect();

app.use("/api", uservalidator, router);
app.use("/login", loginvalidator, loginrouter);
app.use("/foodData", require("./Routes/FoodData.js"));
app.use("/orderData", require("./Routes/Orders.js"));

app.listen(3000, function () {
  console.log("port started at 3000");
});
