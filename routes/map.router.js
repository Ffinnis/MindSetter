const mapController = require('../controllers/map.controller')

const Router = require('express').Router;

const router = new Router()

router.get('/map', mapController.getMaps)
router.get('/map/:id', mapController.getOneMap)
router.post('/map', mapController.createMap)
router.delete('/map', mapController.deleteMap)
router.put('/map/:id/:json', mapController.editMap)

module.exports = router