var agent86 = require('superagent');

exports.root = function(req, res) {
    res.render('root', {title: 'Backcountry API Demo'})
};

exports.doSearch = function(req, res) {
    agent86.get('http://api.backcountry.com/public/search?q=' + req.body.query).end(function (ans) {
//        console.log(ans.body.products);
        res.render('results', {results : 'Results !', products: ans.body.products});
    });
}