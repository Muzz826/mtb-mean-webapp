const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //this code checks whether a user is authorized for the area of teh site they're trying to access
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = {
      email: decodedToken.email,
      userId: decodedToken.userId
    };
    next();
  } catch (error) {
    res.status(401).json({
      message: "You are not authenticated!"
    });
  }
};
