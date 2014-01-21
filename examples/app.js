#!/usr/bin/env node

//Needed for monit/upstart
process.chdir(__dirname);

var express = require('express'),
    MongoJson = require('../lib/express-session-json');

var app = module.exports = express();

app.configure(function(){
    //app.use(xp.cookieDecoder());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session({ store: new MongoJson() }));
    app.use(app.router);
});

app.get('/', function(req, res) {
    res.send('HERE');
    res.end();
});

app.listen(3000);

