const {Router} = require('express')
const {ApmController} = require('../controllers')

const router = new Router();
const controller = new ApmController();

router.post('/', controller.create)

module.exports = router;
