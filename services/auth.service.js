const db = require('../database/db')
const bcrypt = require('bcrypt')
const UserDto = require('../dto/user.dto')

class AuthService {
    async registration(username, password) {
        const candidate = await db.query(`SELECT * FROM person WHERE username = $1`, [username])
        if(candidate.rows) {
            throw new Error(`user with name ${username} already registered`)
        }
        const hashedPassword = await bcrypt.hash(password, 3)

        const user = await db.query(`INSERT INTO person (username, password) values ($1, $2) RETURNING *`, [username, hashedPassword])

        const userDto = new UserDto(user.rows[0])

        return {
            user: userDto
        }
    }

    async login(username, password) {
        const candidate = await db.query(`SELECT * FROM person WHERE username = $1`, [username])

        if(!candidate.rows) {
            throw new Error('User not register')
        }
        const hashedPassword = await db.query(`SELECT password FROM person WHERE username = $1`, [username])

        const validation = await bcrypt.compare(password, hashedPassword.rows[0].password)

        if(!validation) {
            throw new Error('password not correct')
        }

        return {
            user: candidate.rows[0]
        }
    }
}

module.exports = new AuthService()