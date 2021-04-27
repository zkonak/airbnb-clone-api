const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();
const controller = require('../controllers/BookingController');
const roomController = require('../controllers/roomController');

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});

router.post('/api/places',roomController.addRooms);


module.exports = router;
