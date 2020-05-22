const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const fs = require('fs')

const Image = require("../../models/Image");

// @route    POST api/media
// @desc     Create a post
// @access   Private
router.post(
  "/",
  [
    auth,
  ],
  async (req, res) => {
    try {

      const img = new Image;
      img.img.data = fs.readFileSync(req.body.imagePath),
      img.img.contentType = "image/png"
      img.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/media
// @desc     Get all images
// @access   Private
router.get("/", async (req, res) => {
    try {
      const image = await Image.findById(req.body.id,  (err, doc) => {
          if(err) {
              console.log(err)
          }
        res.contentType('json');
        res.send(doc);
      })
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;
