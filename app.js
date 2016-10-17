var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require( 'method-override' );
var logger = require('morgan');
var errorHandler = require('errorhandler');
var cors = require('cors');
var aws_serverless_express_middleware = require('aws-serverless-express/middleware');

var app = express();
var router = express.Router();

//all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(aws_serverless_express_middleware.eventContext());

// Routes
app.use(router);
var router_setup = require('./router_setup');

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

router.get('/', function (req, res) {
	res.send('AWS SERVERLESS API ROBOT - TO DESTROY ALL ( ._.)');
});

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

/* un-comment and run for local development */
/*http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});*/

module.exports = app;