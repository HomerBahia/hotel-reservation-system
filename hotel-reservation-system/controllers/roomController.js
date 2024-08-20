const Room = require('../models/Room');

// Get all rooms
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add a new room
exports.addRoom = async (req, res) => {
  const { room_number, type, price } = req.body;
  try {
    let room = new Room({ room_number, type, price });
    await room.save();
    res.json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
