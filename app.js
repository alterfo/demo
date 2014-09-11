


var fs = require('fs'),
    app = require('connect')(),
    http = require('http').Server(app),
    logger = require("morgan"),
    static = require("serve-static"),
    urlrouter = require('urlrouter'),
    request = require('request'),
    bodyParser = require('body-parser'),
    render = require('connect-render'),
    logger = require('morgan');

var pub = __dirname + '/public',
    view = __dirname + '/views';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(static(pub));
app.use(static(view));
app.use(render({
    root: __dirname,
    layout: "index.html",
    cache: false
}));




app.use(urlrouter(function(app) {
    app.get("/", function(req, res) {
        res.render('index.html');
    });
}));
http.listen(8080);
console.log("Listening on 8080");