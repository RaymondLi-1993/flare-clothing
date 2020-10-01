const mongoose = require(`mongoose`);
const apiError = require(`../middlewares/error`);

const Order = mongoose.model(`orders`);

module.exports = app => {
  app.post(`/api/orders`, async (req, res, next) => {
    try {
      const { address, name, email, cart, total } = req.body;
      if (!req.body) {
        next(apiError.badRequest(`Missing Input Field`));
        return;
      }
      const order = await Order({
        email,
        name,
        address,
        total,
        cart,
        _user: req.user.id,
        date: Date.now(),
      }).save();

      res.send(order);
    } catch (error) {
      next(error);
    }
  });
};
