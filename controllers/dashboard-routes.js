// require router
const router = require("express").Router();
// require models
const { Post, User } = require("../models");
// require authority
const withAuth = require("../utils/auth");

// GET route all posts if logged in
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log('=====================');
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET route for one post to edit
router.get("/edit/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        res.render("dashboard", {
          post,
          loggedIn: req.session.loggedIn,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Module exports
module.exports = router;
