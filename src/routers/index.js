const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});
module.exports = router;
