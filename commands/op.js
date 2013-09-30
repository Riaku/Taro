var main = {};
var client = global.client;
main = function(msg){
    client.send('MODE', msg.to, '+o', msg.message[1]);
    log.commandLog({"to":msg.to,"message":" "+msg.from+": initiated command OP with arguments: "+msg.message.join(', ')});
    msg.from = "__SERVER__"
};


module.exports = main;