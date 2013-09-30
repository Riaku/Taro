var log = require('../scripts/logger');
var main = {};

main = function(msg){
    var vars = msg.message;
    client.join(vars[1]+" "+vars[2]);
    log.commandLog({"to":msg.to,"message":" "+msg.from+": initiated command JOIN with arguments: "+vars.join(' ')});
};

module.exports = main;