const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');
const signupController = require('../controllers/signupController');
const ficheController = require('../controllers/FicheController');
const cityController = require("../controllers/cityController");

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
router.post('/api/signup', signupController.newAccount);
router.get('/api/places/:placeId',ficheController.findPlaces);
router.get('/api/city', cityController.findCity);
module.exports = router;
