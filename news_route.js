var news=require('./news_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    news.getAllPerson(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  module.exports=router;