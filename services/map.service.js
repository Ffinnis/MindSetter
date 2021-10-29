const db = require('../database/db')

class MapService {
    async getMaps() {
        const maps = db.query(`SELECT * FROM map`)

        return {
            maps: maps.rows
        }
    }
    async createMap(id, json) {
        const candidate = await db.query(`SELECT * FROM person WHERE id = $1`, [id])

        if(!candidate.rows) {
            throw new Error('User not register')
        }

        return db.query(`INSERT INTO map (map) values ($1) WHERE user_id = $2`, [json, id])
    }
}

module.exports = new MapService()