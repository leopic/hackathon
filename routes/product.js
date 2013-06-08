var agent86 = require('superagent');

exports.details = function(req, res) {
    agent86.get('http://api.backcountry.com/public/product/' + req.params.sku).end(function (ans) {
//        console.log(ans.body);
        res.render('product', {product: ans.body});
    });
}