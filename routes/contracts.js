var aws = require('aws-sdk');
var express = require('express');
var router = express.Router();
var config = require('../config');
var lambda = require('../lambda_wrapper');   //wrapper for avs-sdk.lambda object

var micro_service = {
    "name" : "avs_services_contracts",
}

function _invoke_lambda(args, callback){
    //TODO: return a promise instead of callback
    var options = {
        FunctionName: micro_service.name
    }

    if(args){
        options.Payload = args
    }
    //invoke lambda function
    lambda.invoke({
        FunctionName: micro_service.name
    },
    function(err, data){
        callback((data || null));
    });
}

router.get('/contracts', function(req, res) {
    //call appropriate lambda micro-service
    var args = { method: 'get-contracts' };

    _invoke_lambda(args, function(data){
        res.json(data || { "data" : "contracts data returned" });
    }); 
});

router.get('/contracts/:contract_id', function(req, res) {
    //call appropriate lambda micro-service
    var args = { 
        method: 'get-contract', 
        params: {
            contract_id: req.body.contract_id 
        }
    };

    _invoke_lambda(args, function(data){
        res.json(data || { "data" : "contract data returned" });
    });
});
