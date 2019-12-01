const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "album"
  },
  artist: {
    type: Object
  },
  genre_id: {
    type: Number
  },
  title: {
    type: String
  },
  id: {
    type: Number
  },
  cover_medium: String,
  cover_big: String,
  reviews: { type: Array }
});

// eslint-disable-next-line no-undef
module.exports = Album = mongoose.model("album", AlbumSchema);
