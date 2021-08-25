const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');
// const multer = require('multer')

// const fileStorage = multer.diskStorage({
//     destination : 'images',
//     filename : (req,file,cb)=>{
//         cb(null,file.originalname)

//     }
// })
// const fileFilter = (req,file,cb)=> {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ){
//       cb(null,true)
//   }
//   else {
//       cb(null,false)
//   }
// }
// module.exports = multer ({storage:fileStorage,fileFilter:fileFilter}).any()