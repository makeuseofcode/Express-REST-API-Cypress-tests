const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

const baseURL = '/v1/api/';

router.post(baseURL + 'register', userControllers.registerUser);
router.get(baseURL + 'users', userControllers.getUsers);
router.post(baseURL + 'login', userControllers.loginUser);

module.exports = router;
