const User = require('../../models/User');

exports.findBySocialId = (req, res, next) => {
    const {social, id} = req.body;

    User.findOne({'social' : { $elemMatch: { id, social }}})
        .then((user) => {
            if(user) return res.json(user);

            next();
        });
}

exports.findByEmail = (req, res, next) => {
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

exports.createUser = (req, res) => {
    const {profile, social, id} = req.body;
    
    console.log(req.body);

    new User({
        ...profile,
        social:[{social,id}]
      })
      .save()
      .then(user => res.json(user));
}

