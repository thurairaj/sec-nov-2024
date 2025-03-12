const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/userModel");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(options, async (jwtToken, done) => {
    try {
      const user = await User.findById(jwtToken.id);
      if (user) return done(null, user);
      return done(null, false);
    } catch (e) {
      return done(e, false);
    }
  }),
);

const authenticate = passport.authenticate("jwt", { session: false });
const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).send("Not Authorized");
  }
  next();
};
module.exports = { authenticate, authorize };
