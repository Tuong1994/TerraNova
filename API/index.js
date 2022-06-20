const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const cookieParser = require("cookie-parser");
const config = require("./config");
const app = express();
const path = require("path");
const { rootRouter } = require("./routers/root.router");

app.use(passport.initialize());
app.use(passport.session())

const publicDirectlyPath = path.join(__dirname, "/");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebook_api_key,
      clientSecret: config.facebook_api_secret,
      callbackURL: config.callback_url,
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        console.log(accessToken, refreshToken, profile, done);
        return done(null, profile);
      });
    }
  )
);

app.use(express.json());
app.use(express.static(publicDirectlyPath));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api", rootRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`);
});
