const z = require("zod");

const User = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

const loginvalidator = (req, res, next) => {
  const response = User.safeParse(req.body);
  // console.log(response.error);
  // console.log(req.body);
  // console.log(response);
  if (response.success == false) {
    res.json({ mess: "your input are invalid" });
    return;
  }
  next();
};

module.exports = loginvalidator;
