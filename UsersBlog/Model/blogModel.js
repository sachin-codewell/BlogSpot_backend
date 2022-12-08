const mongoose = require('mongoose');


const userBlogsSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    author:{
        type:String,
        required:true

    },
    urlToImage:{
        type:String,
        required:true
    }
})

// module.exports = mongoose.model('cryptoUserModel',userSchema,'CryptoUsers');
const UserBlogs = mongoose.model('UserBlogs',userBlogsSchema);
module.exports = UserBlogs ;