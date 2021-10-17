const authService = require('../services/auth.service')
class AuthController {
    async register(req, res) {
        try{
            const {username, password} = req.body
            const userData = await authService.registration(username, password)
            return res.json(userData)
        } catch (e) {
            console.log(e)
            await res.json('ОШИБКА')
        }
    }
}

module.exports = new AuthController()