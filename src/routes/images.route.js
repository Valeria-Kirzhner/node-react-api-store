const router = require("express").Router();
const { asyncHandler } = require("../middlewares/asyncHandler");
const { upload: validateFile } = require("../validators/image");
const imageController = require("../controllers/image.controller");

const checkToken = require("../middlewares/checkToken");
// const upload = multer({ dest: "uploads/" });

router
  .route("/")
  .post(upload.single("file"), asyncHandler(imageController.uploadImage));

module.exports = router;

//validateFile.single("image")
