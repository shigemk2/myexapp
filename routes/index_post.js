var data = {
    taro: {mail:'taro@yamada',tel:'090-9999-9999'},
    hanako: {mail:'hanako@flower',tel:'090-8888-8888'}
};

exports.index = function(req, res) {
    var name   = req.body.name;
    var result = data[name];
    console.log(req.body);
    console.log(name);

    if (result == undefined) {
        result = {mail:'見つかりませんでした', tel:'見つかりませんでした'};
    }
    res.send(result);
};
