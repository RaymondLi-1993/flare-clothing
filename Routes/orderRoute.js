const mongoose = require(`mongoose`);
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const shortId = require("shortid");
const apiError = require(`../middlewares/error`);

const Order = mongoose.model(`orders`);

module.exports = app => {
  app.post(`/api/orders`, async (req, res, next) => {
    const { id, amount, cart, shippingDetails } = req.body;
    const { email, name, address, state, zip } = shippingDetails;
    const total = amount / 100;
    try {
      if (!id || !amount) {
        next(apiError.badRequest(`It's not your problem, Its us`));
      }
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: `USD`,
        description: `Flare-Clothing`,
        payment_method: id,
        confirm: true,
      });

      const status = await payment.status;
      if (status === `succeeded`) {
        if (!shippingDetails) {
          next(apiError.badRequest(`Missing Input Field`));
          return;
        }
        const order = await Order({
          _id: shortId.generate(),
          email,
          name,
          address,
          state,
          zip,
          total,
          cart,
          _user: req.user.id,
          date: Date.now(),
        }).save();
        res.send(order);
      }
    } catch (error) {
      next(apiError.internal(error));
    }
  });
};
