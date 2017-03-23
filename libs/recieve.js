var AWS = require('aws-sdk');
var path = require('path');

var config = require('dotenv').config(path.join(__dirname,'..','.env')).parsed;
var md5 = require('md5');
var sqsOptions = {
    endpoint: config.SNS_REGISTRATION_URL,
    region: config.REGION
};
var sqs = new AWS.SQS(sqsOptions);
var params = {};
var messageAttributes = {
    "ACCOUNT_ID": {
        DataType: "String",
        StringValue: config.ACCOUNT_ID
    },
    "DEVICE_ID": {
        DataType: "String",
        StringValue: config.DEVICE_ID
    },
    "FUNCTION_ID": {
        DataType: "String",
        StringValue: "PONG"
    }
};

function validResponse(data,callback){
    if (data.MD5OfMessageBody == md5(params.MessageBody)){
        console.log('MD5 Checksum valid for response');
        callback(null,true);
    } else {
        console.log('MD5 Checksum invalid for response');
        callback(null,false)
    }
}

module.exports = function message(queueUrl,callback) {
    params = {
        AttributeNames: [
            "All"
        ],
        MessageAttributeNames: [
            "All"
        ],
        MaxNumberOfMessages: 10,
        QueueUrl: queueUrl
    };
    sqs.receiveMessage(params, function(err,data) {
        console.log('Registering...device_id ', config.DEVICE_ID, ' for account ', config.ACCOUNT_ID);
        if (err) console.log(err, err.stack); // an error occurred
        //else{
            //validResponse(data,function(err,valid){
               // if (valid) {
                    callback(null,data);
                //} else {
                 //   console.log('DOOMED!');
                //   callback(err);
              //  }
           // });
        //}
    });
};