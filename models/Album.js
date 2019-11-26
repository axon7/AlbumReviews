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
  rating: {
    type: Number
  },
  id: {
    type: Number
  },
  cover_medium: String
  // release_date: {
  //   type: String
  // }
});

// eslint-disable-next-line no-undef
module.exports = Album = mongoose.model("album", AlbumSchema);
