var log = require('../scripts/logger');
var main = {};
var client = global.client;
main = function(msg){
    client.send("KICK", msg.to, msg.message[1], msg.message[2]);
    console.log('kicked!!')
    log.commandLog({"to":msg.to,"message":" "+msg.from+": initiated command KICK with arguments: "+msg.message.join(', ')});
};

module.exports = main;