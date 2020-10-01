const mongoose = require(`mongoose`);

const Order = mongoose.model(`orders`);

module.exports = app => {
  app.post(`/api/orders`, async (req, res, next) => {
    try {
      const { address, name, email, cart, total } = req.body;
      if (!req.body) {
        next(new Error(`Missing an imput field`));
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
