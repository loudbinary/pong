var path = require('path');
var config = require('dotenv').config(path.join(__dirname,'..','.env')).parsed;
var rec = require(path.join(__dirname,'..','libs','recieve'));

function line(){
    console.log('===============================================================================');
};

module.exports = function poll_channel(callback) {
    line();
    console.log(new Date());
    rec(config.SNS_REGISTRATION_URL,function(err,data){
        console.log(data);
        console.log('Finished polling....', data.length, ' messages');
        line();
        callback(null,data);
    });
};