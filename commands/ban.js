var log = require('../scripts/logger');
var kick = require('./kick');
var main = {};
var client = global.client;
main = function(msg){
    if(msg.message[1].indexOf("@") && msg.message[1].indexOf("!")){
        client.send('MODE', msg.to, '+b', msg.message[1]);
    }
    client.send('MODE', msg.to, '+b', msg.message[1]+"!*@*.nv.iinet.net.au");
    log.commandLog({"to":msg.to,"message":" "+msg.from+": initiated command BAN with arguments: "+msg.message.join(', ')});
    //kick via server
    msg.from = "__SERVER__"
    kick(msg);
};

module.exports = main;