const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const Router = require("express").Router;

const router = new Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/check", authController.check);

module.exports = router;
