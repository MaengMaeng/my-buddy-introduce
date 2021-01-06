const router = require('express').Router();
const User = require('../models/User');

const findBySocialId = (req, res, next) => {
    const {social, id} = req.body;

    User.findOne({'social' : { $elemMatch: { id, social }}})
        .then((user) => {
            if(user) return res.json(user);

            next();
        });
}

const findByEmail = (req, res, next) => {
    const {profile, id, social} = req.body;

    User.findOne({email:profile.email})
        .then(user => {
            if(user) {
                return User.findOneAndUpdate({_id:user._id},{ $push: { social: {id, social} } })
                    .then(user => res.json(user));
            }

            next();
        })
}

const createUser = (req, res) => {
    const {profile, social, id} = req.body;
    
    console.log(req.body);

    new User({
        ...profile,
        social:[{social,id}]
      })
      .save()
      .then(user => res.json(user));
}

router.use('/login', [findBySocialId, findByEmail, createUser]);


module.exports = router;