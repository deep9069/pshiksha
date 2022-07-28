const mongoose = require('mongoose');

const path = require('path');
//const AVATAR_PATH = path.join('/uploads/users/avatars');

const blogSchema = new mongoose.Schema({
    id: {type:String,
         required:true},
    type: {type:String,
        required:true},
    date: {type:String,
        required:true},
    com: {type:String,
        required:true},
    title: {type:String,
        required:true},
    desc: {type:String,
        required:true},
    cover: {type:String,
        required:true}
});


// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, '..', AVATAR_PATH));
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now());
//     }
//   });


// static
// userSchema.statics.uploadedAvatar = multer({storage:  storage}).single('avatar');
// userSchema.statics.avatarPath = AVATAR_PATH;



const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;