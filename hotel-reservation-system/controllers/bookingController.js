const Booking = require('../models/Booking');

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('room');
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create a new booking
exports.addBooking = async (req, res) => {
  const { user, room, check_in_date, check_out_date, total_price } = req.body;
  try {
    let booking = new Booking({ user, room, check_in_date, check_out_date, total_price });
    await booking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
