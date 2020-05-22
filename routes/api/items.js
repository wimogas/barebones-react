const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const fs = require('fs');

const Item = require("../../models/Item");


// @route    POST api/data
// @desc     Create a post
// @access   Private
router.post(
  "/",
  [
    auth,
  ],
  async (req, res) => {

    try {
      const newItem = new Item({
        title: req.body.title,
        price: req.body.price,
        quantity: req.body.quantity,
      });

      const item = await newItem.save();

      res.json(item);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/data/items
// @desc     Get all items
// @access   Public
router.get("/", async (req, res) => {
    try {
      const items = await Item.find().sort({ date: -1 });
      res.json(items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  
// @route    GET api/items/:id
// @desc     Get item by ID
// @access   Pulbic
router.get("/:id", async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
  
      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !item) {
        return res.status(404).json({ msg: "Post not found" });
      }
  
      res.json(item);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send("Server Error");
    }
  });
  

module.exports = router;
