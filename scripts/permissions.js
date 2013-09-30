var cfg = require('../config.json');
var main = {};
var client = global.client;
main = function (user){
    client.whois(user,function (data){
        var account = data.account;
        console.log();
        return cfg.ops.indexOf(account);
    });
};
module.exports = main;