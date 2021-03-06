const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  spotifyUsername: {
    type: String
  },
  favArtist: {
    type: String
  },
  about: {
    type: String
  },
  location: {
    type: String
  }
});

// eslint-disable-next-line no-undef
module.exports = Profile = mongoose.model("profile", ProfileSchema);
