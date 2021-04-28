const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');
const  signupController = require('../controllers/signupController');

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});



router.post('/api/signup', signupController.newAccount);



module.exports = router;