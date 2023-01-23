const express = require("express");
const app = express();
require("dotenv").config();

const server = require("http").createServer(app);
// const io = require("socket.io")(server);

const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.options("*", cors());

// middleware of packages
app.use(morgan("dev"));

// work with body parser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Define Routes
app.use("/api/uploads", express.static("./uploads/"));

/**
 * @Routes
 * */
app.use("/api", require("./routes/api/index"));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🖥️  Server started 🚀 on port ${PORT}`);
});
