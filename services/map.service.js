const db = require("../database/db");

class MapService {
  async getMaps(user_id) {
    const maps = await db.query(`SELECT map FROM map WHERE user_id = $1`, [
      user_id,
    ]);
    console.log(maps.rows);
    return maps.rows;
  }
  async getOneMap(user_id, id) {
    const map = await db.query(
      `SELECT map FROM map WHERE user_id = $1 AND id = $2`,
      [user_id, id]
    );

    return map.rows[0];
  }
  async createMap(id, json) {
    const candidate = await db.query(`SELECT * FROM person WHERE id = $1`, [
      id,
    ]);

    if (!candidate.rows) {
      throw new Error("User not register");
    }

    return db.query(`INSERT INTO map (map, user_id) values ($1, $2)`, [
      json,
      id,
    ]);
  }
}

module.exports = new MapService();
