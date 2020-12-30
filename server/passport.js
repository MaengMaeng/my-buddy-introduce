const Test = require('./models/Test');
const User = require('./models/User');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:5000/auth/github/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOne({ id: profile.id }, function (err, user) {
            if (user) {
                return cb(err, user);
            }
            const newUser = {
                id,
                username,
                email
            } = profile._json;

            User.create({
                ...newUser,
                usertype:'github'
            }, (err, user) => cb(null, user));
        });
    }
));

passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
});

passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    done(null, user); // 여기의 user가 req.user가 됨
});