const mapService = require("../services/map.service");

class MapController {
  async getMaps(req, res) {
    try {
      const user_id = req.params.user_id;
      const maps = await mapService.getMaps(user_id);

      return res.json(maps);
    } catch (e) {
      console.log(e);
    }
  }
  async getOneMap(req, res) {
    try {
      const user_id = req.params.user_id;
      const id = req.params.id;

      const map = await mapService.getOneMap(user_id, id);

      return res.json(map);
    } catch (e) {
      console.log(e);
    }
  }
  async createMap(req, res) {
    try {
      const { id, json } = req.body;
      const map = await mapService.createMap(id, json);

      return res.json({
        message: map,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async deleteMap(req, res) {}
  async saveMap(req, res) {}
}

module.exports = new MapController();
