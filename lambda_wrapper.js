var AWS = require('aws-sdk');
var config = require('./config');

//configure aws-lamdba environment docs on aws lambda lib -> 
//http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html
var lambda = new AWS.Lambda({
  region: config.aws.region //change to your region
});

module.exports = lambda;