const router = require("express").Router();
const { Post, User } = require('../models');

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    style: 'style.css'
  });
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "post_text",
      "created_at",
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });
      // pass data to template
      res.render("edit-post", {
        post,
        loggedIn: req.session.loggedIn,
        style: 'style.css'
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
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
