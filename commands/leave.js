var log = require('../scripts/logger');
var main = {};

main = function(msg){
    var vars = msg.message;
    client.part(vars[1]);
    log.commandLog({"to":msg.to,"message":" "+msg.from+": initiated command JOIN with argument: "+vars[1]});
};

module.exports = main;