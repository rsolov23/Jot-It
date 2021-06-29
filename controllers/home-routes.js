const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    style: 'style.css'
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    style: 'style.css'
  });
});

module.exports = router;
