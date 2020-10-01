const clothingData = require(`../data`);
const apiError = require("../middlewares/error");
module.exports = app => {
  app.get(`/api/products`, (req, res, next) => {
    try {
      res.send(clothingData);
    } catch (error) {
      next(apiError.internal(error));
    }
  });
};
