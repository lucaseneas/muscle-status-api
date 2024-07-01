const express = require('express');
const router = express.Router();

const usersController = require('./controllers/usersController');
const usersMiddleware = require('./middlewares/usersMiddleware');

router.get('/users',usersController.getAll)
router.post('/users',usersMiddleware.validateBody,usersController.createUser);


module.exports = router;