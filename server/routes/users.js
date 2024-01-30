var express = require('express');
var router = express.Router();
const UserController = require('../controller/UserController');

/* GET users listing. */

router.get('/all',UserController.getAllUsers);

router.post('/save',UserController.saveUsers);

router.get('/find/:id',UserController.getUsers);

module.exports = router;
