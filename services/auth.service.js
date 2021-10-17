const db = require('../database/db')
const bcrypt = require('bcrypt')
const UserDto = require('../dto/user.dto')

class AuthService {
    async registration(username, password) {
        const candidate = await db.query(`SELECT * FROM person WHERE username = $1`, [username])
        if(!candidate.rows) {
            throw new Error('ERROR OF REGISTER! WRONG PASSWORD OR EMAIL')
        }
        const hashedPassword = await bcrypt.hash(password, 3)

        const user = await db.query(`INSERT INTO person (username, password) values ($1, $2) RETURNING *`, [username, hashedPassword])

        const userDto = new UserDto(user.rows[0])

        return {
            user: userDto
        }
    }
}

module.exports = new AuthService()