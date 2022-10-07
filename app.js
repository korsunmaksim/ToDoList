const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.get("port") || 6000;

async function Start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {});
    app.listen(PORT, () => {
      console.log(`App has been started (port:${PORT})`);
    });
  } catch (error) {
    console.log("Server error", error.message);
    process.exit(1);
  }
}

Start();
