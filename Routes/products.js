const clothingData = require(`../data`);

module.exports = app => {
  app.get(`/api/products`, (req, res) => {
    try {
      res.send(clothingData);
    } catch (error) {
      throw error;
    }
  });
};
