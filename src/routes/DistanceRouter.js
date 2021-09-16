const Router = require('express');
const router = new Router();


const distanceController = require('../controllers/DistanceController')

router.get('/distance', distanceController.fromGps)

module.exports = router;