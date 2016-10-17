var aws_serverless_express = require('aws-serverless-express');
var app = require('./app');
var server = aws_serverless_express.createServer(app);

//lambda 
exports.handler = aws_serverless_express.proxy(server, event, context);