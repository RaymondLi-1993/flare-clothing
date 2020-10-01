const clothingData = require(`../data`);

module.exports = app => {
  app.get(`/api/products`, (req, res, next) => {
    try {
      res.send(clothingData);
    } catch (error) {
      next(error);
    }
  });
};
