var express = require('express');
var app = express();
var consign = require('consign');

module.exports = function() {
    
    var ui5Router = require('../app/ui5/ui5Router');
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use('/', ui5Router.getRouter(express));

    consign({
        cwd: 'app',
        extensions: ['.js', '.json', '.node'],
        verbose: false
    })
        .include('controller')
        .then('routes')
        .into(app);

    return app;

};