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
    async (req, res, next) => {
      try {
        backURL = req.header("Referer") || "/";
        res.redirect(backURL);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(`/api/logout`, async (req, res, next) => {
    try {
      req.logout();
      res.redirect(`back`);
    } catch (error) {
      next(error);
    }
  });

  app.get(`/api/currentUser`, async (req, res, next) => {
    try {
      res.send(req.user);
    } catch (error) {
      next(error);
    }
  });
};
