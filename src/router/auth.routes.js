const express = require('express');

const router = express.Router();

//Controller
const {
    signup,
    login,
    findUserHistory
} = require('../controllers/auth.controller');

//Middleware
const {
    validUser
} = require('../middlewares/user.middleware')

router
    .route('/signup')
    .post(signup)

router
    .route('/login')
    .post(login)

router
    .route('/:id/history')
    .get(findUserHistory)

module.exports = router