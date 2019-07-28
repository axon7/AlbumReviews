const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //take token from header

  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "no token, authorization denied" });
  }

  //check if token is valid
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //set decoded id value to current user
    req.user = decoded.user;
    next();
  } catch (err) {
    //if invaild return status and message
    res.status(401).json({ msg: "Token is not valid" });
  }
};
