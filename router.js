var op = require('./commands/op'),
    kick = require('./commands/kick'),
    ban = require('./commands/ban'),
    tempban = require('./commands/tempban'),
    leave = require('./commands/leave'),
    join = require('./commands/join'),
    perm = require('./scripts/permissions');

var main = {};
var client = global.client;

main = function(){
    client.addListener('message', function (from, to, message) {
        if(message.charAt(0) == "!"){
            var msg = {};
            msg.from = from;
            msg.to = to;
            msg.message = message.split(" ");
            command(msg);
        }
        console.log(from + ' => ' + to + ': ' + message);
    });
    client.addListener('pm', function (from, message) {
        var msg = {};
        msg.from = from;
        msg.to = to;
        msg.message = message;
        command(msg);
    });
};

function command(msg){
    console.log("route: "+perm(msg.from))
    if(perm(msg.from) == "@"){
        switch(msg.message[0].toLowerCase())
        {
            case "!op":
                op(msg);
                break;
            case "!kick":
                kick(msg);
                break;
            case "!ban":
                ban(msg);
                break;
            case "!tempban":
                tempban(msg);
                break;
            case "!leave":
                leave(msg);
                break;
            case "!join":
                join(msg);
                break;
            default:
                client.notice(msg.from,"INVALID, command does not exist")
        }
    } else{
        if(["!op","!kick","!ban","!tempban","!leave","!join"].indexOf(msg.message[0])){
            client.notice(msg.from,"You do not have permission to use this command");
        } else {
            client.notice(msg.from,"Unable to process this command, does it exist?")
        }
    }

}
module.exports = main;