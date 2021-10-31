const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({
        message: "Not auth",
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    req.jwt = token;
    next();
  } catch (e) {
    res.status(401).json({
      message: "Not auth",
    });
  }
};
