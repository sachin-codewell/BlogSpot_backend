const express = require('express');
const multer  = require('multer')
const {PostBlog,GetBlogs} = require('../Controller/blogsController')
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage });

router.post('/postarticle',upload.single('urlToImage'),PostBlog);
router.get('/getblogs',GetBlogs)

module.exports = router;