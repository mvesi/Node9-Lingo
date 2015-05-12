var BeGlobal = require('node-beglobal');



var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    translator: function(req, res){
        res.send(req.body);
        // console.log(req.body);
        var beglobal = new BeGlobal.BeglobalAPI({
          api_token: '7%2F8kcSz7bSXtoTRMaeY8ow%3D%3D'
        });

        beglobal.translations.translate(
          {text: 'hello', from: 'eng', to: 'fra'},
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