const Image = require("../models/image.model");
const util = require("util");

exports.uploadImage = (req, res) => {
  const { description } = req.body;
  console.log("1");
  console.log(
    "REQ",
    util.inspect(req.body.file, false, null, true /* enable colors */)
  );
  console.log("req: ", req.files);

  console.log("req.file: ", req.body.file);
  //   console.log("req.file.filename: ", req.body.file.filename);
  //   console.log("req.file.filename: ", req.body.file.originalname);
  //   console.log("req.file.filename: ", req.body.file.fieldname);

  //   const image = new Image("http://127.0.0.1:9000/images/" + req.body.file);
  const image = new Image("http://127.0.0.1:9000/images/123");

  Image.uploade(image, (err, data) => {
    if (err) {
      res.status(500).send({
        status: "error",
        message: err.message,
      });
    } else {
      res.status(201).send({
        status: "success",
      });
    }
  });
};
