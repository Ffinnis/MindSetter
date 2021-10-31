const mapService = require("../services/map.service");

class MapController {
  async getMaps(req, res) {
    try {
      const maps = await mapService.getMaps();

      return res.json(maps);
    } catch (e) {
      console.log(e);
    }
  }
  async getOneMap(req, res) {}
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
