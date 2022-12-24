const db = require("../config/db.config");
const { insertImage: insertImageQuery } = require("../database/queries");
const { logger } = require("../utils/logger");

class Image {
  constructor(fileName) {
    this.fileName = fileName;
  }

  static uploade(image, cb) {
    // console.log("image: ", image.file);
    // console.log("image: ", image.name);
    // console.log("image: ", image.filename);

    db.query(insertImageQuery, image, (err, res) => {
      if (err) {
        logger.error(err.message);
        cb(err, null);
        return;
      }
      cb(null, {
        response: res,
      });
    });
  }
}
module.exports = Image;
