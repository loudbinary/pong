var path = require('path');
var config = require('dotenv').config(path.join(__dirname,'..','.env')).parsed;
var send = require(path.join(__dirname,'..','libs','send'));

function line(){
    console.log('===============================================================================');
};

module.exports = function device(error,message,callback) {
    line();
    console.log(new Date());
    send(config.SNS_REGISTRATION_URL,"REGISTER",function(err,data){
        console.log(data);
        console.log('Finished sending message ', data.ResponseMetadata.RequestId);
        line();
        callback(null,true);
    });
};