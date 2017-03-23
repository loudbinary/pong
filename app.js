var path = require('path');
var poll = require(path.join(__dirname,'cmds', 'poll'));
var register= require(path.join(__dirname,'cmds', 'registerDevice'));
var config = require('dotenv').config('./.env').parsed;

function registerDevice(){
    register(null,'REGISTER',function(err,data){
        if (err) console.log(err);
        if (data == true) {
            console.log('Registered.....sorta');
        }
    });
}

function pollChannel(){
    poll(function(err,data){
        console.log(data);
    })
}

pollChannel();




// Source: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#sendMessage-property
/* This example sends a message with the specified message body, delay period, and message attributes to the specified queue. */
/*
 var params = {
 DelaySeconds: 10,
 MessageAttributes: {
 "City": {
 DataType: "String",
 StringValue: "Any City"
 },
 "Greeting": {
 BinaryValue: <Binary String>,
 DataType: "Binary"
 },
 "Population": {
 DataType: "Number",
 StringValue: "1250800"
 }
 },
 MessageBody: "Information about the largest city in Any Region.",
 QueueUrl: "https://sqs.us-east-1.amazonaws.com/80398EXAMPLE/MyQueue"
 };
 sqs.sendMessage(params, function(err, data) {
 if (err) console.log(err, err.stack); // an error occurred
 else     console.log(data);           // successful response
 /*
 data = {
 MD5OfMessageAttributes: "00484c68...59e48f06",
 MD5OfMessageBody: "51b0a325...39163aa0",
 MessageId: "da68f62c-0c07-4bee-bf5f-7e856EXAMPLE"
 }
 */
