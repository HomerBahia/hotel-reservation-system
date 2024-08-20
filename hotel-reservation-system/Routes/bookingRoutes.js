const express = require('express');
const router = express.Router();
const { getBookings, addBooking } = require('../controllers/bookingController');

// Route to get all bookings
router.get('/', getBookings);

// Route to create a new booking
router.post('/', addBooking);

module.exports = router;
