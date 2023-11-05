const express = require("express"),
    path = require("path"),
    PORT = process.env.PORT || 8001,
    app = express();

app.use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "vash")
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use("/api", require("./api/index"))
    .use("/", require("./routes/index"))
    .use("/", (req, res) => res.sendFile("index.html", { root: __dirname }))
    .listen(PORT, () => console.log(`Server is Listening on http://localhost:${PORT}`));
