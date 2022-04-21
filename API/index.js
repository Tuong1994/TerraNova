const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const publicDirectlyPath = path.join(__dirname, "/");
const { rootRouter } = require("./routers/root.router");

app.use(express.json())
app.use(express.static(publicDirectlyPath));
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)
app.use("/api", rootRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`);
});
