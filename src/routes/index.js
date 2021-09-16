const Router = require('express');
const router = new Router();

const getDistanceRouter = require('./DistanceRouter');

router.use('/get', getDistanceRouter)


module.exports = router;