const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const User = require('./Models/UserSchema');
const jwt = require("jsonwebtoken");
passport.use(
  new BearerStrategy(async (token, done) => {
    const tokenData = await jwt.verify(token, "secret");
    console.log(tokenData);
    const user = await User.findOne({ _id: tokenData.data._id });
   if (user) {
     return done(null, { user });
    }  
  })
);
