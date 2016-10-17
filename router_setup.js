
//load all routes for our API (using require-all to avoid duplicate 'requires()')
//I might do the require for all routes one-by-one to allow for better modularity
var endpoints = require('require-all')(__dirname + '/routes');
module.exports = endpoints;