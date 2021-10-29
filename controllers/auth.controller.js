const authService = require("../services/auth.service");
const dayjs = require("dayjs");
class AuthController {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await authService.registration(username, password);
      return res.json(userData);
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .send("user already register or password lower than 6 symbols");
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const login = await authService.login(username, password);
      return res
        .cookie("access_token", login.token, {
          httpOnly: true,
          secure: false,
          expires: dayjs().add(30, "days").toDate(),
        })
        .json(login);
    } catch (e) {
      console.log(e);
      return res.status(403).send("not correct login or password");
    }
  }

  async check(req, res, next) {
    try {
      const token = req.cookies.access_token;
      const check = await authService.check(token);

      if (!check) {
        res.status(403).send("not auth");
      }

      return res.status(200).send({
        user: check,
      });
    } catch (e) {
      console.log(e);
      return res.status(403).send("not auth");
    }
  }
}

module.exports = new AuthController();
