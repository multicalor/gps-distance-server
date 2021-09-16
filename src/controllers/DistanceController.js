require('dotenv').config()

// Error handle
// const ApiError = require('../error/ApiError');
const distanceService = require('../services/distanceService.js')


const API_KEY = process.env.API_KEY //'dHOPJtw6qvMMMvE1EXy7EALVEORxtgoh'


class DistanceController {

  async fromGps(req, res) {
    try {
      const {coordinateA, coordinateB} = req.body;
      const result = distanceService.fromGps(coordinateA, coordinateB);

      res.status(200).json({ status: 200, data: result })
    } catch (e) {
      console.error(e.message)
      return res.status(500).json({ status: e.status, details: e.message });//"Api book error"
    }
  }

}


module.exports = new DistanceController();