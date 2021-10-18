const authController = require('../controllers/auth.controller')

const Router = require('express').Router;

const router = new Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router