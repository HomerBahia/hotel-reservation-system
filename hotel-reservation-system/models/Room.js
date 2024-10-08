const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  room_number: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'available',
  },
});

module.exports = mongoose.model('Room', RoomSchema);
