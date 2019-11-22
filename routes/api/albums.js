const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/authorizationJWT");
const Album = require("../../models/Album");

//ROUTE TO POST ALBUMS
//POST api/albums

router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("artist", "Artist is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newAlbum = new Album({
        artist: req.body.artist,
        title: req.body.title,
        rating: req.body.rating
      });

      const album = await newAlbum.save();
      res.json(album);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

//ROUTE TO GET ALL ALBUMS
//GET api/albums

router.get("/", async (req, res) => {
  try {
    const albums = await Album.find().sort({ title: -1 });
    res.json(albums);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
