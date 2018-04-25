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

app.listen(3000, function(){
    console.log("Estacionando do ultimo dia");
});