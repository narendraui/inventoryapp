var express=require('express');

module.exports=function(){
var app=express();
    app.get('/',function(req,res){
        res.end('Express Initialised');
    });
    return app;
};