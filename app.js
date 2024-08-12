const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//----------------------------------------

const indexRouter = require("./routes/index"); //gets router
const newRouter = require("./routes/new");
const openRouter = require("./routes/open");

app.use(express.urlencoded({ extended: true })); //req.body encoder

app.use("/", indexRouter); //mounts router at /
app.use("/new", newRouter); //mounts router at /new
app.use("/", openRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
