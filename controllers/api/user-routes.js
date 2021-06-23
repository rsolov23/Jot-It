//require router
const router = require("express").Router();
//require models
const { User, Post } = require("../../models");

//get all
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//get by id
// router.get("/:id", (req,res) => {
//     User.findOne({
//         attributes: { exclude: ["password"]},
//         where: {
//             id: req.params.id,
//         },
//         include: []
//     })
// })
//post route=create

//post login

//post logout

//update user??

//destroy user??

//module exports
module.exports = router;
