const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(mull, '/storage')
    }
})
module.exports = {multer, storage}