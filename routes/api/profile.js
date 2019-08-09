const express = require("express");
const router = express.Router();
const authorizationJWT = require("../../middleware/authorizationJWT");
const Profile = require("../../models/Profile");
router.get("/me", authorizationJWT, async (req, res) => {
  try {
    //finding the profile by user id from the token
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "there is no profile for that user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.post("/", authorizationJWT, async (req, res) => {
  const { spotifyUsername, favArtist, about, location } = req.body;
  const profileFields = {};
  profileFields.user = req.user.id;
  if (spotifyUsername) profileFields.spotifyUsername = spotifyUsername;
  if (favArtist) profileFields.favArtist = favArtist;
  if (about) profileFields.about = about;
  if (location) profileFields.location = location;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      return res.json(profile);
    } else {
      //create if the profile does not exist

      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
