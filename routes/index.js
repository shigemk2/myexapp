
/*
 * GET home page.
 */

exports.index = function(req, res){
    var id = req.params.id;
    var name = req.params.name;
    var msg = 'こんにちは';

    if (id != undefined) {
        msg += 'ID=' + id + '番';
    };
    if (name != undefined) {
        msg += name + 'さん';
    };
    res.render('index', {
        title: 'Express',
        msg: msg
    });
};
