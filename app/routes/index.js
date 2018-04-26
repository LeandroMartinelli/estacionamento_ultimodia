module.exports = function(app){

    controller = app.controller.index;
    app.get('/', controller.index);
    app.get('/teste', controller.teste);

}