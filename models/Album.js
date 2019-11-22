const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "album"
  },
  artist: {
    type: Object
  },
  genre: {
    type: String
  },
  title: {
    type: String
  },
  rating: {
    type: Number
  },
  year: {
    type: Number
  },
  id: {
    type: Number
  }
});

module.exports = Album = mongoose.model("album", AlbumSchema);
