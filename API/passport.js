const passport = require("passport");
const GoogleStragety = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "241483724685-ogf988rdinclbbj6khqj497uqr5vlgi1.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStragety(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `/api/authManagement/google/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});



const facebook = {
  facebook_api_key: "546569780279276",
  facebook_api_secret: "3bd2240345e5f1d34945a62c94219074",
  callback_url: "http://localhost:4000/auth/facebook/callback",
  use_database: false,
  username: "root",
  password: "prophet456",
  database: "project_platform",
  host: "127.0.0.1",
};
