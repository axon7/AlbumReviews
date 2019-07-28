const express = require("express");
const router = express.Router();
const authorizationJWT = require("../../middleware/authorizationJWT");
const User = require("../../models/User");
//get request for api/auth
//route protected
router.get("/", authorizationJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.send(500).send("server error");
  }
});

module.exports = router;
