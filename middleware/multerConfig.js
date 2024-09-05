// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./storage"); // cb(err,success)
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// module.exports = { multer, storage };


const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "storage"); // Removed './' for the correct relative path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = { upload };
