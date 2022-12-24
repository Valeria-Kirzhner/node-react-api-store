const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// bodyParser = require("body-parser");
const upload = require("express-fileupload");
// const multer = require("../src/validators/image");

const authRoute = require("./routes/auth.route");
const shareRoute = require("./routes/share.route");
const imagesRoute = require("./routes/images.route");

const { httpLogStream } = require("./utils/logger");

const app = express();
// app.use(multer);
app.use(upload());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(morgan("combined", { stream: httpLogStream }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/share", shareRoute);
app.use("/api/image", imagesRoute);

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    data: {
      message: "API working fine",
    },
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
  next();
});

module.exports = app;
