const mapController = require('../controllers/map.controller')
const authMiddleware = require('../middleware/auth.middleware')

const Router = require('express').Router;

const router = new Router()

router.get('/map', authMiddleware, mapController.getMaps)
router.get('/map/:id', authMiddleware, mapController.getOneMap)
router.post('/map', authMiddleware, mapController.createMap)
router.delete('/map', authMiddleware, mapController.deleteMap)
router.put('/map/:id/:json', authMiddleware, mapController.saveMap)

module.exports = router