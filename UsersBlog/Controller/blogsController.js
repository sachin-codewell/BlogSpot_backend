const UserBlogModel = require('../Model/blogModel');
const { v4 : uuidv4 } = require('uuid')

//Save a blog in database

function PostBlog(req,res){
    const blogInfo = req.body;
    console.log(req.file);
    let newBlog = new UserBlogModel({
        _id:uuidv4(),
        title:blogInfo.title,
        description:blogInfo.description,
        author:blogInfo.author,
        urlToImage:req.file.originalname
    })
    newBlog.save((err)=>{
        if(!err){
            res.status(201).send({msg:"New Blog Posted Successfully"})
        }
        else{
            res.status(404).send({msg:'Some Error Has Occured'})
        }
    })
}

function GetBlogs(req,res){
    UserBlogModel.find({},(err,data)=>{
        if(!err&&data){
            res.status(200).send({blogs:data})
        }
        else{
            res.status(404).send("No Blogs are Posted Till Now")
        }
    })
}


module.exports = {PostBlog,GetBlogs}