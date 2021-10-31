const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserDto = require("../dto/user.dto");
const generateJwt = require("../functions/generateJwt");

class AuthService {
  async registration(username, password) {
    if (username === "") {
      throw new Error("username is empty");
    }
    if (password.length < 6) {
      throw new Error("password is lower than 6");
    }
    const candidate = await db.query(
      `SELECT * FROM person WHERE username = $1`,
      [username]
    );

    if (candidate.rows.length > 0) {
      throw new Error(`user with name ${username} already registered`);
    }
    const hashedPassword = await bcrypt.hash(password, 3);

    const user = await db.query(
      `INSERT INTO person (username, password) values ($1, $2) RETURNING *`,
      [username, hashedPassword]
    );

    const userDto = new UserDto(user.rows[0]);

    const jwtToken = generateJwt(userDto.id, userDto.username);

    return {
      user: userDto,
      token: jwtToken,
    };
  }

  async login(username, password) {
    const candidate = await db.query(
      `SELECT * FROM person WHERE username = $1`,
      [username]
    );

    if (!candidate.rows.length > 0) {
      throw new Error("User not register");
    }

    const hashedPassword = await db.query(
      `SELECT password FROM person WHERE username = $1`,
      [username]
    );

    const validation = await bcrypt.compare(
      password,
      hashedPassword.rows[0].password
    );

    if (!validation) {
      throw new Error("password not correct");
    }

    const userDto = new UserDto(candidate.rows[0]);

    const tokenJwt = generateJwt(userDto.id, username);

    return {
      user: userDto,
      token: tokenJwt,
    };
  }

  async check(token) {
    try {
      const user = token;
      if (!token) {
        throw new Error("not auth");
      }
      const data = jwt.verify(user, process.env.SECRET_KEY);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthService();
