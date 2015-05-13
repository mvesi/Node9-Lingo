var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '7%2F8kcSz7bSXtoTRMaeY8ow%3D%3D'
});

var languages = [
    ['English', 'eng'],
    ['French', 'fra'],
    ['Spanish','spa'],
    ['German', 'ger'],
    ['Portuguese', 'por'],
    ['Albanian', 'alb'],
    ['Italian', 'ita'],
    ['Swedish', 'swe'],
    ['Slovak', 'slo']
];


var indexController = {
	index: function(req, res) {
		res.render('index', {
            languages: languages
        });
	},
    translator: function(req, res){

        beglobal.translations.translate(
            {text: req.body.text, from: req.body.from, to: req.body.to},
                function(err, results) {
                if (err) {
                  return console.log(err);
                }

            res.send(results);
          }
        );
    }
};

module.exports = indexController;