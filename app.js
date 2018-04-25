var app = require('./config/express')();
var routes = require('./app/routes/index')(app);
var consign = require('consign');

consign({
    cwd: 'app',
    extensions: ['.js', '.json', '.node'],
    verbose: false
})
    .include('routes')
    .then('infra')
    .into(app);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Estacionando do ultimo dia");
});