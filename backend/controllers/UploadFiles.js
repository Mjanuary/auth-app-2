const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

function ensureExists(path, mask, cb) {
  if (typeof mask == "function") {
    // allow the `mask` parameter to be optional
    cb = mask;
    mask = 0777;
  }
  fs.mkdir(path, mask, function (err) {
    if (err) {
      if (err.code == "EEXIST") cb(null);
      // ignore the error if the folder already exists
      else cb(err); // something else went wrong
    } else cb(null); // successfully created folder
  });
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = `uploads/${req.params.district_Id}/${req.params.plan_id}`;
    // create a folder it does not exists
    ensureExists(path, 0744, (err) => {
      cb(null, path);
    });
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
