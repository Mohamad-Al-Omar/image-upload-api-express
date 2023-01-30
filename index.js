// install express with `npm install express`
const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadImage = multer({ storage: storage }).single("image");
app.post("/", (req, uploadImage, res) => res.send("Hello World!"));

// export 'app'
module.exports = app;
