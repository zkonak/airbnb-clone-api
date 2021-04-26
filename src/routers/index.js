const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');

router.get('/', controller.controller);
module.exports = router;
