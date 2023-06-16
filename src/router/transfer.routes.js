const express = require('express');

const router = express.Router();

//Controller
const {
    transferUser
} = require('../controllers/transfer.controller');

//Middleware
const {
    validTransfer
} = require('../middlewares/transferValid.middleware')

router
    .route('/')
    .post(validTransfer, transferUser)

module.exports = router