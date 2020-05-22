const express = require('express');
const router = express.Router();
const auth = require("../../middlewares/auth");

const Cart = require('../../models/cart');

router.post(
  '/add',
 [auth],
  (req, res) => {
    const quantity = 1;
    const item = req.body.item;
    const user = req.body.user;

    const cart = new Cart({
      quantity,
      item,
      user
    });

    cart.save((err, cart) => {
      if (err) {
        return res.status(422).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
      Cart.findById(cart._id)
        .populate('item', 'title price')
        .exec((err, cart) => {
          if (err) {
            return res.status(422).json({
              error: 'Your request could not be processed. Please try again.'
            });
          } 
        res.status(200).json({
          success: true,
          msg: `Item Added to Cart`,
          cart: cart
        });
      }) 
    });
  }
);


// @route    GET api/cart
// @desc     Get all cart items
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const carts = await Cart.find({ user: req.user.id}).populate('item', 'title price')

    res.json(carts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/cart
// @desc     Delete single item
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    await item.remove();
    res.json({ msg: "Item removed" });
  } catch (err) {
    console.error(err.message);
  }
});

// @route    DELETE api/cart
// @desc     Delete Cart
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    const items = await Cart.find({ user: req.user.id})
    await items.map(item => item.remove())
    res.json({ msg: "Order Processed" });
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = router;
