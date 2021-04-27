const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');

const UserSignInController = require('../controllers/UserSignInController');
const PlaceUpdateController = require('../controllers/PlaceUpdateController');

const roomController = require('../controllers/roomController');

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});

router.post('/api/signin', UserSignInController.signin);
router.patch('/api/places/:placeId', PlaceUpdateController.updatePlace);
router.post('/api/places', roomController.addRooms);

module.exports = router;
