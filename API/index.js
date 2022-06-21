const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportSetup = require("./passport");
const app = express();
const path = require("path");
const { rootRouter } = require("./routers/root.router");

const PORT = process.env.PORT || 4000;
const publicDirectlyPath = path.join(__dirname, "/");

app.use(
  session({
    secret: "prophet456",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.static(publicDirectlyPath));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`);
});
