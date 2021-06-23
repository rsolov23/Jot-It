// require router
const router = require("express").Router();
// require modals
const { Post, User } = require("../../models");
// require authority
// const withAuth = require('../../utils/auth');

// GET route for all comments
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "post_text", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json;
    });
});

// GET route for one post
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST route to create a new post
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT route to update a post (if logged in)
router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            post_text: req.body.post_text
        },
        {
            where: {
                id: req.params.id,
            }
        }
    )
    .then((dbPostData) => {
        if (!dbPostData) {
            res.status(404).json({message: "No post found with this id" });
            return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE route to delete posts
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbPostData) => {
        if (!dbPostData) {
            res.status(404).json({ message: "No post found with this id" });
            return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// module exports
module.exports = router;
