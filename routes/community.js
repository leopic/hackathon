var agent86 = require('superagent');

exports.content = function(req, res) {
    agent86.get('http://api.backcountry.com/public/community/' + req.params.sku).end(function (ans) {
        var content = JSON.parse(ans.text).attributes;
        console.log(content);
//        console.log(ans.body);
        res.render('community', {content: content});
    });
}