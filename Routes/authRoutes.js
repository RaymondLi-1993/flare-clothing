const passport = require(`passport`);

module.exports = app => {
  app.get(
    `/auth/google`,
    passport.authenticate(`google`, {
      scope: [`profile`, `email`],
    })
  );

  app.get(
    `/auth/google/callback`,
    passport.authenticate(`google`),
    async (req, res) => {
      try {
        backURL = req.header("Referer") || "/";
        res.redirect(backURL);
      } catch (error) {
        throw error;
      }
    }
  );

  app.get(`/api/logout`, async (req, res) => {
    try {
      req.logout();
      res.redirect(`back`);
    } catch (error) {
      throw error;
    }
  });

  app.get(`/api/currentUser`, async (req, res) => {
    try {
      res.send(req.user);
    } catch (error) {
      throw error;
    }
  });
};
