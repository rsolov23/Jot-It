// require router
const router = require('express').Router();
// require modals
const { Post, User } = require('../../models');
// require authority
// const withAuth = require('../../utils/auth');

// GET route for all comments
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            "id",
            "title",
            "post_text",
            "created_at"
        ],
        order: [["created_at", "DESC"]],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json
    })
})

// GET route for one post

// POST route to create a new post

// PUT route to update a post (if logged in)

// DELETE route to delete posts 

// module exports
module.exports = router;