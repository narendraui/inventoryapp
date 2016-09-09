var mongodb=require('mongoose');
var connections=require('./config');
module.exports=function(){
    mongodb.connect=connections.dbconnection;
    console.log('Connection Establised');
};
