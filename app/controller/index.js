module.exports = function (app){

    var Index = {
        
        index: function (req, res) {
            res.render('index');
        },

        teste: function(req, res) {
            res.end("Teste");
        }

    }
    return  Index;
}