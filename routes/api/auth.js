const express = require("express");
const router = express.Router();
const authorizationJWT = require("../../middleware/authorizationJWT");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

//GET api/auth
//test route only
//route protected
router.get("/", authorizationJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error("dupa");
    res.send(500).send("server error");
  }
});

//POST api/auth
//Authorization (login) and get token
router.post(
  "/",
  [
    check("email", "Please enter a valid e-mail").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password, email } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        //if user already exists return error
        return res
          .status(200)
          .json({ errors: [{ msg: "Invalid password or e-mail" }] });
      }
      //check if password matches with
      const passwordIsMatching = await bcrypt.compare(password, user.password);

      if (!passwordIsMatching) {
        return res
          .status(200)
          .json({ errors: [{ msg: "Invalid password or e-mail" }] });
      }

      //create jwt token after login
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "36000000" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
