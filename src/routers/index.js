const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');
const  signupController = require('../controllers/signupController');
const ficheController = require('../controllers/FicheController')

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});



router.post('/api/signup', signupController.newAccount);
router.get('/api/places/:placeId',ficheController.findPlaces)



module.exports = router;