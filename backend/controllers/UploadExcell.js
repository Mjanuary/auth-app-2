const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = `uploads/achivements`;
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // if (
    //   file.mimetype == "image/png" ||
    //   file.mimetype == "image/jpg" ||
    //   file.mimetype == "image/jpeg"
    // ) {
    //   cb(null, true);
    // } else {
    //   cb(null, false);
    //   return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    // }
    cb(null, true);
  },
});

module.exports = upload;
