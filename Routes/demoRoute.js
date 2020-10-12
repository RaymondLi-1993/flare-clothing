const mongoose = require(`mongoose`);

const Order = mongoose.model(`orders`);

module.exports = app => {
  app.get(`/api/demo`, async (req, res) => {
    try {
      const order = await Order.find({ name: "Henry Li" });
      console.log(order);
      res.send(order);
    } catch (error) {
      console.log(error);
    }
  });
};
