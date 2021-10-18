const db = require('../database/db')

class MapService {
    async getMaps() {
        const maps = db.query(`SELECT * FROM map`)

        return {
            maps: maps.rows
        }
    }
}

module.exports = new MapService()