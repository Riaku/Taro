var irc = require('irc');
var logger = require('./log.js');
var server = require('./server.js');
var server = 'irc.esper.net';
var port = 6667;
var nick = 'Taro';
var channels = ['#taro'];
var noLog = ['Lain','Sparhawk'];

var client = new irc.Client(server, nick, {
    channels: channels,
    port: port,
});

client.addListener('message', function (from, to, message) {
    if(noLog.indexOf('>>') !== 0){
        logger.info(from + ' => ' + to + ': ' + message);
    }
    if(message.indexOf('>>') === 0 ){
        commandListener(from, message);
    }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

function commandListener(from, message){
    
}