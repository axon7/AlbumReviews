const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "album"
  },
  artist: {
    type: String
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
  }
});

module.exports = Album = mongoose.model("album", AlbumSchema);
