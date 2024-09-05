const { homePage, createForm, createBlog, singleBlog, deleteBlog } = require('../controller/blogController')

const router = require('express').Router()
const {multer,storage,storage2,storage3} = require('./../middleware/multerConfig')
const upload = multer({storage:storage})

router.route("/").get(homePage)
router.route("/blog/:id").get(singleBlog)
router.route("/delete/:id").get(deleteBlog)
router.route("/create").get(createForm).post(upload.single('image'),createBlog)





module.exports = router 
