const Blog=require('../schemas/blog');
const jwt = require('jsonwebtoken');

module.exports.fetch = async function(req, res){
    console.log('Blog API is up!');
    Blog.find({}, function (err, docs) {
        if (err){
            console.log(err);
            return;
        }
        else{
            //console.log("Blog : ", docs);
            return res.status(200).json({blog:"blahsomething"});
        }
        })};